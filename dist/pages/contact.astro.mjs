import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_B-x0EIGv.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_CGewuf9t.mjs';
import 'clsx';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$ContactHero = createComponent(($$result, $$props, $$slots) => {
  const heroImages = [
    "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative section-pad min-h-[420px] overflow-hidden text-white"> <!-- Background Image Carousel --> <div class="absolute inset-0 z-0" data-auto-carousel data-interval="5000"> ${heroImages.map((image, index) => renderTemplate`<img${addAttribute(image, "src")}${addAttribute(`Contact ${index + 1}`, "alt")}${addAttribute(`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === 0 ? "opacity-100" : "opacity-0"}`, "class")} data-carousel-slide>`)} <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div> </div> <div class="container relative z-10 mx-auto px-4 text-center space-y-6 max-w-4xl"> <span class="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold tracking-widest uppercase">
Get In Touch
</span> <h1 class="hero-headline drop-shadow-2xl">Contact Us</h1> <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
Ready to start your journey? We're here to help plan your perfect trip.
</p> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/contact/ContactHero.astro", void 0);

const $$ContactDetails = createComponent(($$result, $$props, $$slots) => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "6th Floor, Kandamkulathy Towers, Mahatma Gandhi Rd, KPCC Junction, Opp Maharaja's Ground, Shenoys, Ernakulam, Kerala 682011",
      link: "https://maps.app.goo.gl/9dZ9HZfuAmjhMDeaA"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@truegatevisa.com",
      link: "mailto:info@truegatevisa.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 97204 09020",
      link: "tel:+919720409020"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
      link: null
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="space-y-8"> <div class="space-y-4"> <h2 class="text-3xl font-heading font-bold text-primary">Get in Touch</h2> <p class="text-slate-600">Have questions about a package? Want a custom itinerary? Reach out to us directly or fill the form.</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"> ${contactInfo.map((info) => renderTemplate`<div class="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100"> <div class="bg-white p-3 rounded-lg text-accent shadow-sm shrink-0"> ${renderComponent($$result, "info.icon", info.icon, { "size": 24 })} </div> <div> <h4 class="font-bold text-primary mb-1">${info.title}</h4> ${info.link ? renderTemplate`<a${addAttribute(info.link, "href")}${addAttribute(info.link.startsWith("http") ? "_blank" : "_self", "target")} class="text-sm text-slate-600 hover:text-accent transition-colors block"> ${info.content} </a>` : renderTemplate`<p class="text-sm text-slate-600">${info.content}</p>`} </div> </div>`)} </div> </div>`;
}, "C:/Users/niveus/visa/src/components/contact/ContactDetails.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="surface-card p-8"> <h3 class="text-2xl font-bold text-primary mb-6">Send us a Message</h3> <form class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="space-y-2"> <label for="name" class="text-sm font-bold text-slate-700">Name</label> <input type="text" id="name" class="form-control" placeholder="Your Name"> </div> <div class="space-y-2"> <label for="email" class="text-sm font-bold text-slate-700">Email</label> <input type="email" id="email" class="form-control" placeholder="your@email.com"> </div> </div> <div class="space-y-2"> <label for="subject" class="text-sm font-bold text-slate-700">Subject</label> <select id="subject" class="form-control"> <option>General Inquiry</option> <option>Book a Package</option> <option>Custom Itinerary</option> <option>Support</option> </select> </div> <div class="space-y-2"> <label for="message" class="text-sm font-bold text-slate-700">Message</label> <textarea id="message" rows="4" class="form-control" placeholder="How can we help you?"></textarea> </div> <button type="submit" class="btn-primary w-full rounded-xl py-4 group">
Send Message
${renderComponent($$result, "Send", Send, { "size": 18, "className": "group-hover:translate-x-1 transition-transform" })} </button> </form> </div>`;
}, "C:/Users/niveus/visa/src/components/contact/ContactForm.astro", void 0);

const $$GoogleMap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"> <!-- Background decoration --> <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div> <div class="container mx-auto px-4 relative"> <!-- Header --> <div class="text-center mb-12 max-w-3xl mx-auto"> <div class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wider uppercase mb-4"> ${renderComponent($$result, "MapPin", MapPin, { "size": 18 })} <span>Find Us</span> </div> <h2 class="text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight mb-4">Visit Our Office</h2> <p class="text-lg text-slate-600 leading-relaxed">Conveniently located in the heart of Ernakulam, Kerala</p> </div> <!-- Map Container --> <div class="max-w-5xl mx-auto"> <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group"> <!-- Map iframe --> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2!2d76.2673!3d9.9312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnNTIuMyJOIDc2wrAxNicwMi4zIkU!5e0!3m2!1sen!2sin!4v1234567890" class="w-full h-[400px] md:h-[500px]" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> <!-- Overlay gradient on hover --> <div class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div> </div> <!-- CTA Button --> <div class="text-center mt-8"> <a href="https://www.google.com/maps/dir//9.9312,76.2673" target="_blank" class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"> ${renderComponent($$result, "MapPin", MapPin, { "size": 20 })} <span>Get Directions</span> </a> </div> </div> </div> </section>`;
}, "C:/Users/niveus/visa/src/components/contact/GoogleMap.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact True Gate Visa - Travel Agency in Ernakulam, Kerala", "description": "Get in touch with True Gate Visa for personalized travel planning and visa assistance. Visit our office in Ernakulam, Kerala or call +91-9720409020. We're here to help plan your perfect trip!", "keywords": "contact true gate visa, travel agency ernakulam, kerala travel contact, visa consultancy contact, plan your trip, ernakulam office" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "ContactHero", $$ContactHero, {})} <section class="py-20 bg-white"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> ${renderComponent($$result2, "ContactDetails", $$ContactDetails, {})} ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </div> </section> ${renderComponent($$result2, "GoogleMap", $$GoogleMap, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/niveus/visa/src/pages/contact.astro", void 0);

const $$file = "C:/Users/niveus/visa/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
