import Link from "next/link";
import FooterColumn from "./FooterColumn";
import { FOOTER_LINKS } from "@/constants/data";
import FOOTER_CONTACT_INFO from "@/constants/footer_contact";
import SOCIALS from "@/constants/socials";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center pb-24 pt-20 bg-slate-100">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href={`/`} className="text-xl">
            Jon&apos;s Shop
          </Link>
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((col: any) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className="flex flex-col gap-4 text-gray-500">
                  {col.links.map((link: any) => (
                    <Link href={`/`} key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link: any) => (
                  <Link
                    href={`/`}
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p>{link.label}:</p>
                    <p>{link.value}</p>{" "}
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex">
              <FooterColumn>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((link: any) => (
                    <Link href={`/`} key={link.src}>
                      <img
                        src={link.src}
                        alt="socialIcon"
                        height={22}
                        width={22}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-900"></div>
        <p className="text-center text-black">
          Jon&apos;s Shop | Todos direitos reservados | 2024
        </p>
      </div>
    </footer>
  );
}
