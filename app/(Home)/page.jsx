import { Categories, Feetures, Gallary, Hero, ProductSection } from "@/components";


export const revalidate = 90

export default function Home() {


  return (
    <main className="overflow-hidden">
      <Hero />
      <Categories />
      <ProductSection />
      <Gallary />
      <section className='paddings'>
        <Feetures />
      </section>
    </main>
  )
}
