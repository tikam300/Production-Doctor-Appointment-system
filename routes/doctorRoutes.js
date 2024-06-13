const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getDoctorInfoController,updateProfileController,getDoctorByIdController,doctorAppointmentsController,updateStatusController } = require('../controllers/doctorCtrl');

const router = express.Router();

//post Single doc info
router.post('/getDoctorInfo',authMiddleware,getDoctorInfoController)

//Post update profile
router.post('/updateProfile',authMiddleware,updateProfileController)

// Post || Get single doc info
router.post('/getDoctorById',authMiddleware,getDoctorByIdController)

//Get Appointments as doctor
router.get('/doctor-appointments',authMiddleware,doctorAppointmentsController)

//Post Update status
router.post('/update-status',authMiddleware,updateStatusController)

module.exports= router;