const express = require('express');
const route = express.Router();

const sucursales = require('../schemas/sucursales');

route.get('/', async (req,res)=>{

    try{
        const listaSucursales = await sucursales.find();
        res.json(listaSucursales);
    }catch{
        console.log(err);
    }

});

route.post('/',async (req,res)=>{
    const {nombre,direccion,valoracion,x,y} = req.body;
    try{
        const nuevaSucursal = new sucursales({nombre,direccion,valoracion,x,y});
        await nuevaSucursal.save();
        res.json({status : 200,message : "agregado"});
    }catch{
        console.log(err);
    }
});

route.get('/:id', async (req,res)=>{
    let id = req.id;
    try{
        const suc = await sucursales.findOne({id});
        console.log(suc);
        res.json(suc);
    }catch{

    }

});

route.delete('/:id', async(req,res)=>{
    const id = req.id;
    try{
        const eliminarSucursal = await sucursales.findOneAndDelete(id);
        res.json({status : 200,message: "se elimino"});
    }catch{
        console.log(err);
    }
});

module.exports = route;