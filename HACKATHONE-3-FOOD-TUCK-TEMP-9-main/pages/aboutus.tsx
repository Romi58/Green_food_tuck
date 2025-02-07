import React from 'react'
import Image from "next/image"
import Head from "next/head"



function aboutus() {
    const WhyUs = [
        {
            name:"Best Chef",
            icon:"/Student.png",
            desc:"hLoreum ipsuhLoreum ipsum door sit amet, clitconsectur adipiscing elit. Leo augue nibh"
        },
         {
            name:"20 Item Food",
            icon:"/Coffee.png",
            desc:"hLoreum ipsuhLoreum ipsum door sit amet, clitconsectur adipiscing elit. Leo augue nibh"
        },
        {
            name:"Clean Environment",
            icon:"/Person.png",
            desc:"hLoreum ipsuhLoreum ipsum door sit amet, clitconsectur adipiscing elit. Leo augue nibh"
        },
    ]

    const members = [
        {
          name:"Mary Henry",
          pos:"CEO",
          image:'/unsplash_llcX9pTjhXM.png'
        },
        {
          name:"Mary Henry",
          pos:"CEO",
          image:'/unsplash_EHK-EH1SRzQ.png'
        },
        {
          name:"Mary Henry",
          pos:"CEO",
          image:'/unsplash_llcX9pTjhXM.png'
        },
        {
          name:"Mary Henry",
          pos:"CEO",
          image:'/unsplash_EHK-EH1SRzQ.png'
        }
      ]

      const menu = [
        {
          name:"Alder Grilled Chinook Salmon",
          desc:"Toasted French brand chopped chedical 500 Cal",
          price:"$32"
        },
        {
          name:"Alder Grilled Chinook Salmon",
          desc:"Toasted French brand chopped chedical 500 Cal",
          price:"$32"
        },
        {
          name:"Alder Grilled Chinook Salmon",
          desc:"Toasted French brand chopped chedical 500 Cal",
          price:"$32"
        },
        {
          name:"Alder Grilled Chinook Salmon",
          desc:"Toasted French brand chopped chedical 500 Cal",
          price:"$32"
        }
      ]
  return (
   <>

   <Head>
    <title>About Us</title>

    <link rel="icon" href="/unsplash_BsYD6CP0uEw.png" />
   </Head>
     <div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
        <h1 className="text-3xl font-bold mb-[10px]">About Us</h1>
        <p className='text-[#195A00] '>About</p>
    </div>


    
    <div className="mt-[100px] flex items-center justify-center">

<div className="flex justify-around items-center gap-[100px] flex-col-reverse md:flex-row px-3  ">
  <div>
  <Image src="/Images.png" width={500} height={300} alt="icon"/>
  </div>
  <div>
    <h3>About Us</h3>
    <div>
      <h1 className="font-bold text-3xl mt-[20px]">Food is an Important <br/>part Of a balanced Diet</h1>
      <p className=' md:w-[450px] mt-[20px]'>Loreum ipsum door sit amet, consectur adipiscing elit. Leo augue nibhLoreum ipsum door sit amet, consectur adipiscing elit. Leo augue nibhr sit amet, consectur adipiscing elit. Leo augue nibh</p>

      <div className='mt-[30px] flex gap-[20px]'>
    <button className="bg-[#195A00] text-white p-2 rounded-md w-[150px]">Show More</button>
  </div>
    </div>
  </div>
</div>
</div>


<div className="flex items-center justify-center flex-col mt-[80px]">

    <div>
<h3 className="text-3xl font-bold text-center mb-[30px]">Why Choose Us</h3>
    </div>
<div>
<Image src="/unsplash_3iexvMShGfQ.png" width={800} height={300} alt="icon"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-[80%] mx-auto mt-[50px]">
    {
        WhyUs.map((item,index)=>{
            return(
                <div className=" flex flex-col items-center justify-center" key={index}>
                    <Image src={item.icon} width={70} height={50} alt="icon"/>
                    <div>
                      <h1 className="font-bold text-center">{item.name}</h1>
                      <p className="text-center text-sm">{item.desc}</p>
                    </div>
                 </div>
            )
        })
    }
</div>
</div>











<div style={{backgroundImage:'url("/Bg (2).png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="px-3 h-[350px] w-[100%] mt-[50px] relative">

  <div className="flex flex-col items-center justify-center text-white">
    <div><h1 className="text-center mt-[50px] font-bold text-2xl">Team Member</h1>
    <p className=' md:w-[450px] mt-[20px] text-center'>hLoreum ipsum door sit amet, consectur adipiscing elit. Leo augue nibhr sit amet, consectur adipiscing elit. Leo augue nibh</p>
    
    </div>


    <div className='grid grid-cols-2 md:grid-cols-4 gap-[20px] mt-[100px]'>
      {
        members.map((item,index)=>{
          return(
            <div className="bg-white h-[250px] shadow text-black" key={index}>
              <Image src={item.image} width={200} height={100} alt="icon"/>
              <div className='px-3 flex flex-col items-center justify-center mt-[2px]'>
                <h4 className="font-bold text-sm">{item.name}</h4>
                <span className='text-sm'>{item.pos}</span>
              </div>
              </div>
          )
        })
      }
    </div>



  </div>


</div>






<div className="flex items-center justify-center mt-[600px] flex-col md:mt-[300px]" >
<div>
        <h2 className="font-bold text-3xl text-center">Food Menu</h2>
        <p className=' md:w-[450px] mt-[20px] text-center text-sm'>hLoreum ipsuhLoreum ipsum door sit amet, c
       lit. Leo augue nibhr sit amet,
         consectur adipiscing elit. Leo augue nibh</p>
        </div>

        <div className="flex gap-[40px] mt-[30px] flex-col md:flex-row px-3">
          <div className='flex flex-col gap-[40px]'>
            {
              menu.map((item,index)=>{
                return (
                  <div key={index} className="flex justify-between">
                    <div>
                      <h3 className='font-bold text-sm'>{item.name}</h3>
                      <p className='text-sm'>{item.desc}</p></div>
                      <div className="font-bold text-green-700">{item.price}</div>
                  </div>
                )
              })
            }
          </div>



          <div className="flex gap-[40px] flex-col ">

          {
              menu.map((item,index)=>{
                return (
                  <div key={index} className="flex justify-between">
                    <div>
                    <h3 className='font-bold text-sm'>{item.name}</h3>
                      <p className='text-sm'>{item.desc}</p></div>
                      <div className="font-bold text-green-700">{item.price}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
</div>


   </>
  )
}

export default aboutus
