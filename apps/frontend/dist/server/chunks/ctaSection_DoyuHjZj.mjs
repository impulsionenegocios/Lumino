import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './astro/server_DwmPXTEX.mjs';
import { $ as $$MainButton } from './mainButton_DxiZMp03.mjs';

const directusUrl = "http://directus:8055";
const directusPublicUrl = "http://localhost:8055";
async function getCategories() {
  try {
    const res = await fetch(`${directusUrl}/items/post_categoria?fields=*&limit=5`);
    if (!res.ok) {
      throw new Error(`Erro ao buscar categorias: ${res.statusText}`);
    }
    const json = await res.json();
    return json.data.map((category) => ({
      id: String(category.id),
      name: category.nome,
      slug: category.slug || category.nome.toLowerCase().replace(/\s+/g, "-")
    }));
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return [];
  }
}
async function getBlogPosts() {
  try {
    const url = `${directusUrl}/items/post?fields=*,categoria.nome,autor.*`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Erro ao buscar posts: ${res.statusText}`);
    }
    const json = await res.json();
    return json.data.map((post) => ({
      image: `${directusPublicUrl}/assets/${post.imagem_de_destaque}?width=600&height=500&format=webp`,
      category: post.categoria?.nome || "",
      title: post.titulo,
      excerpt: post.resumo,
      author: post.autor?.nome || "",
      authorImage: post.autor?.imagem ? `${directusPublicUrl}/assets/${post.autor.imagem}?width=40&height=40&format=webp&quality=80` : "/images/default-avatar.jpg",
      authorBio: post.autor?.bio || "Especialista em estética e bem-estar.",
      publishDate: new Date(post.date_created).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }),
      readTime: post.tempo_de_leitura || "5 min",
      slug: post.slug,
      tags: Array.isArray(post.tags) ? post.tags : [],
      content: post.conteudo || ""
    }));
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
}
async function getBlogPostBySlug(slug) {
  try {
    const res = await fetch(
      `${directusUrl}/items/post?filter[slug][_eq]=${slug}&fields=*,categoria.nome,autor.*&limit=1`
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
      image: `${directusPublicUrl}/assets/${post.imagem_de_destaque}?width=836&height=470&format=webp`,
      category: post.categoria?.nome || "",
      title: post.titulo,
      excerpt: post.resumo,
      author: post.autor?.nome || "",
      authorImage: post.autor?.imagem ? `${directusPublicUrl}/assets/${post.autor.imagem}?width=80&height=80&format=webp` : "/images/default-avatar.jpg",
      authorBio: post.autor?.bio || "Especialista em estética e bem-estar.",
      publishDate: new Date(post.date_created).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }),
      readTime: post.tempo_de_leitura || "5 min",
      slug: post.slug,
      tags: Array.isArray(post.tags) ? post.tags : [],
      content: post.conteudo || "",
      ctaTitle: post.ctaTitle,
      ctaTitleAccent: post.ctaTitleAccent,
      ctaText: post.ctaText
    };
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return null;
  }
}
async function getRelatedPosts(currentSlug, category, tags, limit = 3) {
  try {
    const allPosts = await getBlogPosts();
    const otherPosts = allPosts.filter((post) => post.slug !== currentSlug);
    const sameCategoryPosts = otherPosts.filter((post) => post.category === category);
    if (sameCategoryPosts.length >= limit) {
      return sameCategoryPosts.slice(0, limit);
    }
    const remainingPosts = otherPosts.filter((post) => post.category !== category);
    const relatedPosts = [...sameCategoryPosts, ...remainingPosts];
    return relatedPosts.slice(0, limit);
  } catch (error) {
    console.error("Erro ao buscar posts relacionados:", error);
    return [];
  }
}

const $$Astro = createAstro("https://joqueianapolis.com.br");
const $$CtaSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CtaSection;
  const { headingTitle, headingAccent, text, buttons } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="contact-cta" id="contact"> <div class="counter-particles"></div> <div class="contact-cta-shape contact-cta-shape-1"></div> <div class="contact-cta-shape contact-cta-shape-2"></div> <div class="container"> <div class="contact-cta-container"> <h2 class="contact-cta-title"> ${headingTitle} <span class="accent">${headingAccent}</span> </h2> <p class="contact-cta-text"> ${text} </p> <div class="contact-cta-buttons"> ${buttons.map((btn) => renderTemplate`${renderComponent($$result, "Button", $$MainButton, { "title": btn.label, "href": btn.href, "variant": btn.variant ?? "solid" })}`)} </div> </div> </div> </section>`;
}, "/home/zayit/projetos/lumino/apps/frontend/src/components/sections/ctaSection.astro", void 0);

export { $$CtaSection as $, getRelatedPosts as a, getCategories as b, getBlogPosts as c, getBlogPostBySlug as g };
