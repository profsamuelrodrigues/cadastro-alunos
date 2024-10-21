const express = require('express')
const router = express.Router()

//controller
//const {register, login, getCurrentUser, update, getUserById} = require('../controllers/UserController.js')
const {register, update} = require('../controllers/AlunoController.js')

//middlewares
/* const validate = require("../middlewares/handleValidation.js")
const {userCreateValidation, loginValidation, userUpdateValidation } = require("../middlewares/userValidations.js")
const authGuard = require("../middlewares/authGuard.js")
const { imageUpload } = require('../middlewares/imageUpload.js') */

//rotas
router.post('/register', register)
router.put('/update/:id', update)

/* router.post('/login', loginValidation(), validate, login)
router.get('/profile', authGuard, getCurrentUser)
router.get('/:id', getUserById) */

module.exports = router