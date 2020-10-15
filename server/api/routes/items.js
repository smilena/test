const controller = require('../controllers/item.controller');
const express = require('express');
const router = express.Router();

router.route('/api/items')
    .get(controller.searchItems);

router.route('/api/items/:id')
    .get(controller.getItemById);

module.exports = router;