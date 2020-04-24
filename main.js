let product = "Socks";

let app = new Vue({
  el: "#app",
  data: {
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "Green",
        variantImage: "./assets/vm-socks-green.png"
      },
      {
        variantId: 2235,
        variantColor: "Blue",
        variantImage: "./assets/vm-socks-blue.png"
      }
    ],
    sizes: ["Small", "Medium", "Large"],
    image: "./assets/vm-socks-green.png",
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
