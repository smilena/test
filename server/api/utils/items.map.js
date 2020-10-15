var self = module.exports = {
    mapItemsSearch: (result, currencies) => {
        let searchResult = {
            author: self.getAuthor(),
            categories: self.getCategories(result.filters),
            items: result.results.map(item => self.mapItemToSearchResult(item, currencies))
        }
        return searchResult;
    },

    mapItemToSearchResult: (item, currencies) => {
        let newItem = {
            id: item.id,
            title: item.title,
            price: self.getPrice(item, currencies),
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping
        }
        return newItem;
    },

    mapItem: (item, description, currencies) => {
        let newItem = {
            author: self.getAuthor(),
            item: {
                id: item.id,
                title: item.title,
                price: self.getPrice(item, currencies)
            },
            picture: item.pictures[0].secure_url,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            sold_quantity: item.sold_quantity,
            description: description.plain_text
        }
        return newItem;
    },

    getPrice: (item, currencies) => {
        let currency = currencies.find(currency => currency.id == item.currency_id)
        return {
            currency: currency.symbol,
            amount: item.price,
            decimals: currency.decimal_places
        }
    },

    getCategories: (filters) => {
        if(filters.length > 0){
            let filterCategory = filters.find(filter => filter.id == "category") || {};
            return filterCategory.values[0].path_from_root.map(category => category.name);
        }
        return [];
    },

    getAuthor: () => {
        return {
            name: "Sandra",
            lastname: "Guevara"
        }
    }
}