document.addEventListener("DOMContentLoaded", function () {
    function updateProductCounts() {
        const totalProducts = document.getElementById("total-products");
        const lowStock = document.getElementById("low-stock");
        const rows = document.querySelectorAll("#inventoryTable tbody tr");

        if (totalProducts) totalProducts.textContent = rows.length;
        if (lowStock) {
            let lowStockCount = [...rows].filter(row => {
                let stock = parseInt(row.cells[3]?.textContent || "0");
                return stock < 10;
            }).length;
            lowStock.textContent = lowStockCount;
        }
    }
    updateProductCounts();
});
