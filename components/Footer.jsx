
import Image from "next/image"
import Subscribe from "./Subscribe"
import { footerLinks } from "@/constants"
import { Link } from "nextjs13-progress"

const Footer = () => (
  <footer className={`flex justify-center items-center  flex-col x-paddings py-10 border-t w-full`}>
    <div className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full md:gap-20`}>
      <div className="flex flex-col justify-start mr-10">
        <Image src="/logo.png" alt="logo" width={158} height={40} className='object-contain h-6 sm:h-9 w-fit' />
        <p className={`font-normal text-color-gray-5 text-lg leading-[30.8px] mt-4 max-w-[310px]`}>
          400 University Drive Suite 200 Coral Gables, 
          <br /> FL 33134 USA 
        </p>
      </div>

      <div className="flex-[1.5] w-[full] flex flex-row flex-wrap md:justify-center md:mt-0 mt-10 md:gap-20">
        {footerLinks.map(footerLink => (
          <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-medium text-lg leading-[27px] text-color-gray-5">{footerLink.title}</h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-normal text-md leading-[24px] text-color-gray-1 hover:text-color-gray-5 cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : ''} mb-0`}>
                  <Link href={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="mb-4 font-medium text-lg leading-[27px] text-color-gray-5">Newsletter</h4>
          <Subscribe />
        </div>
      </div>
    </div>

    <div className="w-full pt-6">
      <p className="font-normal text-md text-color-gray-5 mt-4 leading-[27px]">© Copyright 2023 furino. All rights reverved. Built by Husam Asaad
      </p>
    </div>
  </footer>
)


export default Footer