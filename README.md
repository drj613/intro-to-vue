# intro-to-vue

Notes and files from working through "Intro to Vue" on (vuemastery.com)

---

## Basics

Basic format of a vue instance:

```
new vue({
  el: "#element",
  data: {},
  props: {},
  methods: {},
  computed: {}
});
```

---

For the following examples, we'll use this app:

```
let app = new vue({
    el: "#app",
    data: {
      brand: "Vue Mastery",
      product: "socks",
      image: "./path-to-image.jpg",
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      inventory: 10,
      onSale: true,
      hashedDetails: {
        color: "green",
        size: "small"
      }
      },
    props: {},
    methods: {
      doAThing() {
        console.log("hi")
      }
    },
    computed: {
      title(){
        return this.brand + ' ' + this.product
      }
    }
  });
```

---

## Rendering data

The Vue instance's data can be displayed using `{{ }}`

  ex: `<span>{{ product }}</span>`

Bind values to the data in HTML tags using `v-bind:` (or `:` for short)

  ex: `<img :src="image" />` || `<img v-bind:src="image" />`

`this` refers to the current Vue instance's `data`, as well as other methods declared inside the instance. If `data` has a `cart` property, `this.cart` will return `cart`'s value.

`methods` are their own property of the `vue` instance, separate from `data`

---

## Conditionals and Looping

To display things conditionally, use these vue directives:
  - v-if
  - v-else-if
  - v-else
  - v-show (only toggles visibility, does not insert or remove element from the DOM)

  ex:
  ```
  <p v-if="inventory > 10">In Stock</p>
  <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
  <p v-else>Out of stock</p>
  <p v-show="onSale">This item is on sale!</p>
  ```

Render iteratively with `v-for`

  ex: `<li v-for="detail in details">{{ detail }}</li>`

  or: `<li v-for="(detail, index) in details">{{ index }}: {{ detail }}</li>`

  or: `<li v-for="n in 10">{{ n }}</li>`

  or:
  ```
  <li v-for="(name, value, index) in hashedDetails">
        {{ index }} - {{ name }}: {{ value }}
  </li>
  ```

**When using `v-for`, it is recommended to give each rendered element its own unique key**

---

## Event Handling

Add event listeners to an element with `v-on:{event}` (shorthand `@{event}`)

ex: `<button @click="doAThing">Do thing.</button>`

or: `<button v-on:mouseover="doAThing">Do thing.</button>`



---

- The Vue instance is the root of every Vue application
- The Vue instance plugs into an element in the DOM
- Data can be bound to an element's `style` and `class` attributes

```
<div class="color-box" :style="{ backgroundColor: variant.variantColor }"></div>

<button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to cart</button>
```

---

## Computed Attributes

When we want to compute data for a Vue component, we add a `computed` attribute to the Vue object, and fill that with our methods

Compute methods can be referenced like data or props, simply by referring to the method name

---

## Components

Components are initialized like so:

```
Vue.component('product', {
  template: `your html here`,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      ...
    }
  },
  methods: {},
  computed: {}
  })`
```

A component must contain only _one_ element. There can be more elements nested within it, but you can not return two separate elements from a component.

Unlike for the main Vue instance, `data` is a _function_ for components. This function will return a data object that is specific to that component. We will often want to reuse components, and if we didn't structure `data` this way, all components would share the same data. Every single product would have the same images, colors, sizes, etc.

Once a component is initialized, it can be rendered to the DOM as if you were adding any other element to your HTML:

`<product></product>`

**Props** can be passed into a component from a parent element like so:

```
Vue.component('product', {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
})
```

When this is done, the prop also needs to be passed into the component in the HTML:

```
<div id="app">
  <product :user="user"></product>
</div>
```

_**You should not mutate props inside your child components**_
