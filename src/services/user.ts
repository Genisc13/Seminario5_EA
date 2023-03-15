//In charge to connect with the dB
import { Types } from "mongoose";
import { User } from "../interfaces/user.interface";
import SubjectModel from "../models/subject";
import UserModel from "../models/user";

const insertUser = async(item: User) => {
    const responseInsert = await UserModel.create(item);
    return responseInsert;
};

const getUsers = async() => {
    const responseItem = await UserModel.find({});
    return responseItem;
};

const getSubjectsbyUser=async(id:String)=>{
    const responseItem=await UserModel.findOne({_id:id}).populate('subjects');
    return responseItem;
}
const getUser = async(id: string) => {
    const responseItem = await UserModel.findOne({_id: id});
    return responseItem;
};

const updateUser = async(id: string, data: User) => {
    const responseItem = await UserModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deleteUser = async(id: string) => {
    const responseItem = await UserModel.findOneAndRemove({_id: id});
    return responseItem;
};

const getSubjects = async (idUser: string) => {
    const user = await UserModel.findById(idUser);
    if (!user) {
      throw new Error("User not found");
    }
    const subjects = await SubjectModel.find({ users: idUser });
    return subjects;
  };

export {insertUser, getUser, getUsers, updateUser, deleteUser,getSubjectsbyUser,getSubjects};
