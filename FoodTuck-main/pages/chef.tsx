import React from 'react'
import Image from "next/image"
import {Team} from "./DataJson"
import {Chef} from "./DataJson"
import Head from 'next/head'

function Chef() {

   
  return (
  <>
  <Head>
    <title>Meet Our Chefs</title>
  </Head>
    <div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
        <h1 className="text-3xl font-bold mb-[10px]">Our Chef</h1>
        <p className='text-[#195A00] '>Chef</p>
    </div>


    <div className="mt-[100px] flex items-center justify-center">

<div className='grid grid-cols-2 md:grid-cols-3 gap-[30px]'>
  {
    Team.map((item:Chef,index)=>{
      return (
        <div key={index}>
          <Image src={item.image} width={300} height={200} alt="icon"/>
          <div>
            <h3 className="font-bold text-sm text-center">{item.name}</h3>
            <p className="text-sm text-[#195A00] text-center">{item.pos}</p>
          </div>

        </div>
      )
    })
    })

</div>

</div>

  </>
  )
}

export default Chef