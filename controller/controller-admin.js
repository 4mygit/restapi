
const con = require('../db');
const Product = require('../model/db');
var userProfileData

 exports.addProductForm = (req, res, next) => {
    res.send(
      '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    );
  }



  /************************************* */
  exports.getRestPosts =  (req, res, next) => {
            var userid = req.query.uid;
            
            const product = new Product();
            //product.save();

              product.fetchAllDt().then(data => {
              console.log(data)
            // res.send(data)
              res.status(200).json({
                    data:data
                    })
            })
  };

/***************************************** */

exports.getParamId = (req, res, next) => {
  var varid = req.params.varid
  var userid = req.query.uid;

  console.log(varid);
  res.send(userid)
 // res.send(varid)

}


  exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    console.log(req.body);

    // Create post in db
    res.status(201).json({
      message: 'Post created successfully!',
      post: { id: new Date().toISOString(), title: title, content: content }
    });
  };
  