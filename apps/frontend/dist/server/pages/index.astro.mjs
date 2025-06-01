import { a as createAstro, c as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate, b as renderScript, e as addAttribute, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_Hu3wlXJ5.mjs';
import { $ as $$ParticlesBackground } from '../chunks/ParticlesBackground_CvdxJYK4.mjs';
import { $ as $$MainLayout } from '../chunks/mainLayout_BTu3UJAR.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DX1yZ3tI.mjs';
import { a as $$MainButton, $ as $$Heading } from '../chunks/mainButton_BCt0-H_5.mjs';
import { $ as $$DotsShape, B as BgImage } from '../chunks/bg_kqGlXo7y.mjs';
import { $ as $$Paragraph, g as getBlogPosts, a as $$CtaSection } from '../chunks/ctaSection_DsbFq6aF.mjs';
/* empty css                                 */
import { c as contactCTAData } from '../chunks/contactCTAData_DtnS0ONG.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$8 = createAstro("https://joqueianapolis.com.br");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subtitle,
    description,
    firstButtonTitle,
    firstButtonHref,
    secondButtonTitle,
    secondButtonHref,
    bgImage
  } = Astro2.props;
  return renderTemplate`<!-- Hero Section -->${maybeRenderHead()}<section class="h-[100vh] bg-white flex items-center overflow-hidden relative" id="home"> <div class="hero-bg"> ${renderComponent($$result, "Image", $$Image, { "src": bgImage, "alt": "Lumino Cl\xEDnica", "class": "hero-bg-image", "layout": "full-width", "loading": "lazy", "decoding": "async", "width": bgImage.width, "height": bgImage.height })} </div> <div class="counter-particles"></div> <div class="mx-auto max-w-[1600px] lg:pl-40 w-full z-10"> <div class="lg:w-[50%] px-8 lg:px-0 z-3"> <span class="text-primary-gold font-bold animate-subtitle font-serif">${subtitle}</span> <h1 class="text-6xl 2xl:text-7xl font-bold font-serif animate-title"> ${title}</h1><h1> <p class="text-md text-gray-500 animate-description mt-4">${description}</p> <div class="flex flex-col lg:flex-row gap-4 animate-buttons mt-8"> ${renderComponent($$result, "Button", $$MainButton, { "title": firstButtonTitle, "href": firstButtonHref })} ${renderComponent($$result, "Button", $$MainButton, { "title": secondButtonTitle, "href": secondButtonHref, "variant": "outline" })} </div> </h1> ${renderComponent($$result, "DotsShape", $$DotsShape, {})} <div class="scroll-down"> <span>&nbsp;</span> <p>Deslize para baixo</p> </div> </div> </div> </section>`;
}, "/home/zayit/projetos/lumino/apps/frontend/src/components/sections/heroSection.astro", void 0);

const $$Astro$7 = createAstro("https://joqueianapolis.com.br");
const $$CounterSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CounterSection;
  const { stats } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary-dark lg:px-20 px-8 relative pt-18 overflow-hidden pb-4 2xl:pb-16"> <div id="counter-particles" class="counter-particles"></div> <div class="mx-auto max-w-[1600px] w-full z-10"> <div class="lg:grid lg:grid-cols-4 relative z-2 gap-4 mx-auto"> ${stats.map((item) => renderTemplate`<div class="text-center p-8"> <div class="font-serif text-white text-5xl relative inline-block mb-4 after:content-['+'] after:absolute after:-top-4 after:right-[-20px] after:text-primary-gold" data-countup${addAttribute(item.value.toString(), "data-target")}>
0
</div> <div class="uppercase text-gray-300 text-[16px]">${item.label}</div> </div>`)} </div> </div> ${renderScript($$result, "/home/zayit/projetos/lumino/apps/frontend/src/components/sections/counterSection.astro?astro&type=script&index=0&lang.ts")} </section>`;
}, "/home/zayit/projetos/lumino/apps/frontend/src/components/sections/counterSection.astro", void 0);

const $$Astro$6 = createAstro("https://joqueianapolis.com.br");
const $$GallerySection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GallerySection;
  const { headingTitle, headingAccent, description, items } = Astro2.props;
  const displayItems = items.slice(0, 8);
  return renderTemplate`${maybeRenderHead()}<section class="lg:px-20 px-8 bg-light-bg pt-16 pb-8" id="gallery"> <div class="shape shape-2"></div> <div class=""> <div class="gallery-header text-center mb-12"> ${renderComponent($$result, "Heading", $$Heading, { "text": headingTitle, "accent": headingAccent })} <p class="section-subtitle section-subtitle-center mt-4"> ${description} </p> </div> <div class="gallery-container reveal-effect relative"> <div class="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> ${displayItems.map((item) => renderTemplate`<div class="gallery-item relative overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": item.image, "alt": item.alt, "class": "gallery-image w-full h-auto block", "width": 800, "height": 600 })} <div class="gallery-overlay absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity"> <div class="gallery-caption flex flex-col justify-center items-center h-full text-white p-4"> <h4 class="gallery-title text-lg font-semibold mb-1">${item.title}</h4> <p class="gallery-category text-sm">${item.category}</p> </div> </div> </div>`)} </div> <div class="gallery-nav flex justify-between mt-6"> ${renderComponent($$result, "Button", $$MainButton, { "title": "Ver Galeria", "href": "/" })} </div> </div> </div> </section>`;
}, "/home/zayit/projetos/lumino/apps/frontend/src/components/sections/gallerySection.astro", void 0);

