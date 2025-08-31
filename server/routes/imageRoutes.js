import express from 'express'
import {generateImage} from "../controllers/imageController.js";  // ✅ default import
import userAuth from "../middlewares/auth.js";                  // ✅ add .js too



const imageRouter = express.Router()

imageRouter.post("/generate-image", userAuth, generateImage)

export default imageRouter