let selectedProduct = "";

const products = [
  {name: "Silver Ring 1", price: 499},
  {name: "Silver Ring 2", price: 599},
  {name: "Silver Pendant", price: 799},
  {name: "Bracelet", price: 999}
];

// ADD MORE PRODUCTS UP TO 20

const container = document.getElementById("products");

products.forEach(p => {
  container.innerHTML += `
    <div class="product">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="order('${p.name}', ${p.price})">Order Now</button>
    </div>
  `;
});

function order(name, price) {
  selectedProduct = name;

  document.getElementById("orderBox").classList.remove("hidden");

  document.getElementById("payBtn").onclick = () => {
    window.location.href =
      `upi://pay?pa=9821201453@ptyes&pn=Noore-e-Chandi&am=${price}&cu=INR`;
  };
}

function submitOrder() {
  alert("Order placed! You will receive confirmation email.");
}