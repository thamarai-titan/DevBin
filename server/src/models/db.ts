import mongoose, {model,Schema} from "mongoose";

mongoose.connect("")

const ResourcesSchema = new Schema  ({
    title:String,
    link:String,
    description:String,
    category:String,

})

export default model('Resources', ResourcesSchema)