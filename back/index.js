const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

const PORT = 8080

const mongoose = require('mongoose') 

const ProductSchema =  mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: String,
})


const ProductModel = new mongoose.model("Products", ProductSchema)


app.get('/api/products', async (req, res) => {
    const data = await ProductModel.find({})
    if(data.length > 0){
        res.send(data)
    }
    else{
        res.send({message: "empty array"})
    }
})

app.get('/api/products/:id', async (req, res) => {
    const {id} = req.params
    const data = await ProductModel.findById(id)
    if(data){
        res.send(data)
    }
    else{
        res.send({message: "data not found"})
    }
})


app.post('/api/products', async (req, res) => {
    const condidate = await ProductModel.findOne({name: req.body.name})
    if(!condidate){
        const newData = await new ProductModel(req.body)
        await newData.save()
        res.send(newData)
    }
    else{
        res.send({message : 'data already exist'})
    }
})


app.delete('/api/products/:id', async (req, res) => {
    const {id} = req.params
    const deletedData = await ProductModel.findByIdAndDelete(id)
    if(deletedData){
        const data = await ProductModel.find({})
        res.send(data)
    }
    else{
        res.send({message: "data not found"})
    }
})

app.listen(PORT, ()=>{
    console.log(`app listenning on port ${PORT}`)
})

mongoose.connect("mongodb+srv://esmer2708:Admin123@app.tgqsqlp.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log('connected to mongo db')
})