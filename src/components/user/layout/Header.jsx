"use client";
import Link from "next/link";
import React, { useState } from "react";
import navLinks from "./navlinks.json";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="shadow" maxWidth="xl">
      <NavbarContent>
        <NavbarMenuToggle
          ariaLabel={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="end">
        {navLinks.map((item, index) => (
          <NavbarItem key={index} className="hover:text-rose-700">
            <Link color="foreground" href={item?.link}>
              {item?.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="danger" href="/login" variant="flat">
            Giriş
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navLinks.map((item, index) => (
          <NavbarMenuItem key={`${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === navLinks.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
