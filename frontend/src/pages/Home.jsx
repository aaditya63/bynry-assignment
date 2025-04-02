import React, { useEffect, useState } from 'react'
import { profileStore } from '../store/profileStore';
import { BeatLoader } from 'react-spinners';
import ProfileCard from '../components/ProfileCard';


export default function Home() {
    const getProfiles = profileStore((state) => state.getProfiles);
    const profiles = profileStore((state) => state.profiles);
    const isDataFetched = profileStore((state) => state.isDataFetched);

    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");
    
    const filteredProfiles = profiles.filter((profile) =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.email.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    useEffect(() => {
        if (!isDataFetched)
            getProfiles();
    }, [])

    useEffect(() => {
        if (profiles.length > 0)
            setLoading(false);
    }, [profiles])

    return (
        <>
            <div className='flex flex-col items-center pt-20 min-h-screen bg-gradient-to-tr from-gray-700 from-30%  via-purple-900 via-50% to-gray-500 to-90%'>

                <input
                    type="text"
                    placeholder="Search by name, Email or Place..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 w-5/6 md:w-3/6  border border-gray-300 bg-white rounded-2xl my-4"
                />
                {
                    profiles && filteredProfiles.length>0 && filteredProfiles.map((item, key) => (
                        <ProfileCard item={item} key={key} />
                    ))
                }
                {
                    loading && !isDataFetched && <BeatLoader color='white' />
                }
                {
                    profiles.length>0 && filteredProfiles.length == 0 && 
                    <div className='text-white text-xl font-semibold'>
                        <p>No profiles match your search. Try again!</p>
                    </div>
                }
            </div>
        </>
    )
}

