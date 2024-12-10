import React from 'react'
import Image from 'next/image';

const Content = () => {
  return (
    <div>
      <section className="first w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
        <Image src={"/Ads 1.png"} alt="" width={640} height={360} className="max-w-full" />
        <Image src={"/Ads 2.png"} alt="" width={640} height={360} className="max-w-full" />
      </section>
      <section className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
        <Image src={"/Pick - Up.png"} alt="" width={582} height={132} className="max-w-full" />
        <Image src={"/Switch.png"} alt="" width={60} height={60} className="max-w-full" />
        <Image src={"/Drop - Off.png"} alt="" width={582} height={132} className="max-w-full" />
      </section>

    </div>
  )
}

export default Content ;
