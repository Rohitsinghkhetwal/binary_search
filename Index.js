const express = require('express');
require('./config');
const Product = require('./Product');
const app = express();

app.use(express.json())


app.post('/create', async (req, resp) => {
    const data = new Product(req.body);
    const result = await data.save();

    resp.send(req.body)
    console.log(result);

});

app.get('/list', async (req, resp) => {
    const data = await Product.find();
    resp.send(data);
})

app.delete('/delete/:_id', async (req, resp) => {
    console.log(req.params);
    const data = await Product.deleteOne(req.params);
    resp.send(data);
})

app.put('/update/:_id', async (req, res) => {
    const data =await Product.updateOne(
        req.params,
        {
            $set:req.body
        }
    )
    resp.send(data);
});

app.get('/search/:key', async(req, resp) => {
    
    const data = await Product.find(
        {
            "$or": [
                {"name": {$regex:req.params.key}}
            ]
        }
    )
    resp.send(data)
})

app.listen(5000);