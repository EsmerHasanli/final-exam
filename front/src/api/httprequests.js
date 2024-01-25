import axios from 'axios'

export async function getAll(){
    let products
    axios.get('http://localhost:8080/api/products').then((res)=>{
        products = res.data
        console.log("res.data", res.data)
    })
    return products
}

export async function getOne(id){
    let product
    axios.get(`http://localhost:8080/api/products/${id}`).then((res)=>{
        product = res.data
    })
    return product
}

export async function postData(payload){
    console.log("payload", payload)
    let newProduct
    axios.post('http://localhost:8080/api/products', payload).then((res)=>{
        newProduct = res.data
    })
    return newProduct
}

export async function deletedata(id){
    let product
    axios.delete(`http://localhost:8080/api/products/${id}`).then((res)=>{
        product = res.data
    })
    return product
}