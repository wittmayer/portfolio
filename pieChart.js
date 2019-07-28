var ctx = document.getElementById('myPieChart').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Daily', 'Weekly', 'Monthly', 'Every few months', 'Once or twice a year', 'Hardly ever'],
        datasets: [{
            label: '%',
            data: [17.9, 39.3, 14.3, 21.4, 0, 7.1],
            backgroundColor: [
                'rgba(59, 171, 220, 1)',
                'rgba(11, 57, 84, 1)',
                'rgba(33, 104, 105, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(190, 187, 187, 1)',
                'rgba(245, 240, 246, 1)'
            ],
            borderColor: [
                'rgba(59, 171, 220, 1)',
                'rgba(11, 57, 84, 1)',
                'rgba(33, 104, 105, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(190, 187, 187, 1)',
                'rgba(245, 240, 246, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 50,
          bottom: 50
        }
      },
      legend: {
        position: 'top',
        padding: 10
      }
    }
});
