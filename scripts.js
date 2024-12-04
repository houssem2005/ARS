document.addEventListener('DOMContentLoaded', () => {
  // Corporate Health Chart
  const corpHealthCtx = document.getElementById('corpHealthChart').getContext('2d');
  new Chart(corpHealthCtx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Corporate Health Index',
          data: [65, 70, 75, 80, 85],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Corporate Health Over Time',
        },
      },
    },
  });

  // Wildfire Prediction Chart
  const wildfireCtx = document.getElementById('wildfireChart').getContext('2d');
  new Chart(wildfireCtx, {
    type: 'bar',
    data: {
      labels: ['Zone A', 'Zone B', 'Zone C', 'Zone D'],
      datasets: [
        {
          label: 'Wildfire Risk (%)',
          data: [20, 50, 30, 70],
          backgroundColor: ['#ff0000', '#ff8000', '#ffff00', '#008000'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Wildfire Risk by Zone',
        },
      },
    },
  });

  // Moisture Levels Chart
  const moistureCtx = document.getElementById('moistureChart').getContext('2d');
  new Chart(moistureCtx, {
    type: 'doughnut',
    data: {
      labels: ['Zone 1', 'Zone 2', 'Zone 3'],
      datasets: [
        {
          label: 'Moisture Levels',
          data: [60, 20, 80],
          backgroundColor: ['#3498db', '#1abc9c', '#9b59b6'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Moisture Levels by Zone',
        },
      },
    },
  });
});
