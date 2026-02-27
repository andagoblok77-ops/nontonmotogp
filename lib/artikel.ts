export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}



export const articles: Article[] = [
  {
    id: 1,
    title: "Marc Marquez Bangkit dan Menang Dramatis di MotoGP Qatar 2026",
    slug: "marc-marquez-menang-dramatis-motogp-qatar-2026",
    excerpt:
      "Marc Marquez menunjukkan performa luar biasa dengan kemenangan dramatis di MotoGP Qatar 2026 setelah duel sengit hingga lap terakhir bersama Bagnaia.",
    content: `
Marc Marquez membuka musim MotoGP 2026 dengan kemenangan dramatis di Sirkuit Lusail, Qatar. Pembalap Ducati Lenovo Team itu tampil agresif sejak start dan langsung memimpin rombongan depan.

Persaingan sengit terjadi antara Marquez dan Francesco Bagnaia sepanjang balapan. Keduanya saling salip di lima lap terakhir, membuat para penonton tegang hingga garis finis.

Kemenangan ini menjadi sinyal kuat bahwa Marquez kembali dalam performa terbaiknya dan siap berburu gelar dunia musim ini bersama Ducati.
    `,
    image: "/images/1.jpg",
    date: "2026-01-13",
    author: "X",
    category: "Race Report",
  },
  {
    id: 2,
    title: "Francesco Bagnaia Optimis Hadapi Seri Eropa MotoGP 2026",
    slug: "bagnaia-optimis-seri-eropa-motogp-2026",
    excerpt:
      "Francesco Bagnaia percaya diri menghadapi seri Eropa MotoGP 2026 setelah hasil konsisten di tiga balapan pembuka musim ini.",
    content: `
Francesco Bagnaia tampil konsisten dalam tiga seri awal MotoGP 2026. Meski belum meraih kemenangan, ia selalu finis podium dan menjaga peluang di klasemen.

Memasuki seri Eropa, Bagnaia yakin karakter sirkuit seperti Jerez dan Mugello akan lebih cocok dengan gaya balapnya.

Pembalap Italia itu menegaskan Ducati memiliki paket motor yang sangat kompetitif musim ini untuk bersaing memperebutkan gelar.
    `,
    image: "/images/2.jpg",
    date: "2026-01-14",
    author: "X",
    category: "Preview",
  },
  {
    id: 3,
    title: "Yamaha Luncurkan Mesin Baru untuk Paruh Musim 2026",
    slug: "yamaha-luncurkan-mesin-baru-2026",
    excerpt:
      "Yamaha resmi memperkenalkan mesin baru yang diklaim meningkatkan top speed dan akselerasi untuk paruh musim MotoGP 2026.",
    content: `
Yamaha akhirnya menjawab kritik soal kurangnya kecepatan di lintasan lurus dengan meluncurkan mesin terbaru untuk musim 2026.

Pengembangan dilakukan intensif selama musim dingin dan diuji dalam sesi tes privat di Jepang.

Fabio Quartararo menyebut peningkatan ini sangat terasa terutama dalam duel di trek lurus.
    `,
    image: "/images/3.jpg",
    date: "2026-01-20",
    author: "X",
    category: "Technical",
  },
  {
    id: 4,
    title: "Aprilia Tampil Mengejutkan di MotoGP Jerez 2026",
    slug: "aprilia-mengejutkan-motogp-jerez-2026",
    excerpt:
      "Aprilia menunjukkan performa kompetitif di Jerez dengan podium ganda yang mengejutkan rival-rivalnya di MotoGP 2026.",
    content: `
Aprilia Racing tampil impresif di MotoGP Jerez 2026 dengan strategi pit yang cerdas dan kecepatan stabil sepanjang balapan.

Aleix Espargaro sukses finis kedua sementara rekan setimnya meraih posisi ketiga.

Hasil ini mengangkat Aprilia sebagai kandidat kuat penantang Ducati musim ini.
    `,
    image: "/images/4.jpg",
    date: "2026-01-25",
    author: "X",
    category: "Race Report",
  },
  {
    id: 5,
    title: "KTM Siap Tantang Dominasi Ducati di Musim 2026",
    slug: "ktm-siap-tantang-ducati-2026",
    excerpt:
      "KTM menunjukkan perkembangan signifikan dan siap menantang dominasi Ducati dalam perebutan gelar MotoGP 2026.",
    content: `
KTM memperlihatkan peningkatan signifikan pada sektor aerodinamika dan stabilitas motor musim ini.

Brad Binder optimis dengan potensi timnya setelah hasil positif dalam beberapa sesi tes resmi.

Manajemen KTM menargetkan kemenangan reguler sebelum akhir musim.
    `,
    image: "/images/5.jpg",
    date: "2026-01-26",
    author: "X",
    category: "Team News",
  },
  {
    id: 6,
    title: "Duel Sengit Marquez dan Quartararo Warnai MotoGP Mugello",
    slug: "duel-marquez-quartararo-mugello-2026",
    excerpt:
      "MotoGP Mugello 2026 menyajikan duel sengit antara Marc Marquez dan Fabio Quartararo hingga lap terakhir balapan.",
    content: `
Balapan di Mugello menjadi salah satu yang paling menegangkan musim ini.

Marc Marquez dan Fabio Quartararo terlibat duel wheel-to-wheel di lima lap terakhir.

Atmosfer tribun yang penuh penonton Italia menambah dramatis persaingan tersebut.
    `,
    image: "/images/6.jpg",
    date: "2026-01-27",
    author: "X",
    category: "Race Report",
  },
];
