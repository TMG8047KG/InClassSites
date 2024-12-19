const words = [
    ['JavaScript', 8],
    ['HTML', 7],
    ['CSS', 6],
    ['Bullshit', 6],
    ['Library', 5],
    ['Visualization', 6],
    ['Interactive', 6],
    ['React', 5],
    ['TypeScript', 6],
    ['Laravel', 7],
    ['Tailwind', 5],
    ['Bootstrap', 5],
    ['Material', 5],
    ['Android', 5],
    ['PHP', 5],
  ];
  
  WordCloud(document.getElementById('wordcloud'), {
    list: words,
    gridSize: Math.round(16 * $('#wordcloud').width() / 1024),
    weightFactor: function (size) {
      return Math.pow(size, 2.6) * $('#wordcloud').width() / 1024;
    },
    fontFamily: 'Times, serif',
    color: function (word, weight) {
      return (weight === 8) ? '#228cf0' : '#9ce3ff';
    },
    rotateRatio: 0.5,
    rotationSteps: 2,
    backgroundColor: '#64d1ff'
  });