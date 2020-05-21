Vue.component('product', {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  template: `
  <div class="product">
    <div class="product-image">
      <img :src="image" :alt="altText" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>

      <div class="stock-sale-info">
        <span v-if="inStock >= 10">In Stock</span>
        <span v-else-if="inStock < 10 && inStock > 0">Almost sold out!</span>
        <span v-else :class="{ outOfStock: !inStock }">Out of stock</span>
        <span class="sale-span">{{ onSale }}</span>
        <p>Shipping: {{ shipping }}</p>
      </div>
      <ul>
        <li v-for="detail in details"> {{ detail }}</li>
      </ul>

      <div class="variations">
        <div v-for="size in sizes">
          <span class="size">{{ size }}</span>
        </div>
        <div class="variants-container">
          <div v-for="(variant, index) in variants"
               :key="variant.variantId"
               class="color-box"
               :style="{ backgroundColor: variant.variantColor }"
               @mouseover="updateProduct(index)">
          </div>
        </div>
      </div>

      <button @click="addToCart"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              class="add-to-cart">
        Add to cart
      </button>

    </div>
  </div>
  `,
  data(){
    return {
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
    }
  },
  methods: {
    addToCart() {
      app.cart += 1;
    },
    removeFromCart() {
      app.cart -= 1;
    },
    updateProduct(index){
      this.selectedVariant = index;
    },
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
    shipping() {
      return (this.user.premium? "Free" : 2.99)
    }
  }
});

let app = new Vue({
  el: "#app",
  data: {
    cart: 0,
    user: {
      fName: "Anastasia",
      lName: "Beaverhausen",
      active: true,
      premium: true
    }
  }
});
