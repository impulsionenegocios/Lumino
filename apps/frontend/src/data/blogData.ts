export interface blogData {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  publishDate: string;
  readTime: string;
  slug: string;
  tags: string[];
}

export async function getBlogPosts(): Promise<blogData[]> {
  const res = await fetch(
    'http://directus:8055/items/posts?fields=*,categoria.name,autor.*,tags.nome,imagem_de_destaque.*',
  );

  if (!res.ok) {
    throw new Error(`Erro ao buscar posts: ${res.statusText}`);
  }

  const json = await res.json();

  return json.data.map((post: any) => ({
    image: `http://localhost:8055/assets/${post.imagem_de_destaque.id}`,
    category: post.categoria?.name || '',
    title: post.titulo,
    excerpt: post.resumo,
    author: post.autor?.nome || '',
    authorImage: `http://localhost:8055/assets/${post.autor?.foto}`, // ou puxar do Directus se tiver
    publishDate: new Date(post.date_created).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
    readTime: '5 min', // Pode ser fixo ou calculado
    slug: post.slug,
    tags: Array.isArray(post.tags) ? post.tags : [],
  }));
}
