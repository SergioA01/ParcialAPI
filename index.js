const exp = require('constants')
const express = require('express')

const path = require('path')

const app = express()

const PORT = 3000

//middleware
app.use(express.json())

app.use(express.static(path.join(__dirname,'./public')))

//Enrutamiento
app.use("/",require('./routes/index'))

app.get('/agregarPlato', (req, res) => {
    res.send('¡Esta es la nueva ventana!');
  });

app.listen(PORT,()=>console.log(`Server ready at port ${PORT}`))