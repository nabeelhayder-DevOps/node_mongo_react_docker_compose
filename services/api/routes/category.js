const express = require('express');
const { getCategory, getSectionList, getElement } = require('../controllers/category');

const router = express.Router();

router.get('/:categoryName', getCategory);

router.get('/:categoryName/:section', getSectionList);

router.get('/:categoryName/:section/:elementId', getElement);

module.exports = router;