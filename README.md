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
  methods: {}
});
```

---

For the following examples, we'll use this app:

```
let app = new vue({
    el: "#app",
    data: {
      product: "socks"
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
