// const express=require('express')
// require('./db/config');
// const cors=require("cors");
// // console.log("Hi Ayansh!!")
// const Product=require("./db/Configuration")
// const app=express();
// app.use(express.json());
// app.use(cors());

// app.get("/products",async(req,resp)=>{
//     let products= await Product.find();
//     if (products.length>0)
//     {
//       resp.send(products)
//     }
//     else{
//      resp.send({result:"No Product found"})
//     }
    
//     console.log(products)
//  })
//  app.listen(4500);
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Configuration = require('./db/Configuration');
const cors=require("cors");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://development:X3TcC8tKnI5JINuR@betalive.9sakb.gcp.mongodb.net/database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.get('/api/configurations/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const configuration = await Configuration.findById(id);
        if (!configuration) {
            return res.status(404).json({ message: 'Configuration not found' });
        }
        const result=json(configuration.data)
        // console.log(res.json(configuration.data));
        console.log(result)
    } catch (error) {
        console.error('Error fetching configuration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.put('/api/configurations/:id', async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  try {
      const configuration = await Configuration.findOneAndUpdate({ configId: id }, { data }, { new: true });
      if (!configuration) {
          return res.status(404).json({ message: 'Configuration not found' });
      }
      res.json({ message: 'Configuration updated successfully' });
  } catch (error) {
      console.error('Error updating configuration:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

