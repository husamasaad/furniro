import { Categories, Hero, ProductSection } from "@/components";

export default function Home() {

  return (
    <main className="overflow-hidden">
      <Hero />
      <Categories />
      <ProductSection />
    </main>
  )
}
