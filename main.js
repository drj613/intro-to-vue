window.addEventListener("load", function(event) {
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
          variantColor: "Green"
        },
        {
          variantId: 2235,
          variantColor: "Blue"
        }
      ],
      sizes: ["Small", "Medium", "Large"],
      image: "./assets/vm-socks-green.png",
      altText: "A pair of socks",
      inventory: 100,
      onSale: true,
      href: "#"
    }
  })

});
