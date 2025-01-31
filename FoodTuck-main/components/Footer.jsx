import React from 'react'
import Image from "next/image"

function Footer() {
  return (
   <>
   <footer style={{backgroundImage:'url("/unsplash_Y6O6PHJRQms.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="md:h-[350px] w-[100%] mt-[250px] relative">
<div className='w-full h-full bg-black/50 relative flex-col items-center  flex text-white'>
<div className=" bg-white w-[800px] h-[140px] rounded-md shadow-lg -mt-[80px] flex flex-col items-center justify-center gap-[30px]">
<h2 className="text-2xl font-bold text-black">Subscribe To Our Newsletter</h2>
<div className="flex flex-col md:flex-row items-center justify-center mb-[20px] md:mb-0 gap-[10px] md:gap-[4px]">
  <input type="email" placeholder="Email" className="border-[1px] border-green-800 w-[250px] h-[40px] px-2"/><button className="bg-[#195A00] text-white p-2 md:w-[150px] w-[250px]">Show More</button>
</div>
</div>
<div className='grid grid-cols-1 md:grid-cols-3 gap-[60px] mt-[50px]'>
  <div>
  <h1 className='text-2xl ml-[0px] font-bold text-white'>Food<span className='text-[#195A00] '>tuck</span></h1>
  <p className=' w-[350px] mt-[20px] text-white'>Loreum ipsum door sit amet, consectur adipiscing elit. Leo augue nibhLoreum ipsum door sit amet, consectur adipiscing
  </p>
  </div>
  <div>
    <h2 className='font-bold'>Explore</h2>
    <div className='flex gap-[40px] mt-[30px]'>
    <ul className='flex flex-col gap-[15px] text-sm'>
      <li>Home</li>
      <li>About us</li>
      <li>Contact us</li>
    </ul>
    <ul  className='flex flex-col gap-[15px] text-sm'>
    <li>Blog</li>
      <li>Team</li>
      <li>Menu</li>
    </ul>
    </div>
  
  </div>
  <div>
  <h2 className='font-bold'>Contact Us</h2>
  <div className='flex gap-[40px] mt-[30px]'>
    <ul className='flex flex-col gap-[15px] text-sm'>
      <li>Nodar prattar, 3rd floor, Office 45</li>
      <li>+2348148837221 +2348032125514</li>
      <li>info@gmail.com</li>
      <li>Sun-Sat/10:00 AM - 8 PM</li>
    </ul></div>
  </div>
</div>


</div>
<div className="absolute -bottom-[50px] right-0">
<Image src="/unsplash_yCuVsIknzhY.png" width={160} height={200} alt="icon"/>
</div>
<div className="absolute -top-[120px] left-0">
<Image src="/unsplash_x1ZZWyDU8sU.png" width={160} height={200} alt="icon"/>
</div>
   </footer>
   <div className="bg-[#195A00] md:h-[050px] flex justify-around items-center text-white text-sm flex-col px-3 py-4">
    <p>Copyright @ 2022 by Ayeman.All Rights reserved</p>
   <Image src="/Sociali icon.png" width={160} height={200} alt="icon"/>
    </div>

  


   </>
  )
}

export default Footer