import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, d as createAstro, b as renderComponent } from '../chunks/astro/server_B-x0EIGv.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_CGewuf9t.mjs';
import 'clsx';
import { ArrowRight, Heart, Calendar, UserCheck, Shield } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const heroSlides = [
    {
      src: "/assets/images/packages/japan-visa-package.jpg",
      alt: "Japan visa package offer by True Gate Visa"
    },
    {
      src: "/assets/images/packages/usa-visa-package.jpg",
      alt: "America visa package offer by True Gate Visa"
    },
    {
      src: "/assets/images/packages/ireland-visa-package.jpg",
      alt: "Ireland visa package offer by True Gate Visa"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative isolate overflow-hidden"> <div class="absolute inset-0 -z-10" data-auto-carousel data-interval="4200"> ${heroSlides.map((slide, index) => renderTemplate`<img${addAttribute(slide.src, "src")}${addAttribute(slide.alt, "alt")}${addAttribute(`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${index === 0 ? "opacity-100" : "opacity-0"}`, "class")} data-carousel-slide>`)} <div class="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55"></div> </div> <div class="container mx-auto grid min-h-[560px] items-center gap-10 px-4 py-14 md:min-h-[640px] md:grid-cols-[1.1fr_0.9fr] md:py-18 lg:py-20"> <div class="relative z-10 text-white"> <span class="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
Trusted Visa & Holiday Experts
</span> <h1 class="mt-6 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
Beautiful Journeys,
<span class="block bg-gradient-to-r from-accent-light via-accent to-[#ffe7a9] bg-clip-text text-transparent">Zero Stress Planning</span> </h1> <p class="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
From visa guidance to curated holiday packages, True Gate Visa helps you travel smarter with end-to-end support from Ernakulam.
</p> <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"> <a href="/#holiday-packages" class="btn-primary px-8">
View Holiday Packages
</a> <a href="/contact" class="btn-secondary border-white/35 bg-white/10 px-8">
Talk To An Expert
</a> </div> <div class="mt-8 grid max-w-lg grid-cols-3 gap-3 text-center"> <div class="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm"> <p class="text-xl font-extrabold">1K+</p> <p class="text-xs uppercase tracking-wider text-white/80">Happy Travelers</p> </div> <div class="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm"> <p class="text-xl font-extrabold">24/7</p> <p class="text-xs uppercase tracking-wider text-white/80">Support</p> </div> <div class="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm"> <p class="text-xl font-extrabold">Fast</p> <p class="text-xs uppercase tracking-wider text-white/80">Visa Guidance</p> </div> </div> </div> <div class="relative z-10 hidden md:block"> <div class="mx-auto max-w-md rounded-3xl border border-white/30 bg-white/10 p-5 shadow-2xl backdrop-blur-md"> <p class="text-sm font-semibold uppercase tracking-[0.16em] text-accent-light">Why Travelers Pick Us</p> <ul class="mt-5 space-y-3 text-white/90"> <li class="rounded-xl border border-white/20 bg-white/5 px-4 py-3">Personalized itinerary based on your budget</li> <li class="rounded-xl border border-white/20 bg-white/5 px-4 py-3">Transparent process for visa documents</li> <li class="rounded-xl border border-white/20 bg-white/5 px-4 py-3">Fast response on WhatsApp and call support</li> </ul> </div> </div> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/home/Hero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$VisaPackages = createComponent(($$result, $$props, $$slots) => {
  const packagePlans = [
    {
      name: "Starter Visa Support",
      price: "INR 7,500 + GST",
      summary: "Best for first-time travelers with full documentation guidance and checklist support.",
      features: ["Basic profile review", "Document checklist", "Form filling support", "Priority WhatsApp updates"]
    },
    {
      name: "Premium Assisted Package",
      price: "INR 12,900 + GST",
      summary: "Ideal for professionals and families who need end-to-end support from planning to submission.",
      features: ["Everything in Starter", "Cover letter assistance", "Appointment scheduling", "Travel itinerary support"]
    },
    {
      name: "Express Priority Package",
      price: "INR 18,500 + GST",
      summary: "Fast-track handling with premium attention for urgent travel timelines.",
      features: ["Everything in Premium", "Express processing queue", "Dedicated relationship manager", "Priority call support"]
    }
  ];
  const slides = [
    {
      src: "/assets/images/packages/japan-visa-package.jpg",
      alt: "Japan visa offer package by True Gate Visa"
    },
    {
      src: "/assets/images/packages/usa-visa-package.jpg",
      alt: "Travel visa promotion package by True Gate Visa"
    },
    {
      src: "/assets/images/packages/ireland-visa-package.jpg",
      alt: "International visa service package by True Gate Visa"
    }
  ];
  return renderTemplate(_a || (_a = __template(["", '<section id="visa-packages" class="section-pad relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e0f2fe,_#ffffff_45%,_#fef3c7_100%)]"> <div class="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl"></div> <div class="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl"></div> <div class="container relative z-10 mx-auto px-4"> <div class="mb-10 max-w-3xl"> <p class="inline-flex items-center rounded-full border border-sky-300/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 backdrop-blur-sm">\nVisa Packages\n</p> <h2 class="mt-4 font-heading text-3xl font-black leading-tight text-slate-900 md:text-5xl">\nChoose Your Visa Plan And Travel With Confidence\n</h2> <p class="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">\nFlexible plans for solo travelers, families, and urgent travel cases. Every package includes expert visa consultation from our Ernakulam team.\n</p> </div> <div class="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-stretch"> <div class="grid gap-4 lg:order-1"> ', ' </div> <div class="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.35)] backdrop-blur lg:order-2 lg:h-full"> <div class="group relative overflow-hidden rounded-2xl lg:h-full" data-package-slider> <div class="flex transition-transform duration-700 ease-out lg:h-full" data-slider-track> ', ' </div> <button class="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-slate-900/70 text-white shadow transition hover:bg-slate-900" type="button" data-slider-prev aria-label="Previous package image"> <span aria-hidden="true">&#10094;</span> </button> <button class="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-slate-900/70 text-white shadow transition hover:bg-slate-900" type="button" data-slider-next aria-label="Next package image"> <span aria-hidden="true">&#10095;</span> </button> <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/35 px-3 py-2" data-slider-dots> ', " </div> </div> </div> </div> </div> </section> <script>\n  document.addEventListener('DOMContentLoaded', () => {\n    const slider = document.querySelector('[data-package-slider]');\n    if (!slider) {\n      return;\n    }\n\n    const track = slider.querySelector('[data-slider-track]');\n    const prev = slider.querySelector('[data-slider-prev]');\n    const next = slider.querySelector('[data-slider-next]');\n    const dots = Array.from(slider.querySelectorAll('[data-slide-to]'));\n\n    if (!track || dots.length === 0) {\n      return;\n    }\n\n    let currentIndex = 0;\n    const totalSlides = dots.length;\n    let autoPlayId;\n\n    const goToSlide = (index) => {\n      currentIndex = (index + totalSlides) % totalSlides;\n      track.style.transform = `translateX(-${currentIndex * 100}%)`;\n      dots.forEach((dot, dotIndex) => {\n        dot.classList.toggle('bg-white', dotIndex === currentIndex);\n        dot.classList.toggle('bg-white/40', dotIndex !== currentIndex);\n      });\n    };\n\n    const startAutoPlay = () => {\n      if (autoPlayId) {\n        clearInterval(autoPlayId);\n      }\n      autoPlayId = setInterval(() => {\n        goToSlide(currentIndex + 1);\n      }, 4000);\n    };\n\n    prev?.addEventListener('click', () => {\n      goToSlide(currentIndex - 1);\n      startAutoPlay();\n    });\n\n    next?.addEventListener('click', () => {\n      goToSlide(currentIndex + 1);\n      startAutoPlay();\n    });\n\n    dots.forEach((dot, index) => {\n      dot.addEventListener('click', () => {\n        goToSlide(index);\n        startAutoPlay();\n      });\n    });\n\n    slider.addEventListener('mouseenter', () => {\n      if (autoPlayId) {\n        clearInterval(autoPlayId);\n      }\n    });\n\n    slider.addEventListener('mouseleave', startAutoPlay);\n\n    goToSlide(0);\n    startAutoPlay();\n  });\n<\/script>"], ["", '<section id="visa-packages" class="section-pad relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e0f2fe,_#ffffff_45%,_#fef3c7_100%)]"> <div class="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl"></div> <div class="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl"></div> <div class="container relative z-10 mx-auto px-4"> <div class="mb-10 max-w-3xl"> <p class="inline-flex items-center rounded-full border border-sky-300/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 backdrop-blur-sm">\nVisa Packages\n</p> <h2 class="mt-4 font-heading text-3xl font-black leading-tight text-slate-900 md:text-5xl">\nChoose Your Visa Plan And Travel With Confidence\n</h2> <p class="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">\nFlexible plans for solo travelers, families, and urgent travel cases. Every package includes expert visa consultation from our Ernakulam team.\n</p> </div> <div class="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-stretch"> <div class="grid gap-4 lg:order-1"> ', ' </div> <div class="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.35)] backdrop-blur lg:order-2 lg:h-full"> <div class="group relative overflow-hidden rounded-2xl lg:h-full" data-package-slider> <div class="flex transition-transform duration-700 ease-out lg:h-full" data-slider-track> ', ' </div> <button class="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-slate-900/70 text-white shadow transition hover:bg-slate-900" type="button" data-slider-prev aria-label="Previous package image"> <span aria-hidden="true">&#10094;</span> </button> <button class="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-slate-900/70 text-white shadow transition hover:bg-slate-900" type="button" data-slider-next aria-label="Next package image"> <span aria-hidden="true">&#10095;</span> </button> <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/35 px-3 py-2" data-slider-dots> ', " </div> </div> </div> </div> </div> </section> <script>\n  document.addEventListener('DOMContentLoaded', () => {\n    const slider = document.querySelector('[data-package-slider]');\n    if (!slider) {\n      return;\n    }\n\n    const track = slider.querySelector('[data-slider-track]');\n    const prev = slider.querySelector('[data-slider-prev]');\n    const next = slider.querySelector('[data-slider-next]');\n    const dots = Array.from(slider.querySelectorAll('[data-slide-to]'));\n\n    if (!track || dots.length === 0) {\n      return;\n    }\n\n    let currentIndex = 0;\n    const totalSlides = dots.length;\n    let autoPlayId;\n\n    const goToSlide = (index) => {\n      currentIndex = (index + totalSlides) % totalSlides;\n      track.style.transform = \\`translateX(-\\${currentIndex * 100}%)\\`;\n      dots.forEach((dot, dotIndex) => {\n        dot.classList.toggle('bg-white', dotIndex === currentIndex);\n        dot.classList.toggle('bg-white/40', dotIndex !== currentIndex);\n      });\n    };\n\n    const startAutoPlay = () => {\n      if (autoPlayId) {\n        clearInterval(autoPlayId);\n      }\n      autoPlayId = setInterval(() => {\n        goToSlide(currentIndex + 1);\n      }, 4000);\n    };\n\n    prev?.addEventListener('click', () => {\n      goToSlide(currentIndex - 1);\n      startAutoPlay();\n    });\n\n    next?.addEventListener('click', () => {\n      goToSlide(currentIndex + 1);\n      startAutoPlay();\n    });\n\n    dots.forEach((dot, index) => {\n      dot.addEventListener('click', () => {\n        goToSlide(index);\n        startAutoPlay();\n      });\n    });\n\n    slider.addEventListener('mouseenter', () => {\n      if (autoPlayId) {\n        clearInterval(autoPlayId);\n      }\n    });\n\n    slider.addEventListener('mouseleave', startAutoPlay);\n\n    goToSlide(0);\n    startAutoPlay();\n  });\n<\/script>"])), maybeRenderHead(), packagePlans.map((plan) => renderTemplate`<article class="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-200/60 backdrop-blur-sm"> <h3 class="font-heading text-xl font-extrabold text-slate-900">${plan.name}</h3> <p class="mt-1 text-sm font-bold tracking-wide text-primary">${plan.price}</p> <p class="mt-3 text-sm leading-relaxed text-slate-700">${plan.summary}</p> <ul class="mt-4 space-y-2 text-sm text-slate-800"> ${plan.features.map((feature) => renderTemplate`<li class="flex items-start gap-2"> <span class="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></span> <span>${feature}</span> </li>`)} </ul> </article>`), slides.map((slide) => renderTemplate`<article class="min-w-full lg:h-full"> <img${addAttribute(slide.src, "src")}${addAttribute(slide.alt, "alt")} class="h-[280px] w-full object-cover md:h-[430px] lg:h-full" loading="lazy"> </article>`), slides.map((_, index) => renderTemplate`<button${addAttribute(`h-2.5 w-2.5 rounded-full transition ${index === 0 ? "bg-white" : "bg-white/40"}`, "class")} type="button"${addAttribute(index, "data-slide-to")}${addAttribute(`Show slide ${index + 1}`, "aria-label")}></button>`));
}, "C:/Users/niveus/visa/src/components/home/VisaPackages.astro", void 0);

const $$Astro = createAstro("https://truegatevisa.com");
const $$DestinationCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DestinationCard;
  const { title, image, link, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="group relative h-72 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_18px_45px_-24px_rgba(30,58,109,0.45)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_24px_60px_-22px_rgba(21,69,154,0.45)]"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary/30 to-transparent"></div> <div class="absolute inset-x-4 top-4 inline-flex w-max rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
Popular Choice
</div> <div class="absolute bottom-0 left-0 right-0 p-6 text-white"> <p class="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent-light">${subtitle}</p> <h3 class="mb-4 text-3xl font-display font-bold tracking-tight">${title}</h3> <div class="flex items-center text-white/90 transition-colors group-hover:text-accent-light"> <span class="font-semibold">Discover More</span> ${renderComponent($$result, "ArrowRight", ArrowRight, { "size": 20, "className": "ml-2 transform group-hover:translate-x-2 transition-transform" })} </div> </div> </a>`;
}, "C:/Users/niveus/visa/src/components/home/DestinationCard.astro", void 0);

const $$PopularDestinations = createComponent(($$result, $$props, $$slots) => {
  const destinations = [
    {
      title: "Incredible INDIA",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600&h=400&fit=crop",
      link: "#",
      subtitle: "Explore"
    },
    {
      title: "Thailand",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&h=400&fit=crop",
      link: "#",
      subtitle: "Let's Plan"
    },
    {
      title: "Vietnam",
      image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?q=80&w=600&h=400&fit=crop",
      link: "#",
      subtitle: "Let's Plan"
    },
    {
      title: "Singapore",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=600&h=400&fit=crop",
      link: "#",
      subtitle: "Let's Plan"
    },
    {
      title: "Bali",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&h=400&fit=crop",
      link: "#",
      subtitle: "Let's Plan"
    },
    {
      title: "Dubai",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&h=400&fit=crop",
      link: "#",
      subtitle: "Let's Plan"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="holiday-packages" class="section-pad relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_45%,#fffaf0_100%)]"> <div class="pointer-events-none absolute -left-16 top-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl"></div> <div class="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-accent/25 blur-3xl"></div> <div class="container mx-auto px-4"> <div class="text-center mb-12 max-w-3xl mx-auto relative z-10"> <span class="inline-flex items-center py-2 px-4 rounded-full border border-primary/20 bg-white text-primary font-semibold text-xs tracking-[0.16em] uppercase mb-4">
Holiday Packages
</span> <h2 class="text-4xl md:text-5xl font-display font-bold text-primary-dark tracking-tight leading-tight mb-4">
Explore Curated Holiday Packages
</h2> <p class="text-lg text-slate-600 leading-relaxed">
Handpicked destinations with flexible planning support, clear pricing, and seamless coordination.
</p> </div> <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${destinations.map((dest) => renderTemplate`${renderComponent($$result, "DestinationCard", $$DestinationCard, { ...dest })}`)} </div> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/home/PopularDestinations.astro", void 0);

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      icon: Calendar,
      title: "Tailored Itineraries",
      desc: "Custom travel plans designed around your interests and budget."
    },
    {
      icon: UserCheck,
      title: "Expert Guidance",
      desc: "Local insights and 24/7 support throughout your journey."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      desc: "Verified partners and secure booking processes for peace of mind."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section-pad relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)]"> <div class="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div> <div class="pointer-events-none absolute -right-12 bottom-2 h-56 w-56 rounded-full bg-accent/20 blur-3xl"></div> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> <div class="relative"> <div class="absolute -top-4 -left-4 w-24 h-24 bg-accent/30 rounded-full -z-10 blur-xl"></div> <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&fit=crop" alt="Travel Planning" class="rounded-3xl border border-white/70 shadow-2xl z-10 relative"> <div class="absolute -bottom-8 -right-8 bg-white/95 p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-primary/10 animate-float z-20 backdrop-blur-sm"> <div class="flex items-center gap-4"> <div class="bg-accent/20 p-3 rounded-full text-accent-dark"> ${renderComponent($$result, "Heart", Heart, { "size": 24, "fill": "currentColor" })} </div> <div> <p class="font-bold text-primary-dark">Memorable Trips</p> <p class="text-xs text-slate-500">1000+ Happy Travelers</p> </div> </div> </div> </div> <div class="space-y-8"> <div class="space-y-6"> <h2 class="inline-flex w-max rounded-full border border-primary/20 bg-white px-4 py-2 text-xs md:text-sm text-primary font-bold tracking-[0.14em] uppercase">Why Choose Us</h2> <h3 class="text-4xl md:text-5xl font-display font-bold text-primary-dark tracking-tight leading-tight">Crafting Unforgettable Holiday Experiences</h3> <p class="text-lg md:text-xl text-slate-600 leading-relaxed">
Based in Ernakulam, Kerala, our dedicated team works with trusted travel partners to plan and coordinate exceptional trips, focusing solely on your delightful holiday experience.
</p> </div> <div class="space-y-6"> ${services.map((service) => renderTemplate`<div class="flex items-start gap-4 rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-sm shadow-slate-200/70 transition duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"> <div class="bg-primary/10 p-3 rounded-lg text-primary shrink-0"> ${renderComponent($$result, "service.icon", service.icon, { "size": 24 })} </div> <div> <h4 class="mb-2 font-heading text-xl font-bold text-primary-dark">${service.title}</h4> <p class="text-sm text-slate-600">${service.desc}</p> </div> </div>`)} </div> </div> </div> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/home/WhyChooseUs.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-pad relative overflow-hidden bg-[linear-gradient(180deg,#f4f8ff_0%,#fdf7ea_100%)]"> <div class="pointer-events-none absolute -left-10 top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl"></div> <div class="pointer-events-none absolute -right-10 bottom-8 h-56 w-56 rounded-full bg-accent/25 blur-3xl"></div> <div class="container relative z-10 mx-auto px-4"> <div class="mx-auto mb-16 max-w-3xl text-center"> <h2 class="mb-4 inline-flex rounded-full border border-primary/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">Testimonials</h2> <h3 class="text-4xl font-heading font-bold text-primary-dark md:text-5xl">What Our Travelers Say</h3> <p class="mt-4 text-lg text-slate-600">Real stories from customers who trusted us for visa assistance and holiday planning.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Review 1 --> <div class="rounded-2xl border border-white/70 bg-white/95 p-8 shadow-[0_20px_45px_-28px_rgba(21,69,154,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_52px_-28px_rgba(30,58,109,0.4)]"> <div class="mb-4 flex gap-1 text-accent-dark"> ${"\u2605".repeat(5)} </div> <p class="mb-6 leading-relaxed text-slate-700">
"I had an excellent experience with True Gate Visa. Their tailor made trip to Thailand with private guide was awesome for hassle free family trip."
</p> <div class="flex items-center gap-4"> <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">AK</div> <div> <h5 class="font-bold text-primary-dark">Ajmal Karuthedath</h5> <p class="text-xs text-slate-500">Thailand Trip</p> </div> </div> </div> <!-- Review 2 --> <div class="rounded-2xl border border-white/70 bg-white/95 p-8 shadow-[0_20px_45px_-28px_rgba(21,69,154,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_52px_-28px_rgba(30,58,109,0.4)]"> <div class="mb-4 flex gap-1 text-accent-dark"> ${"\u2605".repeat(5)} </div> <p class="mb-6 leading-relaxed text-slate-700">
"Excellent service! The itinerary was well-planned, the bookings were smooth, and the team was always responsive. Made our trip stress-free."
</p> <div class="flex items-center gap-4"> <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">SN</div> <div> <h5 class="font-bold text-primary-dark">Sana Nasri</h5> <p class="text-xs text-slate-500">Family Vacation</p> </div> </div> </div> <!-- Review 3 --> <div class="rounded-2xl border border-white/70 bg-white/95 p-8 shadow-[0_20px_45px_-28px_rgba(21,69,154,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_52px_-28px_rgba(30,58,109,0.4)]"> <div class="mb-4 flex gap-1 text-accent-dark"> ${"\u2605".repeat(5)} </div> <p class="mb-6 leading-relaxed text-slate-700">
"Very professional approach. They understood exactly what we were looking for and delivered a perfect itinerary within our budget."
</p> <div class="flex items-center gap-4"> <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">RJ</div> <div> <h5 class="font-bold text-primary-dark">Rahul James</h5> <p class="text-xs text-slate-500">Bali Honeymoon</p> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/home/Testimonials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "True Gate Visa - Personalized Travel & Visa Services | Ernakulam, Kerala", "description": "Explore the world with confidence! True Gate Visa offers personalized travel experiences, visa consultancy, and holiday packages for India and international destinations. Contact us in Ernakulam, Kerala.", "keywords": "travel agency kerala, visa consultancy ernakulam, holiday packages india, international travel, explore packages, personalized travel, tour packages kerala, visa services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="relative overflow-x-clip"> <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_12%_18%,rgba(241,199,91,0.3),transparent_42%),radial-gradient(circle_at_88%_4%,rgba(38,99,184,0.2),transparent_38%)]"></div> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "VisaPackages", $$VisaPackages, {})} ${renderComponent($$result2, "PopularDestinations", $$PopularDestinations, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/niveus/visa/src/pages/index.astro", void 0);

const $$file = "C:/Users/niveus/visa/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
