export const VERDIQ_URL = 'https://verdiq-preview.netlify.app/';
export const GITHUB_URL = 'https://github.com/Matthew-Oduamafu';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/matthew-oduamafu/';

/** `hash` links scroll a section on the home page; `to` is a route. */
export const navLinks: { label: string; hash?: string; to?: string }[] = [
  { label: 'About', hash: 'about' },
  { label: 'Projects', hash: 'projects' },
  { label: 'Experience', hash: 'experience' },
  { label: 'Education', hash: 'education' },
  { label: 'Certificates', to: '/certificates' },
  { label: 'Verdiq', hash: 'verdiq' },
  { label: 'Contact', hash: 'contact' },
];
