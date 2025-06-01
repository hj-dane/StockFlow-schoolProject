let inventoryData = [
    { id: 1, name: "Laptop", desc: "High-performance laptop with Intel i7, 16GB RAM, and 512GB SSD", price: "$999.99", qty: 15, location: "Rack 1, Row 2", starred: false, status: true, category: "technology" },
    { id: 2, name: "Mouse", desc: "Wireless optical mouse with ergonomic design", price: "$29.99", qty: 50, location: "Rack 2, Row 1", starred: false, status: true, category: "technology" },
    { id: 3, name: "Keyboard", desc: "Mechanical keyboard with RGB backlight and tactile switches", price: "$89.99", qty: 30, location: "Rack 3, Row 4", starred: false, status: true, category: "technology" },
    { id: 4, name: "Bread", desc: "Freshly baked whole wheat bread, 500g loaf", price: "$3.99", qty: 20, location: "Rack 4, Row 3", starred: false, status: true, category: "food" },
    { id: 5, name: "Printer", desc: "Laser printer with duplex printing and wireless connectivity", price: "$199.99", qty: 10, location: "Rack 5, Row 2", starred: false, status: true, category: "technology" },
    { id: 6, name: "T-shirt", desc: "Cotton unisex T-shirt, breathable and comfortable", price: "$14.99", qty: 12, location: "Rack 1, Row 3", starred: false, status: true, category: "clothing" },
    { id: 7, name: "Backpack", desc: "Durable laptop backpack with multiple compartments", price: "$49.99", qty: 100, location: "Rack 2, Row 4", starred: false, status: true, category: "bags" },
    { id: 8, name: "Tote Bag", desc: "Eco-friendly reusable tote bag made of canvas", price: "$19.99", qty: 25, location: "Rack 3, Row 1", starred: false, status: true, category: "bags" },
    { id: 9, name: "Wet Wipes", desc: "Antibacterial wet wipes, 80 sheets per pack", price: "$4.99", qty: 35, location: "Rack 4, Row 2", starred: false, status: true, category: "hygiene" },
    { id: 10, name: "Shampoo", desc: "Organic herbal shampoo, 500ml bottle", price: "$8.99", qty: 15, location: "Rack 5, Row 1", starred: false, status: true, category: "hygiene" },
    { id: 11, name: "Headphones", desc: "Noise-canceling over-ear headphones with Bluetooth", price: "$199.99", qty: 18, location: "Rack 1, Row 1", starred: false, status: true, category: "technology" },
    { id: 12, name: "Speakers", desc: "Compact Bluetooth desktop speakers with stereo sound", price: "$69.99", qty: 22, location: "Rack 2, Row 2", starred: false, status: true, category: "technology" },
    { id: 13, name: "Router", desc: "High-speed Wi-Fi 6 router with dual-band support", price: "$129.99", qty: 30, location: "Rack 3, Row 3", starred: false, status: true, category: "technology" },
    { id: 14, name: "Clutch Bag", desc: "Stylish women's clutch bag with zipper and compartments", price: "$39.99", qty: 40, location: "Rack 4, Row 4", starred: false, status: true, category: "bags" },
    { id: 15, name: "Chips", desc: "Crunchy potato chips, 150g family pack", price: "$2.49", qty: 8, location: "Rack 5, Row 3", starred: false, status: true, category: "food" },
    { id: 16, name: "Tablet", desc: "10-inch Android tablet with 64GB storage and Wi-Fi", price: "$299.99", qty: 12, location: "Rack 1, Row 4", starred: false, status: true, category: "technology" },
    { id: 17, name: "Hoodie", desc: "Warm and cozy hoodie with front pocket", price: "$34.99", qty: 20, location: "Rack 2, Row 3", starred: false, status: true, category: "clothing" },
    { id: 18, name: "Projector", desc: "Full HD projector for home cinema and presentations", price: "$499.99", qty: 10, location: "Rack 3, Row 2", starred: false, status: true, category: "technology" },
    { id: 19, name: "VR Headset", desc: "Wireless VR headset with motion tracking", price: "$399.99", qty: 5, location: "Rack 4, Row 1", starred: false, status: true, category: "technology" },
    { id: 20, name: "Sirloin Steak", desc: "Premium USDA sirloin steak, 1kg pack", price: "$24.99", qty: 18, location: "Rack 5, Row 4", starred: false, status: true, category: "food" },
    { id: 21, name: "Soap", desc: "Antibacterial bar soap, pack of 3", price: "$3.99", qty: 7, location: "Rack 1, Row 5", starred: false, status: false, category: "hygiene" },
    { id: 22, name: "VR Controllers", desc: "Wireless motion-sensing VR controllers (pair)", price: "$99.99", qty: 10, location: "Rack 2, Row 5", starred: false, status: false, category: "technology" },
    { id: 23, name: "Beach Shorts", desc: "Quick-dry beach shorts with elastic waistband", price: "$24.99", qty: 6, location: "Rack 3, Row 5", starred: false, status: false, category: "clothing" },
    { id: 24, name: "Game Console", desc: "Next-generation 1TB gaming console with 4K support", price: "$499.99", qty: 4, location: "Rack 4, Row 5", starred: false, status: false, category: "technology" },
    { id: 25, name: "Toothbrush", desc: "Rechargeable electric toothbrush with 3 modes", price: "$34.99", qty: 3, location: "Rack 5, Row 5", starred: false, status: false, category: "hygiene" },
    { id: 26, name: "Facial Cleanser", desc: "Gentle foaming facial cleanser for all skin types", price: "$14.99", qty: 30, location: "Rack 1, Row 1", starred: false, status: true, category: "hygiene" },
    { id: 27, name: "Fanny Pack", desc: "Compact waist bag with adjustable strap", price: "$24.99", qty: 60, location: "Rack 2, Row 2", starred: false, status: true, category: "bags" },
    { id: 28, name: "Messenger Bag", desc: "Laptop messenger bag with shoulder strap", price: "$79.99", qty: 12, location: "Rack 3, Row 3", starred: false, status: true, category: "bags" },
    { id: 29, name: "Jeans", desc: "Stretch denim jeans for casual wear", price: "$39.99", qty: 100, location: "Rack 4, Row 4", starred: false, status: true, category: "clothing" },
    { id: 30, name: "Polo Shirt", desc: "Cotton polo shirt with button-up collar", price: "$12.99", qty: 75, location: "Rack 5, Row 1", starred: false, status: true, category: "clothing" },
    { id: 31, name: "Hammer", desc: "Durable 16oz steel claw hammer for construction and DIY projects", price: "$12.99", qty: 30, location: "Rack 1, Row 1", starred: false, status: true, category: "tools" },  
    { id: 32, name: "Axe", desc: "24-inch wood splitting axe with fiberglass handle", price: "$34.99", qty: 60, location: "Rack 1, Row 2", starred: false, status: false, category: "tools" },  
    { id: 33, name: "Hoe", desc: "Sturdy garden hoe with wooden handle for soil cultivation", price: "$19.99", qty: 12, location: "Rack 2, Row 1", starred: false, status: false, category: "gardening" },  
    { id: 34, name: "Pick Axe", desc: "Heavy-duty pick axe for mining and breaking hard surfaces", price: "$45.99", qty: 100, location: "Rack 2, Row 2", starred: false, status: false, category: "tools" },  
    { id: 35, name: "Shovel", desc: "Ergonomic steel shovel with reinforced handle for digging", price: "$29.99", qty: 75, location: "Rack 3, Row 1", starred: false, status: false, category: "gardening" }  
];