const $$Astro$5 = createAstro("https://joqueianapolis.com.br");
const $$LocationSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LocationSection;
  const { headingTitle, headingAccent, description, locationItems, hours, mapImage, mapAlt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="lg:px-16 px-8 lg:py-16 py-8 max-w-full" id="location"> <div class="location-container"> <div class="location-content reveal-effect"> <h2 class="section-title"> ${headingTitle} <span class="accent">${headingAccent}</span> </h2> <p class="section-subtitle"> ${description} </p> <div class="location-details"> ${locationItems.map((item) => renderTemplate`<div class="location-item"> <div class="location-icon">${item.icon}</div> <div class="location-info"> <h3>${item.title}</h3> <p>${unescapeHTML(item.info)}</p> </div> </div>`)} </div> <div class="location-hours"> <h3>Horário de Funcionamento</h3> <div class="hours-grid"> ${hours.map((h) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="hours-day">${h.day}:</div> <div class="hours-time">${h.time}</div> ` })}`)} </div> </div> </div> <div class="location-map reveal-effect"> <img${addAttribute(mapImage, "src")}${addAttribute(mapAlt, "alt")} width="600" height="500"> </div> </div> </section>`;
}, "/home/zayit/projetos/lumino/apps/frontend/src/components/sections/locationSection.astro", void 0);

const $$Astro$4 = createAstro("https://joqueianapolis.com.br");
const $$TestimonialSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TestimonialSection;
  const { headingTitle, headingAccent, description, testimonials } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section testimonials" id="testimonials"> <div class="shape shape-1"></div> <div class="shape shape-2"></div> <div class="container"> <div class="testimonials-header"> <h2 class="section-title section-title-center"> ${headingTitle} <span class="accent">${headingAccent}</span> dizem
</h2> <p class="section-subtitle section-subtitle-center"> ${description} </p> </div> <div class="testimonials-wrapper"> <div class="testimonials-container"> <div class="testimonials-grid"> ${testimonials.map((t) => renderTemplate`<div class="testimonial-card reveal-effect"> <div class="testimonial-quote">"</div> <p class="testimonial-text">${t.text}</p> <div class="testimonial-author"> <div class="testimonial-avatar"> <img${addAttribute(t.avatar, "src")}${addAttribute(`Avatar de ${t.authorName}`, "alt")}> </div> <div class="testimonial-info"> <h4>${t.authorName}</h4> <p>${t.authorRole}</p> <div class="testimonial-rating"> ${Array.from({ length: t.rating }).map(() => renderTemplate`<span class="testimonial-star">★</span>`)} </div> </div> </div> </div>`)} </div> </div> </div> </div> </section>`;
}, "/home/zayit/projetos/lumino/apps/frontend/src/components/sections/testimonialSection.astro", void 0);

