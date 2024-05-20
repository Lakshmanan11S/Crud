const express = require('express')
const usermodel = require ('../Model/Model.js')


exports.create=async(req,res)=>{
    try{
        const newuser = new usermodel({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:req.body.password
        })

        await newuser.save()
        res.send({
            message:"user data saved successfully",
            data:newuser
        })
    }
    catch(error){
        res.status(500).send({
            message:error.message
        })
    }
}


exports.getall = async(req,res)=>{
    try{
        const userData = await usermodel.find();
        if(!userData){
            return res.status(404).json({message:"user data not found"})
        }
        res.status(200).json(userData)
    }catch(error){
        res.status(500).json({error:error})
    }
}

exports.getOne = async (req,res)=>{
    try{
        const id = req.params.id;
        const userid = await  usermodel.findById(id)
        if(!userid){
           return  res.status(404).json({message:"user id not found"})
        }
        res.status(200).json(userid)
    }catch(error){
        res.status(500).json({error:error})
    }
}

exports.Update=async(req,res)=>{
    try{
        const id =req.params.id;
        const userid = await usermodel.findById(id)
        if(!userid){
            return  res.status(404).json({message:"user id not found"})
         }
         const userupdate = await usermodel.findByIdAndUpdate(id,req.body,{new:true}) 
         res.status(200).json({message:"user Update successfully",data:userupdate})
    }catch(error){
        res.status(500).json({error:error})
    }
}

exports.Delete=async(req,res)=>{
    try{
        const id =req.params.id;
        const userid = await usermodel.findById(id)
        if(!userid){
            return  res.status(404).json({message:"user id not found"})
         }
         await usermodel.findByIdAndDelete(id)
         res.status(200).json({message:"user delete successfully"})
    }catch(error){
        res.status(500).json({error:error})
    }
}