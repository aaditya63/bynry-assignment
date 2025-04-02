import React, { useEffect, useState } from 'react'
import AddProfile from '../components/AddProfile'
import { profileStore } from '../store/profileStore';
import ManageCard from '../components/ManageCard';
import { CirclePlus } from 'lucide-react';

export default function Dashboard() {
  const profiles = profileStore((state) => state.profiles);
  const getProfiles = profileStore((state) => state.getProfiles);
  const isDataFetched = profileStore((state) => state.isDataFetched);
  const [isDataModified, setIsDataModified] = useState(false);
  const [isOpenAddProduct, setIsOpenAddProduct] = useState(false);

  useEffect(() => {
    if (!isDataFetched)
      getProfiles();
  }, [])

  useEffect(() => {
    getProfiles();
  }, [isDataModified])

  return (
    <div className='flex flex-col items-center pt-10 min-h-screen bg-gradient-to-tr from-gray-700 from-30%  via-purple-900 via-50% to-gray-500 to-90%'>
      <p className='text-white font-bold md:text-xl mt-12'>Manage Products</p>
      {!isOpenAddProduct && <div className='flex justify-center mt-5 md:justify-end w-4/5 md:w-3/5'>
        <div onClick={() => setIsOpenAddProduct(true)} className='flex items-center justify-center bg-white text-purple-500 font-semibold py-3 px-5 rounded-3xl cursor-pointer hover:bg-purple-500 hover:text-white'><CirclePlus />Add Product</div>
      </div>}
      {
        isOpenAddProduct && <AddProfile isOpenAddProduct={isOpenAddProduct} setIsOpenAddProduct={setIsOpenAddProduct}/>
      }

      <div className='flex text-xs md:text-lg w-4/5 md:w-3/5 rounded-md bg-purple-600 py-2 mt-5 text-white font-semibold'>
        <p className='w-1/5 text-center'>Photo</p>
        <p className='w-1/5 text-center'>Name</p>
        <p className='w-2/5 text-center'>Email</p>
        <p className='w-1/5 text-center'>Actions</p>
      </div>
      {
        profiles && profiles.map((item, key) => <ManageCard item={item} key={key} setIsDataModified={setIsDataModified} isDataModified={isDataModified} />)
      }


    </div>
  )
}
