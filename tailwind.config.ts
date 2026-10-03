import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { fiesta: { 50:'#fbf4f9',100:'#f5e3ef',500:'#b84fa0',600:'#a63f8e',700:'#8f3379' } } } }, plugins: [] };
export default config;