document.addEventListener("DOMContentLoaded", function () {
    const inventoryTable = document.getElementById("inventoryTable");
    const paginationButtons = document.getElementById("paginationButtons");
    let currentPage = 1;
    const itemsPerPage = 10;

    window.toggleStar = function (id) {
        const item = inventoryData.find(item => item.id === id);
        if (item) {
            item.starred = !item.starred;
            populateTable();
        }
    };

    function changePage(direction) {
        const totalPages = Math.ceil(inventoryData.length / itemsPerPage);
        if (direction === "next" && currentPage < totalPages) {
            currentPage++;
        } else if (direction === "prev" && currentPage > 1) {
            currentPage--;
        }
        populateTable();
    }

    window.archiveProduct = function (id) {
        window.location.href = `delist.html?id=${id}`;
    };

    function updatePaginationButtons() {
        const filteredData = applyFilters(); 
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        
        paginationButtons.innerHTML = "";
        
        const prevBtn = document.createElement("li");
        prevBtn.classList.add("page-item");
        prevBtn.innerHTML = `<a class="page-link" href="#">Prev</a>`;
        prevBtn.addEventListener("click", () => changePage("prev"));
        paginationButtons.appendChild(prevBtn);
        
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement("li");
            pageBtn.classList.add("page-item");
            if (i === currentPage) pageBtn.classList.add("active");
            pageBtn.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageBtn.addEventListener("click", () => {
                currentPage = i;
                populateTable();
            });
            paginationButtons.appendChild(pageBtn);
        }
        
        const nextBtn = document.createElement("li");
        nextBtn.classList.add("page-item");
        nextBtn.innerHTML = `<a class="page-link" href="#">Next</a>`;
        nextBtn.addEventListener("click", () => changePage("next"));
        paginationButtons.appendChild(nextBtn);
    }

    function getFilteredData() {
        const searchQuery = document.getElementById("searchBox").value.toLowerCase();
        const activeItems = inventoryData.filter(item => item.status === true); 
        
        return activeItems.filter(item => {
            return item.name.toLowerCase().includes(searchQuery) ||
                   item.desc.toLowerCase().includes(searchQuery) ||
                   item.location.toLowerCase().includes(searchQuery);
        });
    }

    function applyFilters() {
        const searchQuery = document.getElementById("searchBox").value.toLowerCase();
        const filterValue = document.getElementById("filterDropdown").value;
        
        const activeItems = inventoryData.filter(item => item.status === true);
        
        return activeItems.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchQuery) ||
                                item.desc.toLowerCase().includes(searchQuery) ||
                                item.location.toLowerCase().includes(searchQuery);
            
            const matchesStarFilter = filterValue === 'all' ||
                                    (filterValue === 'starred' && item.starred) ||
                                    (filterValue === 'unstarred' && !item.starred);
            
            return matchesSearch && matchesStarFilter;
        });
    }

    function populateTable() {
        inventoryTable.innerHTML = "";
        const filteredData = applyFilters();
        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

        paginatedData.forEach(item => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td class="text-center" onclick="toggleStar(${item.id})">${item.starred ? "⭐" : "☆"}</td>
                <td class="text-center">${item.id}</td>
                <td><a href="invdesc2.html?id=${item.id}" class="product-link">${item.name}</a></td>
                <td>${item.desc}</td>
                <td class="text-center">${item.qty}</td>
                <td class="text-center">${item.location}</td>
                <td class="text-center">
                    <a href="delist.html?id=${item.id}" class="btn btn-success btn-sm">Archive</a>
                </td>
            `;
            inventoryTable.appendChild(row);
        });

        updatePaginationButtons();
        updateSummary();
    }

    function updateLowStockList() {
        const lowStockList = document.getElementById("lowStockList");
        const lowStockItems = inventoryData.filter(item => item.status === true && item.qty < 10);
        
        if (lowStockItems.length === 0) {
            lowStockList.innerHTML = '<div class="alert alert-warning py-2">No low stock items</div>';
            return;
        }
        
        let listHTML = '<ul class="list-group">';
        
        lowStockItems.forEach(item => {
            listHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center py-2">
                    <div>
                        <strong>${item.name}</strong>
                        <div class="text-muted small">ID: ${item.id} | Qty: ${item.qty}</div>
                    </div>
                </li>
            `;
        });
        
        listHTML += '</ul>';
        lowStockList.innerHTML = listHTML;
    }
    
    function updateSummary() {
        const activeItems = inventoryData.filter(item => item.status === true);
        const totalProducts = activeItems.length;
        const lowStockCount = activeItems.filter(item => item.qty < 10).length;
        
        document.getElementById("totalProducts").textContent = totalProducts;
        document.getElementById("lowStock").textContent = lowStockCount;
        updateLowStockList(); 
    }

    document.getElementById("filterDropdown").addEventListener("change", () => {
        currentPage = 1;
        populateTable();
    });

    populateTable();
    updateSummary();
});


