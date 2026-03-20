export interface Streams {
  id: number;
  title: string;
  slug: string;
  links: {
    url: string;
    key: string;
    id: string;
  };
  type: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const DataStreams: Streams[] = [
  {
    id: 1,
    title: "Live Streaming MotoGP - SPOTV 2",
    slug: "live-streaming-motogp-spotv-2",
    type: "dash",
    links: {
      id: "1539f043249e413d91906036f305831e",
      key: "671e24fd8d234c7f38d85055815f902a",
      url: "https://cors-proxy.wangzhishi.net/https://fta2-cdn-flr.visionplus.id/out/v1/46d9cf39b9a84183b8d5022ac8f4bc41/index.mpd",
    },
    excerpt:
      "Situs ini menyediakan Links Streaming MotoGP 2026 Gratis dengan dukungan iklan pop-up. Ingin pengalaman tanpa iklan yang mengganggu? Kunjungi https://www.livemotogp.net untuk streaming lebih nyaman.",
    image: "/images/image.jpg",
    date: "2026-01-13",
    author: "X",
    category: "Live MotoGP",
  },
  {
    id: 2,
    title: "Live Streaming MotoGP",
    slug: "live-streaming-motogp",
    type: "hls",
    links: {
      id: "",
      key: "",
      url: "https://s1.strea.ru/index.m3u8",
    },
    excerpt:
      "Situs ini menyediakan Links Streaming MotoGP 2026 Gratis dengan dukungan iklan pop-up. Ingin pengalaman tanpa iklan yang mengganggu? Kunjungi https://www.livemotogp.net untuk streaming lebih nyaman.",
    image: "/images/image.jpg",
    date: "2026-01-13",
    author: "X",
    category: "Live MotoGP",
  },
  {
    id: 3,
    title: "Live Streaming MotoGP - SPOTV 2 ID",
    slug: "live-streaming-motogp-spotv-2-id",
    type: "dash",
    links: {
      id: "3197f7f5086c4315af2b7a94bc9201cb",
      key: "17462a74739ae0d9855705ffc2c0e1b5",
      url: "https://cors-proxy.wangzhishi.net/https://fta3-cdn-flr.visionplus.id/out/v1/b4814ae93ca84dd3bb5b0aff76ca263f/index.mpd",
    },
    excerpt:
      "Situs ini menyediakan Links Streaming MotoGP 2026 Gratis dengan dukungan iklan pop-up. Ingin pengalaman tanpa iklan yang mengganggu? Kunjungi https://www.livemotogp.net untuk streaming lebih nyaman.",
    image: "/images/image.jpg",
    date: "2026-01-13",
    author: "X",
    category: "Live MotoGP",
  },
  {
    id: 4,
    title: "Live Streaming MotoGP - SPOTV",
    slug: "live-streaming-motogp-spotv",
    type: "dash",
    links: {
      id: "ec7ee27d83764e4b845c48cca31c8eef",
      key: "9c0e4191203fccb0fde34ee29999129e",
      url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd",
    },
    excerpt:
      "Situs ini menyediakan Links Streaming MotoGP 2026 Gratis dengan dukungan iklan pop-up. Ingin pengalaman tanpa iklan yang mengganggu? Kunjungi https://www.livemotogp.net untuk streaming lebih nyaman.",
    image: "/images/image.jpg",
    date: "2026-01-13",
    author: "X",
    category: "Live MotoGP",
  },
  {
    id: 5,
    title: "Live Streaming MotoGP - SPOTV ID",
    slug: "live-streaming-motogp-spotv-id",
    type: "dash",
    links: {
      id: "7eea72d6075245a99ee3255603d58853",
      key: "6848ef60575579bf4d415db1032153ed",
      url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd",
    },
    excerpt:
      "Situs ini menyediakan Links Streaming MotoGP 2026 Gratis dengan dukungan iklan pop-up. Ingin pengalaman tanpa iklan yang mengganggu? Kunjungi https://www.livemotogp.net untuk streaming lebih nyaman.",
    image: "/images/image.jpg",
    date: "2026-01-13",
    author: "X",
    category: "Live MotoGP",
  },
  {
    id: 6,
    title: "Live Streaming WSBK",
    slug: "live-streaming-wsbk",
    type: "hls",
    links: {
      id: "",
      key: "",
      url: "https://s1.strea.ru/index.m3u8",
    },
    excerpt:
      "Situs ini menyediakan Links Streaming MotoGP 2026 Gratis dengan dukungan iklan pop-up. Ingin pengalaman tanpa iklan yang mengganggu? Kunjungi https://www.livemotogp.net untuk streaming lebih nyaman.",
    image: "/images/image.jpg",
    date: "2026-01-13",
    author: "X",
    category: "Live WSBK",
  },
];
