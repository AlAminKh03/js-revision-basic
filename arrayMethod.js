// const arr= [1,2,3,4,5]
const items=[
    {id:1, name:"super-burger", price:230},
    {id:2, name:"chesse-burger", price:320},
    {id:3, name:"mice-burger", price:520}
]
const nums=[1,2,3,4]

// for each method 

// const app= document.querySelector("#app")
// items.forEach((value)=>{
//     app.innerHTML+=
//    ` <li>
//         ${value.id} - ${value.name} -${value.price}
//     </li>`
// })

// const item=items.forEach((value,index)=>{
// return(value,index)
// })
// console.log(item)


// Array Mapping 


// const squaredValues= nums.map((squareValue)=>{
//     return squareValue * 2
// })
// 

const halfChessePrice = items.map((item)=>{
    if(item.id===2)
 {   return{
        ...item,
        price:item.price/2
 }}
 return item
})
console.log(halfChessePrice)