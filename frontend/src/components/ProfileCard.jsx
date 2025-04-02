import React, { useState } from 'react'
import MapComponent from '../components/MapComopent';


export default function ProfileCard({ item }) {

    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [isMoreDetailsOpen, setIsMoreDetailsOpen] = useState(false);


    return (
        <div className='w-5/6 md:w-4/6 mt-2 mb-2  p-5 shadow-[inset_0_0_10px_white] rounded-3xl hover:bg-purple-400/25 transition duration-200 overflow-hidden'>
            <div className='md:flex md:px-10 md:justify-between'>
                <div className='flex gap-2 md:gap-5'>
                    <img src={item.photo} alt="Profile Pic" className='h-28 w-28 rounded-2xl' />
                    <div>
                        <p className='text-white'>Name : {item.name}</p>
                        <p className='text-wrap text-left mt-2 overflow-hidden text-white'>Email : {item.email}</p>

                    </div>
                </div>
                <div className='flex md:flex-col md:items-center md:justify-center justify-between md:gap-2'>
                    <div onClick={() => setIsSummaryOpen(!isSummaryOpen)} className='w-32 mx-auto md:mx-0 my-2 md:my-0 p-2 px-4 bg-purple-400 shadow-[inset_0_0_5px_white] rounded-3xl text-center cursor-pointer'>{isSummaryOpen ? "Close" : "Summary"}</div>
                    <div onClick={() => setIsMoreDetailsOpen(!isMoreDetailsOpen)} className='w-32 mx-auto md:mx-0 my-2 md:my-0 p-2 px-4 bg-white  rounded-3xl text-center cursor-pointer'>{isMoreDetailsOpen ? "Close Details" : "Show Details"}</div>
                </div>
            </div>
            {isSummaryOpen && <div className='mt-3 md:flex justify-between px-2 lg:px-5'>
                <div>
                    <p className='text-white'>Address : {item.address}</p>
                </div>
                <div>
                    <MapComponent custom_address={item.address} />
                </div>
            </div>}
            {isMoreDetailsOpen && <div className='px-2 md:px-5 mt-2'>
                <p className='text-white mt-2'>Description : {item.description}</p>
                <p className='text-wrap mt-2 text-left text-white'>Contact : {item.contact}</p>
                <p className='text-wrap mt-2 text-left text-white'>Interests : {item.interests}</p>
            </div>
            }
        </div>
    )
}
