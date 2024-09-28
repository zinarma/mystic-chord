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

const navigationItemList = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Reviews",
    link: "reviews",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

interface NavItemProps {
  name: string;
  link: string;
  setOpen: any;
}

const NavItem = ({ name, link, setOpen }: NavItemProps) => {
  return (
    <li className="p-4">
      <a
        // href={link}
        className="text-white pl-3 pr-4 py-2 hover:text-blue-700 md:p-0 rounded cursor-pointer"
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

const wait = () => new Promise((resolve) => setTimeout(resolve, 200));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-2 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex">
          <Image src={mainLogo} width={160} height={160} alt="logo" />
          <span className="self-center text-4xl font-thin whitespace-nowrap">
            Mystic Chord
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
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
