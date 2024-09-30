"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import mainLogo from "@/public/main-logo.png";
import { useState } from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const navigationItemList = [
  {
    name: "Home",
    link: "hero",
  },
  {
    name: "Music",
    link: "music",
  },
  {
    name: "About",
    link: "about",
  },
  // {
  //   name: "Reviews",
  //   link: "reviews",
  // },
  {
    name: "Contact",
    link: "contact",
  },
];

interface NavItemProps {
  name: string;
  link: string;
  setOpen: any;
  mobileMenu: boolean;
}

const NavItem = ({ name, link, setOpen, mobileMenu }: NavItemProps) => {
  const textClassesGeneral =
    "text-white pl-3 pr-4 py-2 hover:text-blue-700 md:p-0 rounded cursor-pointer";
  const textClassesMobile =
    "mt-2 max-w-[64ch] tracking-widest leading-loose text-xl";

  return (
    <li className="p-4">
      <a
        // href={link}
        className={
          mobileMenu
            ? `${textClassesGeneral} ${textClassesMobile}`
            : `${textClassesGeneral}`
        }
        onClick={(event) => {
          setOpen(false);
          event.preventDefault();
          const element = document.getElementById(link);
          wait().then(() =>
            element?.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            })
          );
        }}
      >
        {name}
      </a>
    </li>
  );
};

const wait = () => new Promise((resolve) => setTimeout(resolve, 0));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky bg-background top-0 left-0 px-2 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex">
          <Image
            className="h-auto w-auto max-w-12 md:max-w-24"
            src={mainLogo}
            alt="logo"
          />
          <span className="underline-gradient self-center text-3xl sm:text-4xl font-thin whitespace-nowrap">
            Mystic Chord Music
          </span>
        </a>
        <div className="flex">
          <div className="block md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button className="m-4" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                  <SheetTitle>Mystic Chord</SheetTitle>
                  <SheetDescription>
                    <ul>
                      {navigationItemList.map((navigationItem) => (
                        <NavItem
                          name={navigationItem.name}
                          link={navigationItem.link}
                          key={navigationItem.name}
                          setOpen={setOpen}
                          mobileMenu={true}
                        />
                      ))}
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="hidden md:flex justify-between items-center w-full md:w-auto">
          <ul className="flex-row flex mt-4 md:mt-0">
            {navigationItemList.map((navigationItem) => (
              <NavItem
                key={navigationItem.name}
                name={navigationItem.name}
                link={navigationItem.link}
                setOpen={setOpen}
                mobileMenu={false}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
