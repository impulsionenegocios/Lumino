import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_DwmPXTEX.mjs';

const $$Astro$1 = createAstro("https://joqueianapolis.com.br");
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  const {
    type = "title",
    text,
    accent = "",
    color = "dark",
    fontWeight = "bold"
    // pode ser 'bold' ou 'light'
  } = Astro2.props;
  const isTitle = type === "title";
  const headingTag = isTitle ? "h1" : "h2";
  const fontSize = isTitle ? "text-5xl lg:text-6xl 2xl:text-7xl font-serif animate-title" : "text-[18px] font-sans animate-subtitle";
  const weightClass = fontWeight === "bold" ? "font-bold" : "font-regular";
  let textColor = "text-primary-dark";
  if (color === "gold") textColor = "text-primary-gold";
  else if (color === "gray") textColor = "text-gray-400";
  else if (color === "white") textColor = "text-white";
  return renderTemplate`${maybeRenderHead()}<component${addAttribute(headingTag, "this")}${addAttribute(`relative leading-none ${fontSize} ${textColor} ${weightClass}`, "class")}> ${text} ${accent && renderTemplate`<span class="text-primary-gold"> ${accent}</span>`} </component>`;
}, "/home/zayit/projetos/lumino/apps/frontend/src/components/typograph/Heading.astro", void 0);

const $$Astro = createAstro("https://joqueianapolis.com.br");
const $$Paragraph = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const {
    text,
    fontWeight = 400,
    // qualquer valor de 100 a 900
    color = "text-gray-400",
    // classe tailwind
    size = "text-regular"
    // opcional: text-sm, text-lg etc
  } = Astro2.props;
  const validWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const weightClass = validWeights.includes(fontWeight) ? `font-[${fontWeight}]` : "font-normal";
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`${weightClass} ${color} ${size} leading-[1.6]`, "class")}> ${text} </p>`;
}, "/home/zayit/projetos/lumino/apps/frontend/src/components/typograph/Paragraph.astro", void 0);

export { $$Heading as $, $$Paragraph as a };
