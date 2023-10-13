import Image from "next/image"
import ImageDisplay from "./ImageDisplay"
import { getGallery, getGalleryCounr } from "@/sanity/actions"

const ImagesGrid = async ({ images }) => {

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:px-5'>
      {images.map((img, index) => (
        <div key={img.id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden relative group">
          <Image
            src={img.image}
            alt="3"
            width={375}
            height={540}
            className="rounded-md duration-200 hover:scale-105 object-cover h-full min-h-[200px] md:h-[332px]"
          />
          <ImageDisplay images={images} imageIndex={index} />
        </div>
      ))}
    </div>
  )
}

export default ImagesGrid