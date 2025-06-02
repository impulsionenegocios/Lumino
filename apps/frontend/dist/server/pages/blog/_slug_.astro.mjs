import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_DwmPXTEX.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_BhlrrdOx.mjs';
import { $ as $$MainLayout } from '../../chunks/mainLayout_CzeWPJo_.mjs';
import { $ as $$Heading, a as $$Paragraph } from '../../chunks/Paragraph_nAqocYGp.mjs';
import { g as getBlogPostBySlug, a as getRelatedPosts, b as getCategories, $ as $$CtaSection } from '../../chunks/ctaSection_DoyuHjZj.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const directusUrl = "http://directus:8055";
async function getButtons(page_slug) {
  try {
    const res = await fetch(
      `${directusUrl}/items/buttons?fields=*&filter[page_slug][_eq]=${page_slug}`
    );
    if (!res.ok) {
      throw new Error(`Erro ao buscar os botões: ${res.statusText}`);
    }
    const json = await res.json();
    return json.data.map((button) => ({
      variant: button.variant,
      href: button.href,
      label: button.label,
      page_slug: button.page_slug
    }));
  } catch (error) {
    console.error("Erro ao buscar botões:", error);
    return [];
  }
}

const $$Astro = createAstro("https://joqueianapolis.com.br");
async function getStaticPaths() {
  return [];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/blog");
  }
  const post = await getBlogPostBySlug(slug);
  const buttons = await getButtons("post");
  if (!post) {
    return Astro2.redirect("/blog");
  }
  const relatedPosts = await getRelatedPosts(post.slug, post.category, post.tags, 3);
  const categories = await getCategories();
  const pageTitle = `${post.title} | Lumino Cl\xEDnica`;
  const pageDescription = post.excerpt;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-light-bg pt-32 pb-8 relative overflow-hidden"> <!-- Shapes decorativas --> <div class="absolute z-0 w-[200px] h-[200px] rounded-full bg-primary-gold/5 -top-24 -right-24"></div> <div class="container relative z-10"> <nav class="flex items-center text-sm text-gray-text mb-4 reveal-effect"> <a href="/" class="hover:text-primary-gold transition-colors duration-300">Home</a> <span class="mx-2">›</span> <a href="/blog" class="hover:text-primary-gold transition-colors duration-300">Blog</a> <span class="mx-2">›</span> <span class="text-primary-dark">${post.title}</span> </nav> <!-- Categoria --> <div class="reveal-effect mb-4"> <span class="inline-block bg-primary-gold text-white px-4 py-2 rounded-full text-sm font-medium"> ${post.category} </span> </div> <!-- Título --> <div class="reveal-effect"> <h1 class="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-dark leading-tight max-w-4xl"> ${post.title} </h1> </div> <!-- Meta informações --> <div class="flex flex-wrap items-center gap-6 mt-6 text-gray-text reveal-effect"> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Image", $$Image, { "src": post.authorImage, "alt": post.author || "foto do autor", "width": 48, "height": 48, "loading": "lazy", "format": "webp", "decoding": "async", "class": "w-12 h-12 rounded-full object-cover" })} <div> <p class="font-medium text-primary-dark">${post.author}</p> <p class="text-sm">Autor</p> </div> </div> <div class="flex items-center gap-4 text-sm"> <span class="flex items-center gap-2"> <span>📅</span> ${post.publishDate} </span> <span class="flex items-center gap-2"> <span>⏱️</span> ${post.readTime} </span> </div> </div> </div> </section>  <section class="py-16 relative overflow-hidden"> <!-- Linha decorativa --> <div class="absolute top-[10%] left-[5%] w-[1px] h-[80%] bg-gradient-to-b from-transparent via-primary-gold to-transparent"></div> <div class="absolute bottom-[20%] right-[8%] w-[1px] h-[40%] bg-gradient-to-b from-transparent via-primary-gold/20 to-transparent"></div> <div class="container relative z-10"> <div class="grid lg:grid-cols-12 gap-12"> <!-- Conteúdo Principal --> <article class="lg:col-span-8"> <!-- Imagem Principal --> <div class="reveal-effect mb-8"> <div class="relative rounded-3xl overflow-hidden shadow-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": post.image, "alt": post.title || "imagem de destaque", "width": 800, "height": 500, "loading": "lazy", "decoding": "async", "format": "webp", "class": "w-full h-auto aspect-video object-cover" })} <!-- Overlay sutil --> <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/10 to-transparent"></div> </div> </div> <!-- Tags --> <div class="reveal-effect mb-8"> <div class="flex flex-wrap gap-2"> ${post.tags.map((tag) => renderTemplate`<span class="bg-light-bg text-primary-dark px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-gold hover:text-white transition-colors duration-300 cursor-pointer">
