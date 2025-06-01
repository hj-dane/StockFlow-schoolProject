const inventoryData = [
  { id: 1, name: "Laptop", qty: 15, category: "technology", logs: true, threshold: 10 },
  { id: 2, name: "Mouse", qty: 50, category: "technology", logs: true, threshold: 10 },
  { id: 3, name: "Keyboard", qty: 30, category: "technology", logs: true, threshold: 10 },
  { id: 4, name: "Bread", qty: 20, category: "food", logs: true, threshold: 10 },
  { id: 5, name: "Printer", qty: 10, category: "technology", logs: true, threshold: 10 },
  { id: 6, name: "T-shirt", qty: 12, category: "clothing", logs: true, threshold: 10 },
  { id: 7, name: "Backpack", qty: 100, category: "bags", logs: true, threshold: 10 },
  { id: 8, name: "Tote Bag", qty: 25, category: "bags", logs: true, threshold: 10 },
  { id: 9, name: "Wet Wipes", qty: 35, category: "hygiene", logs: true, threshold: 10 },
  { id: 10, name: "Shampoo", qty: 15, category: "hygiene", logs: true, threshold: 10 },
  { id: 11, name: "Headphones", qty: 18, category: "technology", logs: false, threshold: 10 },
  { id: 12, name: "Speakers", qty: 22, category: "technology", logs: false, threshold: 10 },
  { id: 13, name: "Router", qty: 30, category: "technology", logs: true, threshold: 10 },
  { id: 14, name: "Clutch Bag", qty: 40, category: "bags", logs: true, threshold: 10 },
  { id: 15, name: "Chips", qty: 8, category: "food", logs: false, threshold: 10 },
  { id: 16, name: "Tablet", qty: 12, category: "technology", logs: true, threshold: 10 },
  { id: 17, name: "Hoodie", qty: 20, category: "clothing", logs: true, threshold: 10 },
  { id: 18, name: "Projector", qty: 10, category: "technology", logs: true, threshold: 10 },
  { id: 19, name: "VR Headset", qty: 5, category: "technology", logs: true, threshold: 10 },
  { id: 20, name: "Sirloin Steak", qty: 18, category: "food", logs: true, threshold: 10 },
  { id: 21, name: "Soap", qty: 7, category: "hygiene", logs: true, threshold: 10 },
  { id: 22, name: "VR Controllers", qty: 10, category: "technology", logs: true, threshold: 10 },
  { id: 23, name: "Beach Shorts", qty: 6, category: "clothing", logs: false, threshold: 10 },
  { id: 24, name: "Game Console", qty: 4, category: "technology", logs: true, threshold: 10 },
  { id: 25, name: "Toothbrush", qty: 3, category: "hygiene", logs: true, threshold: 10 },
  { id: 26, name: "Facial Cleanser", qty: 30, category: "hygiene", logs: true, threshold: 10},
  { id: 27, name: "Fanny Pack", qty: 60, category: "bags", logs: true, threshold: 10 },
  { id: 28, name: "Messenger Bag", qty: 12, category: "bags", logs: true, threshold: 10 },
  { id: 29, name: "Jeans", qty: 100, category: "clothing", logs: true, threshold: 10 },
  { id: 30, name: "Polo Shirt", qty: 75, category: "clothing", logs: true, threshold: 10 },
  { id: 31, name: "Hammer", qty: 30, category: "tools", logs: true, threshold: 10 },  
  { id: 32, name: "Axe", qty: 60, category: "tools", logs: true, threshold: 10 },  
  { id: 33, name: "Hoe", qty: 12, category: "gardening", logs: false, threshold: 10 },  
  { id: 34, name: "Pick Axe", qty: 100, category: "tools", logs: false, threshold: 10 },  
  { id: 35, name: "Shovel", qty: 75, category: "gardening", logs: true, threshold: 10 }  
];

function generateColors(count) {
  return Array.from({length: count}, (_, i) => {
      const hue = (i * 360 / count) % 360;
      return `hsl(${hue}, 70%, 60%)`;
  });
}

function createCategoryChart() {
  const categoryColors = {
    technology: " #796984",
    food: "rgb(100, 86, 99)",
    clothing: " #5A4D6B",
    bags: "rgb(79, 50, 85)",
    hygiene: "rgb(170, 129, 160)",
    tools: "rgb(175, 148, 238)",
    gardening: "rgb(94, 77, 114)"
  };

  const categoryData = inventoryData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.qty;
    return acc;
  }, {});

  const categories = Object.keys(categoryData);
  const quantities = Object.values(categoryData);

  const backgroundColors = categories.map(cat => categoryColors[cat] || "#CCCCCC");

  const ctx = document.getElementById('categoryChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: categories,
      datasets: [{
        data: quantities,
        backgroundColor: backgroundColors
      }]
    },
    options: getChartOptions('Quantity by Category')
  });
}

function createStatusChart() {
  const statusData = inventoryData.reduce((acc, item) => {
      const status = item.logs ? 'On Hand' : 'Borrowed';
      acc[status] = (acc[status] || 0) + item.qty;
      return acc;
  }, {});

  const ctx = document.getElementById('statusChart').getContext('2d');
  new Chart(ctx, {
      type: 'pie',
      data: {
          labels: Object.keys(statusData),
          datasets: [{
              data: Object.values(statusData),
              backgroundColor: ['#4CAF50', '#F44336']
          }]
      },
      options: getChartOptions('On Hand vs Borrowed')
  });
}

function getChartOptions(title) {
  return {
      responsive: true,
      plugins: {
          title: { display: true, text: title, font: { size: 16 } },
          tooltip: {
              callbacks: {
                  label: function(context) {
                      const total = context.dataset.data.reduce((a, b) => a + b, 0);
                      const percentage = Math.round(context.raw / total * 100);
                      return `${context.label}: ${context.raw} (${percentage}%)`;
                  }
              }
          }
      }
  };
}

function updateCardStats() {
  const totalProducts = inventoryData.length;
  const lowStockItems = inventoryData.filter(item => item.qty < item.threshold).length;
  const onHandItems = inventoryData.filter(item => item.logs === true).length;
  const borrowedItems = inventoryData.filter(item => item.logs === false).length;

  // Update the DOM
  document.getElementById('totalProducts').textContent = totalProducts;
  document.getElementById('lowStock').textContent = lowStockItems;
  document.getElementById('onHand').textContent = onHandItems;
  document.getElementById('borrowed').textContent = borrowedItems;
}

document.addEventListener('DOMContentLoaded', () => {
  createCategoryChart();
  createStatusChart();
  updateCardStats(); 
});

