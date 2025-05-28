// data/blogData.ts
// Funções para buscar dados do blog

export interface blogData {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  authorBio: string; // Adicionado campo do sobre do autor
  publishDate: string;
  readTime: string;
  slug: string;
  tags: string[];
  content?: string;
}

export interface CategoryData {
  id: string;
  name: string;
  slug?: string;
}

// Função para buscar todas as categorias
export async function getCategories(): Promise<CategoryData[]> {
  try {
    const res = await fetch('http://directus:8055/items/categorias?fields=*');

    if (!res.ok) {
      throw new Error(`Erro ao buscar categorias: ${res.statusText}`);
    }

    const json = await res.json();

    return json.data.map((category: any) => ({
      id: category.id,
      name: category.name,
      slug: category.slug || category.name.toLowerCase().replace(/\s+/g, '-'),
    }));
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    // Retorna categorias padrão em caso de erro
    return [
      { id: '1', name: 'Cuidados com a Pele', slug: 'cuidados-com-a-pele' },
      { id: '2', name: 'Tratamentos', slug: 'tratamentos' },
      { id: '3', name: 'Bem-estar', slug: 'bem-estar' },
      { id: '4', name: 'Tendências', slug: 'tendencias' },
      { id: '5', name: 'Dicas', slug: 'dicas' }
    ];
  }
}

// Função existente para buscar todos os posts
export async function getBlogPosts(): Promise<blogData[]> {
  try {
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
      authorImage: post.autor?.foto ? `http://localhost:8055/assets/${post.autor.foto}` : '/images/default-avatar.jpg',
      authorBio: post.autor?.sobre || 'Especialista em estética e bem-estar, compartilhando conhecimentos para uma vida mais saudável e bela.',
      publishDate: new Date(post.date_created).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      readTime: post.tempo_de_leitura || '5 min',
      slug: post.slug,
      tags: Array.isArray(post.tags) ? post.tags.map((tag: any) => tag.nome || tag) : [],
      content: post.conteudo || '',
    }));
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
}

// Nova função para buscar um post específico pelo slug
export async function getBlogPostBySlug(slug: string): Promise<blogData | null> {
  try {
    const res = await fetch(
      `http://directus:8055/items/posts?filter[slug][_eq]=${slug}&fields=*,categoria.name,autor.*,tags.nome,imagem_de_destaque.*&limit=1`,
    );

    if (!res.ok) {
      throw new Error(`Erro ao buscar post: ${res.statusText}`);
    }

    const json = await res.json();

    if (!json.data || json.data.length === 0) {
      return null;
    }

    const post = json.data[0];

    return {
      image: `http://localhost:8055/assets/${post.imagem_de_destaque.id}`,
      category: post.categoria?.name || '',
      title: post.titulo,
      excerpt: post.resumo,
      author: post.autor?.nome || '',
      authorImage: post.autor?.foto ? `http://localhost:8055/assets/${post.autor.foto}` : '/images/default-avatar.jpg',
      authorBio: post.autor?.sobre || 'Especialista em estética e bem-estar, compartilhando conhecimentos para uma vida mais saudável e bela.',
      publishDate: new Date(post.date_created).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      readTime: post.tempo_de_leitura || '5 min',
      slug: post.slug,
      tags: Array.isArray(post.tags) ? post.tags.map((tag: any) => tag.nome || tag) : [],
      content: post.conteudo || '',
    };
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return null;
  }
}

// Função para buscar posts relacionados (mesmo categoria ou tags similares)
export async function getRelatedPosts(currentSlug: string, category: string, tags: string[], limit: number = 3): Promise<blogData[]> {
  try {
    const allPosts = await getBlogPosts();
    
    // Filtra posts que não sejam o atual
    const otherPosts = allPosts.filter(post => post.slug !== currentSlug);
    
    // Prioriza posts da mesma categoria
    const sameCategoryPosts = otherPosts.filter(post => post.category === category);
    
    // Se não há posts suficientes da mesma categoria, pega outros posts
    if (sameCategoryPosts.length >= limit) {
      return sameCategoryPosts.slice(0, limit);
    }
    
    // Completa com outros posts se necessário
    const remainingPosts = otherPosts.filter(post => post.category !== category);
    const relatedPosts = [...sameCategoryPosts, ...remainingPosts];
    
    return relatedPosts.slice(0, limit);
  } catch (error) {
    console.error('Erro ao buscar posts relacionados:', error);
    return [];
  }
}

// Função para buscar posts por categoria
export async function getBlogPostsByCategory(categorySlug: string): Promise<blogData[]> {
  try {
    // Primeiro busca a categoria para obter o nome
    const categories = await getCategories();
    const category = categories.find(cat => cat.slug === categorySlug);
    
    if (!category) {
      return [];
    }

    const allPosts = await getBlogPosts();
    return allPosts.filter(post => post.category === category.name);
  } catch (error) {
    console.error('Erro ao buscar posts por categoria:', error);
    return [];
  }
}

// Função para gerar static paths para build (se estiver usando SSG)
export async function getStaticPaths() {
  try {
    const posts = await getBlogPosts();
    
    return posts.map(post => ({
      params: { slug: post.slug },
      props: { post },
    }));
  } catch (error) {
    console.error('Erro ao gerar paths estáticos:', error);
    return [];
  }
}