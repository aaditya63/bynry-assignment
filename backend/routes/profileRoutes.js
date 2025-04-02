const express = require('express');
const {profileAdd,getProfiles,profileEdit,deleteProfile} = require('../controllers/profileController')


const ProfileRouter = express.Router()

ProfileRouter.post('/add',profileAdd);
ProfileRouter.get('/get',getProfiles);
ProfileRouter.post('/edit',profileEdit);
ProfileRouter.post('/delete',deleteProfile);






module.exports = ProfileRouter;