#${tag} </span>`)} </div> </div> <!-- Conteúdo do Post --> <div class="reveal-effect prose prose-lg max-w-none"> <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"> <!-- Excerpt destacado --> <div class="bg-light-bg rounded-xl p-6 mb-8 border-l-4 border-primary-gold"> <p class="text-lg font-light text-gray-700 italic leading-relaxed"> ${post.excerpt} </p> </div> <!-- Conteúdo principal --> <div class="blog-content text-gray-700 leading-relaxed space-y-6"><!-- O conteúdo será inserido aqui via set:html --> ${unescapeHTML(post.content)}</div> </div> </div> <!-- Compartilhar --> <div class="reveal-effect mt-12 p-8 bg-light-bg rounded-2xl"> <h3 class="font-cormorant text-2xl font-semibold text-primary-dark mb-4">
Compartilhe este artigo
</h3> <div class="flex flex-wrap gap-4"> <a${addAttribute(`https://wa.me/?text=${encodeURIComponent(post.title + " - " + Astro2.url.href)}`, "href")} class="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300" target="_blank" rel="noopener noreferrer"> <span>📱</span>
WhatsApp
</a> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(Astro2.url.href)}`, "href")} class="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300" target="_blank" rel="noopener noreferrer"> <span>📘</span>
Facebook
</a> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(Astro2.url.href)}`, "href")} class="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 transition-colors duration-300" target="_blank" rel="noopener noreferrer"> <span>🐦</span>
Twitter
</a> <button${addAttribute(`navigator.clipboard.writeText('${Astro2.url.href}'); this.innerHTML='<span>\u2705</span>Copiado!'; setTimeout(() => this.innerHTML='<span>\u{1F517}</span>Copiar Link', 2000)`, "onclick")} class="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors duration-300"> <span>🔗</span>
Copiar Link
</button> </div> </div> </article> <!-- Sidebar --> <aside class="lg:col-span-4"> <div class="sticky top-32 space-y-8"> <!-- Sobre o Autor --> <div class="reveal-effect bg-white rounded-2xl p-6 shadow-sm"> <h3 class="font-cormorant text-xl font-semibold text-primary-dark mb-4">
Sobre o Autor
</h3> <div class="flex items-start gap-4"> ${renderComponent($$result2, "Image", $$Image, { "src": post.authorImage, "alt": post.author || "foto do autor", "width": 80, "height": 80, "decoding": "async", "loading": "lazy", "format": "webp", "class": "w-20 h-20 rounded-full object-cover" })} <div> <h4 class="font-semibold text-primary-dark mb-2">${post.author}</h4> <p class="text-gray-text text-sm leading-relaxed"> ${post.authorBio} </p> </div> </div> </div> <!-- Categorias Populares --> <div class="reveal-effect bg-white rounded-2xl p-6 shadow-sm"> <h3 class="font-cormorant text-xl font-semibold text-primary-dark mb-4">
Categorias
</h3> <div class="space-y-2"> ${categories.map((category) => renderTemplate`<a${addAttribute(`/blog/categoria/${category.slug}`, "href")} class="block py-2 px-3 text-gray-text hover:text-primary-gold hover:bg-light-bg rounded-lg transition-all duration-300"> ${category.name} </a>`)} </div> </div> </div> </aside> </div> </div> </section>  ${relatedPosts.length > 0 && renderTemplate`<section class="bg-light-bg py-16 relative overflow-hidden"> <!-- Shapes decorativas --> <div class="absolute z-0 w-[300px] h-[300px] rounded-full bg-primary-dark/5 -top-36 -right-36"></div> <div class="container relative z-10"> <div class="text-center mb-12 reveal-effect"> ${renderComponent($$result2, "Heading", $$Heading, { "text": "Artigos", "accent": "Relacionados" })} <div class="mt-4"> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "fontWeight": "300", "text": "Continue explorando nossos conte\xFAdos sobre est\xE9tica e bem-estar" })} </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${relatedPosts.map((relatedPost, index) => renderTemplate`<div class="blog-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 reveal-effect group"> <div class="relative h-48 overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": relatedPost.image, "alt": relatedPost.title, "width": 400, "height": 250, "loading": "lazy", "decoding": "async", "format": "webp", "class": "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" })} <div class="absolute top-3 left-3 bg-primary-gold text-white px-3 py-1 rounded-full text-xs font-medium"> ${relatedPost.category} </div> </div> <div class="p-6"> <h4 class="font-cormorant text-xl font-semibold text-primary-dark mb-3 leading-tight group-hover:text-primary-gold transition-colors duration-300"> ${relatedPost.title} </h4> <p class="text-gray-text text-sm leading-relaxed mb-4 font-light line-clamp-3"> ${relatedPost.excerpt} </p> <div class="flex items-center justify-between pt-4 border-t border-gray-100"> <span class="text-xs text-gray-text">${relatedPost.publishDate}</span> <a${addAttribute(`/blog/${relatedPost.slug}`, "href")} class="text-primary-gold hover:text-primary-dark transition-colors duration-300 font-medium text-sm">
Ler →
</a> </div> </div> </div>`)} </div> </div> </section>`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "headingTitle": post.ctaTitle, "headingAccent": post.ctaTitleAccent, "text": post.ctaText, "buttons": buttons })} ` })} `;
}, "/home/zayit/projetos/lumino/apps/frontend/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/zayit/projetos/lumino/apps/frontend/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
