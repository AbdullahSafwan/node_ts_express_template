import app from "./app";
import config from "./config/env";

const port = config.port

app.use('/', (req, res)=>{
    res.send('Server is up and running')
})

app.listen(port, ()=>{
    console.log('listening to port', port)
})

export default app