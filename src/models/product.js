const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromJSONFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(title, image, description, price) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id = Math.random().toString()
        getProductsFromJSONFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        const pr = getProductsFromJSONFile(cb);
        console.log('pr', pr)
        return pr
    }
};
