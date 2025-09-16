const ctx = document.getElementById('myDonutChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Berry Bites', 'Coconut Crunches', 'Organic Almond', 'Crunchy Nut'],
      datasets: [{
        data: [3200, 5000, 8900, 12200],
        backgroundColor: ['#377dff', '#caa6ff', '#00c896', '#ff9f43']
      }]
    },
    options: {
      cutout: '90%', // Makes it a donut
      plugins: {
        legend: { position: 'bottom' },
        tooltip: { enabled: true }
      }
    }
  });