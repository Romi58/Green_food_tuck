import React,{useState} from 'react'
import Link from "next/link"
import Image from "next/image"

function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <>
    <nav className='bg-black text-white h-[50px] flex  items-center md:justify-around px-2 justify-between'>
        <div>
            <h1 className='text-2xl ml-[0px] font-bold'>Food<span className='text-[#195A00] '>tuck</span></h1>
        </div>

        <div>
          <ul className="md:flex gap-[30px] text-white text-sm px-3 hidden">
            <li className='text-[#195A00] '>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/shop/shop">Shop</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
            <Link href="/chef">Our Chefs</Link> 
            </li>

            <li>
            <Link href="/faq">FAQs</Link> 
            </li>
            <li>
            <Link href="/shop/shopcart">Cart</Link> 
            </li>
            <li>
            <Link href="/shop/checkout">Checkout</Link> 
            </li>
          </ul>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={`z-[99999px]  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden `}
        >
          <Image src={open ? "/icon-close.svg" :"/icon-hamburger.svg"} alt="icon" width={30} height={20}></Image>
        </div>

        
        <div
          className={`md:hidden text-black absolute w-2/3 h-screen z-10
      px-7 py-2 font-medium bg-white shadow-lg  top-0 duration-300 ${
        open ? "left-0 block" : "left-0 hidden"
      }`}
        >
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[100px]">
          <li  onClick={() => setOpen(!open)}><Link href="/">Home</Link></li>
                
                <li  onClick={() => setOpen(!open)}>    <Link href="/aboutus">About Us</Link></li>
                <li  onClick={() => setOpen(!open)}> <Link href="/shop/shop">Shop</Link></li>
               
                <li>  <Link href="/menu"  onClick={() => setOpen(!open)}>Menu</Link></li>
                <li>
            <Link href="/chef"  onClick={() => setOpen(!open)}>Our Chefs</Link> 
            </li>

            <li>
            <Link href="/faq"  onClick={() => setOpen(!open)}>FAQs</Link> 
            </li>
            <li>
            <Link href="/shop/shopcart"  onClick={() => setOpen(!open)}>Cart</Link> 
            </li>
          </ul>
        </div>

    </nav>
    </>
  )
}

export default Navbar