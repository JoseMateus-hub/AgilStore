const form = document.getElementById("productForm");
const list = document.getElementById("productList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td><button class="delete">Excluir</button></td>
  `;

  row.querySelector(".delete").addEventListener("click", () => {
    row.remove();
  });

  list.appendChild(row);
  form.reset();
});
