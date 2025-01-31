import React from 'react'
import Head from 'next/head'


function Faq() {

    type Faq = {
        ques:string,
        answer:string
    }

    const faqs:Faq[] = [
        {
            ques:"How we serve food?",
            answer:"Loreum ipsum door sit amet, consectur adipiscingLoreum ipsum door sit elitLoreum ipsum door sit amet, consectur adipiscing elit"
        },
        {
            ques:"How we can we get in touch with you?",
            answer:"Loreum ipsum door sit amet, consectur adipiscingLoreum ipsum door sit elitLoreum ipsum door sit amet, consectur adipiscing elit"
        },
        {
            ques:"How is our food quality?",
            answer:"Loreum ipsum door sit amet, conLoreum ipsum door sitsectur adipiscing elitLoreum ipsum door sit amet, consectur adipiscing elit"
        },
        {
            ques:"What will be delivered and What?",
            answer:"Loreum ipsum door sit amet, cLoreum ipsum door sitonsectur adipiscing elitLoreum ipsum door sit amet, consectur adipiscing elit"
        },
        {
            ques:"How do we give home delivery?",
            answer:"Loreum ipsum door sit amet, coLoreum ipsum door sitnsectur adipiscing elitLoreum ipsum door sit amet, consectur adipiscing elit"
        },
        {
            ques:"is this restaurant 24 hours open?",
            answer:"Loreum ipsum door sit amet,Loreum ipsum door sit consectur adipiscing elitLoreum ipsum door sit amet, consectur adipiscing elit"
        },
    ]
  return (
    <>

    <Head>
        <title>FAQs</title>
    </Head>
     <div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
        <h1 className="text-3xl font-bold mb-[10px]">FAQ Page</h1>
        <p className='text-[#195A00] '>faq</p>
    </div>


<div className='mt-[100px] flex items-center justify-center'>

    <div className="flex flex-col px-2">

        <div>
            <h2 className='font-bold text-3xl text-center'>Questions Looks Here</h2>
            <p className='  mt-[20px] text-center'>Loreum ipsum door sit amet, consectur adipiscing elit</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] mt-[30px]">

            {
                faqs.map(({ques,answer},index)=>{
                    return(
                                <div key={index} className="bg-[#FAF7F2] h-[130px] p-4 md:w-[550px] shadow rounded-sm">
                                    <h2 className='font-bold mb-[15px]'>{ques}</h2>
                                    <p className='text-sm'>{answer}</p>

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

export default Faq
