
import { BsPinMap, BsPhone, BsWatch } from 'react-icons/bs'
import FormInputs from './FormInputs';

const ContactForm = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start justify-center gap-12 gap-y-16">
      <div className="flex flex-col gap-12 flex-1 border-t pt-8 md:border-none md:pt-0">
        <div className="flex gap-8">
          <BsPinMap className='text-4xl'/>
          <div className='mt-3'>
            <h4 className='text-2xl font-bold mb-1'>Address</h4>
            <p className='text-[#9F9F9F] text-md  max-w-xs' >236 5th SE Avenue, New York NY10000, United States</p>
          </div>
        </div>
        <div className="flex gap-8">
          <BsPhone className='text-4xl'/>
          <div className='mt-3'>
            <h4 className='text-2xl font-bold mb-1'>Phone</h4>
            <p className='text-[#9F9F9F] text-md  max-w-xs' >
              Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <BsWatch className='text-4xl'/>
          <div className='mt-3'>
            <h4 className='text-2xl font-bold mb-1'>Working Time</h4>
            <p className='text-[#9F9F9F] text-md  max-w-xs' >
            Monday-Friday: 9:00 - 22:00 <br />
            Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <FormInputs />
      </div>
    </div>
  );
};

export default ContactForm;