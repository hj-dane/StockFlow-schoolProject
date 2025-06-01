export function setupPagination(tableSelector, paginationSelector, rowsPerPage) {
    document.addEventListener("DOMContentLoaded", function () {
        const table = document.querySelector(tableSelector);
        const paginationContainer = document.querySelector(paginationSelector);
        if (!table || !paginationContainer) return;

        const rows = table.querySelectorAll("tbody tr");
        const totalRows = rows.length;
        const totalPages = Math.ceil(totalRows / rowsPerPage);

        function showPage(page) {
            let start = (page - 1) * rowsPerPage;
            let end = start + rowsPerPage;
            rows.forEach((row, index) => {
                row.style.display = index >= start && index < end ? "" : "none";
            });
        }

        function renderPagination() {
            paginationContainer.innerHTML = "";
            for (let i = 1; i <= totalPages; i++) {
                let btn = document.createElement("button");
                btn.textContent = i;
                btn.classList.add("pagination-btn");
                btn.addEventListener("click", () => showPage(i));
                paginationContainer.appendChild(btn);
            }
        }

        showPage(1);
        renderPagination();
    });
}
