import paper from 'paper';
import Tiffany from './tiffany-window.jpg';
//use your own image if desired. . .
import './style.css';

<<<<<<< HEAD
//files you will create!!!
=======
//files you will create
>>>>>>> 09fa3b11588492f9ff187b9423f436b4f1c2af0c
import {pixelate} from './pixelate.js';
import {filter, levels, thresholds} from './filter.js';



export const p = new paper.PaperScope();
p.setup(myCanvas);

var img=[]; // 3 images


//---------initial image use------------------

/*

1) basic image = load an image and distribute across the canvas 3 times - make the size of each .75% of the window height (use raster.size to downsample the image)

* make sure to use raster.onLoad functions to work with images only after they've loaded

//-----------

*/

var raster = new p.Raster({source: Tiffany, position: p.view.center});
img[1]=raster;


raster.onLoad = ()=> {
	//raster.resizing for sampling


	//cloning the initial image to hold all 3 in img array



/*

2) create a function pixelation() - to be run on an image instance - that pixelates the image by a certain amount (pixel size should be one of the arguments). see examples

put this code into another file and import for use...

*/



/*

3) adapt that function to work on any of the loaded instances and b) also has the option to create round or square pixels... this refactoring should have 3 arguments

*/




	/*
//-----------

4) create 3 filter functions, adapted from your pixel work that alter the color of the image - explore the color object attributes and consider your options

	one can work with simple amplifications... like saturation
	one should alter the rgb values of image
	one should use a conditional logic to explore things like thresholds and conditional color replacement

*/



}

/*

//------------images and image data --------------

5) create analysis and decomposition functions that work with pixelation to:
	a) sort all of the pixels in an image from darkest to lightest
	b) sort each row of pixels to progress from darkest to lightest
	c) sort each column of pixels to progress from darkest to lightest

6) create a visualization (bar chart) that shows the distribution of dark and light pixels, this will require additional sorting and clustering of gray values by 2 decimal points (could be multiple functions)
	a) make an object to hold the color clusters from .00 -.99
	b) setup a function to read that object and array in columns, suited to fit in the second 2/3rds of the page

7) bonus - create/alter your functions so that when you hover over a pixel on the bar chart, it highlights on the original pixelated image
 double bonus - on hover, it should highlight itself and give secondary highlights to those values +/- .05 in value

*/
