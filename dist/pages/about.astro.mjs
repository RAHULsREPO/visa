import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_B-x0EIGv.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_CGewuf9t.mjs';
import 'clsx';
import { Shield, FileCheck, TrendingUp, Users, Globe, Heart } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$AboutHero = createComponent(($$result, $$props, $$slots) => {
  const heroImages = [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=2000&auto=format&fit=crop"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative section-pad min-h-[420px] overflow-hidden text-white"> <!-- Background Image Carousel --> <div class="absolute inset-0 z-0" data-auto-carousel data-interval="5000"> ${heroImages.map((image, index) => renderTemplate`<img${addAttribute(image, "src")}${addAttribute(`About ${index + 1}`, "alt")}${addAttribute(`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === 0 ? "opacity-100" : "opacity-0"}`, "class")} data-carousel-slide>`)} <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div> </div> <!-- Decorative elements --> <div class="absolute inset-0 z-0 opacity-10"> <div class="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-float"></div> <div class="absolute bottom-10 right-20 w-96 h-96 bg-accent-light rounded-full blur-3xl"></div> </div> <div class="container relative z-10 mx-auto px-4 text-center space-y-6 max-w-4xl"> <span class="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold tracking-widest uppercase">
About Us
</span> <h1 class="hero-headline drop-shadow-2xl">
Your Gateway to Seamless Travel
</h1> <p class="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
Trusted visa consultancy and travel partner, making global journeys effortless since 2025.
</p> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/about/AboutHero.astro", void 0);

const $$OurStory = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-white"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"> <div class="space-y-6"> <h2 class="text-4xl font-heading font-bold text-primary">Who We Are</h2> <p class="text-slate-600 leading-relaxed">
True Gate Visa is your trusted partner in making global travel dreams a reality. Established in 2025, we specialize in comprehensive visa assistance and customized holiday packages.
</p> <p class="text-slate-600 leading-relaxed">
Based in Ernakulam, Kerala, we serve travelers across India and globally, ensuring every journey is smooth, secure, and memorable.
</p> </div> <div class="relative"> <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&fit=crop" alt="Travel" class="rounded-2xl shadow-2xl"> <div class="absolute -bottom-6 -left-6 bg-accent text-primary p-6 rounded-xl shadow-xl"> <p class="text-3xl font-bold">2025</p> <p class="text-sm font-medium">Established</p> </div> </div> </div> <div class="bg-slate-50 rounded-2xl p-8 md:p-12"> <h3 class="text-3xl font-heading font-bold text-primary mb-6">Our Mission</h3> <p class="text-lg text-slate-700 leading-relaxed mb-4">
To provide seamless visa processing and exceptional travel experiences through expert documentation support, personalized service, and unwavering commitment to our clients' success.
</p> <p class="text-slate-600 leading-relaxed">
We believe in turning travel aspirations into achievable realities with transparency, efficiency, and care at every step of your journey.
</p> </div> </div> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/about/OurStory.astro", void 0);

const $$CoreValues = createComponent(($$result, $$props, $$slots) => {
  const values = [
    {
      icon: Shield,
      title: "Data Confidentiality",
      desc: "Your personal information is secure with us. We maintain strict privacy protocols."
    },
    {
      icon: FileCheck,
      title: "Expert Documentation",
      desc: "Professional assistance with all visa paperwork, ensuring accuracy and completeness."
    },
    {
      icon: TrendingUp,
      title: "High Approval Rate",
      desc: "Our meticulous process and expertise result in consistently high visa approval success."
    },
    {
      icon: Users,
      title: "Personalized Service",
      desc: "Every traveler is unique. We tailor our services to your specific needs and goals."
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Serving travelers across India and worldwide with comprehensive visa solutions."
    },
    {
      icon: Heart,
      title: "Customer First",
      desc: "Your satisfaction and success are our top priorities. We're with you every step."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gradient-to-b from-slate-50 to-white"> <div class="container mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-4xl font-heading font-bold text-primary mb-4">Why Choose True Gate Visa</h2> <p class="text-slate-600 max-w-2xl mx-auto">
We combine expertise, transparency, and dedication to make your travel journey effortless.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> ${values.map((value) => renderTemplate`<div class="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"> <div class="w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4"> ${renderComponent($$result, "value.icon", value.icon, { "size": 28 })} </div> <h3 class="text-xl font-bold text-primary mb-2">${value.title}</h3> <p class="text-slate-600 text-sm leading-relaxed">${value.desc}</p> </div>`)} </div> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/about/CoreValues.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About True Gate Visa - Trusted Travel & Visa Consultancy | Kerala", "description": "Learn about True Gate Visa, your trusted travel partner in Ernakulam, Kerala. We provide personalized travel experiences and visa consultancy services since 2025.", "keywords": "about true gate visa, travel agency kerala, visa consultants ernakulam, trusted travel partner, kerala travel services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "AboutHero", $$AboutHero, {})} ${renderComponent($$result2, "OurStory", $$OurStory, {})} ${renderComponent($$result2, "CoreValues", $$CoreValues, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/niveus/visa/src/pages/about.astro", void 0);

const $$file = "C:/Users/niveus/visa/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
