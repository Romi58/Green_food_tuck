import React from 'react'
import Head from 'next/head'

function Login() {
  return (
   <>
   <Head>
    <title>Login</title>
   </Head>
   <div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
        <h1 className="text-3xl font-bold mb-[10px]">Login page</h1>
        <p className='text-[#195A00] '>Welcome back</p>
    </div>

    <div className='h-[500px] flex items-center justify-center mt-[40px]'>
<div className='h-[350px] shadow w-[280px] flex flex-col p-3'>
  <h2 className='font-bold text-2xl'>Sign In</h2>
  <form className='flex flex-col gap-[15px] mt-[30px]'>
   
    <div>
    <input type="text" placeholder="Email" className='border-[1px] border-[#EBEBEB] w-[250px]  px-2 h-[30px]'/>
    </div>
    <div>
    <input type="text" placeholder="Password" className='border-[1px] border-[#EBEBEB] w-[250px]  px-2 h-[30px]'/>
    </div>
    <div>
    <button className="bg-[#195A00] text-white p-2 rounded-md w-[250px]">Login</button>
    </div>

  </form>
</div>


    </div>
   </>
  )
}

export default Login
