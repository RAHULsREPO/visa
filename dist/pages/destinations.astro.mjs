import { d as createAstro, c as createComponent, m as maybeRenderHead, a as addAttribute, b as renderComponent, r as renderTemplate } from '../chunks/astro/server_B-x0EIGv.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_CGewuf9t.mjs';
import { ArrowRight } from 'lucide-react';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://truegatevisa.com");
const $$DestinationCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DestinationCard;
  const { title, image, desc, layout = "grid", link } = Astro2.props;
  return renderTemplate`${layout === "grid" && renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full"><div class="relative h-48 overflow-hidden"><img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div></div><div class="p-6 flex flex-col flex-grow"><div class="flex items-center justify-between mb-2"><h3 class="text-xl font-bold text-primary group-hover:text-accent transition-colors">${title}</h3>${renderComponent($$result, "ArrowRight", ArrowRight, { "size": 18, "className": "text-slate-300 group-hover:text-accent -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" })}</div><p class="text-sm text-slate-500 mb-4 flex-grow">${desc}</p><div class="flex items-center text-xs font-bold text-accent uppercase tracking-wide"><span class="bg-accent/10 px-2 py-1 rounded">View Package</span></div></div></a>`}${layout === "large" && renderTemplate`<a${addAttribute(link, "href")} class="group relative rounded-2xl overflow-hidden shadow-lg aspect-[16/9] hover:shadow-2xl transition-all duration-300"><img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div><div class="absolute bottom-0 left-0 p-6 w-full text-white"><h3 class="text-2xl font-bold mb-1">${title}</h3><p class="text-white/80 text-sm line-clamp-2 mb-3">${desc}</p><span class="inline-flex items-center gap-1 text-xs font-bold text-accent uppercase tracking-widest group-hover:gap-2 transition-all">
Explore ${renderComponent($$result, "ArrowRight", ArrowRight, { "size": 14 })}</span></div></a>`}`;
}, "C:/Users/niveus/visa/src/components/destinations/DestinationCard.astro", void 0);

const $$InternationalSection = createComponent(async ($$result, $$props, $$slots) => {
  const internationalDestinations = [
    { title: "Singapore", image: "/assets/images/singapore.png", desc: "Experience the Lion City's vibrant culture.", link: "#" },
    { title: "Thailand", image: "/assets/images/thailand.png", desc: "The Land of Smiles awaits with stunning beaches.", link: "#" },
    { title: "Vietnam", image: "/assets/images/vietnam.png", desc: "Discover breathtaking landscapes and delicious crusine.", link: "#" },
    { title: "Bali", image: "/assets/images/bali-package-may-2025.png", desc: "Escape to the Island of the Gods for peace.", link: "#" },
    { title: "Azerbaijan", image: "/assets/images/azerbaijan.png", desc: "Where East meets West - explore the Land of Fire.", link: "#" },
    { title: "Malaysia", image: "/assets/images/malaysia-langkawi.png", desc: "Truly Asia - from bustling cities to rainforests.", link: "#" },
    { title: "Dubai", image: "/assets/images/dubai.png", desc: "The City of Gold - luxury, shopping, and ultramodern.", link: "#" },
    { title: "Phuket", image: "/assets/images/phuket-trip-option-1.png", desc: "Thailand's largest island, famous for its beaches.", link: "#" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-slate-50"> <div class="container mx-auto px-4"> <div class="mb-12 text-center md:text-left"> <h2 class="text-3xl font-heading font-bold text-primary flex items-center justify-center md:justify-start gap-3"> <span class="w-2 h-12 bg-accent rounded-full block"></span>
International Packages
</h2> <p class="text-slate-600 mt-2 ml-5">Discover the world beyond borders.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${internationalDestinations.map((dest) => renderTemplate`${renderComponent($$result, "DestinationCard", $$DestinationCard, { "title": dest.title, "image": dest.image, "desc": dest.desc, "link": dest.link, "layout": "grid" })}`)} </div> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/destinations/InternationalSection.astro", void 0);

const $$DomesticSection = createComponent(async ($$result, $$props, $$slots) => {
  const domesticDestinations = [
    { title: "Kullu Manali", image: "/assets/images/kullu-manali.png", desc: "Breathtaking views and adventure in the Himalayas.", link: "#" },
    { title: "Kashmir", image: "/assets/images/kashmir-tulip-package.png", desc: "Paradise on Earth - snow-capped mountains.", link: "#" },
    { title: "Rajasthan", image: "/assets/images/rajasthan.jpg", desc: "The Land of Kings - palaces, deserts, and culture.", link: "#" },
    { title: "Goa", image: "/assets/images/goa.jpg", desc: "Sun, sand, and sea - the perfect beach getaway.", link: "#" },
    { title: "Hyderabad", image: "/assets/images/hyderabad.png", desc: "The City of Pearls - a blend of history and modernity.", link: "#" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-white"> <div class="container mx-auto px-4"> <div class="mb-12 text-center md:text-left"> <h2 class="text-3xl font-heading font-bold text-primary flex items-center justify-center md:justify-start gap-3"> <span class="w-2 h-12 bg-secondary rounded-full block"></span>
Domestic Packages
</h2> <p class="text-slate-600 mt-2 ml-5">Incredible India awaits you.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${domesticDestinations.map((dest) => renderTemplate`${renderComponent($$result, "DestinationCard", $$DestinationCard, { "title": dest.title, "image": dest.image, "desc": dest.desc, "link": dest.link, "layout": "large" })}`)} </div> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/destinations/DomesticSection.astro", void 0);

const $$DestinationsHero = createComponent(($$result, $$props, $$slots) => {
  const heroImages = [
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative section-pad min-h-[420px] overflow-hidden text-white"> <!-- Background Image Carousel --> <div class="absolute inset-0 z-0" data-auto-carousel data-interval="5000"> ${heroImages.map((image, index) => renderTemplate`<img${addAttribute(image, "src")}${addAttribute(`Destinations ${index + 1}`, "alt")}${addAttribute(`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === 0 ? "opacity-100" : "opacity-0"}`, "class")} data-carousel-slide>`)} <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div> </div> <div class="container relative z-10 mx-auto px-4 text-center space-y-6 max-w-4xl"> <span class="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold tracking-widest uppercase">
Explore The World
</span> <h1 class="hero-headline drop-shadow-2xl">Our Destinations</h1> <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
Explore handpicked packages for the most beautiful places in India and around the world.
</p> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/destinations/DestinationsHero.astro", void 0);

const $$Destinations = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Popular Travel Destinations - India & International | True Gate Visa", "description": "Explore handpicked travel destinations including India, Thailand, Vietnam, Dubai, Singapore, and Bali. Find the perfect holiday package for your dream vacation.", "keywords": "travel destinations, holiday packages india, international destinations, thailand packages, dubai tours, vietnam travel, singapore trips, bali holidays, explore destinations" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "DestinationsHero", $$DestinationsHero, {})} ${renderComponent($$result2, "InternationalSection", $$InternationalSection, {})} ${renderComponent($$result2, "DomesticSection", $$DomesticSection, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/niveus/visa/src/pages/destinations.astro", void 0);

const $$file = "C:/Users/niveus/visa/src/pages/destinations.astro";
const $$url = "/destinations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Destinations,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
