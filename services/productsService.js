const PRODUCTS = [
    {
        id: 1,
        name: 'MacPro ',
        price: 5000,
        size: 12,
        color: 'grey',
        image: require('../assets/products/mac 1.jpg'),
        description: 'RAM: 8GB, 512 SSD, Keyboard light available, 2020 model.'
     
    },
    {
        id: 2,
        name: 'MacPro',
        price: 5600,
        size: 15, 
        color: 'black',
        image: require('../assets/products/mac 2.jpg'),
        description: 'RAM: 12GB, 258 SSD, 2020 model.',
    },
    {
        id: 3,
        name: 'MacPro',
        price: 4000,
        size: 15,
        color: 'grey',
        image: require('../assets/products/mac 3.jpg'),
        description: 'RAM: 8GB, 258 SSD, Keyboard light available, 2019 model.'
    },
    {
        id: 4,
        name: 'MacPro',
        price: 6000,
        size: 12,
        color: 'grey',
        image: require('../assets/products/mac 4.jpg'),
        description: 'RAM: 12B, 512 SSD, Keyboard light available, 2021 model.'
       
    },
    {
        id: 5,
        name: 'MacPro',
        price: 5100,
        size: 13,
        color: 'grey',
        image: require('../assets/products/mac 5.jpg'),
        description: 'RAM: 8GB, 258 SSD, Keyboard light available, 2020 model.'
        
    },
    {
        id: 6,
        name: 'MacPro',
        price: 4700,
        size: 14,
        color: 'grey',
        image: require('../assets/products/mac 6.jpg'),
        description: 'RAM: 8GB, 258 SSD, Keyboard light available, 2018 model.'
       
    },
    {
        id: 7,
        name: 'MacPro',
        price: 4000,
        size: 12,
        color: 'black',
        image: require('../assets/products/mac 7.jpg'),
        description: 'RAM: 8GB, 258 SSD, Keyboard light available, 2018 model.'
        
    },
    {
        id: 8,
        name: 'Macpro',
        price: 6500,
        size: 12,
        color: 'black',
        image: require('../assets/products/mac 8.jpg'),
        description: 'RAM: 12GB, 512 SSD, Keyboard light available, 2021 model.'
        
    }
   
   
  
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

