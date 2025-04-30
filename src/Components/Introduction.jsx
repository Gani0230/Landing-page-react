
export const Introduction = ()=>{
    return <div className="mx-auto text-center dark:bg-black">
        <h1 className="text-8xl font-extrabold pt-25 pb-10 dark:text-white">Building products <br />
        That Inspire </h1>
        <p className="text-2xl text-gray-500">We build human-first SaaS products <br />
        and provide expert software consulting.</p>

        <div className="flex justify-center">
            <button className="my-15  p-5 py-3 bg-black rounded-full text-white flex items-center hover:bg-gray-800 dark:hover:bg-gray-300 dark:bg-white shadow-2xl dark:shadow-white/75 shadow-black/75">
                <div className="dark:text-black">Book a Call</div> 
                <div className="dark:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>    
            </button>
        </div>
        <p className="text-l text-gray-500">Trusted by Founders and Entrepreneurs from all over the world</p>
        <img className="py-15 h-150 object-cover mx-auto"src="src\assets\images\image.png" alt="intro image" />
        <h1 className="my-2 text-4xl font-bold">Trusted by Industry Leaders</h1>
        <p className="text-[20px] text-gray-500">We've helped companies of all sizes achieve their software goals</p>

        <div className="grid grid-cols-6 mx-auto  py-20 w-5xl">
            <div className="flex items-center justify-center">
                <img className="grayscale w-[120px] h-[50px] rounded-md object-contain dark:invert" src="src\assets\images\image1.png" alt="img1" />
            </div>
            <div className="flex items-center justify-center">
                <img className="grayscale w-[120px] h-[50px] rounded-md object-cover dark:invert" src="src\assets\images\image2.png" alt="img1" />
            </div>
            <div className="flex items-center justify-center">
                <img className="grayscale w-[120px] h-[50px] rounded-md object-cover dark:invert" src="src\assets\images\image3.png" alt="img1" />
            </div>
            <div className="flex items-center justify-center">
                <img className="grayscale w-[120px] h-[50px] rounded-md object-cover dark:invert" src="src\assets\images\image4.png" alt="img1" />
            </div>
            <div className="flex items-center justify-center">
                <img className="grayscale w-[120px] h-[50px] rounded-md object-cover dark:invert" src="src\assets\images\image5.png" alt="img1" />
            </div>
            <div className="flex items-center justify-center">
                <img className="grayscale w-[120px] h-[50px] rounded-md object-cover dark:invert" src="src\assets\images\image6.png" alt="img1" />
            </div>
        </div>
    </div>
}