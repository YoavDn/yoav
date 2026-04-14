const site = {
  name: 'Yoav Mendelson',
  title: 'Yoav Mendelson | I Build Things',
  description:
    'I build products and solutions. Currently building postpeer.dev.',
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