const $$Astro$3 = createAstro("https://joqueianapolis.com.br");
const $$CertificationSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CertificationSection;
  const {
    headingTitle,
    headingAccent,
    description,
    certifications
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section certifications bg-white relative overflow-hidden" id="certifications" data-astro-cid-vu3dmwmy> <!-- Shapes decorativas --> <div class="absolute z-0 w-[400px] h-[400px] rounded-full bg-primary-gold/3 top-20 -left-48" data-astro-cid-vu3dmwmy></div> <div class="absolute z-0 w-[250px] h-[250px] rounded-full bg-primary-dark/5 -bottom-32 -right-32" data-astro-cid-vu3dmwmy></div> <div class="container relative z-10" data-astro-cid-vu3dmwmy> <div class="text-center mb-16 reveal-effect" data-astro-cid-vu3dmwmy> ${renderComponent($$result, "Heading", $$Heading, { "text": headingTitle, "accent": headingAccent, "data-astro-cid-vu3dmwmy": true })} <div class="mt-4 max-w-2xl mx-auto" data-astro-cid-vu3dmwmy> ${renderComponent($$result, "Paragraph", $$Paragraph, { "fontWeight": "300", "text": description, "data-astro-cid-vu3dmwmy": true })} </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-vu3dmwmy> ${certifications.map((cert, index) => renderTemplate`<div class="certification-card bg-white rounded-[20px] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl reveal-effect group" data-astro-cid-vu3dmwmy> <!-- Badge de certificação --> <div class="relative" data-astro-cid-vu3dmwmy> <div class="certification-badge absolute -top-4 left-6 z-10 bg-primary-gold text-white px-4 py-2 rounded-full text-sm font-medium" data-astro-cid-vu3dmwmy> ${cert.year} </div> <!-- Imagem da certificação --> <div class="h-48 bg-light-bg flex items-center justify-center p-8 relative overflow-hidden" data-astro-cid-vu3dmwmy> <div class="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-vu3dmwmy></div> ${renderComponent($$result, "Image", $$Image, { "src": cert.image, "alt": cert.title, "width": 200, "height": 150, "class": "max-h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-110 relative z-2", "data-astro-cid-vu3dmwmy": true })} </div> </div> <!-- Conteúdo --> <div class="p-6" data-astro-cid-vu3dmwmy> <!-- Organização --> <div class="flex items-center mb-3" data-astro-cid-vu3dmwmy> <div class="w-2 h-2 bg-primary-gold rounded-full mr-3" data-astro-cid-vu3dmwmy></div> <span class="text-primary-gold font-medium text-sm uppercase tracking-wide" data-astro-cid-vu3dmwmy> ${cert.organization} </span> </div> <!-- Título --> <h3 class="font-cormorant text-xl font-semibold text-primary-dark mb-3 leading-tight" data-astro-cid-vu3dmwmy> ${cert.title} </h3> <!-- Descrição --> <p class="text-gray-text text-sm leading-relaxed mb-4 font-light" data-astro-cid-vu3dmwmy> ${cert.description} </p> <!-- Link de verificação --> <a href="#" class="inline-flex items-center text-primary-gold hover:text-primary-dark text-sm font-medium transition-colors duration-300 group/link" data-astro-cid-vu3dmwmy> <span class="mr-2" data-astro-cid-vu3dmwmy>Verificar certificado</span> <svg class="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-vu3dmwmy> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-vu3dmwmy></path> </svg> </a> </div> <!-- Linha decorativa inferior --> <div class="h-1 bg-gradient-to-r from-primary-gold to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" data-astro-cid-vu3dmwmy></div> </div>`)} </div> <!-- Chamada para ação --> <div class="text-center mt-16 reveal-effect" data-astro-cid-vu3dmwmy> <div class="inline-block bg-light-bg rounded-2xl p-8" data-astro-cid-vu3dmwmy> <div class="flex items-center justify-center mb-4" data-astro-cid-vu3dmwmy> <div class="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-white text-xl" data-astro-cid-vu3dmwmy>
🏆
</div> </div> <h3 class="font-cormorant text-2xl font-semibold text-primary-dark mb-2" data-astro-cid-vu3dmwmy>
Excelência Certificada
</h3> <p class="text-gray-text text-sm max-w-md mx-auto" data-astro-cid-vu3dmwmy>
Nossas certificações garantem os mais altos padrões de qualidade e segurança em todos os nossos serviços.
</p> </div> </div> </div> </section> `;
}, "/home/zayit/projetos/lumino/apps/frontend/src/components/sections/certificationSection.astro", void 0);

const $$Astro$2 = createAstro("https://joqueianapolis.com.br");
const $$TeamSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TeamSection;
  const {
    headingTitle,
    headingAccent,
    description,
    teamMembers
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section team bg-light-bg relative overflow-hidden" id="team" data-astro-cid-n5ltlhjm> <!-- Shapes decorativas --> <div class="absolute z-0 w-[350px] h-[350px] rounded-full bg-primary-dark/5 -top-44 -right-44" data-astro-cid-n5ltlhjm></div> <div class="absolute z-0 w-[200px] h-[200px] rounded-full bg-primary-gold/8 -bottom-24 -left-24" data-astro-cid-n5ltlhjm></div> <!-- Linha decorativa --> <div class="absolute top-1/2 right-[10%] w-[1px] h-[30%] bg-gradient-to-b from-transparent via-primary-gold to-transparent" data-astro-cid-n5ltlhjm></div> <div class="container relative z-10" data-astro-cid-n5ltlhjm> <div class="text-center mb-16 reveal-effect" data-astro-cid-n5ltlhjm> ${renderComponent($$result, "Heading", $$Heading, { "text": headingTitle, "accent": headingAccent, "data-astro-cid-n5ltlhjm": true })} <div class="mt-4 max-w-2xl mx-auto" data-astro-cid-n5ltlhjm> ${renderComponent($$result, "Paragraph", $$Paragraph, { "fontWeight": "300", "text": description, "data-astro-cid-n5ltlhjm": true })} </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-n5ltlhjm> ${teamMembers.map((member, index) => renderTemplate`<div class="team-card bg-white rounded-[25px] overflow-hidden shadow-lg transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl reveal-effect group" data-astro-cid-n5ltlhjm> <!-- Imagem do membro --> <div class="relative overflow-hidden" data-astro-cid-n5ltlhjm> <div class="h-80 relative" data-astro-cid-n5ltlhjm> ${renderComponent($$result, "Image", $$Image, { "src": member.image, "alt": member.name, "width": 400, "height": 500, "class": "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", "data-astro-cid-n5ltlhjm": true })} <!-- Overlay com gradiente --> <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-n5ltlhjm></div> <!-- Badge de experiência --> <div class="absolute top-4 right-4 bg-primary-gold text-white px-3 py-1 rounded-full text-sm font-medium transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" data-astro-cid-n5ltlhjm> ${member.experience} </div> <!-- Redes sociais --> <div class="absolute bottom-4 left-4 right-4 flex justify-center gap-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" data-astro-cid-n5ltlhjm> ${member.socialLinks.map((social) => renderTemplate`<a${addAttribute(social.url, "href")} class="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-dark hover:bg-primary-gold hover:text-white transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer" data-astro-cid-n5ltlhjm> <span class="text-sm" data-astro-cid-n5ltlhjm>${social.icon}</span> </a>`)} </div> </div> </div> <!-- Conteúdo --> <div class="p-6" data-astro-cid-n5ltlhjm> <!-- Nome e cargo --> <div class="text-center mb-4" data-astro-cid-n5ltlhjm> <h3 class="font-cormorant text-2xl font-semibold text-primary-dark mb-1" data-astro-cid-n5ltlhjm> ${member.name} </h3> <p class="text-primary-gold font-medium text-sm uppercase tracking-wide" data-astro-cid-n5ltlhjm> ${member.role} </p> </div> <!-- Especialidades --> <div class="flex flex-wrap justify-center gap-2 mb-4" data-astro-cid-n5ltlhjm> ${member.specialties.map((specialty) => renderTemplate`<span class="bg-light-bg text-primary-dark px-3 py-1 rounded-full text-xs font-medium hover:bg-primary-gold hover:text-white transition-colors duration-300" data-astro-cid-n5ltlhjm> ${specialty} </span>`)} </div> <!-- Bio --> <p class="text-gray-text text-sm leading-relaxed text-center font-light" data-astro-cid-n5ltlhjm> ${member.bio} </p> <!-- Linha divisória --> <div class="w-12 h-0.5 bg-primary-gold mx-auto mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" data-astro-cid-n5ltlhjm></div> </div> </div>`)} </div> <!-- Estatísticas da equipe --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 reveal-effect" data-astro-cid-n5ltlhjm> <div class="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300" data-astro-cid-n5ltlhjm> <div class="w-16 h-16 bg-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-n5ltlhjm> <span class="text-2xl" data-astro-cid-n5ltlhjm>👨‍⚕️</span> </div> <h4 class="font-cormorant text-3xl font-semibold text-primary-dark mb-2" data-astro-cid-n5ltlhjm>
15+
</h4> <p class="text-gray-text text-sm" data-astro-cid-n5ltlhjm>
Anos de experiência média
</p> </div> <div class="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300" data-astro-cid-n5ltlhjm> <div class="w-16 h-16 bg-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-n5ltlhjm> <span class="text-2xl" data-astro-cid-n5ltlhjm>🏆</span> </div> <h4 class="font-cormorant text-3xl font-semibold text-primary-dark mb-2" data-astro-cid-n5ltlhjm>
25+
</h4> <p class="text-gray-text text-sm" data-astro-cid-n5ltlhjm>
Certificações em conjunto
</p> </div> <div class="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300" data-astro-cid-n5ltlhjm> <div class="w-16 h-16 bg-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-n5ltlhjm> <span class="text-2xl" data-astro-cid-n5ltlhjm>❤️</span> </div> <h4 class="font-cormorant text-3xl font-semibold text-primary-dark mb-2" data-astro-cid-n5ltlhjm>
98%
</h4> <p class="text-gray-text text-sm" data-astro-cid-n5ltlhjm>
Satisfação dos pacientes
</p> </div> </div> </div> </section> `;
}, "/home/zayit/projetos/lumino/apps/frontend/src/components/sections/teamSection.astro", void 0);

