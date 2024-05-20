const express = require ('express');
const usercontroler = require ('../Controler/Control.js')
const router = express.Router()

router.post('/create',usercontroler.create)
router.get('/getall',usercontroler.getall)
router.get('/getone/:id',usercontroler.getOne)
router.put('/update/:id',usercontroler.Update)
router.delete('/delete/:id',usercontroler.Delete)


module.exports=router