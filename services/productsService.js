const PRODUCTS = [
    {
        id: 1,
        name: 'Mac Book',
        price: 5000,
        image: require('../assets/products/mac 1.jpg'),
        description: 'To be added soon'
        //color:
        //size: 
        // reviews
        //promo
    },
  
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

