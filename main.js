var app = new Vue({
    el: "#app",
    data:{
        products: 'Socks',
        image: './assets/vmSocks.jpg',
        imageLink: 'https://vuejs.org/v2/guide/',
        description: 'This is a sample description',
        onSale: true,
        sizes: [10, 20, 40, 56, 80],
        cart: 0
    },
    methods: {
        addToCart: function (){
            this.cart += 1;
        }
    },
})
