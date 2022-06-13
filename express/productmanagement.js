const express = require('express')
var router = express.Router();
products = []
router.get('/product',function(req,res){
 	console.log('product management - get request');
        res.send(products);
});
router.post('/product',function(req,res){
	console.log('product management - post request');
	const prod = req.body;
	console.log('product', prod);
	products.push(prod);
	res.send(products);
});
router.get('/productbycategory/:category',function(req,res){
	console.log('product management - get request by category');
	const prod = req.body;
	prdcategory = req.params.category;
	console.log('product', prdcategory);
	prdcateg = [];
	for (i=0;i<products.length;i++)
	{
	    if (products[i].category==prdcategory)
	    {
		prdcateg.push(products[i]);
	    }
	}
	res.send(prdcateg);
});

router.get('/productbymanufacturer/:manufacturer',function(req,res){
	console.log('product management - get request by manufacturer');
	const prod = req.body;
	prdmanufact = req.params.manufacturer;
	console.log('product', prdmanufact);
	prdmanufac = [];
	for (i=0;i<products.length;i++)
	{
	    if (products[i].manufacturer==prdmanufact)
	    {
		prdmanufac.push(products[i]);
	    }
	}
	res.send(prdmanufac);
});
module.exports = router