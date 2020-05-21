let app = new Vue({
  el: "#app",
  data: {
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vm-socks-green.png"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vm-socks-blue.png"
      }
    ],
    sizes: ["Small", "Medium", "Large"],
    image: "./assets/vm-socks-green.png",
    inStock: true,
    altText: "A pair of socks",
    href: "#",
    inventory: 100,
    onSale: true,
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      this.cart -= 1
    },
    updateProduct(variantImage){
      this.image = variantImage
    }
  }
});
