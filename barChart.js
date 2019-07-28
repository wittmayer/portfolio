var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Save content', 'View other content', 'Watch yoga videos', 'Create sequences', 'Collaborate on sequences', 'Share and send sequences'],
        datasets: [{
            label: '% of yoga instructors',
            data: [86, 71, 57, 43, 43, 43],
            backgroundColor: [
                'rgba(59, 171, 220, .2)',
                'rgba(11, 57, 84, .2)',
                'rgba(33, 104, 105, .2)',
                'rgba(75, 192, 192, .2)',
                'rgba(59, 171, 220, .2)',
                'rgba(11, 57, 84, .2)'
            ],
            borderColor: [
                'rgba(59, 171, 220, 1)',
                'rgba(11, 57, 84, 1)',
                'rgba(33, 104, 105, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(59, 171, 220, 1)',
                'rgba(11, 57, 84, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 50,
            bottom: 50
          }
        }
      }
});
