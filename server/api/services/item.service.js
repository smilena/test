const axios = require('axios');
const constApi = require('../utils/api');

module.exports = {
    searchItems: async (query) => {
        const searchResult = await axios.get(`${constApi.API_MELI}/sites/MLA/search`, { params: { q: query } });
        const currencies = await axios.get(`${constApi.API_MELI}/currencies/`);
        return { searchResult: searchResult.data, currencies: currencies.data };

    },

    getItemById: async (id) => {
        const item = await axios.get(`${constApi.API_MELI}/items/${id}`);
        const description = await axios.get(`${constApi.API_MELI}/items/${id}/description`);
        const currencies = await axios.get(`${constApi.API_MELI}/currencies`);
        return { item: item.data, description: description.data, currencies: currencies.data }
    }
};