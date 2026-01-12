const express = require ('express');
const app = express();
const port = 3000;

app.get('/',(req,res) =>{
    res.send ("Hello World");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
  
app.post('/',(req,res) =>{
    res.send ("this is a post method");
})

app.put('/',(req,res) =>{
    res.send("This is a put method")
})
app.delete('/',(req,res) =>{
    res.send("This is a delete method")
})