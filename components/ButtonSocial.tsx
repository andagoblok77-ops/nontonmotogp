import React from "react";
import Link from "next/link";
import { Button } from "../src/components/ui/button";
import {
  BsTelegram,
  BsYoutube,
  BsTiktok,
  BsTwitterX,
  BsLink45Deg,
} from "react-icons/bs";

const socials = [
  {
    name: "TELEGRAM",
    href: "https://livemotogpsocial.blogspot.com",
    icon: BsTelegram,
  },
  {
    name: "LINK",
    href: "https://nonton-motogp.blogspot.com/search/label/Live%20MotoGP?m=1",
    icon: BsLink45Deg,
  },
  {
    name: "YOUTUBE",
    href: "https://youtube.com/@livemotogpnet",
    icon: BsYoutube,
  },
  {
    name: "TIKTOK",
    href: "https://tiktok.com/@livemotogp.net",
    icon: BsTiktok,
  },
  {
    name: "X",
    href: "https://x.com/nontonmotogp",
    icon: BsTwitterX,
  },
];

const ButtonSocial = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap gap-3 mb-3">
      {socials.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            className="w-full lg:w-auto"
          >
            <Button className="w-full h-10 py-3 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base whitespace-nowrap">
              <Icon className="h-4 w-4 shrink-0" />
              <span>{item.name}</span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default ButtonSocial;
