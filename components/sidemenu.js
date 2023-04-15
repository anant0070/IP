import { MdDashboard, MdOutlineModeEditOutline, MdOutlineFeedback } from 'react-icons/md'
import { VscAdd } from 'react-icons/vsc'
import { AiOutlineProfile } from 'react-icons/ai'
import { useState } from 'react'

export default function Sidemenu(){
    const [idx,setIdx]=useState(0);
    return (
        <div className="hidden lg:inline-block flex-col flex-1 justify-center h-full text-gray-500 bg-gray-100 px-8 py-0 text-xl font-bold">
            <div onClick={()=> setIdx(0)} className={`flex justify-start items-center cursor-pointer mb-3 py-3 px-2 hover:bg-gray-300 ${idx===0 ? "border-r-8 border-[rgb(116,122,224)] bg-gray-300 text-[rgb(116,122,224)]":""}`}>
                <MdDashboard className='text-2xl mr-2' />
                Dashboard
            </div>

            <div onClick={()=> setIdx(1)} className={`flex justify-start items-center cursor-pointer mb-3 py-3 px-2 hover:bg-gray-300 ${idx===1 ? "border-r-8 border-[rgb(116,122,224)] bg-gray-300 text-[rgb(116,122,224)]":""}`}>
                <VscAdd className='text-2xl mr-2' />
                Add Product
            </div>

            <div onClick={()=> setIdx(2)} className={`flex justify-start items-center cursor-pointer mb-3 py-3 px-2 hover:bg-gray-300 ${idx===2 ? "border-r-8 border-[rgb(116,122,224)] bg-gray-300 text-[rgb(116,122,224)]":""}`}>
                <AiOutlineProfile className='text-2xl mr-2' />
                View Profile
            </div>

            <div onClick={()=> setIdx(3)} className={`flex justify-start items-center cursor-pointer mb-3 py-3 px-2 hover:bg-gray-300 ${idx===3 ? "border-r-8 border-[rgb(116,122,224)] bg-gray-300 text-[rgb(116,122,224)]":""}`}>
                <MdOutlineModeEditOutline className='text-2xl mr-2' />
                Edit Profile
            </div>

            <div onClick={()=> setIdx(4)} className={`flex justify-start items-center cursor-pointer mb-3 py-3 px-2 hover:bg-gray-300 ${idx===4 ? "border-r-8 border-[rgb(116,122,224)] bg-gray-300 text-[rgb(116,122,224)]":""}`}>
                <MdOutlineFeedback className='text-2xl mr-2' />
                Feedback
            </div>
            <div onClick={()=> setIdx(5)} className={`flex justify-start items-center cursor-pointer mb-3 py-3 px-2 hover:bg-gray-300 ${idx===5 ? "border-r-8 border-[rgb(116,122,224)] bg-gray-300 text-[rgb(116,122,224)]":""}`}>
                <MdOutlineFeedback className='text-2xl mr-2' />
                Logout  
            </div>
            

            
            
        </div>
    )
}

// 116,122,224