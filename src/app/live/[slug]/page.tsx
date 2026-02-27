import Image from "next/image";
import Link from "next/link";
import { DataStreams } from "../../../../lib/streams";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import PlyrHlsPlayer from "../../../../components/HlsPlayer";
import ClapprPlayer from "../../../../components/ClapprPlayer";
import { BsFacebook, BsTelegram, BsTiktok, BsTwitterX } from "react-icons/bs";
import AlertInfo from "../../../../components/AlertInfo";
import AlertWarning from "../../../../components/AlertWarning";

interface Props {
  params: { slug: string };
}
export async function generateStaticParams() {
  return DataStreams.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = DataStreams.find((e) => e.slug === slug);
  if (!data) return {};
  return {
    title: data.title,
    description: data.excerpt,

    openGraph: {
      type: "article",
      locale: "id_ID",
      url: `https://nontonmotogp.my.id/live/${data.slug}`,
      siteName: "NONTONMotoGP",
      title: data.title,
      description: data.excerpt,
      images: [
        {
          url: data.image || "/og-image.png",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.excerpt,
      images: [data.image || "/og-image.png"],
    },
  };
}
export default async function MotoGP({ params }: Props) {
  const { slug } = await params;
  const data = DataStreams.find((e) => e.slug === slug);
  if (!data) return notFound();

  return (
    <main className="container max-w-3xl mx-auto py-1 mb-20 px-4">
      <div className=" space-y-3">
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>

        <header className="space-y-3">
          <span className="text-sm text-primary font-medium uppercase">
            {data.category}
          </span>

          <h1 className="text-xl sm:text-2xl font-bold mb-5 md:mb-6 leading-tight">
            {data.title}
          </h1>

          <div className="text-sm text-muted-foreground space-x-3">
            <span>{data.author}</span>
            <span>•</span>
            <span>{new Date(data.date).toLocaleDateString()}</span>
          </div>
        </header>
        <AlertInfo message={data.excerpt} title={"PERHATIAN"} />
        <AlertWarning
          message={
            <>
              <div>
                Situs <span className="underline">LIVEMotoGP.COM</span>{" "}
                menggunakan iklan popup.
              </div>
              <div>
                Ingin tanpa iklan? Tonton di
                <span className="underline ml-1">LIVEMotoGP.NET</span>
              </div>
            </>
          }
          title={"PERHATIAN"}
        />

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {data.type === "dash" ? (
            <>
              <ClapprPlayer
                drmId={data.links.id}
                drmKey={data.links.key}
                url={data.links.url}
                poster={data.image}
              />
            </>
          ) : (
            <>
              <PlyrHlsPlayer url={data.links.url} autoPlay={true} />
            </>
          )}
        </div>

        <div className="py-3">
          <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-2">
            <Link
              href="https://welcomingexpulsion.com/pc91vdji?key=26074ca280654af24ec3252d5bef89eb"
              target="_blank"
              className="w-full lg:w-auto"
            >
              <Button className="w-full" variant="destructive">
                SERVER 1
              </Button>
            </Link>

            <Link
              href="https://welcomingexpulsion.com/pc91vdji?key=26074ca280654af24ec3252d5bef89eb"
              target="_blank"
              className="w-full lg:w-auto"
            >
              <Button className="w-full" variant="destructive">
                SERVER 2
              </Button>
            </Link>

            <Link
              href="https://welcomingexpulsion.com/pc91vdji?key=26074ca280654af24ec3252d5bef89eb"
              target="_blank"
              className="w-full lg:w-auto"
            >
              <Button className="w-full" variant="destructive">
                SERVER 3
              </Button>
            </Link>

            <Link
              href="https://welcomingexpulsion.com/pc91vdji?key=26074ca280654af24ec3252d5bef89eb"
              target="_blank"
              className="w-full lg:w-auto"
            >
              <Button className="w-full" variant="destructive">
                SERVER 4
              </Button>
            </Link>
            <Link
              href="https://welcomingexpulsion.com/pc91vdji?key=26074ca280654af24ec3252d5bef89eb"
              target="_blank"
              className="w-full lg:w-auto"
            >
              <Button className="w-full" variant="destructive">
                SERVER 5
              </Button>
            </Link>
            <Link
              href="https://welcomingexpulsion.com/pc91vdji?key=26074ca280654af24ec3252d5bef89eb"
              target="_blank"
              className="w-full lg:w-auto"
            >
              <Button className="w-full" variant="destructive">
                SERVER 6
              </Button>
            </Link>
          </div>
          <div className="py-3">
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-2">
              <Link
                href="https://x.com/nontonmotogp"
                target="_blank"
                className="w-full lg:w-auto"
              >
                <Button
                  className="w-full flex items-center justify-center gap-2"
                  variant="default"
                >
                  <BsTwitterX />
                  Twitter (X)
                </Button>
              </Link>

              <Link
                href="https://t.me/+wz0g7OSf3ic3ODQ1"
                target="_blank"
                className="w-full lg:w-auto"
              >
                <Button
                  className="w-full flex items-center justify-center gap-2"
                  variant="default"
                >
                  <BsTelegram />
                  Telegram
                </Button>
              </Link>
              <Link
                href="https://www.facebook.com/livemotogpnet/"
                target="_blank"
                className="w-full lg:w-auto"
              >
                <Button
                  className="w-full flex items-center justify-center gap-2"
                  variant="default"
                >
                  <BsFacebook />
                  Facebook
                </Button>
              </Link>
              <Link
                href="https://tiktok.com/@livemotogp.net"
                target="_blank"
                className="w-full lg:w-auto"
              >
                <Button
                  className="w-full flex items-center justify-center gap-2"
                  variant="default"
                >
                  <BsTiktok />
                  Tiktok
                </Button>
              </Link>
            </div>
          </div>
          <div className="py-3">
            <Link href="/">
              <Button variant="default">Kembali</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
