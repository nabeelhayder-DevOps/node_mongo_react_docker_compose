const Post = require('../models/post');
const { requestHelper } = require('../helpers/requestHelper');

exports.getCategory = async (req,res, next) => {
    const categoryName = req.params.categoryName;
    const currentPage = req.query.page || 1;
    const perPage = 1;  

    const totalItems = await Post.find({category: categoryName}).countDocuments();

    const data = await Post.find({category: categoryName})
        .sort({updatedAt: -1})
        .skip((currentPage - 1) * perPage)
        .limit(perPage) 
 
    requestHelper(res, next, data, totalItems);  
   
}

exports.getSectionList = async (req,res, next) => {
    const categoryName = req.params.categoryName;
    const section = req.params.section;
    const currentPage = req.query.page || 1;
    const perPage = 1; 
    
    const totalItems = await Post.find({category: categoryName, section}).countDocuments()

    const data = await Post.find({category: categoryName, section})
        .sort({updatedAt: -1})
        .skip((currentPage - 1) * perPage)
        .limit(perPage) 
    
    requestHelper(res, next, data, totalItems);       
}

exports.getElement = async (req,res, next) => {
    const categoryName = req.params.categoryName;
    const section = req.params.section;
    const elementId = req.params.elementId;
    
    const data = await Post.find({category: categoryName, section, _id: elementId})

    requestHelper(res, next, data);    
}