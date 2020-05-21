let app = new Vue({
  el: "#app",
  data: {
    product: 'Socks',
    brand: 'Vue Mastery',
    description: 'A pair of warm, fuzzy socks',
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
        variantQuantity: 10,
        variantOnSale: false
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
        variantQuantity: 0,
        variantOnSale: true
      }
    ],
    sizes: ["Small", "Medium", "Large"],
    selectedVariant: 0,
    altText: "A pair of socks",
    href: "#",
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateProduct(index){
      this.selectedVariant = index;
    }
  },
  computed: {
    title(){
      return this.brand + ' ' + this.product
    },
    image(){
      return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },
    onSale(){
      if (this.variants[this.selectedVariant].variantOnSale){
        return "(this item is on sale!)"
      } else {
        return ""
      }
    },
  }
});
