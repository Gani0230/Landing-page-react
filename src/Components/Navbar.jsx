import { useRecoilState } from "recoil"
import { DarkThemeAtom } from "../Dark"
import { useEffect } from 'react'

export const Navabar = ()=>{
    const [theme,setTheme] = useRecoilState(DarkThemeAtom)

    useEffect(() => {
        if (theme) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [theme]);

    return(
        <div className="sticky top-0 z-10 bg-white flex justify-between shadow-sm border-b border-gray-300 dark:border-gray-900 dark:bg-black">
            <ul className="flex">
                <li className="m-3 p-2 pr-10 dark:text-gray-300">Logo</li>
                <button className="m-3 px-2 rounded-sm hover:bg-gray-200 text-gray-500 dark:text-gray-300 dark:hover:bg-gray-700"  >Products</button>
                <button className="m-3 px-2  rounded-sm hover:bg-gray-200 text-gray-500 dark:text-gray-300 dark:hover:bg-gray-700">Services</button>
                <button className="m-3 px-2  rounded-sm hover:bg-gray-200 text-gray-500 dark:text-gray-300 dark:hover:bg-gray-700">Work</button>
                <button className="m-3 px-2  rounded-sm hover:bg-gray-200 text-gray-500 dark:text-gray-300 dark:hover:bg-gray-700">Pricing</button>
                <button className="m-3 px-2  rounded-sm hover:bg-gray-200 text-gray-500 dark:text-gray-300 dark:hover:bg-gray-700">Blog</button>
                <button className="m-3 px-2  rounded-sm hover:bg-gray-200 text-gray-500 dark:text-gray-300 dark:hover:bg-gray-700">Contact us</button>
            </ul>
            <div className="m-3 flex align-middle">
                <button className="mr-4 cursor-pointer dark:text-white hover:bg-gray-200 px-2 rounded-full dark:hover:bg-gray-700" onClick={() => setTheme(prev => !prev)}>
                    {theme ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg> : 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>}
                    
                </button>
                <button className="mr-10 px-4 bg-black rounded-full text-white flex items-center hover:bg-gray-800 dark:hover:bg-gray-300 dark:bg-white">
                    <div className="dark:text-black">Book a Call</div> 
                    <div className="dark:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>    
                </button>
            </div>
        </div>
    )
}