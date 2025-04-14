import mongoose, {model,Schema} from "mongoose";

mongoose.connect("mongodb+srv://tmanalan711:Thamarai@cluster0.xqnzc.mongodb.net/")

const ResourcesSchema = new Schema  ({
    id:Object,
    title:String,
    link:String,
    description:String,
    category:String,

})

export default model('Resources', ResourcesSchema)