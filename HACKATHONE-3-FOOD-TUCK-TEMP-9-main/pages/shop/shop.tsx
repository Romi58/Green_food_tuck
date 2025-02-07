import React from 'react'
import {productList} from "./productlist"
import {ProductList} from "./productlist"
import Image from "next/image"
import Link from "next/link"
import Head from 'next/head'

function shop() {
  return (
  <>
  <Head>
    <title>Shop Items</title>
  </Head>
   <div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
        <h1 className="text-3xl font-bold mb-[10px]">Our Shop</h1>
        <p className='text-[#195A00] '>Shop</p>
    </div>

    <div className="mt-[100px] flex items-center justify-center">

      <div className='grid grid-cols-3 gap-[30px]'>
        {
          productList.map((item:ProductList,index)=>{
            return (
             <Link href={`/shop/${item.id}`}  key={index}> <div className="cursor-pointer">
                <Image src={item.image} width={200} height={200} alt="icon"/>
                <div>
                  <h3 className="font-bold text-sm text-center">{item.name}</h3>
                  <p className="text-sm text-[#195A00] text-center">${item.price}</p>
                </div>

              </div></Link>
            )
          })
          })
      
      </div>

    </div>
  </>
  )
}

export default shop