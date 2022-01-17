
const urlStorage = 'http://localhost:5000';

const Utils = {
    generateUrlFromName: function (value) {
       
        if (value) {
            let v = value + '';            
            v = v.replace(/[^a-zA-Z0-9 ]/g, '');
            v = v.replace(new RegExp(' ', 'g'), '-');
            v = v.replace(new RegExp('--', 'g'), '-');
            v = v.toLowerCase();
            return v;
        }
        return '';
    },

    generateImageUrl: function (hash = '', extension = '', kind = 'image') {
        const date = new Date(Number(hash));

        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const day = date.getDate();

        return `${urlStorage}/storage/${kind}/${year}/${month}/${day}/${hash}.${extension}`;
    }
};
export default Utils