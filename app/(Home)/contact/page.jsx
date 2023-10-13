import { ContactForm, Feetures, Header } from "@/components";

export default function page() {
  return (
    <main className="overflow-hidden">
      <Header pageName="contact" />
      
      <section className="paddings max-w-[1024px] mx-auto">
        <h2 className='heading3 text-center mb-4'>Get In Touch With Us</h2>
        <p className='text-[#9F9F9F] text-lg text-center max-w-[650px] mx-auto mb-20'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        <ContactForm />
      </section>
      <section className='paddings bg-[#F9F1E7]'>
        <Feetures />
      </section>
    </main>
  )
}
