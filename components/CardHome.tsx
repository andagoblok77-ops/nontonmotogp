"use client";

import Image from "next/image";
import Link from "next/link";
// import { articles } from "../lib/artikel";
import { DataStreams } from "../lib/streams";
import { PlaySquareIcon } from "lucide-react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function CardHome() {
  return (
    <main className="container max-w-5xl mx-auto py-12 px-2">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl font-bold mb-5 md:mb-6 leading-tight flex gap-0.5 sm:gap-1 items-center"
      >
        <PlaySquareIcon /> MotoGP Live Streaming
      </motion.h1>

      <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
        {DataStreams.map((article, index) => (
          <MotionLink
            key={article.id}
            href={`/live/${article.slug}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.3,
              ease: "easeOut",
            }}
            className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border"
          >
            <div className="relative aspect-video">
              <div className="relative w-full aspect-[4/3] sm:aspect-video">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 50vw,
           (max-width: 1024px) 50vw,
           33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="p-4 space-y-2">
              <span className="text-[10px] md:text-xs text-primary font-medium uppercase tracking-wide">
                {article.category}
              </span>

              <h2 className="text-sm md:text-base font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h2>

              <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                {article.excerpt}
              </p>

              <p className="text-[10px] text-muted-foreground">
                {new Date(article.date).toLocaleDateString("id-ID")}
              </p>
            </div>
          </MotionLink>
        ))}
      </div>
    </main>
  );
}
