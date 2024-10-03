
const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");
router.post("/mens",async(req,res)=> {
    try{
      const addingMensRecords = new MensRanking(req.body)
      console.log(req.body);
      const insertMens = await addingMensRecords.save();
      res.status(201).send(insertMens);
    } catch(err){
        res.status(400).send(err);
    }
})

router.get("/mens",async(req,res)=> {
    try{
      const getMens = await MensRanking.find({});
      res.send(getMens);
    } catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;