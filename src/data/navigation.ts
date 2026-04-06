export interface NavLink {
  href: string;
  label: string;
}

export const desktopNavLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/#visa-packages', label: 'Visa Packages' },
  { href: '/#holiday-packages', label: 'Holiday Packages' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export const mobileNavLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/#visa-packages', label: 'Visa Packages' },
  { href: '/#holiday-packages', label: 'Holiday Packages' },
  { href: '/about', label: 'About' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
];
