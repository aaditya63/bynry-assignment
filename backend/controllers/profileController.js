const Profile = require('../models/profileModels')
const express = require('express')

exports.profileAdd = async (req,res)=>{
    try{
        const profile = new Profile({
            name : req.body.name,
            photo : req.body.photo,
            email : req.body.email,
            description : req.body.description,
            address : req.body.address,
            contact : req.body.contact,
            interests : req.body.interests
        })
        await profile.save();
        return res.json({
            status : "success"
        })
    }
    catch(error){
        console.log(error);
        return res.json({
            status:"Failed"
        })
    }
}

exports.getProfiles = async (req,res)=>{
    try{
        const profiles = await Profile.find({});
        return res.json({
            status : "success",
            data:profiles
        })
    }
    catch(error){
        console.log(error);
        return res.json({
            status:"Failed"
        })
    }
}

exports.profileEdit = async (req,res)=>{
    try{
        const email = req.body.email;

        const profile = await Profile.findOne({
            email:email
        })
        
        console.log("Getting Data ",req.body);

        profile.name = req.body?.name
        profile.email = req.body?.email
        profile.photo = req.body?.photo
        profile.interests = req.body?.interests
        profile.description = req.body?.description
        profile.address = req.body?.address
        profile.contact = req.body?.contact

        profile.save()
        console.log("Saved Changes")
        res.json({
            message:"Updated Successfully"
        })
    }catch(e){
        res.json({
            success : "false"
        })
        console.log(e)
        console.log("user not updated");
    }
}

exports.deleteProfile = async(req,res)=>{
    console.log("I m in controller");
    const email = req.body.email;
    console.log("email here for delete : ",email)
    try{
        const deletedProfile = await Profile.findOneAndDelete({ email });
        
        res.json({
            message:"Profile Deleted Successfully"
        })
    }catch(e){
        res.json({
            message:"Failed to Delete Profile"
        })
    }
}