import express from express
const app = express()
const port = 8000;
app.use(express.json())
app.get("/", (req, res)=>{
    res.send("Hello from express server")
})
app.lister(port, ()=>{
    console.log(`server is running at https://localhost${port}`)
})