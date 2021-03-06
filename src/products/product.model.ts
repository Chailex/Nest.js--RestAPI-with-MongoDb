import { stringify } from "querystring";
import * as mongoose from 'mongoose';
import { triggerAsyncId } from "async_hooks";
import { MongooseModule } from "@nestjs/mongoose";

export const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description : {type: String, required: true},
    price: {type:Number, required:true}
})

export interface Product extends mongoose.Document{
   
        id:string;
        title: string;
        
        description: string;
        price: number;
   
}