import Hero from "@/components/Hero";
import NewCollections from "@/components/NewCollections";
import NewsLetter from "@/components/NewsLetter";
import Offer from "@/components/Offer";
import Popular from "@/components/Popular";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter />
    </main>
  );
}
