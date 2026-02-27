import CardHome from "../../components/CardHome";
import { CarouselSize } from "../../components/Carousel";

export default function Home() {
  const images = [
    {
      img: "/images/1.jpg",
      title: "Live Streaming MotoGP",
      link: "https://www.zvstreams.com/search/label/Live%20MotoGP",
    },
    {
      img: "/images/2.jpg",
      title: "Live Streaming MotoGP",
      link: "https://www.zvstreams.com/search/label/Live%20MotoGP",
    },
    {
      img: "/images/3.jpg",
      title: "Live Streaming MotoGP",
      link: "https://www.zvstreams.com/search/label/Live%20MotoGP",
    },
    {
      img: "/images/4.jpg",
      title: "Live Streaming MotoGP",
      link: "https://www.zvstreams.com/search/label/Live%20MotoGP",
    },
    {
      img: "/images/5.jpg",
      title: "Live Streaming MotoGP",
      link: "https://www.zvstreams.com/search/label/Live%20MotoGP",
    },
    {
      img: "/images/6.jpg",
      title: "Live Streaming MotoGP",
      link: "https://www.zvstreams.com/search/label/Live%20MotoGP",
    },
  ];
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-neutral-950">
      <main className="flex min-h-screen  w-full max-w-4xl flex-col items-center justify-between py-1 px-1 bg-white dark:bg-neutral-950 sm:items-start">
        <CarouselSize images={images} />
        <CardHome />
      </main>
    </div>
  );
}
