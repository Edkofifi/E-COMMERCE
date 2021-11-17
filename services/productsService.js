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
    {
        id: 2,
        name: 'Mac Book',
        price: 5600,
        image: require('../assets/products/mac 2.jpg'),
        description: 'To be added soon'
        //color:
        //size: 
        // reviews
        //promo
    },
    {
        id: 3,
        name: 'Mac Book',
        price: 4000,
        image: require('../assets/products/mac 3.jpg'),
        description: 'To be added soon'
        //color:
        //size: 
        // reviews
        //promo
    },
    {
        id: 4,
        name: 'Mac Book',
        price: 6000,
        image: require('../assets/products/mac 2.jpg'),
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

