import { articles } from "../../../../lib/artikel";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetail({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <main className="container max-w-5xl mx-auto py-12 mb-20 px-10">
      <article className="space-y-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <header className="space-y-3">
          <span className="text-sm text-primary font-medium uppercase">
            {article.category}
          </span>

          <h1 className="text-4xl font-bold leading-tight">{article.title}</h1>

          <div className="text-sm text-muted-foreground space-x-3">
            <span>{article.author}</span>
            <span>•</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {article.content
            .split("\n")
            .map((paragraph, i) =>
              paragraph.trim() ? <p key={i}>{paragraph}</p> : null,
            )}
        </div>
      </article>
    </main>
  );
}
