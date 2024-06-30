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
