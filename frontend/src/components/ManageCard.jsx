import React, { useState } from 'react'
import { Pencil, Trash2 } from 'lucide-react';
import EditProfile from './EditProfile';
import { profileStore } from '../store/profileStore';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';


export default function ManageCard({ item , setIsDataModified, isDataModified}) {
    const [isEditOpen,setIsEditOpen] = useState(false);
    const deleteProfile = profileStore((state) => state.deleteProfile);
    const isLoading = profileStore((state) => state.isLoading);

    
    function handleDelete(){
        deleteProfile(item.email);
        setIsDataModified(!isDataModified)
        toast.success("Profile Deleted Successfully")
    }
    return (
        <div className='text-xs md:text-lg w-4/5 md:w-3/5 rounded-md bg-gray-700 px-2 py-2 border-[1px] border-gray-500 text-white font-semibold'>
            {!isLoading && <div className='flex'>
                <p className='w-1/5 text-center'>
                    <img src={item.photo} alt="" />
                </p>
                <p className='w-1/5 text-center'>{item.name}</p>
                <p className='w-2/5 text-center overflow-hidden'>{item.email}</p>
                <div className='w-1/5 text-center justify-center items-center md:flex'>
                    <Pencil onClick={()=>setIsEditOpen(!isEditOpen)} className='cursor-pointer bg-purple-500 rounded-2xl p-1 mx-auto md:mx-0 md:h-10 md:w-10' />
                    <Trash2 onClick={()=>handleDelete()} className='cursor-pointer mt-2 md:mt-0 md:ml-2 bg-red-500 rounded-2xl p-1 mx-auto md:mx-0 md:h-10 md:w-10' />
                </div>
            </div>}
            {
                isLoading && <BeatLoader color='white' />
            }
            {
                isEditOpen && <EditProfile item={item} setIsEditOpen={setIsEditOpen} setIsDataModified={setIsDataModified} isDataModified={isDataModified}/>
            }
        </div>
    )
}
