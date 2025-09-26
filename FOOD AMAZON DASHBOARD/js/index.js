const ctx = document.getElementById('myDonutChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Berry Bites 3.2k', 'Coconut Crunches 5k', 'Organic Almond 8.9k', 'Crunchy Nut 12.2k'],
      datasets: [{
        data: [3200, 5000, 8900, 12200],
        backgroundColor: ['#377dff', '#caa6ff', '#00c896', '#ff9f43']
      }]
    },
    options: {
      cutout: '90%', // Makes it a donut
      plugins: {
        legend: { position: 'bottom', 
          labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20
                }
        },
        tooltip: { enabled: true }
      }
    }
  });


  // graph 
  const graph = document.getElementById('distributionChart').getContext('2d');

    const data = {
      labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Walk-In Sales',
          data: [55, 45, 50, 25, 75, 55, 20],
          borderColor: '#00A86B',
          backgroundColor: '#00A86B',
          tension: 0.4,
          fill: false,
        },
        {
          label: 'Delivery Sales',
          data: [25, 55, 48, 30, 52, 60, 70],
          borderColor: '#FF7F50',
          backgroundColor: '#FF7F50',
          tension: 0.4,
          fill: false,
        }
      ]
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false // we will build our own legend
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `$${context.formattedValue}`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    };

    const chart = new Chart(graph, {
      type: 'line',
      data: data,
      options: options
    });

    // Build custom legend dynamically from Chart.js
    const legendContainer = document.getElementById('custom-legend');
    chart.data.datasets.forEach(ds => {
      const span = document.createElement('span');
      span.innerHTML = `<span class="dot" style="background:${ds.borderColor};"></span>${ds.label}`;
      legendContainer.appendChild(span);
    });

    // barchart 

        const barCtx = document.getElementById('visitChart').getContext('2d');
  const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Mobile Browser',
          data: [20, 60, 45, 30],
          backgroundColor: '#00A86B',
          borderRadius: 8,
          barThickness: 30
        },
        {
          label: 'Desktop',
          data: [35, 30, 20, 40],
          backgroundColor: '#d1fae5',
          borderRadius: 8,
          barThickness: 30
        }
      ]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { x: { grid: { display: false } }, y: { beginAtZero: true } }
    }
  });