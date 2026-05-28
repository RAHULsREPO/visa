export interface NavLink {
  href: string;
  label: string;
}

export const desktopNavLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/#visa-services', label: 'Visa Services' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/#success-process', label: 'Success Process' },
  { href: '/#eligibility-checker', label: 'Eligibility Assessment' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export const mobileNavLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/#visa-services', label: 'Visa Services' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/#success-process', label: 'Success Process' },
  { href: '/#eligibility-checker', label: 'Eligibility Assessment' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];
