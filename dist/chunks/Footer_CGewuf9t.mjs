import { d as createAstro, c as createComponent, a as addAttribute, r as renderTemplate, u as unescapeHTML, e as renderSlot, f as renderHead, b as renderComponent, m as maybeRenderHead } from './astro/server_B-x0EIGv.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';
import { Phone } from 'lucide-react';

const $$Astro$2 = createAstro("https://truegatevisa.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  const { title, description, keywords, ogImage, canonicalURL } = Astro2.props;
  const siteUrl = "https://truegatevisa.com";
  const brandName = "True Gate Visa";
  const normalizedTitle = title.trim();
  const fullTitle = normalizedTitle.toLowerCase().includes(brandName.toLowerCase()) ? normalizedTitle : `${normalizedTitle} | ${brandName}`;
  const defaultOgImage = `${siteUrl}/assets/images/brand-og-image.jpeg`;
  const resolvedCanonical = canonicalURL ? new URL(canonicalURL, siteUrl).toString() : new URL(Astro2.url.pathname, siteUrl).toString();
  const resolvedOgImage = ogImage ? new URL(ogImage, siteUrl).toString() : defaultOgImage;
  return renderTemplate`<!-- Primary Meta Tags --><title>${fullTitle}</title><meta name="title"${addAttribute(fullTitle, "content")}><meta name="description"${addAttribute(description, "content")}>${keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`}<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><meta name="language" content="English"><meta name="author"${addAttribute(brandName, "content")}><meta name="theme-color" content="#1d4ed8"><meta name="format-detection" content="telephone=no"><!-- Canonical URL --><link rel="canonical"${addAttribute(resolvedCanonical, "href")}><link rel="alternate" hreflang="en-IN"${addAttribute(resolvedCanonical, "href")}><link rel="alternate" hreflang="x-default"${addAttribute(resolvedCanonical, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(resolvedCanonical, "content")}><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(resolvedOgImage, "content")}><meta property="og:image:alt" content="True Gate Visa travel and visa services"><meta property="og:site_name"${addAttribute(brandName, "content")}><meta property="og:locale" content="en_US"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(resolvedCanonical, "content")}><meta property="twitter:title"${addAttribute(fullTitle, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(resolvedOgImage, "content")}><meta property="twitter:image:alt" content="True Gate Visa travel and visa services"><!-- Geo Tags for Local SEO --><meta name="geo.region" content="IN-KL"><meta name="geo.placename" content="Ernakulam"><meta name="geo.position" content="9.9312;76.2673"><meta name="ICBM" content="9.9312, 76.2673">`;
}, "C:/Users/niveus/visa/src/components/common/SEO.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$StructuredData = createComponent(($$result, $$props, $$slots) => {
  const siteUrl = "https://truegatevisa.com";
  const businessName = "True Gate Visa";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": businessName,
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/logo.svg`
        },
        "image": `${siteUrl}/assets/images/brand-og-image.jpeg`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9720409020",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi"]
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ernakulam",
          "addressRegion": "Kerala",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://wa.me/919720409020"
        ]
      },
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": `${siteUrl}/#travelagency`,
        "name": businessName,
        "description": "Trusted visa consultancy and travel partner, making global journeys effortless",
        "url": siteUrl,
        "email": "info@truegatevisa.com",
        "telephone": "+91-9720409020",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ernakulam",
          "addressRegion": "Kerala",
          "postalCode": "682011",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "hasMap": "https://maps.app.goo.gl/9dZ9HZfuAmjhMDeaA",
        "sameAs": [
          "https://wa.me/919720409020"
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "9.9312",
          "longitude": "76.2673"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": businessName,
        "description": "Professional visa consultancy and personalized travel experiences",
        "publisher": {
          "@id": `${siteUrl}/#organization`
        }
      }
    ]
  };
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)));
}, "C:/Users/niveus/visa/src/components/common/StructuredData.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://truegatevisa.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "True Gate Visa - Personalized Travel Experiences in India and Internationally",
    keywords,
    ogImage
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/logo.svg"><meta name="generator"', `><link rel="preconnect" href="https://www.googletagmanager.com"><link rel="preconnect" href="https://www.google-analytics.com"><script async src="https://www.googletagmanager.com/gtag/js?id=AW-18048397050"><\/script><script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'AW-18048397050');
		<\/script><script>
			document.addEventListener('DOMContentLoaded', () => {
				const carousels = document.querySelectorAll('[data-auto-carousel]');
				const cleanupFns = [];

				carousels.forEach(carousel => {
					const slides = carousel.querySelectorAll('[data-carousel-slide]');
					if (slides.length < 2) {
						return;
					}

					let currentSlide = 0;
					const intervalMs = Number(carousel.getAttribute('data-interval') || '5000');

					const nextSlide = () => {
						slides[currentSlide].classList.remove('opacity-100');
						slides[currentSlide].classList.add('opacity-0');
						currentSlide = (currentSlide + 1) % slides.length;
						slides[currentSlide].classList.remove('opacity-0');
						slides[currentSlide].classList.add('opacity-100');
					};

					const timerId = setInterval(nextSlide, intervalMs);
					cleanupFns.push(() => clearInterval(timerId));
				});

				window.addEventListener(
					'pagehide',
					() => {
						cleanupFns.forEach(cleanup => cleanup());
					},
					{ once: true }
				);
			});
		<\/script>`, "", "", '</head> <body class="text-slate-900 font-sans antialiased selection:bg-accent selection:text-slate-900 overflow-x-hidden"> ', " </body></html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "keywords": keywords, "ogImage": ogImage }), renderComponent($$result, "StructuredData", $$StructuredData, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/niveus/visa/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://truegatevisa.com");
const $$DesktopNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DesktopNav;
  const currentPath = Astro2.url.pathname;
  const isActive = (path) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#visa-packages", label: "Visa Packages" },
    { href: "/#holiday-packages", label: "Holiday Packages" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="hidden md:flex items-center gap-8"> ${navLinks.map((link) => {
    const isAnchorLink = link.href.includes("#");
    const active = isAnchorLink ? false : isActive(link.href);
    return renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`relative pb-1 text-base font-semibold transition-all duration-300 focus-visible:rounded-sm ${active ? "text-accent after:w-full" : "text-slate-700 hover:text-accent after:w-0"} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full`, "class")}> ${link.label} </a>`;
  })} </nav>`;
}, "C:/Users/niveus/visa/src/components/common/DesktopNav.astro", void 0);

const $$DesktopCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hidden md:flex items-center gap-4"> <a href="https://wa.me/919720409020" target="_blank" rel="noopener noreferrer" class="btn-primary text-sm animate-pulse-slow"> ${renderComponent($$result, "Phone", Phone, { "size": 16 })} <span>Start a Chat</span> </a> </div>`;
}, "C:/Users/niveus/visa/src/components/common/DesktopCTA.astro", void 0);

