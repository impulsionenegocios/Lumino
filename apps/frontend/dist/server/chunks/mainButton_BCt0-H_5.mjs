import { a as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderTemplate } from './astro/server_Hu3wlXJ5.mjs';

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
const $$MainButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainButton;
  const { title, href, variant = "default" } = Astro2.props;
  const isOutline = variant === "outline";
  const base = [
    "relative",
    "inline-block",
    "overflow-hidden",
    "px-[40px]",
    "py-[18px]",
    "no-underline",
    "font-medium",
    "uppercase",
    "tracking-[1px]",
    "transition-all",
    "duration-500",
    "ease-out-expo",
    "rounded-[50px]",
    "cursor-pointer",
    "transform",
    "text-sm",
    "text-center",
    "2xl:text-lg"
  ].join(" ");
  const defaultStyles = [
    "bg-gradient-to-r",
    "from-primary-gold",
    "to-gold-light",
    "text-white",
    "shadow-[0_10px_20px_rgba(201,168,116,0.2)]",
    "z-[1]",
    // pseudo-element
    "before:content-['']",
    "before:absolute",
    "before:top-0",
    "before:left-0",
    "before:w-0",
    "before:h-full",
    "before:bg-primary-dark",
    "before:transition-all",
    "before:duration-500",
    "before:ease-out-expo",
    "before:z-[-1]",
    // hover
    "hover:shadow-[0_15px_30px_rgba(201,168,116,0.4)]",
    "hover:-translate-y-[3px]",
    "hover:before:w-full"
  ].join(" ");
  const outlineStyles = [
    "bg-transparent",
    "text-primary-gold",
    "border-2",
    "border-primary-gold",
    "shadow-none",
    "z-[1]",
    // pseudo-element uses gradient
    "before:content-['']",
    "before:absolute",
    "before:top-0",
    "before:left-0",
    "before:w-0",
    "before:h-full",
    "before:bg-gradient-to-r",
    "before:from-primary-gold",
    "before:to-gold-light",
    "before:transition-all",
    "before:duration-500",
    "before:ease-out-expo",
    "before:z-[-1]",
    // hover
    "hover:text-white",
    "hover:shadow-[0_15px_30px_rgba(201,168,116,0.4)]",
    "hover:-translate-y-[3px]",
    "hover:before:w-full"
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`${base} ${isOutline ? outlineStyles : defaultStyles}`, "class")}> ${title} </a>`;
}, "/home/zayit/projetos/lumino/apps/frontend/src/components/buttons/mainButton.astro", void 0);

export { $$Heading as $, $$MainButton as a };
