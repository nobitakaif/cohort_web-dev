const mongoose=require("mongoose")

const Schema=mongoose.Schema
const ObjectId=mongoose.ObjectId

const userSchema= new Schema({
    email     : {type:String,unique:true},
    password  : String,
    firstName : String,
    lastName  : String
})

const adminSchema = new Schema({
    email     : {type:String,unique:true},
    password  : String,
    firstName : String,
    lastName  : String
})

const allCourses= new Schema({
    title       : String,
    description : String,
    price       : Number,
    creatorId   : ObjectId
})

const purchasedCourse= new Schema({
    courseId : ObjectId,
    userId   : ObjectId
})

const UserModel=mongoose.model("users",userSchema)
const AdminModel=mongoose.model("admin",adminSchema)
const AllCoursesModel=mongoose.model("allCourses",allCourses)
const PurchasedModel=mongoose.model("purchasedCourses",purchasedCourse)

module.exports={
    UserModel,
    AdminModel,
    AllCoursesModel,
    PurchasedModel
}



