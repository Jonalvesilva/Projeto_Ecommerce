"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  className: string;
};

export default function MobileNavbar(props: Props) {
  const pathname = usePathname() as string;

  return (
    <nav className={props.className}>
      <Link
        href={`/`}
        className={`${pathname == "/" ? "active-link-menu" : ""}`}
      >
        Início
      </Link>
      <Link
        href={`/clothing`}
        className={`${pathname == "/clothing" ? "active-link-menu" : ""}`}
      >
        Roupas
      </Link>
      <Link
        href={`/electronics`}
        className={`${pathname == "/electronics" ? "active-link-menu" : ""}`}
      >
        Eletrônicos
      </Link>
      <Link
        href={`/cosmetics`}
        className={`${pathname == "/cosmetics" ? "active-link-menu" : ""}`}
      >
        Cosméticos
      </Link>
    </nav>
  );
}
