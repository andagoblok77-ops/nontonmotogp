import Link from "next/link";
import React from "react";
import {
  BsChat,
  BsFacebook,
  BsLink,
  BsTelegram,
  BsTiktok,
  BsTwitterX,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black text-gray-700 dark:text-gray-400 transition-colors duration-300">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-lg md:text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            LIVEMotoGP.NET
          </div>
          <p className="text-sm md:text-base leading-relaxed">
            LIVE MotoGP NET/Live MotoGP Com adalah situs untuk nonton live
            streaming MotoGP/WSBK gratis full session. <br />
            Live MotoGP Net is a site for watching MotoGP/WSBK live streaming
            for free, full session.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm font-medium">
          <FooterLink href="https://t.me/+wz0g7OSf3ic3ODQ1">
            <BsTelegram /> Telegram
          </FooterLink>

          <FooterLink href="https://x.com/nontonmotogp">
            <BsTwitterX /> Twitter (X)
          </FooterLink>

          <FooterLink href="https://www.facebook.com/livemotogpnet/">
            <BsFacebook /> Facebook
          </FooterLink>

          <FooterLink href="https://tiktok.com/@livemotogp.net">
            <BsTiktok /> TikTok
          </FooterLink>

          <FooterLink href="https://www.zvstreams.com/search/label/Live%20MotoGP">
            <BsChat /> Kontak
          </FooterLink>

          <FooterLink href="https://www.zvstreams.com/search/label/Live%20MotoGP">
            <BsLink /> Live Streaming
          </FooterLink>
        </div>

        <div className="flex flex-col gap-3 text-sm font-medium">
          <FooterLink href="https://t.me/+wz0g7OSf3ic3ODQ1">
            <BsTelegram /> Telegram
          </FooterLink>

          <FooterLink href="https://x.com/nontonmotogp">
            <BsTwitterX /> Twitter (X)
          </FooterLink>

          <FooterLink href="https://www.facebook.com/livemotogpnet/">
            <BsFacebook /> Facebook
          </FooterLink>

          <FooterLink href="https://tiktok.com/@livemotogp.net">
            <BsTiktok /> TikTok
          </FooterLink>

          <FooterLink href="https://www.zvstreams.com/search/label/Live%20MotoGP">
            <BsChat /> Kontak
          </FooterLink>

          <FooterLink href="https://www.zvstreams.com/search/label/Live%20MotoGP">
            <BsLink /> Live Streaming
          </FooterLink>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 dark:border-white/10 text-center text-sm text-gray-500 dark:text-gray-500 py-4">
        © {new Date().getFullYear()} LIVEMotoGP. All rights reserved.
      </div>
    </footer>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors duration-200"
  >
    {children}
  </Link>
);

export default Footer;
