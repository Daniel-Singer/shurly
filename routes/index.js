import express from 'express';
import URL from '../models/url.js';

const router = express.Router();

// @route 
router.get('/:code', async(req,res) => {
  try{
    const url = await URL.findOne({urlCode: req.params.code});
    if(url){
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No url found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error')
  }
})
export default router;