/*============================================================================================================================*/


document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')); 

    console.log("Product ID from URL:", productId); 

    const product = inventoryData.find(item => item.id === productId);

    console.log("Found product:", product); 

    if (product) {
        const productDescSection = document.getElementById("productDescSection");
        productDescSection.innerHTML = `
            <h2><strong>${product.name}</strong></h2>
            <p>${product.desc}</p>
        `;

        const productDetailSection = document.getElementById("productDetailSection");
        productDetailSection.innerHTML = `
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Quantity:</strong> ${product.qty}</p>
            <p><strong>Location:</strong> ${product.location}</p>
            <p><strong>Category:</strong> ${product.category}</p>
        `;
        
        const inOutTable = document.getElementById("inOutTable").getElementsByTagName('tbody')[0];
        
        transactionData.forEach(transaction => {
            const row = inOutTable.insertRow();
            row.innerHTML = `
                <td>${transaction.requestDate}</td>
                <td>${transaction.approveDate}</td>
                <td>${transaction.borrowDate}</td>
                <td>${transaction.returnDate}</td>
            `;
        });
    } else {
        console.log("No product found with that ID."); 
        document.getElementById("productDescSection").innerHTML = "<p>Product not found.</p>";
        document.getElementById("productDetailSection").innerHTML = "";
    }
});


/*===================================================================================================================*/

document.addEventListener("DOMContentLoaded", function () {

    const transactionData = [
        { requestDate: '2025-04-01', approveDate: '2025-04-02', borrowDate: '2025-04-03', returnDate: '2025-04-04' },
        { requestDate: '2025-04-05', approveDate: '2025-04-06', borrowDate: '2025-04-07', returnDate: '2025-04-08' },
        { requestDate: '2025-04-10', approveDate: '2025-04-12', borrowDate: '2025-04-14', returnDate: '2025-04-16' }
    ];

    const inOutTableBody = document.getElementById("inOutTable").getElementsByTagName('tbody')[0];

    inOutTableBody.innerHTML = "";

    transactionData.forEach(transaction => {
        const row = inOutTableBody.insertRow();  

        const requestDateCell = row.insertCell(0);
        const approveDateCell = row.insertCell(1);
        const borrowDateCell = row.insertCell(2);
        const returnDateCell = row.insertCell(3);

        requestDateCell.textContent = transaction.requestDate;
        approveDateCell.textContent = transaction.approveDate;
        borrowDateCell.textContent = transaction.borrowDate;
        returnDateCell.textContent = transaction.returnDate;
    });
});




