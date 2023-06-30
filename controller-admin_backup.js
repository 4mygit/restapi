
const con = require('../db');
const Product = require('../model/db');
var userProfileData

 exports.addProductForm = (req, res, next) => {
    res.send(
      '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    );
  }



  /************************************* */
  exports.getRestPosts = (req, res, next) => {
    var userid = req.query.uid;
    
    const product = new Product();
    product.save();
     
    (async () => {
        const userData = await product.fetchAllDt(userid)
       // return something 
       res.status(200).json({
        userData
       })
        //console.log(userData)
        //userProfileData = something

      })()
      
      const { foo, bar }  = await product.fetchAllDt().then(result => result.data)
      console.log(foo)
      //watchOverSomeoneDoingSomething()

    //console.log(userProfileData)

/*
        res.status(200).json({
      posts: datas
    });
 */
/*  res.status(200).json({
        "data": "data received from db"
      });
*/
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
  