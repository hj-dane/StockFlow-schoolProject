let inventoryData = [
    { id: 1, name: "Laptop", desc: "High-performance laptop with Intel i7, 16GB RAM, and 512GB SSD", price: "$999.99", qty: 15, location: "Rack 1, Row 2", starred: false, approved: true, category: "technology" },
    { id: 2, name: "Mouse", desc: "Wireless optical mouse with ergonomic design", price: "$29.99", qty: 50, location: "Rack 2, Row 1", starred: false, approved: true, category: "technology" },
    { id: 3, name: "Keyboard", desc: "Mechanical keyboard with RGB backlight and tactile switches", price: "$89.99", qty: 30, location: "Rack 3, Row 4", starred: false, approved: true, category: "technology" },
    { id: 4, name: "Bread", desc: "Freshly baked whole wheat bread, 500g loaf", price: "$3.99", qty: 20, location: "Rack 4, Row 3", starred: false, approved: true, category: "food" },
    { id: 5, name: "Printer", desc: "Laser printer with duplex printing and wireless connectivity", price: "$199.99", qty: 10, location: "Rack 5, Row 2", starred: false, approved: true, category: "technology" },
    { id: 6, name: "T-shirt", desc: "Cotton unisex T-shirt, breathable and comfortable", price: "$14.99", qty: 12, location: "Rack 1, Row 3", starred: false, approved: true, category: "clothing" },
    { id: 7, name: "Backpack", desc: "Durable laptop backpack with multiple compartments", price: "$49.99", qty: 100, location: "Rack 2, Row 4", starred: false, approved: true, category: "bags" },
    { id: 8, name: "Tote Bag", desc: "Eco-friendly reusable tote bag made of canvas", price: "$19.99", qty: 25, location: "Rack 3, Row 1", starred: false, approved: true, category: "bags" },
    { id: 9, name: "Wet Wipes", desc: "Antibacterial wet wipes, 80 sheets per pack", price: "$4.99", qty: 35, location: "Rack 4, Row 2", starred: false, approved: true, category: "hygiene" },
    { id: 10, name: "Shampoo", desc: "Organic herbal shampoo, 500ml bottle", price: "$8.99", qty: 15, location: "Rack 5, Row 1", starred: false, approved: true, category: "hygiene" },
    { id: 11, name: "Headphones", desc: "Noise-canceling over-ear headphones with Bluetooth", price: "$199.99", qty: 18, location: "Rack 1, Row 1", starred: false, approved: true, category: "technology" },
    { id: 12, name: "Speakers", desc: "Compact Bluetooth desktop speakers with stereo sound", price: "$69.99", qty: 22, location: "Rack 2, Row 2", starred: false, approved: true, category: "technology" },
    { id: 13, name: "Router", desc: "High-speed Wi-Fi 6 router with dual-band support", price: "$129.99", qty: 30, location: "Rack 3, Row 3", starred: false, approved: true, category: "technology" },
    { id: 14, name: "Clutch Bag", desc: "Stylish women's clutch bag with zipper and compartments", price: "$39.99", qty: 40, location: "Rack 4, Row 4", starred: false, approved: true, category: "bags" },
    { id: 15, name: "Chips", desc: "Crunchy potato chips, 150g family pack", price: "$2.49", qty: 8, location: "Rack 5, Row 3", starred: false, approved: true, category: "food" },
    { id: 16, name: "Tablet", desc: "10-inch Android tablet with 64GB storage and Wi-Fi", price: "$299.99", qty: 12, location: "Rack 1, Row 4", starred: false, approved: true, category: "technology" },
    { id: 17, name: "Hoodie", desc: "Warm and cozy hoodie with front pocket", price: "$34.99", qty: 20, location: "Rack 2, Row 3", starred: false, approved: true, category: "clothing" },
    { id: 18, name: "Projector", desc: "Full HD projector for home cinema and presentations", price: "$499.99", qty: 10, location: "Rack 3, Row 2", starred: false, approved: true, category: "technology" },
    { id: 19, name: "VR Headset", desc: "Wireless VR headset with motion tracking", price: "$399.99", qty: 5, location: "Rack 4, Row 1", starred: false, approved: true, category: "technology" },
    { id: 20, name: "Sirloin Steak", desc: "Premium USDA sirloin steak, 1kg pack", price: "$24.99", qty: 18, location: "Rack 5, Row 4", starred: false, approved: true, category: "food" },
    { id: 21, name: "Soap", desc: "Antibacterial bar soap, pack of 3", price: "$3.99", qty: 7, location: "Rack 1, Row 5", starred: false, approved: false, category: "hygiene" },
    { id: 22, name: "VR Controllers", desc: "Wireless motion-sensing VR controllers (pair)", price: "$99.99", qty: 10, location: "Rack 2, Row 5", starred: false, approved: false, category: "technology" },
    { id: 23, name: "Beach Shorts", desc: "Quick-dry beach shorts with elastic waistband", price: "$24.99", qty: 6, location: "Rack 3, Row 5", starred: false, approved: false, category: "clothing" },
    { id: 24, name: "Game Console", desc: "Next-generation 1TB gaming console with 4K support", price: "$499.99", qty: 4, location: "Rack 4, Row 5", starred: false, approved: false, category: "technology" },
    { id: 25, name: "Toothbrush", desc: "Rechargeable electric toothbrush with 3 modes", price: "$34.99", qty: 3, location: "Rack 5, Row 5", starred: false, approved: false, category: "hygiene" },
    { id: 26, name: "Facial Cleanser", desc: "Gentle foaming facial cleanser for all skin types", price: "$14.99", qty: 30, location: "Rack 1, Row 1", starred: false, approved: true, category: "hygiene" },
    { id: 27, name: "Fanny Pack", desc: "Compact waist bag with adjustable strap", price: "$24.99", qty: 60, location: "Rack 2, Row 2", starred: false, approved: true, category: "bags" },
    { id: 28, name: "Messenger Bag", desc: "Laptop messenger bag with shoulder strap", price: "$79.99", qty: 12, location: "Rack 3, Row 3", starred: false, approved: true, category: "bags" },
    { id: 29, name: "Jeans", desc: "Stretch denim jeans for casual wear", price: "$39.99", qty: 100, location: "Rack 4, Row 4", starred: false, approved: true, category: "clothing" },
    { id: 30, name: "Polo Shirt", desc: "Cotton polo shirt with button-up collar", price: "$12.99", qty: 75, location: "Rack 5, Row 1", starred: false, approved: true, category: "clothing" }
];

