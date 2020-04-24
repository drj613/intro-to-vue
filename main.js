window.addEventListener("load", function(event) {
  let product = "Socks";

  let app = new Vue({
    el: "#app",
    data: {
      product: 'Socks',
      description: 'A pair of warm, fuzzy socks',
      image: "./assets/vm-socks-green.png",
      altText: "A pair of socks",
      inventory: 100,
      onSale: true,
      href: "#"
    }
  })

});
