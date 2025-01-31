import React from 'react'
import {ProductItems, ProductModel} from "../DataJson"
import Image from "next/image"
import {useRouter} from "next/router"
import {useState,useEffect,useContext
} from "react"
import productDetail from './productDetail'
import Link from "next/link"
import {Cart} from '../../components/Context/context'
import Head from 'next/head'

function Shopcart() {

  const {cartitems,increase,decrease,clear,remove,totalproducts} = useContext(Cart)

  if(cartitems.length < 1){
  
    return(

      <>
         <div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
           <h1 className="text-3xl font-bold mb-[10px]">Shopping Cart</h1>
           <p className='text-[#195A00] '>Shopping cart</p>
       </div>

         <div className="mt-[100px] flex items-center justify-center  flex-col">
        <h3 className="text-3xl">
        Cart  empty
          </h3><br/>  <Link href="/shop/shop"><button  className="bg-[#195A00] text-white p-2 rounded-md w-[150px] mb-[15px]" >Go shopping</button></Link>
      </div>
      </>
    
    )
  }

  else{
    return (
      <>
      <Head><title>Shop Cart</title></Head>
      <div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
           <h1 className="text-3xl font-bold mb-[10px]">Shopping Cart</h1>
           <p className='text-[#195A00] '>Shopping cart</p>
       </div>
   
   
   
   
       <div className="mt-[100px] flex items-center justify-center flex-col">
         <div className="flex flex-col gap-[15px]">
   
           {
             cartitems.map((item:ProductModel,index:number)=>{
               return (

                <div key={index} className="flex items-center justify-center gap-[40px]">
                  <div>
                 <Image src={item.image} width={100} height={100} alt="icon" /></div>
                <div className="flex gap-[9px] items-center justify-center border-[1px] border-gray-300 rounded-full shadow h-[30px] w-[100px] p-2"> <button onClick={()=>increase(item.id)}>+</button>  <span>{item.quantity}</span>
                  <button onClick={()=>decrease(item.id)}>-</button></div>
                 <div>
                  ${item.price}
                 </div>
                 <div>
                 <button onClick={()=>remove(item)}>X</button>
                 </div>
                 </div>
               )
             })
           }
         </div>

         <div className="mt-[50px] flex gap-[30px] flex-col md:flex-row">

          <div>
            <h3 className="font-bold">Coupon Code</h3>
            <div className="border-[1px] border-gray-200 h-[80px] w-[350px] p-4">

              <div>
              <input type="email" placeholder="Email" className="border-[1px] border-green-800 w-[250px] h-[40px] px-2"/><button className="bg-[#195A00] text-white px-4 py-2 md:w-[50px] w-[50px]">Go</button>
              </div>

            </div>
          </div>
          <div>
          <h3 className="font-bold">Total Bill</h3>
            <div className="border-[1px] border-gray-200 h-[80px] w-[350px] p-4 mb-[20px]">
              <div className="flex justify-between">
              <h3 className="text-sm">Total Items</h3>
              <h5 className="font-bold text-sm">{totalproducts}</h5>
              </div>

              <div  className="flex justify-between">
              <h3 className="text-sm">Total Amount</h3>
              <h5 className="font-bold text-sm">${ cartitems.reduce(
            (price:any,item:any) => price + item.quantity *  item.price  , 0
        )}</h5>
              </div>
            

            </div>
            <div><button className='bg-green-700 text-white w-[350px] p-2'>Proceed to checkout</button></div>
          </div>

         </div>
   
       </div>  </>
       )
  }
 
 
  
}

export default Shopcart