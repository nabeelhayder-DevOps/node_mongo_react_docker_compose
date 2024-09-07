const Post = require('../models/post');
const path = require('path');
const fs = require('fs');

exports.helperParser = () => {   
    
    //read all file from jsonData folder
    fs.readdir(path.join('jsonData'), (err,data) => {
        if (err) {
          return console.log(err);
        }
        const res = data.filter(elem => elem.split('.')[1] === 'json');
        
        res.forEach(el => {
            //read only json format
            fs.readFile(path.join('jsonData', el) , (err, data) => {
                if (err) {
                    return console.log(err);
                  }
                
                const res = JSON.parse(data)
                res.forEach(item => {
                    const model = {
                        category: el.split('.')[0],
                        title: item.title,
                        body: item.body,
                        section: item.category            
                    }                    
                    const savedModel = new Post(model)
                    savedModel.save();
                })
            }) 
        })
                   
    });
    
}