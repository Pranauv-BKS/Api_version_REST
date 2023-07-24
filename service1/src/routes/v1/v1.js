import express from 'express'

const router = express.Router();

router.get('/',(req,res)=>{
    // console.log('hello from version1');
    return res.send('hello from verion1');
})

export default router;