const $$Astro$1 = createAstro("https://joqueianapolis.com.br");
const $$BlogSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogSection;
  const {
    headingTitle,
    headingAccent,
    description,
    posts
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section blog bg-white relative overflow-hidden" id="blog" data-astro-cid-li4jkggb> <!-- Shapes decorativas --> <div class="absolute z-0 w-[300px] h-[300px] rounded-full bg-primary-gold/5 -top-36 -left-36" data-astro-cid-li4jkggb></div> <div class="absolute z-0 w-[250px] h-[250px] rounded-full bg-primary-dark/3 -bottom-32 -right-32" data-astro-cid-li4jkggb></div> <!-- Linhas decorativas --> <div class="absolute top-[20%] left-[5%] w-[1px] h-[25%] bg-gradient-to-b from-transparent via-primary-gold to-transparent" data-astro-cid-li4jkggb></div> <div class="absolute bottom-[20%] right-[8%] w-[1px] h-[30%] bg-gradient-to-b from-transparent via-primary-dark/20 to-transparent" data-astro-cid-li4jkggb></div> <div class="container relative z-10" data-astro-cid-li4jkggb> <div class="text-center mb-16 reveal-effect" data-astro-cid-li4jkggb> ${renderComponent($$result, "Heading", $$Heading, { "text": headingTitle, "accent": headingAccent, "data-astro-cid-li4jkggb": true })} <div class="mt-4 max-w-2xl mx-auto" data-astro-cid-li4jkggb> ${renderComponent($$result, "Paragraph", $$Paragraph, { "fontWeight": "300", "text": description, "data-astro-cid-li4jkggb": true })} </div> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" data-astro-cid-li4jkggb> <!-- Post principal (primeiro post) --> ${posts.slice(0, 1).map((post) => renderTemplate`<div class="lg:col-span-2 blog-card-featured bg-white rounded-[25px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 reveal-effect group" data-astro-cid-li4jkggb> <div class="grid lg:grid-cols-2 gap-0" data-astro-cid-li4jkggb> <div class="relative h-64 lg:h-full overflow-hidden" data-astro-cid-li4jkggb> ${renderComponent($$result, "Image", $$Image, { "src": post.image, "alt": post.title, "width": 600, "height": 400, "class": "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", "data-astro-cid-li4jkggb": true })}  <div class="absolute top-4 left-4 bg-primary-gold text-white px-4 py-2 rounded-full text-sm font-medium" data-astro-cid-li4jkggb> ${post.category} </div>  <div class="absolute inset-0 bg-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-li4jkggb></div> </div>  <div class="p-8 flex flex-col justify-center" data-astro-cid-li4jkggb> <div class="flex items-center gap-4 mb-4 text-sm text-gray-text" data-astro-cid-li4jkggb> <span class="flex items-center gap-2" data-astro-cid-li4jkggb> <span data-astro-cid-li4jkggb>📅</span> ${post.publishDate} </span> <span class="flex items-center gap-2" data-astro-cid-li4jkggb> <span data-astro-cid-li4jkggb>⏱️</span> ${post.readTime} </span> </div> <h3 class="font-cormorant text-3xl font-semibold text-primary-dark mb-4 leading-tight group-hover:text-primary-gold transition-colors duration-300" data-astro-cid-li4jkggb> ${post.title} </h3> <p class="text-gray-text leading-relaxed mb-6 font-light" data-astro-cid-li4jkggb> ${post.excerpt} </p>  <div class="flex flex-wrap gap-2 mb-6" data-astro-cid-li4jkggb> ${post.tags.slice(0, 3).map((tag) => renderTemplate`<span class="bg-light-bg text-primary-dark px-3 py-1 rounded-full text-xs font-medium hover:bg-primary-gold hover:text-white transition-colors duration-300" data-astro-cid-li4jkggb> ${tag} </span>`)} </div>  <div class="flex items-center justify-between" data-astro-cid-li4jkggb> <div class="flex items-center gap-3" data-astro-cid-li4jkggb> ${renderComponent($$result, "Image", $$Image, { "src": post.authorImage, "alt": post.author, "width": 40, "height": 40, "class": "w-10 h-10 rounded-full object-cover", "data-astro-cid-li4jkggb": true })} <div data-astro-cid-li4jkggb> <p class="font-medium text-primary-dark text-sm" data-astro-cid-li4jkggb>${post.author}</p> <p class="text-xs text-gray-text" data-astro-cid-li4jkggb>Autor</p> </div> </div> <a${addAttribute(`/blog/${post.slug}`, "href")} class="inline-flex items-center text-primary-gold hover:text-primary-dark font-medium text-sm transition-colors duration-300 group/link" data-astro-cid-li4jkggb> <span class="mr-2" data-astro-cid-li4jkggb>Ler mais</span> <svg class="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-li4jkggb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-li4jkggb></path> </svg> </a> </div> </div> </div> </div>`)} <!-- Posts secundários --> ${posts.slice(1, 3).map((post) => renderTemplate`<div class="blog-card bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 reveal-effect group" data-astro-cid-li4jkggb> <!-- Imagem --> <div class="relative h-48 overflow-hidden" data-astro-cid-li4jkggb> ${renderComponent($$result, "Image", $$Image, { "src": post.image, "alt": post.title, "width": 400, "height": 250, "class": "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105", "data-astro-cid-li4jkggb": true })}  <div class="absolute top-3 left-3 bg-primary-gold text-white px-3 py-1 rounded-full text-xs font-medium" data-astro-cid-li4jkggb> ${post.category} </div>  <div class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-primary-dark px-3 py-1 rounded-full text-xs font-medium" data-astro-cid-li4jkggb> ${post.publishDate} </div> </div>  <div class="p-6" data-astro-cid-li4jkggb> <h4 class="font-cormorant text-xl font-semibold text-primary-dark mb-3 leading-tight group-hover:text-primary-gold transition-colors duration-300" data-astro-cid-li4jkggb> ${post.title} </h4> <p class="text-gray-text text-sm leading-relaxed mb-4 font-light line-clamp-3" data-astro-cid-li4jkggb> ${post.excerpt} </p>  <div class="flex items-center justify-between pt-4 border-t border-gray-100" data-astro-cid-li4jkggb> <div class="flex items-center gap-2" data-astro-cid-li4jkggb> ${renderComponent($$result, "Image", $$Image, { "src": post.authorImage, "alt": post.author, "width": 24, "height": 24, "class": "w-6 h-6 rounded-full object-cover", "data-astro-cid-li4jkggb": true })} <span class="text-xs text-gray-text" data-astro-cid-li4jkggb>${post.author}</span> </div> <div class="flex items-center gap-3 text-xs text-gray-text" data-astro-cid-li4jkggb> <span data-astro-cid-li4jkggb>⏱️ ${post.readTime}</span> <a${addAttribute(`/blog/${post.slug}`, "href")} class="text-primary-gold hover:text-primary-dark transition-colors duration-300 font-medium" data-astro-cid-li4jkggb>
Ler →
</a> </div> </div> </div> </div>`)} </div> <!-- Newsletter signup --> <div class="bg-light-bg rounded-3xl p-8 md:p-12 text-center reveal-effect" data-astro-cid-li4jkggb> <div class="max-w-2xl mx-auto" data-astro-cid-li4jkggb> <div class="w-16 h-16 bg-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-6" data-astro-cid-li4jkggb> <span class="text-3xl" data-astro-cid-li4jkggb>📧</span> </div> <h3 class="font-cormorant text-3xl font-semibold text-primary-dark mb-4" data-astro-cid-li4jkggb>
Receba nossas <span class="text-primary-gold italic" data-astro-cid-li4jkggb>novidades</span> </h3> <p class="text-gray-text mb-8 font-light" data-astro-cid-li4jkggb>
Fique por dentro das últimas tendências em estética e bem-estar. Assine nossa newsletter e receba conteúdo exclusivo.
</p> <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" data-astro-cid-li4jkggb> <input type="email" placeholder="Seu melhor e-mail" class="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:border-primary-gold focus:outline-none transition-colors duration-300" data-astro-cid-li4jkggb> <button class="px-8 py-3 bg-primary-gold text-white rounded-full font-medium hover:bg-gold-dark transition-colors duration-300 hover:shadow-lg hover:shadow-primary-gold/25" data-astro-cid-li4jkggb>
Assinar
</button> </div> </div> </div> <!-- CTA para ver todos os posts --> <div class="text-center mt-12 reveal-effect" data-astro-cid-li4jkggb> ${renderComponent($$result, "Button", $$MainButton, { "title": "Ver todos os artigos", "href": "/blog", "data-astro-cid-li4jkggb": true })} </div> </div> </section> `;
}, "/home/zayit/projetos/lumino/apps/frontend/src/components/sections/blogSection.astro", void 0);

const $$Astro = createAstro("https://joqueianapolis.com.br");
const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutUs;
  const features = Astro2.props.features || [];
  const { headingTitle, headingAccent, headingSubtitle, description, shapeImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white relative pt-18 overflow-hidden pb-4 2xl:pb-16" id="about"> <!-- TOP - shape 1 --> <div class="absolute z-0 w-[300px] h-[300px] rounded-full bg-primary-gold/5 -top-36 -right-36"></div> <!-- BOTTOM - shape 2 --> <div class="absolute z-0 w-[200px] h-[200px] rounded-full bg-primary-dark/5 -bottom-28 -left-28"></div> <!-- LINHA IMAGEM --> <div class="absolute top-0 left-[25%] lg:left-[15%] w-[1px] h-[40%] lg:h-full bg-gradient-to-b from-transparent via-primary-gold to-transparent"></div> <div class="grid lg:grid-cols-9 gap-8 items-center mx-auto lg:px-20 w-full relative z-10"> <div class="h-[400px] lg:h-[500px] 2xl:h-[800px] lg:col-span-4 px-8 relative reveal-effect"> ${renderComponent($$result, "Image", $$Image, { "src": shapeImage, "alt": "Sobre a Lumino Cl\xEDnica", "layout": "constrained", "loading": "lazy", "decoding": "async", "width": shapeImage.width, "height": shapeImage.height, "class": "absolute w-[55%] h-[80%] lg:h-[70%] 2xl:w-[60%] 2xl:h-[85%] top-0 lg:left-0 2xl:left-20 object-cover rounded-tr-[250px] rounded-bl-[250px] shadow-xl shadow-primary-gold/5 z-2" })} <div class="absolute w-[65%] 2xl:w-[55%] h-[80%] lg:h-[70%] bottom-0 right-[25px] 2xl:right-20 bg-primary-gold/12 rounded-tl-[250px] rounded-br-[250px] shadow-xl shadow-primary-gold/5 z-1"></div> </div> <div class="reveal-effect lg:col-span-5 relative px-8 flex flex-col gap-y-4 mt-4 lg:mt-0"> ${renderComponent($$result, "Heading", $$Heading, { "text": headingTitle, "accent": headingAccent })} ${renderComponent($$result, "Heading", $$Heading, { "text": headingSubtitle, "type": "subtitle", "color": "gray", "fontWeight": "regular" })} <div class="mb-4"> ${renderComponent($$result, "Paragraph", $$Paragraph, { "fontWeight": "300", "text": description })} </div> <div class="grid lg:grid-cols-2 gap-4"> ${features.map((item) => renderTemplate`<div class="flex items-start group reveal-effect"> <div class="mr-[15px] w-[40px] h-[40px] bg-light-bg rounded-full flex items-center justify-center text-primary-gold shrink-0 text-xl transition-all duration-300 
                group-hover:bg-primary-gold group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary-gold/15 group-hover:-translate-y-[3px]"> ${item.icon} </div> <div> <h3 class="text-[18px] font-semibold mb-[10px] text-primary-dark">${item.title}</h3> <p class="text-[15px] text-gray-500">${item.description}</p> </div> </div>`)} </div> </div> </div> </section>`;
}, "/home/zayit/projetos/lumino/apps/frontend/src/components/sections/aboutUs.astro", void 0);

