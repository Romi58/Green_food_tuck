import React from 'react'
import Head from 'next/head'

function Signup() {
  return (
    <>
    <Head>
      <title>Sign Up</title>
    </Head>
    <div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
        <h1 className="text-3xl font-bold mb-[10px]">Sign up page</h1>
        <p className='text-[#195A00] '>Create account</p>
    </div>

    <div className='h-[500px] flex items-center justify-center mt-[40px]'>
<div className='h-[450px] shadow-lg w-[280px] flex flex-col p-3'>
  <h2 className='font-bold text-2xl'>Sign up</h2>
  <form className='flex flex-col gap-[15px] mt-[30px]'>
    <div>
      <input type="text" placeholder="Name" className='border-[1px] border-[#EBEBEB] w-[250px] px-2 h-[30px]'/>
    </div>
    <div>
    <input type="text" placeholder="Email" className='border-[1px] border-[#EBEBEB] w-[250px]  px-2 h-[30px]'/>
    </div>
    <div>
    <input type="text" placeholder="Password" className='border-[1px] border-[#EBEBEB] w-[250px]  px-2 h-[30px]'/>
    </div>
    <div>
    <button className="bg-[#195A00] text-white p-2 rounded-md w-[250px]">Sign Up</button>
    </div>
    <div><p className='text-sm text-center'>Already have an account? <span className="cursor-pointer font-bold">Sign up</span></p></div>

    <p className='text-center'>Or</p>
    <div>
    <button className=" text-black p-2 rounded-md w-[250px] border-[1px] border-[#EBEBEB]">Sign up with Google</button>
    </div>
    <div>
    <button className="border-[1px] border-[#EBEBEB] text-black p-2 rounded-md w-[250px]">Sign up with Facebook</button>
    </div>

  </form>
</div>


    </div>
    </>
  )
}

export default Signup