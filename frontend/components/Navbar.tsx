"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname() as string;

  return (
    <nav className="hidden gap-x-5 md:flex xl:gap-x-10 rounded-full px-2 py-1 text-white">
      <Link href={`/`} className={`${pathname == "/" ? "active-link" : ""}`}>
        Início
      </Link>
      <Link
        href={`/clothing`}
        className={`${pathname == "/clothing" ? "active-link" : ""}`}
      >
        Roupas
      </Link>
      <Link
        href={`/eletronics`}
        className={`${pathname == "/eletronics" ? "active-link" : ""}`}
      >
        Eletrônicos
      </Link>
      <Link
        href={`/cosmetics`}
        className={`${pathname == "/cosmetics" ? "active-link" : ""}`}
      >
        Cosméticos
      </Link>
    </nav>
  );
}
