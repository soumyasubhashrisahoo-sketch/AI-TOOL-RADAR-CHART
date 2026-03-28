const labels = [
      'Structured thinking',
      'Creative ideation',
      'Coding & logic',
      'Large file handling',
      'Daily workflow',
      'Multi-tasking',
      'Explanation clarity',
      'Speed of response'
    ];

    const isDark = matchMedia('(prefers-color-scheme: dark)').matches;
    const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)';
    const labelColor = isDark ? '#9c9a92' : '#5F5E5A';
    const tickColor  = isDark ? '#73726c'  : '#888780';

    new Chart(document.getElementById('radarChart'), {
      type: 'radar',
      data: {
        labels,
        datasets: [
          {
            label: 'ChatGPT',
            data: [9, 9, 7, 6, 9, 7, 8, 8],
            borderColor: '#7F77DD',
            backgroundColor: 'rgba(127,119,221,0.15)',
            borderWidth: 2,
            pointBackgroundColor: '#7F77DD',
            pointRadius: 4,
            pointHoverRadius: 6
          },
          {
            label: 'Claude',
            data: [8, 7, 9, 7, 8, 7, 9, 7],
            borderColor: '#1D9E75',
            backgroundColor: 'rgba(29,158,117,0.13)',
            borderWidth: 2,
            pointBackgroundColor: '#1D9E75',
            pointRadius: 4,
            pointHoverRadius: 6
          },
          {
            label: 'Gemini',
            data: [7, 7, 7, 9, 7, 9, 7, 8],
            borderColor: '#378ADD',
            backgroundColor: 'rgba(55,138,221,0.12)',
            borderWidth: 2,
            pointBackgroundColor: '#378ADD',
            pointRadius: 4,
            pointHoverRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.r}/10`
            }
          }
        },
        scales: {
          r: {
            min: 0,
            max: 10,
            ticks: {
              stepSize: 2,
              color: tickColor,
              font: { size: 10 },
              backdropColor: 'transparent',
              callback: v => v === 0 ? '' : v
            },
            grid: { color: gridColor },
            angleLines: { color: gridColor },
            pointLabels: {
              color: labelColor,
              font: { size: 12, weight: '500' }
            }
          }
        }
      }
    });