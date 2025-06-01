import { inventoryData } from "./inventoryData.js";
import { toggleStar } from "./toggle.js";
import { searchTable } from "./search.js";
import { setupPagination } from "./pagination.js";
import { updateProductCounts } from "./count.js";

document.addEventListener("DOMContentLoaded", function () {

    const tableBody = document.querySelector("#inventoryTable tbody");
    
    if (!tableBody) {
        console.error("Error: Table body not found!");
        return;
    }

    inventoryData.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.qty}</td>  <!-- FIXED PROPERTY NAME -->
            <td><button class="star-btn">⭐</button></td>
        `;
        tableBody.appendChild(row);
    });

    // Attach event listeners to star buttons
    document.querySelectorAll(".star-btn").forEach(button => {
        button.addEventListener("click", function () {
            toggleStar(this);
        });
    });

    // Activate search
    searchTable("#searchInput", "#inventoryTable");

    // ✅ Setup pagination
    setupPagination("#inventoryTable", "#pagination", 10);

    // ✅ Update product counts
    updateProductCounts();
});
