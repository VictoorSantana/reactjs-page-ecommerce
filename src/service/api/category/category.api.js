


import api from '../api';

class CategoryApi {

    constructor() {
        this.endpoint = 'category'
    }

    getByParent(parent = 0) {
        return api.get(`${this.endpoint}/public/parents?id_category=${parent}`, { data: '' });
    }
    


}

const instance = new CategoryApi();

export default instance;