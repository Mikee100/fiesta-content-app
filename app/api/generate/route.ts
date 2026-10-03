import { NextResponse } from 'next/server';
import { SYSTEM_PROMPT } from '@/lib/prompt';

export async function POST(req: Request) {
  try {
    const { topic, context } = await req.json();
    if (!topic?.trim()) return NextResponse.json({ error:'Topic is required.' }, { status:400 });
    const key = process.env.AI_API_KEY;
    if (!key) return NextResponse.json({ error:'AI_API_KEY is not configured. Add it to .env.local.' }, { status:500 });
    const base = (process.env.AI_BASE_URL || 'https://api.groq.com/openai/v1').replace(/\/$/,'');
    const model = process.env.AI_MODEL || 'llama-3.3-70b-versatile';
    const response = await fetch(`${base}/chat/completions`, {
      method:'POST', headers:{'Content-Type':'application/json','Authorization':`Bearer ${key}`},
      body: JSON.stringify({ model, temperature:0.8, response_format:{type:'json_object'}, messages:[
        {role:'system',content:SYSTEM_PROMPT},
        {role:'user',content:`Create a coordinated content set for this topic: ${topic}\nAdditional direction: ${context || 'None'}`}
      ]})
    });
    const raw = await response.text();
    if (!response.ok) return NextResponse.json({error:`AI provider error (${response.status})`, details:raw.slice(0,1200)}, {status:502});
    const payload = JSON.parse(raw);
    const text = payload?.choices?.[0]?.message?.content;
    if (!text) throw new Error('AI provider returned no content.');
    let content;
    try { content = JSON.parse(text); } catch {
      const match = text.match(/\{[\s\S]*\}/); if (!match) throw new Error('AI returned invalid JSON.'); content = JSON.parse(match[0]);
    }
    return NextResponse.json(content);
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Generation failed.' }, {status:500});
  }
}
