import axios from 'axios'

export async function getAll(){
    let products
   const res =  await axios.get('http://localhost:8080/api/products')
        products = res.data
        console.log("res.dat", products)
    return products
}

export async function getOne(id){
    let product
    await axios.get(`http://localhost:8080/api/products/${id}`).then((res)=>{
        product = res.data
    })
    return product
}

export async function postData(payload){
    console.log("payload", payload)
    let newProduct
    await axios.post('http://localhost:8080/api/products', payload).then((res)=>{
        newProduct = res.data
    })
    return newProduct
}

export async function deleteData(id){
    let product
    await axios.delete(`http://localhost:8080/api/products/${id}`).then((res)=>{
        product = res.data
    })
    return product
}