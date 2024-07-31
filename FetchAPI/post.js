const anything=async(todo)=>{
let p= await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(todo)
  })
  let response=await p.json()
return response
}
const anything2=async()=>{
    let todo={
        title: 'No so good',
        body: 'Good',
        userId: 1,
      "roll no":2
    }
    let todo1= await anything(todo)
    console.log(todo1)
    
  }
    
    anything2()
 