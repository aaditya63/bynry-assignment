import React, { useEffect } from 'react'
import { useState } from 'react';
import { profileStore } from '../store/profileStore';
import { BeatLoader } from 'react-spinners'
import { toast } from "react-toastify";


export default function AddProfile({isOpenAddProduct,setIsOpenAddProduct}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');
    const [address, setaddress] = useState('');
    const [contact, setcontact] = useState('');
    const [interests, setinterests] = useState('');

    const [loading, setLoading] = useState(false);

    // const navigate = useNavigate()
    const addProfile = profileStore((state) => state.addProfile);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name == '' || email == '' || photo == '' || description == '' || address == '' || contact == '' || interests == ''){
            toast.error("All Detials are required!")
            return;
        }
        const data = {
            name: name,
            email: email,
            photo: photo,
            description: description,
            address: address,
            contact: contact,
            interests: interests
        }
        addProfile(data);
        setIsOpenAddProduct(false);
        
        toast.success("Profile Added Successfully")
        // Add condition and toast if photo is not ready or uploaded
        
    };
    
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file)
            return
        setLoading(true);
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "first_preset")
        data.append("cloud_name", "dv7rknqkk")

        const res = await fetch("https://api.cloudinary.com/v1_1/dv7rknqkk/image/upload", {
            method: "POST",
            body: data
        })
        const imageUrl = await res.json()
        setPhoto(imageUrl.secure_url);
    };

    function handleCancel(){
        setIsOpenAddProduct(false);
    }
    useEffect(() => {
        console.log("Setting URL on useeffect :", photo);
        setLoading(false);
    }, [photo]);

    return (

        <div className="w-full max-w-md mx-auto mt-5 px-5 mb-10">


            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-200">Add Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
                <div className='flex justify-center'>
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-300"></label>
                    <div className='mt-1 flex items-center h-20'>
                        <input type='file' id='image' className='sr-only' accept='image/*' onChange={handleImageChange} />
                        <label
                            htmlFor='image'
                            className='text-center overflow-hidden cursor-pointer text-wrap w-30 h-30 flex justify-center items-center bg-gray-800 border-gray-700 border rounded-full shadow-sm text-sm leading-4 font-medium text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
                        >
                            {!loading && !photo && <p>Upload <br /> Profile Image</p>}
                            {loading && <BeatLoader color='white' loading={true} />}
                            {!loading && photo && <img src={photo} className='h-32 w-32' alt="Profle Image" />}
                        </label>
                        {/* {newProduct.image && <span className='ml-3 text-sm text-gray-400'>Image uploaded </span>} */}
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md shadow-sm"
                    />
                </div>


                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300">description</label>
                    <input
                        id="description"
                        type="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="description"
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-300">address</label>
                    <input
                        id="address"
                        type="address"
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                        placeholder="address"
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-300">contact</label>
                    <input
                        id="contact"
                        type="contact"
                        value={contact}
                        onChange={(e) => setcontact(e.target.value)}
                        placeholder="Additional Email Or phone no."
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-300">interests</label>
                    <input
                        id="interests"
                        type="interests"
                        value={interests}
                        onChange={(e) => setinterests(e.target.value)}
                        placeholder="interests"
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md shadow-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-500 hover:bg-purple-600 cursor-pointer text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Profile
                </button>
                <div
                    onClick={handleCancel} className="w-full text-center bg-white hover:bg-purple-100 cursor-pointer text-purple-500 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Cancel Adding Product
                </div>
            </form>
        </div>
    );
};