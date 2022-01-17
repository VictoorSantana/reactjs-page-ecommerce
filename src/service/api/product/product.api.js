


import api from '../api';

class ProductApi {

    constructor() {
        this.endpoint = 'product'
    }

    getBySection() {
        return api.get(`${this.endpoint}/section/featured`, { data: '' });
    }


}

const instance = new ProductApi();

export default instance;