const { faker } = require('@faker-js/faker');


class ProductsService {

    constructor(){
        this.products = [];
        this.generate();
    }

    async generate(){
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.products.push({
            id: (faker.seed()).toString(),
            name: faker.commerce.productName(), 
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.url()
            });
        };
    }

    async create(body) {
        if (!body) {
            return {message: 'No se han enviado datos.'}
        }

        const data = {id: faker.seed().toString(), ...body};

        this.products.push(
            data
        )
        return {
            message: 'created',
            data: data
        }
    }

    async find(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products);
            }, 5000);
        })
        // return this.products;
    }

    async findOne(id){
        return  this.products.find(item => item.id === id);
    }

    async update(id, body) {
        const product = this.products.find(p => p.id === id);
    
        if (!product) throw new Error('Product not found');
    
        Object.assign(product, body); // Actualiza todas las propiedades del producto
    
        return {
            message: 'Updated successfully',
            data: product,
            id
        };
    }
    

    async delete(id) {
        const index = this.products.findIndex(product => product.id === id);
    
        if (index === -1) return { message: 'Value not found' };
    
        const deletedProduct = this.products.splice(index, 1)[0]; // Elimina el producto en la posición `index`
    
        return {
            message: 'Deleted successfully',
            data: deletedProduct
        };
    }
    

}

module.exports = ProductsService; 