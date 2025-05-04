document.getElementById("sort").addEventListener("change", function () {
  const sortBy = this.value;
  const tbody = document.querySelector("#comparisonTable tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  rows.sort((a, b) => {
    const getCell = (row, attr) => row.querySelector(`[data-${attr}]`).dataset[attr];

    switch (sortBy) {
      case "quality":
        return getCell(b, "quality") - getCell(a, "quality");
      case "quantity":
        return getCell(b, "quantity") - getCell(a, "quantity");
      case "price":
        return getCell(a, "price") - getCell(b, "price");
      default:
        return a.cells[0].innerText.localeCompare(b.cells[0].innerText);
    }
  });

  tbody.innerHTML = "";
  rows.forEach(row => tbody.appendChild(row));
});

document.getElementById("sort").addEventListener("change", function () {
  const sortBy = this.value;
  const tbody = document.querySelector("#comparisonTable tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  rows.sort((a, b) => {
    const getCell = (row, attr) => row.querySelector(`[data-${attr}]`).dataset[attr];

    switch (sortBy) {
      case "quality":
        return getCell(b, "quality") - getCell(a, "quality");
      case "quantity":
        return getCell(b, "quantity") - getCell(a, "quantity");
      case "price":
        return getCell(a, "price") - getCell(b, "price");
      default:
        return a.cells[0].innerText.localeCompare(b.cells[0].innerText);
    }
  });

  tbody.innerHTML = "";
  rows.forEach(row => tbody.appendChild(row));
});
