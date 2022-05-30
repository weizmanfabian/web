import express from "express";
import { create, deleteRegister, searchBy, update } from "../controllers/defaultController.js"
const router = express.Router()

router.post('/create/:tabla', create)

router.delete('/delete/:tabla/:name/:value', deleteRegister)

router.put('/update/:tabla/:name/:value', update)

router.get('/searchBy/:tabla/:name/:value', searchBy)

export default router