import express  from "express";
import * as dotenv from 'dotenv'
// import { Configuration, OpenAIApi} from 'openai'
import {v2 as cloudinary} from 'cloudinary'

import Post from '../mongodb/Models/post.js'

dotenv.config();

const router = express.Router()

export default router

 