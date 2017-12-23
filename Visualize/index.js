// Initialize local variables to null
var data = null;
var graph = null;

// Called when the Visualization API is loaded.
function drawVisualization() {
	// create the data table.
	data = new vis.DataSet();

	// create some shortcuts to math functions
	var sqrt = Math.sqrt;
	var pow = Math.pow;
	var random = Math.random;

	// create the animation data
	var imax = 100;
	for (var i = 0; i < imax; i++) {
		var x = pow(random(), 2);
		var y = pow(random(), 2);
		var z = pow(random(), 2);
		var style = (i%2==0) ? sqrt(pow(x, 2) + pow(y, 2) + pow(z, 2)) : "#00ffff";

		data.add({x:x,y:y,z:z,style:style});
	}

	// specify options
	var options = {
		width:  '600px',
		height: '600px',
		style: 'dot-color',
		showPerspective: true,
		showGrid: true,
		keepAspectRatio: true,
		verticalRatio: 1.0,
		legendLabel: 'distance',
		onclick: onclick,
		cameraPosition: {
		  horizontal: -0.35,
		  vertical: 0.22,
		  distance: 1.8
		}
	};

	// create our graph
	var container = document.getElementById('mygraph');
	graph = new vis.Graph3d(container, data, options);
}