import { create } from 'zustand'
// import axios from '../lib/axios'
import axios from 'axios'

export const profileStore = create((set, get) => ({
    isLoading: false,
    isDataFetched:false,
    profiles:[],

    addProfile: async ({ name, email, photo, description, address, contact, interests}) => {
        set({ loading: true });
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/add`, { name, email, photo, description, address, contact, interests });
            set({ loading: false });
            //Refresh Existing Data
            //Add Toast
            set({isDataFetched:false})
        } catch (error) {
            set({ loading: false });
            //Add Toast
        }
    },
    editProfile: async ({ name, email, photo, description, address, contact, interests}) => {
        set({ loading: true });
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/edit`, { name, email, photo, description, address, contact, interests });
            set({ loading: false });
            //Refresh Existing Data
            //Add Toast
            set({isDataFetched:false})
        } catch (error) {
            set({ loading: false });
            //Add Toast
        }
    },
    getProfiles: async () => {
        set({ loading: true });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/get`,);
            
            set({ loading: false });
            const data = res.data.data;
            set({profiles : data });
            set({isDataFetched : true });

        } catch (error) {
            set({ loading: false });
            //Add Toast
        }
    },
    deleteProfile:async (email) => {
        set({ loading: true });
        try {
            console.log("Calling API")
            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/delete`,{email});
            console.log("Called API Successfully")
            set({isDataFetched:false})
            set({ loading: false });

        } catch (error) {
            set({ loading: false });
            //Add Toast
        }
    }
}))