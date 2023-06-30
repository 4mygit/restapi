var mysql = require('./conn');
//var mysql = require('mysql');


const products = [];
//let conn = {};
module.exports = class Product {

       host = "localhost"
    constructor() {
    /*
        this.conn = mysql.createConnection({
            host: this.host,
            user: "root",
            password: "",
            database: "hypersmoc2"
          });
          this.conn.connect(function(err) {
            if (err) throw err

            console.log('You are now connected...')
           // products.push({ title: 'Database Data', content: 'Value from DB' })
           // console.log(products)
           conn.query("SELECT * from user", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
          });
          });
          */
        //this.title = t;

    }

    save() {
        //products.push(this);
       products.push({ title: 'Database Data', content: 'Value from DB' })

    }

  async  fetchAll() {
                  mysql.query("SELECT * from user", function (err, res) {
                
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res);
                //result(null, res.insertId);
                //return  res;
            }
        });  
       // return products;
    }

     fetchAllDt() {

        return new Promise(function(resolve, reject) {
          mysql.query("SELECT * from user", (err, results) => {
          if(err) throw err;
          //console.log(results);
          else{
          resolve(results) ;
          }
          })
        })
    
              
}

}