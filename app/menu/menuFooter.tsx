import Image from 'next/image'
import React from 'react'

const MenuFooter = () => {
  return (
    <div className='w-full bg-white'>
    <div className="mx-auto w-full max-w-[1560px] px-8 mt-10 text-center">
    <h4 className="text-black1 text-[16px]">Partners & Clients</h4>
    <h2 className="text-black1 text-[40px] font-bold">We work with the best people</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 space-x-5 items-center justify-center">
          {/* Logo Sec */}
  <Image
    src="/assets/menu/bakery1.png"
    alt="Logo 1"
    width={240.96}
    height={129.23}
    className='mb-20 mt-10'
  />
  <Image
    src="/assets/menu/bakery2.png"
    alt="Logo 2"
    width={166.04}
    height={128.68}
    className='mb-20 mt-10'
  />
  <Image
    src="/assets/menu/bakery3.png"
    alt="Logo 3"
    width={143.98}
    height={127.01}
    className='mb-20 mt-10'
  />
  <Image
    src="/assets/menu/bakery4.png"
    alt="Logo 4"
    width={130.98}
    height={129.37}
    className='mb-20 mt-10'
  />
  <Image
    src="/assets/menu/bakery5.png"
    alt="Logo 5"
    width={169.97}
    height={129.17}
    className='mb-20 mt-10'
  />
  <Image
    src="/assets/menu/bakery6.png"
    alt="Logo 5"
    width={113.98}
    height={129.08}
    className='mb-20 mt-10'
  />
</div>
  </div>

  

  </div>
  
  )
}

export default MenuFooter
