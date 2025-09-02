const express= require('express')
const {PrismaClient}=require('@prisma/client')

const prisma= new PrismaClient()

const app = express()


app.get("/",(req,res)=>{
    res.send("API working")
})

//API 1: GET - /products ==> all products
app.get("/products",async (req,res) =>{
    //Data from Frontend [not required]

    
    //DB logic
    const productdata= await prisma.product.findMany()


    //Data from Backend
    res.status(200).json({message:"Fetched all the datas", data:productdata})
})

app.get("/products/:product_id",async(req,res)=>{
    try{
        //data from Frontend
        const data = req.params

        //DB logic
        const productdata= await prisma.product.findUnique({
            where:{
                product_id: data.product_id
            },
            include:{
                review: true
            }
        })

        //Data to Frontend
        res.status(200).json({message:"Fetched the data", data:productdata})
    }
    catch (err){
        res.status(500).json({message:"internal Server Error",error:err})
    }
})

app.listen(3004)