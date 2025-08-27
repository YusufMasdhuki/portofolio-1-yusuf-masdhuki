interface SocialLinkType {
  href: string;
  icon: string;
  alt: string;
  width: number;
  height: number;
}

export const socialLinks: SocialLinkType[] = [
  {
    href: 'https://www.facebook.com/yusufmasdhuki.dimas',
    icon: '/icons/fb-icon.svg',
    alt: 'Facebook',
    width: 13,
    height: 24,
  },
  {
    href: 'https://www.instagram.com/yusuf_masdhuki/?__pwa=1',
    icon: '/icons/ig-icon.svg',
    alt: 'Instagram',
    width: 24,
    height: 24,
  },
  {
    href: 'https://www.linkedin.com/in/yusuf-masdhuki-123127380',
    icon: '/icons/linkedIn-icon.svg',
    alt: 'LinkedIn',
    width: 20,
    height: 20,
  },
  {
    href: 'https://www.tiktok.com/@yusuf_masdhuki',
    icon: '/icons/tiktok-icon.svg',
    alt: 'TikTok',
    width: 21,
    height: 24,
  },
];
