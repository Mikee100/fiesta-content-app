export type ContentSet = {
  id: string;
  topic: string;
  createdAt: string;
  status: 'draft'|'approved';
  instagram: { hook: string; caption: string; hashtags: string[] };
  facebook: { caption: string };
  blog: { title: string; intro: string; outline: string[] };
};
