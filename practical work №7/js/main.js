let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: 'Vue Mastery',
        selectedVariant: 0,
        Sale: false,
        altText: "A pair of socks",
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0
            }
        ],
        cart: 0,
    },

    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },

        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },

        image() {
            return this.variants[this.selectedVariant].variantImage;
        },

        onSale() {
            if(this.Sale) {
                return this.product + ' ' + this.brand + 'is now on sale';
            }else {
                return this.product + ' ' + this.brand + 'is not sale';
            }
        }
    },

    methods: {
        addToCart() {
            this.cart += 1
        },

        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
        },

    }
})
