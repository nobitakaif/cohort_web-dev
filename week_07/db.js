const mogoose= require("mongoose")
const Schema= mogoose.Schema
const ObjectId= mogoose.ObjectId
// const {ObjectId,Schema} =require('mongoose')
const User = new Schema({
    email : {type:String},
    password : String,
    name : String
})

const todo = new Schema({
    title : String,
    done : Boolean,
    userId : ObjectId
})

const UserModel= mogoose.model('users', User)
const TodoModel= mogoose.model('all_Data', todo)

module.exports={
    UserModel:UserModel,
    TodoModel:TodoModel
}