const heroData = {
  subtitle: "BEM VINDO Á LUMINO CLÍNICA",
  title: "O sorriso perfeito que você merece",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  firstButtonTitle: "NOSSOS SERVIÇOS",
  secondButtonTitle: "AGENDAR CONSULTA",
  firstButtonHref: "#services",
  secondButtonHref: "#contacts",
  bgImage: BgImage
};

const aboutUsData = {
  headingTitle: "Sobre a",
  headingAccent: "Clínica Lúmino",
  headingSubtitle: "Transformando sorrisos com excelência e inovação há mais de 10 anos.",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis...",
  shapeImage: BgImage,
  features: [
    {
      icon: "✦",
      title: "Tecnologia Avançada",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: "✦",
      title: "Equipe Especializada",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: "✦",
      title: "Ambiente Luxuoso",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: "✦",
      title: "Atendimento Premium",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
};

const counterSectionStatus = [
  { value: 3500, label: "Pacientes Atendidos" },
  { value: 12, label: "Anos de Experiência" },
  { value: 98, label: "Avaliação de Satisfação" },
  { value: 100, label: "Tecnologia de Ponta" }
];

const galleryData = {
  headingTitle: "Nossa",
  headingAccent: "Galeria",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  items: [
    {
      image: BgImage,
      alt: "Recepção Moderna",
      title: "Recepção Moderna",
      category: "Ambiente Luxuoso"
    },
    {
      image: BgImage,
      alt: "Consultório Premium",
      title: "Consultório Premium",
      category: "Tecnologia Avançada"
    },
    {
      image: BgImage,
      alt: "Atendimento VIP",
      title: "Atendimento VIP",
      category: "Experiência Exclusiva"
    },
    {
      image: BgImage,
      alt: "Transformação de Sorriso",
      title: "Transformação de Sorriso",
      category: "Antes e Depois"
    },
    {
      image: BgImage,
      alt: "Equipamentos Modernos",
      title: "Equipamentos Modernos",
      category: "Tecnologia de Ponta"
    },
    {
      image: BgImage,
      alt: "Sala de Espera",
      title: "Sala de Espera",
      category: "Conforto e Elegância"
    },
    {
      image: BgImage,
      alt: "Equipamentos Modernos",
      title: "Equipamentos Modernos",
      category: "Tecnologia de Ponta"
    },
    {
      image: BgImage,
      alt: "Sala de Espera",
      title: "Sala de Espera",
      category: "Conforto e Elegância"
    },
    {
      image: BgImage,
      alt: "Equipamentos Modernos",
      title: "Equipamentos Modernos",
      category: "Tecnologia de Ponta"
    },
    {
      image: BgImage,
      alt: "Sala de Espera",
      title: "Sala de Espera",
      category: "Conforto e Elegância"
    }
  ]
};

const locationData = {
  headingTitle: "Nossa",
  headingAccent: "Localização",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
  locationItems: [
    {
      icon: "📍",
      title: "Endereço",
      info: "Avenida Paulista, 1000, Jardim Paulista<br/>São Paulo - SP, 01310-100"
    },
    {
      icon: "📞",
      title: "Telefone",
      info: "+55 (11) 3000-0000"
    },
    {
      icon: "✉️",
      title: "E-mail",
      info: "contato@luminoclinica.com.br"
    }
  ],
  hours: [
    { day: "Segunda - Sexta", time: "8:00 - 20:00" },
    { day: "Sábado", time: "9:00 - 17:00" },
    { day: "Domingo", time: "Fechado" }
  ],
  mapImage: "https://placehold.co/800x500",
  mapAlt: "Mapa Lumino Clínica"
};

const testimonialsData = {
  headingTitle: "O que nossos",
  headingAccent: "Pacientes",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  testimonials: [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      authorName: "Ana Oliveira",
      authorRole: "Empresária",
      avatar: "https://placehold.co/100x100",
      rating: 5
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      authorName: "Carlos Santos",
      authorRole: "Advogado",
      avatar: "https://placehold.co/100x100",
      rating: 5
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      authorName: "Mariana Lima",
      authorRole: "Médica",
      avatar: "https://placehold.co/100x100",
      rating: 5
    }
  ]
};

const teamData = {
  headingTitle: "Nossa",
  headingAccent: "Equipe",
  description: "Profissionais altamente qualificados e especializados, comprometidos em oferecer os melhores resultados com segurança e excelência.",
  teamMembers: [
    {
      image: "/images/team/placeholder-doctor.jpg",
      // Use uma imagem placeholder por enquanto
      name: "Dra. Maria Silva",
      role: "Dermatologista",
      specialties: ["Rejuvenescimento", "Laser", "Preenchimento"],
      bio: "Especialista em dermatologia com mais de 15 anos de experiência em procedimentos estéticos avançados e rejuvenescimento facial.",
      experience: "15+ anos",
      socialLinks: [
        { platform: "Instagram", url: "#", icon: "📷" },
        { platform: "LinkedIn", url: "#", icon: "💼" },
        { platform: "WhatsApp", url: "#", icon: "📱" }
      ]
    },
    {
      image: "/images/team/placeholder-doctor2.jpg",
      name: "Dr. Carlos Santos",
      role: "Cirurgião Plástico",
      specialties: ["Harmonização", "Botox", "Bichectomia"],
      bio: "Cirurgião plástico especializado em harmonização facial e procedimentos minimamente invasivos para resultados naturais.",
      experience: "12+ anos",
      socialLinks: [
        { platform: "Instagram", url: "#", icon: "📷" },
        { platform: "LinkedIn", url: "#", icon: "💼" },
        { platform: "YouTube", url: "#", icon: "🎥" }
      ]
    },
    {
      image: "/images/team/placeholder-doctor3.jpg",
      name: "Ana Rodrigues",
      role: "Esteticista",
      specialties: ["Limpeza de Pele", "Hidratação", "Massagens"],
      bio: "Esteticista certificada com expertise em tratamentos faciais e corporais, focada no bem-estar e beleza natural dos clientes.",
      experience: "8+ anos",
      socialLinks: [
        { platform: "Instagram", url: "#", icon: "📷" },
        { platform: "WhatsApp", url: "#", icon: "📱" }
      ]
    }
  ]
};

const certificationsData = {
  headingTitle: "Nossos",
  headingAccent: "Certificados",
  description: "Reconhecimentos que comprovam nossa excelência e compromisso com os mais altos padrões de qualidade em estética e bem-estar.",
  certifications: [
    {
      image: "/images/certifications/anvisa.png",
      // Substitua pelos caminhos corretos
      title: "Certificação ANVISA",
      organization: "ANVISA",
      year: "2024",
      description: "Certificação que garante o cumprimento de todas as normas sanitárias e de segurança estabelecidas pela Agência Nacional de Vigilância Sanitária."
    },
    {
      image: "/images/certifications/crm.png",
      title: "Registro CRM Ativo",
      organization: "Conselho Regional de Medicina",
      year: "2023",
      description: "Registro profissional que autoriza a prática médica e procedimentos estéticos por profissionais qualificados e habilitados."
    },
    {
      image: "/images/certifications/sebrae.png",
      title: "Selo de Excelência",
      organization: "SEBRAE",
      year: "2024",
      description: "Reconhecimento pela excelência em atendimento ao cliente e práticas sustentáveis de negócio no setor de estética."
    },
    {
      image: "/images/certifications/iso.png",
      title: "ISO 9001:2015",
      organization: "ISO",
      year: "2023",
      description: "Certificação internacional de sistema de gestão da qualidade que assegura processos padronizados e melhoria contínua."
    },
    {
      image: "/images/certifications/sbd.png",
      title: "Membro SBD",
      organization: "Sociedade Brasileira de Dermatologia",
      year: "2024",
      description: "Filiação que garante atualizações constantes em dermatologia e procedimentos estéticos baseados em evidências científicas."
    },
    {
      image: "/images/certifications/abme.png",
      title: "Especialização ABME",
      organization: "Associação Brasileira de Medicina Estética",
      year: "2023",
      description: "Especialização reconhecida em medicina estética que comprova conhecimento avançado em procedimentos e técnicas modernas."
    }
  ]
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = await getBlogPosts();
  const blogData = {
    headingTitle: "Nosso",
    headingAccent: "Blog",
    description: "Conte\xFAdos exclusivos sobre est\xE9tica, bem-estar e as \xFAltimas tend\xEAncias em cuidados com a sa\xFAde bucal.",
    posts: blogPosts
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { ...heroData })} ${renderComponent($$result2, "AboutUs", $$AboutUs, { ...aboutUsData })} ${renderComponent($$result2, "TeamSection", $$TeamSection, { ...teamData })} ${renderComponent($$result2, "CounterSection", $$CounterSection, { "stats": counterSectionStatus })}  ${renderComponent($$result2, "CertificationSection", $$CertificationSection, { ...certificationsData })} ${renderComponent($$result2, "GallerySection", $$GallerySection, { ...galleryData })} ${renderComponent($$result2, "LocationSection", $$LocationSection, { ...locationData })} ${renderComponent($$result2, "TestimonialSection", $$TestimonialSection, { ...testimonialsData })} ${renderComponent($$result2, "CtaSection", $$CtaSection, { ...contactCTAData })} ${renderComponent($$result2, "BlogSection", $$BlogSection, { ...blogData })} ${renderComponent($$result2, "ParticlesBackground", $$ParticlesBackground, {})} ` })}`;
}, "/home/zayit/projetos/lumino/apps/frontend/src/pages/index.astro", void 0);

const $$file = "/home/zayit/projetos/lumino/apps/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
