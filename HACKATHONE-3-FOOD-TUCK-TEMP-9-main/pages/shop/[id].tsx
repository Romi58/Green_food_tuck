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


function ProductDetail() {

  const {addtocart} = useContext(Cart)


  const router = useRouter()
    const id = router.query.id
    const [ProductDetail,setProductDetaill] = useState<any>({})
   

useEffect(()=>{
  setProductDetaill(ProductItems.find((item)=>{
    return item.id == id
  }))

   
},[id])
  return (
  <>
<Head><title>More Detail</title></Head>
<div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
        <h1 className="text-3xl font-bold mb-[10px]">Product Details</h1>
        <p className='text-[#195A00] '>details</p>
    </div>



    <div className='flex items-center justify-center mt-[100px]'>

      <div>


      <div className='flex gap-[30px] flex-col-reverse md:flex-row p-3'>
            <Image src={ProductDetail?.image} width={500} height={300} alt="icon"/>
          

            <div>
              <button  className="bg-[#195A00] text-white p-2 rounded-md w-[100px] mb-[15px]">In stock</button>
              <div>
                <h2 className='text-3xl font-bold mb-[15px]'>{ProductDetail?.name}</h2>
                <p className="md:w-[550px] text-sm" >{ProductDetail?.desc}</p>
              </div>
              <div className='mt-[20px]'>
                    <h3 className='font-bold text-2xl'>{ProductDetail?.price}.00$</h3>
                    <div className='mt-[20px]'>
                    <Image src="/Star.png" width={80} height={300} alt="icon"/> <span className='text-sm'>5.0 Rating</span> | <span className='text-sm'>10 reviews</span><br/>
                    <button  className="bg-[#195A00] text-white p-2 rounded-md w-[150px] mb-[15px]" onClick={()=>addtocart(ProductDetail)}>Add to cart</button>
                    </div>
              </div>

            </div>

        </div>


        <div className='mt-[100px] px-3'>
          <div>
          <button  className="bg-[#195A00] text-white p-2 text-sm mb-[15px]">Description</button> <span>Reviews (10)</span>
          <div>
          <p className=' md:w-[850px] mt-[20px] text-sm'>Loreum ipsum door sit amet, consectur adipiscing elit. Leo augue nibhLoreum ipsum doLoreum ipsum door sit amet, consectur adipiscingLoreum ipsum door sit amet, consectur adipiscingor sit amet, consectur adipiscing elit. Leo augue nibhr sit amet, consectur adipiscing elit. Leo augue nibh</p>

          <p className=' md:w-[850px] mt-[20px] text-sm'>Loreum ipsum door sit amet, consectur adipiscing elit. LeLoreum ipsum door sit amet, consectur adipiscingLoreum ipsum door sit amet, consectur adipiscingo augue nibhLoreum ipsum door sit amet, consectur adipiscing elit. Leo augue nibhr sit amet, consectur adipiscing elit. Leo augue nibh</p>
          <ul>
            <li></li>
          </ul>
          </div>
          </div>

</div>



<div className='mt-[100px] px-3'>
  <h2 className='text-2xl font-bold'>Similar Products</h2>

</div>

<div className='grid grid-cols-2 md:grid-cols-4 gap-[10px] mt-[20px] px-3'>
        {
          ProductItems.slice(0,4).map((item,index)=>{
            return (
             <Link href={`/shop/${item.id}`}  key={index}> <div className="cursor-pointer">
                <Image src={item.image} width={200} height={200} alt="icon"/>
                <div>
                  <h3 className="font-bold text-sm ">{item.name}</h3>
                  <p className="text-sm text-[#195A00] ">${item.price}</p>
                </div>

              </div></Link>
            )
          })
          })
      
      </div>

      </div>
       





      
    </div>


  
  </>
  )
}

export default ProductDetail