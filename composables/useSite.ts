const site = {
  name: 'Yoav Mendelson',
  title: 'Yoav Mendelson | Web Developer',
  description:
    'A web developer based in Haifa, Israel. Passionate about building beautiful websites and libraries.',
  url: 'https://yoav.vercel.app',
  email: 'yoavdan.m@gmail.com',
  social: {
    github: 'https://github.com/YoavDn',
    linkedin: 'https://www.linkedin.com/in/yoav-mendelson/',
    x: 'https://twitter.com/yoav_mendelson',
  },
} as const

export function useSite() {
  return site
}
