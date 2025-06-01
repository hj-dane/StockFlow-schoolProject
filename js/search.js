export function searchTable(inputSelector, tableSelector) {
    document.addEventListener("DOMContentLoaded", function () {
        const input = document.querySelector(inputSelector);
        const table = document.querySelector(tableSelector);

        input.addEventListener("keyup", () => {
            const filter = input.value.toLowerCase();
            const rows = table.querySelectorAll("tbody tr");

            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(filter) ? "" : "none";
            });
        });
    });
}
