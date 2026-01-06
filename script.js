const form = document.getElementById("product-form");
const productList = document.getElementById("product-list");

let products = JSON.parse(localStorage.getItem("products")) || [];

// Renderiza produtos na tabela
const renderProducts = () => {
  productList.innerHTML = "";

  products.forEach((product) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.name}</td>
      <td>R$ ${parseFloat(product.price).toFixed(2)}</td>
      <td>${product.quantity}</td>
      <td>
        <button class="edit" onclick="editProduct('${product.id}')">Editar</button>
        <button class="delete" onclick="deleteProduct('${product.id}')">Excluir</button>
      </td>
    `;

    productList.appendChild(row);
  });
};

// Adiciona ou atualiza produto
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const idField = document.getElementById("product-id");
  const name = document.getElementById("name").value.trim();
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  if (idField.value) {
    const index = products.findIndex((p) => p.id === idField.value);
    products[index] = { id: idField.value, name, price, quantity };
  } else {
    products.push({ id: Date.now().toString(), name, price, quantity });
  }

  localStorage.setItem("products", JSON.stringify(products));
  form.reset();
  renderProducts();
});

// Editar produto
const editProduct = (id) => {
  const product = products.find((p) => p.id === id);

  document.getElementById("product-id").value = product.id;
  document.getElementById("name").value = product.name;
  document.getElementById("price").value = product.price;
  document.getElementById("quantity").value = product.quantity;
};

// Excluir produto
const deleteProduct = (id) => {
  products = products.filter((p) => p.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
};

// Inicialização
renderProducts();
