import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_B-x0EIGv.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_CGewuf9t.mjs';
import 'clsx';
import { Map, Users, CheckCircle, ShieldCheck, Target, ArrowRight, Heart, Shield, Sparkles } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$ServicesHero = createComponent(($$result, $$props, $$slots) => {
  const heroImages = [
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
  ];
  return renderTemplate`<!-- HERO -->${maybeRenderHead()}<section class="relative section-pad min-h-[420px] overflow-hidden"> <!-- Background Image Carousel --> <div class="absolute inset-0 z-0" data-auto-carousel data-interval="5000"> ${heroImages.map((image, index) => renderTemplate`<img${addAttribute(image, "src")}${addAttribute(`Travel Services ${index + 1}`, "alt")}${addAttribute(`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === 0 ? "opacity-100" : "opacity-0"}`, "class")} data-carousel-slide>`)} <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div> </div> <div class="relative z-10 container mx-auto px-4 py-8 text-center text-white"> <span class="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold tracking-widest uppercase">
What We Offer
</span> <h1 class="hero-headline drop-shadow-2xl">Our Services</h1> <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
Crafting unforgettable holiday experiences for everyone. From budget getaways to luxury escapes.
</p> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/services/ServicesHero.astro", void 0);

const $$ServiceGrid = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Personalized Itinerary Planning",
      desc: "Tell us your travel goal - we\u2019ll turn it into a day-by-day plan that fits your style, pace, and budget.",
      icon: Map
    },
    {
      title: "Family & Group Trips",
      desc: "Planning for more than one? No worries - we handle logistics, stays, and all the what-ifs, so you just focus on enjoying.",
      icon: Users
    },
    {
      title: "Hassle-Free Booking Support",
      desc: "Flights, hotels, local transport, guides - we handle it all.",
      icon: CheckCircle
    },
    {
      title: "Trusted Vendor Network",
      desc: "We work with verified local partners across the world - so your trip is safe, smooth, and scam-free.",
      icon: ShieldCheck
    },
    {
      title: "Goal-Focused Planning",
      desc: "Want to see the Eiffel Tower by 30? Chase waterfalls in Bali? Let\u2019s tick those boxes. One by one.",
      icon: Target
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-white"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`<div class="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"> <div class="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"> ${renderComponent($$result, "service.icon", service.icon, { "size": 32 })} </div> <h3 class="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors tracking-tight">${service.title}</h3> <p class="text-slate-600 leading-relaxed">${service.desc}</p> </div>`)} <!-- Custom "Call to Action" Card --> <div class="group p-8 rounded-2xl bg-primary text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center text-center"> <h3 class="text-2xl font-bold mb-4">Ready to Plan?</h3> <p class="text-white/80 mb-8">Contact us today to start your journey.</p> <a href="/contact" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary font-bold rounded-full hover:bg-white transition-colors">
Get Started ${renderComponent($$result, "ArrowRight", ArrowRight, { "size": 18 })} </a> </div> </div> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/services/ServiceGrid.astro", void 0);

const $$PromiseSection = createComponent(($$result, $$props, $$slots) => {
  const promises = [
    { icon: CheckCircle, text: "100% Transparent Pricing", color: "blue" },
    { icon: Heart, text: "Personalized Travel Experiences", color: "rose" },
    { icon: Shield, text: "Trusted & Verified Partners", color: "green" },
    { icon: Sparkles, text: "Hassle-Free Planning", color: "amber" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden relative"> <!-- Background decorations --> <div class="absolute inset-0 opacity-10"> <div class="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div> <div class="absolute bottom-10 right-10 w-80 h-80 bg-accent-light rounded-full blur-3xl"></div> </div> <div class="container mx-auto px-4 relative z-10"> <div class="text-center mb-12 max-w-3xl mx-auto"> <h2 class="text-sm md:text-base text-accent font-bold tracking-widest uppercase mb-4">Our Promise</h2> <h3 class="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">Your Journey, Our Commitment</h3> <p class="text-lg text-white/90 leading-relaxed">We're dedicated to making your travel dreams a reality with these core values</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"> ${promises.map((promise) => renderTemplate`<div class="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"> <div${addAttribute(`w-14 h-14 rounded-xl bg-gradient-to-br ${promise.color === "blue" ? "from-blue-400 to-blue-600" : promise.color === "rose" ? "from-rose-400 to-rose-600" : promise.color === "green" ? "from-green-400 to-green-600" : "from-amber-400 to-amber-600"} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`, "class")}> ${renderComponent($$result, "promise.icon", promise.icon, { "size": 28, "className": "text-white" })} </div> <p class="text-white font-semibold text-lg leading-snug">${promise.text}</p> </div>`)} </div> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/services/PromiseSection.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Travel Services - Explore Packages, Visa Assistance | True Gate Visa", "description": "Discover our comprehensive travel services: personalized itinerary planning, family & group trips, visa assistance, and customized travel packages for India and international destinations.", "keywords": "explore packages, travel services, visa assistance, holiday packages, family trips, group tours, personalized itinerary, international travel packages" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "ServicesHero", $$ServicesHero, {})} ${renderComponent($$result2, "ServiceGrid", $$ServiceGrid, {})} ${renderComponent($$result2, "PromiseSection", $$PromiseSection, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/niveus/visa/src/pages/services.astro", void 0);

const $$file = "C:/Users/niveus/visa/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
