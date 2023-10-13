import { getHeroInfo } from "@/sanity/actions";
import Image from "next/image"
import { Link } from "nextjs13-progress"

const Hero = async () => {

  const heroInfo = await getHeroInfo()

  const { heading, smallSpan, description, image, prodectLink } = heroInfo[0]

  return (
    <header className="relative min-h-screen z-10 md:flex-end flex-center ">
      <Image alt={smallSpan} src={image} fill className="w-full h-full object-cover absolute inset-0 -z-10" priority />
      <div className="paddings flex-center">
        <div className="p-12 bg-secondary">
          <div className="flex gap-4 md:gap-2 flex-col">
            <span className="body-text text-font-clr uppercase tracking-[2px] pl-1">{smallSpan}</span>
            <h1 className="heading1 text-primary max-w-lg">{heading}</h1>
            <p className="text-lg max-w-2xl text-[#333]">{description}</p>
          </div>
          <Link href={`/shop/${prodectLink}`} className="btn-fill w-full sm:w-fit mt-20 hover:btn-outline">Buy Now</Link>
        </div>
      </div>
      
    </header>
  )
}

export default Hero