const $$MobileMenuButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="md:hidden text-primary p-2 flex-shrink-0" id="menu-toggle" aria-label="Toggle menu" aria-controls="mobile-menu" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg> </button>`;
}, "C:/Users/niveus/visa/src/components/common/MobileMenuButton.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- Mobile Menu Overlay -->", `<div id="mobile-menu" class="fixed inset-0 z-50 invisible opacity-0 transition-all duration-300 md:hidden" style="pointer-events: none;"> <!-- Backdrop with Blur --> <div class="absolute inset-0 bg-black/40 backdrop-blur-md" id="menu-backdrop" style="pointer-events: auto;"></div> <!-- Sidebar with Glassmorphism --> <div class="absolute top-0 right-0 h-screen w-72 max-w-[80vw] bg-white/95 backdrop-blur-xl shadow-2xl transform translate-x-full transition-transform duration-300" id="menu-sidebar" style="pointer-events: auto;"> <div class="flex flex-col h-full justify-between"> <!-- Mobile Header --> <div class="flex items-center justify-between px-6 py-5 border-b border-slate-200/50"> <img src="/logo.svg" alt="True Gate Visa" class="h-10 w-auto"> <button id="menu-close" class="text-slate-600 hover:text-primary p-2 -mr-2 transition-colors" aria-label="Close menu"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg> </button> </div> <!-- Mobile Navigation Links --> <div class="flex-1 overflow-y-auto px-4 py-6"> <a href="/" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">Home</a> <a href="/#visa-packages" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">Visa Packages</a> <a href="/#holiday-packages" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">Holiday Packages</a> <a href="/about" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">About</a> <a href="/destinations" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">Destinations</a> <a href="/services" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">Services</a> <a href="/contact" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">Contact</a> </div> <!-- Mobile CTA --> <div class="px-6 py-5 border-t border-slate-200/50"> <a href="https://wa.me/919720409020" target="_blank" rel="noopener noreferrer" class="btn-primary w-full"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> <span>Start a Chat</span> </a> </div> </div> </div> </div> <script>
	document.addEventListener('DOMContentLoaded', () => {
		const menuToggle = document.getElementById('menu-toggle');
		const menuClose = document.getElementById('menu-close');
		const mobileMenu = document.getElementById('mobile-menu');
		const menuSidebar = document.getElementById('menu-sidebar');
		const menuBackdrop = document.getElementById('menu-backdrop');
		let savedScrollY = 0;

		// Clean up any residual styles on page load
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.left = '';
		document.body.style.right = '';
		if (menuToggle) {
			menuToggle.setAttribute('aria-expanded', 'false');
		}

		function lockBodyScroll() {
			savedScrollY = window.scrollY;
			document.body.style.position = 'fixed';
			document.body.style.top = \`-\${savedScrollY}px\`;
			document.body.style.left = '0';
			document.body.style.right = '0';
		}

		function unlockBodyScroll() {
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.left = '';
			document.body.style.right = '';
			window.scrollTo(0, savedScrollY);
		}

		function isMenuOpen() {
			return mobileMenu?.classList.contains('visible') ?? false;
		}

		function openMenu() {
			if (mobileMenu && menuSidebar) {
				lockBodyScroll();
				
				// Make overlay visible
				mobileMenu.classList.remove('invisible', 'opacity-0');
				mobileMenu.classList.add('visible', 'opacity-100');
				if (menuToggle) {
					menuToggle.setAttribute('aria-expanded', 'true');
				}
				
				// Slide sidebar in after a tiny delay for smooth animation
				setTimeout(() => {
					menuSidebar.classList.remove('translate-x-full');
					menuSidebar.classList.add('translate-x-0');
				}, 50);
			}
		}

		function closeMenu() {
			if (mobileMenu && menuSidebar) {
				unlockBodyScroll();
				
				// Slide sidebar out
				menuSidebar.classList.remove('translate-x-0');
				menuSidebar.classList.add('translate-x-full');
				if (menuToggle) {
					menuToggle.setAttribute('aria-expanded', 'false');
				}
				
				// Hide overlay after sidebar animation completes
				setTimeout(() => {
					mobileMenu.classList.remove('visible', 'opacity-100');
					mobileMenu.classList.add('invisible', 'opacity-0');
				}, 300);
			}
		}

		// Open menu
		if (menuToggle) {
			menuToggle.addEventListener('click', openMenu);
		}

		// Close menu button
		if (menuClose) {
			menuClose.addEventListener('click', closeMenu);
		}

		// Close on backdrop click
		if (menuBackdrop) {
			menuBackdrop.addEventListener('click', closeMenu);
		}

		// Close when clicking nav links
		if (mobileMenu) {
			const navLinks = mobileMenu.querySelectorAll('a');
			navLinks.forEach(link => {
				link.addEventListener('click', closeMenu);
			});
		}

		// Close when Escape is pressed
		document.addEventListener('keydown', event => {
			if (event.key === 'Escape' && isMenuOpen()) {
				closeMenu();
			}
		});

		// Close if viewport switches to desktop breakpoint
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 768 && isMenuOpen()) {
				closeMenu();
			}
		});
	});
<\/script>`], ["<!-- Mobile Menu Overlay -->", `<div id="mobile-menu" class="fixed inset-0 z-50 invisible opacity-0 transition-all duration-300 md:hidden" style="pointer-events: none;"> <!-- Backdrop with Blur --> <div class="absolute inset-0 bg-black/40 backdrop-blur-md" id="menu-backdrop" style="pointer-events: auto;"></div> <!-- Sidebar with Glassmorphism --> <div class="absolute top-0 right-0 h-screen w-72 max-w-[80vw] bg-white/95 backdrop-blur-xl shadow-2xl transform translate-x-full transition-transform duration-300" id="menu-sidebar" style="pointer-events: auto;"> <div class="flex flex-col h-full justify-between"> <!-- Mobile Header --> <div class="flex items-center justify-between px-6 py-5 border-b border-slate-200/50"> <img src="/logo.svg" alt="True Gate Visa" class="h-10 w-auto"> <button id="menu-close" class="text-slate-600 hover:text-primary p-2 -mr-2 transition-colors" aria-label="Close menu"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg> </button> </div> <!-- Mobile Navigation Links --> <div class="flex-1 overflow-y-auto px-4 py-6"> <a href="/" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">Home</a> <a href="/#visa-packages" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">Visa Packages</a> <a href="/#holiday-packages" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">Holiday Packages</a> <a href="/about" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">About</a> <a href="/destinations" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">Destinations</a> <a href="/services" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">Services</a> <a href="/contact" class="block rounded py-3 px-3 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:bg-slate-100">Contact</a> </div> <!-- Mobile CTA --> <div class="px-6 py-5 border-t border-slate-200/50"> <a href="https://wa.me/919720409020" target="_blank" rel="noopener noreferrer" class="btn-primary w-full"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> <span>Start a Chat</span> </a> </div> </div> </div> </div> <script>
	document.addEventListener('DOMContentLoaded', () => {
		const menuToggle = document.getElementById('menu-toggle');
		const menuClose = document.getElementById('menu-close');
		const mobileMenu = document.getElementById('mobile-menu');
		const menuSidebar = document.getElementById('menu-sidebar');
		const menuBackdrop = document.getElementById('menu-backdrop');
		let savedScrollY = 0;

		// Clean up any residual styles on page load
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.left = '';
		document.body.style.right = '';
		if (menuToggle) {
			menuToggle.setAttribute('aria-expanded', 'false');
		}

		function lockBodyScroll() {
			savedScrollY = window.scrollY;
			document.body.style.position = 'fixed';
			document.body.style.top = \\\`-\\\${savedScrollY}px\\\`;
			document.body.style.left = '0';
			document.body.style.right = '0';
		}

		function unlockBodyScroll() {
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.left = '';
			document.body.style.right = '';
			window.scrollTo(0, savedScrollY);
		}

		function isMenuOpen() {
			return mobileMenu?.classList.contains('visible') ?? false;
		}

		function openMenu() {
			if (mobileMenu && menuSidebar) {
				lockBodyScroll();
				
				// Make overlay visible
				mobileMenu.classList.remove('invisible', 'opacity-0');
				mobileMenu.classList.add('visible', 'opacity-100');
				if (menuToggle) {
					menuToggle.setAttribute('aria-expanded', 'true');
				}
				
				// Slide sidebar in after a tiny delay for smooth animation
				setTimeout(() => {
					menuSidebar.classList.remove('translate-x-full');
					menuSidebar.classList.add('translate-x-0');
				}, 50);
			}
		}

		function closeMenu() {
			if (mobileMenu && menuSidebar) {
				unlockBodyScroll();
				
				// Slide sidebar out
				menuSidebar.classList.remove('translate-x-0');
				menuSidebar.classList.add('translate-x-full');
				if (menuToggle) {
					menuToggle.setAttribute('aria-expanded', 'false');
				}
				
				// Hide overlay after sidebar animation completes
				setTimeout(() => {
					mobileMenu.classList.remove('visible', 'opacity-100');
					mobileMenu.classList.add('invisible', 'opacity-0');
				}, 300);
			}
		}

		// Open menu
		if (menuToggle) {
			menuToggle.addEventListener('click', openMenu);
		}

		// Close menu button
		if (menuClose) {
			menuClose.addEventListener('click', closeMenu);
		}

		// Close on backdrop click
		if (menuBackdrop) {
			menuBackdrop.addEventListener('click', closeMenu);
		}

		// Close when clicking nav links
		if (mobileMenu) {
			const navLinks = mobileMenu.querySelectorAll('a');
			navLinks.forEach(link => {
				link.addEventListener('click', closeMenu);
			});
		}

		// Close when Escape is pressed
		document.addEventListener('keydown', event => {
			if (event.key === 'Escape' && isMenuOpen()) {
				closeMenu();
			}
		});

		// Close if viewport switches to desktop breakpoint
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 768 && isMenuOpen()) {
				closeMenu();
			}
		});
	});
<\/script>`])), maybeRenderHead());
}, "C:/Users/niveus/visa/src/components/common/MobileMenu.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-[9999] bg-white/92 backdrop-blur-lg border-b border-primary/10 transition-all duration-300 shadow-sm"> <div class="container mx-auto px-4 h-20 flex items-center justify-between"> <!-- Logo --> <a href="/" class="flex items-center group flex-shrink-0"> <img src="/logo.svg" alt="True Gate Visa" class="h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"> </a> <!-- Desktop Nav --> ${renderComponent($$result, "DesktopNav", $$DesktopNav, {})} <!-- Desktop CTA --> ${renderComponent($$result, "DesktopCTA", $$DesktopCTA, {})} <!-- Mobile Menu Button --> ${renderComponent($$result, "MobileMenuButton", $$MobileMenuButton, {})} </div> <!-- Mobile Menu --> ${renderComponent($$result, "MobileMenu", $$MobileMenu, {})} </header>`;
}, "C:/Users/niveus/visa/src/components/common/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white border-t border-slate-200 text-primary pt-16 pb-8"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"> <!-- Brand --> <div class="space-y-4"> <a href="/"> <img src="/logo.svg" alt="True Gate Visa" class="h-14 w-auto"> </a> <p class="text-slate-600 text-sm leading-relaxed">
Crafting unforgettable journeys with personalized planning and exceptional customer service for every traveler.
</p> </div> <!-- Links --> <div> <h4 class="text-lg font-heading font-bold mb-6">Explore</h4> <ul class="space-y-3 text-sm text-slate-500"> <li><a href="/about" class="hover:text-accent transition-colors">About Us</a></li> <li><a href="/destinations" class="hover:text-accent transition-colors">Destinations</a></li> <li><a href="/services" class="hover:text-accent transition-colors">Services</a></li> <li><a href="/contact" class="hover:text-accent transition-colors">Contact</a></li> </ul> </div> <!-- Contact --> <div> <h4 class="text-lg font-heading font-bold mb-6">Contact</h4> <ul class="space-y-3 text-sm text-slate-500"> <li> <a href="https://maps.app.goo.gl/9dZ9HZfuAmjhMDeaA" target="_blank" rel="noopener noreferrer" class="hover:text-accent transition-colors">
Ernakulam, Kerala 682011
</a> </li> <li><a href="mailto:info@truegatevisa.com" class="hover:text-accent transition-colors">info@truegatevisa.com</a></li> <li><a href="tel:+919720409020" class="hover:text-accent transition-colors">+91 97204 09020</a></li> </ul> </div> <!-- Newsletter/Social --> <div> <h4 class="text-lg font-heading font-bold mb-6">Follow Us</h4> <div class="flex flex-wrap gap-3"> <a href="https://wa.me/919720409020" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-accent hover:text-accent transition-colors"> <span>WhatsApp</span> </a> <a href="mailto:info@truegatevisa.com" class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-accent hover:text-accent transition-colors"> <span>Email</span> </a> <a href="https://maps.app.goo.gl/9dZ9HZfuAmjhMDeaA" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-accent hover:text-accent transition-colors"> <span>Location</span> </a> </div> </div> </div> <div class="border-t border-slate-200 pt-8 text-center text-xs text-slate-500"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} True Gate Visa. All rights reserved.</p> </div> </div> </footer>`;
}, "C:/Users/niveus/visa/src/components/common/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b };
