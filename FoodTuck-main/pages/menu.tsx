import React from 'react'
import Image from "next/image"
import Head from "next/head"

function Menu() {

    interface Menu{
        name:string,
        desc:string,
        price:number
    }

    const Menu:Menu[]= [
        {
            name:"Alder Grilled Chinook Salmon",
    desc:"Toasted French brand chopped chedical 500 Cal",
            price:32
        },
        {
            name:"Alder Grilled Chinook Salmon",
    desc:"Toasted French brand chopped chedical 500 Cal",
            price:32
        },
        {
            name:"Alder Grilled Chinook Salmon",
    desc:"Toasted French brand chopped chedical 500 Cal",
            price:32
        },
           {
            name:"Alder Grilled Chinook Salmon",
    desc:"Toasted French brand chopped chedical 500 Cal",
            price:32
        }

    ]

  return (
    <>

    <Head>
      <title>Foodtuck Menu</title>
    </Head>
    <link rel="icon" href="/unsplash_BsYD6CP0uEw.png" />

     <div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
        <h1 className="text-3xl font-bold mb-[10px]">Our Menu</h1>
        <p className='text-[#195A00] '>Menu</p>
    </div>

    <div className="mt-[50px] flex w-[80%] mx-auto gap-[0px] items-center justify-around flex-col md:flex-row">
        <Image src="/Rectangle 8874.png" width={350} height={200} alt="icon"/>

        <div>
            <h2 className='font-bold text-3xl'>Starter Menu</h2>
            <div className="flex gap-[40px] mt-[30px]">
          <div className='flex flex-col gap-[40px]'>
            {
              Menu.map((item,index)=>{
                return (
                  <div key={index} className="flex justify-between gap-[120px]">
                    <div>
                      <h3 className='font-bold text-sm'>{item.name}</h3>
                      <p className='text-sm'>{item.desc}</p></div>
                      <div className="font-bold text-green-700">${item.price}</div>
                  </div>
                )
              })
            }
          </div>
        </div>

    </div>
    </div>


    <div className="mt-[50px] flex w-[80%] mx-auto gap-[0px] items-center justify-around md:flex-row-reverse flex-col ">
        <Image src="/Mask Group (10).png" width={350} height={200} alt="icon"/>

        <div>
            <h2 className='font-bold text-3xl'>Main Course</h2>
            <div className="flex gap-[40px] mt-[30px]">
          <div className='flex flex-col gap-[40px]'>
            {
              Menu.map((item,index)=>{
                return (
                  <div key={index} className="flex justify-between gap-[120px]">
                    <div>
                      <h3 className='font-bold text-sm'>{item.name}</h3>
                      <p className='text-sm'>{item.desc}</p></div>
                      <div className="font-bold text-green-700">${item.price}</div>
                  </div>
                )
              })
            }
          </div>
        </div>

    </div>
    </div>

    <div style={{backgroundImage:'url("/unsplash_bpPTlXWTOvg.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[250px] text-white flex flex-col items-center justify-center mt-[50px]" >
    <div className='w-full h-full bg-black/80 relative flex items-center justify-center'>



<div className="grid grid-cols-2 md:grid-cols-4 gap-[60px]">
    <div>
        <h3 className='font-bold text-3xl text-center'>420</h3>
        <p className='font-bold text-sm text-center mt-[20px]'>Professional Chefs</p>

    </div>
    <div>
    <h3 className='font-bold text-3xl text-center'>320</h3>
        <p  className='font-bold text-sm text-center mt-[20px]'>Items of Food</p>
    </div>
    <div>
    <h3 className='font-bold text-3xl text-center'>30+</h3>
        <p  className='font-bold text-sm text-center mt-[20px]'>Experience</p>
    </div>
    <div>
    <h3 className='font-bold text-3xl text-center'>620</h3>
        <p  className='font-bold text-sm text-center mt-[20px]'>Happy Customers</p>
    </div>

</div>

</div>
    </div>

    <div className="mt-[50px] flex w-[80%] mx-auto gap-[0px] items-center justify-around md:flex-row-reverse flex-col-reverse">
        <Image src="/Mask Group (10).png" width={350} height={200} alt="icon"/>

        <div>
            <h2 className='font-bold text-3xl'>Desert</h2>
            <div className="flex gap-[40px] mt-[30px]">
          <div className='flex flex-col gap-[40px]'>
            {
              Menu.map((item,index)=>{
                return (
                  <div key={index} className="flex justify-between gap-[120px]">
                    <div>
                      <h3 className='font-bold text-sm'>{item.name}</h3>
                      <p className='text-sm'>{item.desc}</p></div>
                      <div className="font-bold text-green-700">${item.price}</div>
                  </div>
                )
              })
            }
          </div>
        </div>

    </div>
    </div>

    <div className="flex items-center justify-center mt-[100px] flex-col" >

  <div>
    <h1 className="text-3xl font-bold text-center mb-[40px]">We work with the best people</h1>
  </div>
  <div className="grid grid-cols-2 md:grid-cols-6 gap-[20px]">
  <Image src="/image 2.png" width={150} height={200} alt="icon"/>
  <Image src="/image 56.png" width={150} height={200} alt="icon"/>
  <Image src="/image 57.png" width={150} height={200} alt="icon"/>
   <Image src="/image 59.png" width={150} height={200} alt="icon"/>
   <Image src="/image 60 (1).png" width={150} height={200} alt="icon"/>
   <Image src="/image 60.png" width={150} height={200} alt="icon"/>
  </div>
</div>
    </>
  )
}

export default Menu