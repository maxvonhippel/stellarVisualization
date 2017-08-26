Plotly.d3.csv('../stars.csv', function(err, rows) {
  function unpack(rows, key) {
    return rows.map(function(row) {
      return row[key];
    });
  }
  var data = [{
    x:unpack(rows, 'u'),
    y:unpack(rows, 'v'),
    z:unpack(rows, 'w'),
    hoverinfo:"U: " + unpack(rows, 'u') + "\nV: " + unpack(rows, 'v') + "\nW: " + unpack(rows, 'w') + "\nT: " + unpack(rows, 't'),
    mode: 'markers',
    marker: {
      cmin: 0,
      cmax: 13,
      color: unpack(rows, 't'),
      colorscale: 'Rainbow',
      size: 4,
      opacity: 0.8
    },
    type: 'scatter3d'
  }];
  var layout = {
    scene: {
      xaxis: {
        title: 'U'
      },
      yaxis: {
        title: 'V'
      },
      zaxis: {
        title: 'W'
      }
    },
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0
    }
  };
  Plotly.newPlot('chart', data, layout);
});