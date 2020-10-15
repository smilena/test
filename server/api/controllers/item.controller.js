const itemService = require('../services/item.service');
const mapItems = require('../utils/items.map');

module.exports = {
    searchItems: (req, res) => {
        const query = req.query.q;
        itemService.searchItems(query).then((data) => {
            res.json(mapItems.mapItemsSearch(data.searchResult, data.currencies))
        }).catch((e) => {
            console.log("Error in request" + e.message);
            res.json({error: "Query no válido"});
        })
    },
    getItemById: (req, res) => {
        const id = req.params.id;
        itemService.getItemById(id).then((data) => {
            res.json(mapItems.mapItem(data.item, data.description, data.currencies))
        }).catch((e) => {
            console.log("Error in request" + e.message);
            res.json({error: "Id no válido"});
        })
    }
}