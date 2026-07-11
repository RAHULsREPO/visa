export interface NavLink {
  href: string;
  label: string;
}

export const desktopNavLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/#visa-services', label: 'Services' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/#success-process', label: 'Process' },
  { href: '/#eligibility-checker', label: 'Eligibility' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export const mobileNavLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/#visa-services', label: 'Services' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/#success-process', label: 'Process' },
  { href: '/#eligibility-checker', label: 'Eligibility' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];
