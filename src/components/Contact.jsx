import React from 'react'

function Contact() {
  return (
      <div className="flex items-center justify-center bg-black text-black">
        <div className="w-[1024px] h-[90vh]">
          <div className="text-center" >
                <div className="w-auto h-[10vh] flex items-center justify-center">
                  <h1 className="text-5xl font-bold max-md:text-3xl text-white ">Contact <span className="text-orange-700">Me!</span></h1>              
                </div>
                <div className="w-auto h-[40vh] flex  justify-center">
                  <form onSubmit="submit">
                      <input type="text" className="mr-4 px-8 py-1 rounded-lg" placeholder="Full Name" required/>
                      <input type="number" className="px-8 py-1 rounded-lg" placeholder="Mobile Number" required/><br /><br />
                      <input type="email" className="px-8 py-1 mr-4 rounded-lg" placeholder="Email Address" required />
                      <input type="text" className="px-8 py-1 rounded-lg" placeholder="Email Subject" required/><br /><br />
                      <textarea type="text" className="px-12 py-4 rounded-lg"  placeholder="Your Message" required /><br /><br />
                      <input type="submit" className="cursor-pointer bg-orange-700 py-1 px-8 rounded-lg hover:shadow-[1px_1px_8px_orange] hover:bg-orange-500 hover:text-orange-200"   />
                  </form>
                </div>
          </div>
        </div>
      </div>
  
  )
}

export default Contact