/*=================================*/

// Function to simulate fetching product details from the inventory
function fetchProductDetails(productId) {
    const product = inventoryData.find(item => item.id === productId);
    
    if (product) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(product), 1000); // Simulating a 1-second delay for API call
        });
    } else {
        return Promise.reject("Product not found");
    }
}

function getProductInfo(productId) {
    fetchProductDetails(productId)
        .then(product => {
            console.log("Product Details:", product);
            populateProductDetails(product);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

// Example usage: Fetch product with ID 1 (Laptop)
getProductInfo(1);

// Mock Transactions for the "In and Out" table
const transactions = [
    {
      requestDate: "2025-04-01",
      approveDate: "2025-04-02",
      borrowedDate: "2025-04-03",
      returnedDate: "2025-04-10"
    },
    {
      requestDate: "2025-04-12",
      approveDate: "2025-04-13",
      borrowedDate: "2025-04-14",
      returnedDate: "2025-04-20"
    },
    {
      requestDate: "2025-04-21",
      approveDate: "2025-04-22",
      borrowedDate: "2025-04-23",
      returnedDate: null  // Not yet returned
    }
];

// Populate Product Details in the HTML
function populateProductDetails(product) {
    const productDescSection = document.getElementById('productDescSection');
    const productDetailSection = document.getElementById('productDetailSection');
  
    
    productDescSection.innerHTML = `
      <p>${product.desc}</p>
    `;
  
    
    productDetailSection.innerHTML = `
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Quantity Available:</strong> ${product.qty}</p>
      <p><strong>Location:</strong> ${product.location}</p>
      <p><strong>Category:</strong> ${product.category}</p>
    `;
}

// Populate In and Out Table
function populateInOutTable(transactions) {
    const tbody = document.getElementById('inOutTable').querySelector('tbody');
    tbody.innerHTML = '';
  
    transactions.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${record.requestDate}</td>
          <td>${record.approveDate}</td>
          <td>${record.borrowedDate}</td>
          <td>${record.returnedDate ? record.returnedDate : '-'}</td>
        `;
        tbody.appendChild(row);
    });
}

// Initial Load
populateInOutTable(transactions);



/* for button redirects later of API */

/* 
<button onclick="loadItemById(1)">Laptop</button>
<button onclick="loadItemById(2)">Mouse</button>
<button onclick="loadItemById(3)">Keyboard</button>

================================================================

function loadItemById(id) {
    const item = inventoryData.find(product => product.id === id);

    if (item) {
        document.querySelector('.product-title').innerText = item.name;
        document.getElementById('productDescSection').innerText = item.desc;
        document.getElementById('productDetailSection').innerHTML = `
            <p>Price: ${item.price}</p>
            <p>Quantity: ${item.qty}</p>
            <p>Location: ${item.location}</p>
        `;
    } else {
        console.log('Item not found.');
    }
}
*/