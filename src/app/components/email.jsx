
export default  function Email(){
    return(
    <div>
      <div className="bg-zinc-800 flex items-center justify-center h-screen ">
<div className="bg-zinc-900 rounded-2xl p-2 mx-5">
<div className=" flex flex-col md:flex-row rounded-l-xl " >
  <img src="/image.jpg " className="rounded-xl h-80 object-fit md:h-70 transform hover:scale-105 hover:rounded-xl duration-200"/>
  </div>
  <div className="p-6 md:12">
    <h2 className="font-serif text-xl text-center text-white md:text-left">
      Get diet and fitness tip in your inbox
      </h2>
    <p className="max-w-xl my-4 text-xl text-white text-center leading-5 tracking-wide md:text-left"> Eat better and exercise better. Sign up for Diets Fitness newsletter.

    </p>
    <div className="flex flex-col mt-5 space-y-4 md:space-x-4 md:flex-row md:space-y-0 ">
      <input type="text" placeholder="Enter your email address" className="p-2 px-4 text-center bg-zinc-800 text-white border border-zinc-600 "/>
<div className="flex flex-col py-3 px-3 bg-lime-500 mt-4 rounded-2xl text-white hover:text-black hover:bg-lime-600 text-center text-xs duration-500" >
   subscribe
    </div>
    </div>
    
    

    </div>  
</div> 
      </div>
  </div>
  )
    
} 