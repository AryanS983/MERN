const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/admin-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const adminMiddleware = require('../middlewares/admin-middleware')



router.route('/users').get(authMiddleware, adminMiddleware, AdminController.getallusers)
router.route('/contacts').get(authMiddleware, adminMiddleware, AdminController.getallcontacts)
router.route('/contact/delete/:id').delete(authMiddleware,adminMiddleware, AdminController.deleteContactbyID)
router.route('/user/delete/:id').delete(authMiddleware,adminMiddleware,AdminController.deleteUserbyID)
router.route('/user/:id').get(authMiddleware,adminMiddleware,AdminController.getUserbyID)
router.route('/user/update/:id').patch(authMiddleware,adminMiddleware,AdminController.updateUserbyID)



module.exports = router

