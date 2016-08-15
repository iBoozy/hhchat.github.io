(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 600,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/_2b03ac4cd1b9353be06c4d6dddd61c70.png", id:"_2b03ac4cd1b9353be06c4d6dddd61c70"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._2b03ac4cd1b9353be06c4d6dddd61c70 = function() {
	this.initialize(img._2b03ac4cd1b9353be06c4d6dddd61c70);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,801,595);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2b03ac4cd1b9353be06c4d6dddd61c70();
	this.instance.setTransform(-73.3,-54.5,0.183,0.183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-54.5,146.8,109);


// stage content:
(lib.arcadedoc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://iboozy.github.io/hhchat.github.io/arcade/agario", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.setTransform(302.3,216.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7BAQgbgWAAgqQAAgmAagYQAZgXApgBQAoAAAUAVQAUAUAAAmIAAAQIh2AAQABAUAOAKQANALAYAAQARgBAQgFQAQgHAIgHIAGAAIAAArQgSAHgQADQgPAEgUAAQgvgBgagWgAgWgtQgKAIAAASIBCAAQAAgRgIgIQgIgJgQAAQgNABgLAHg");
	this.shape.setTransform(362.9,53.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDBdQgRgXgBgoQAAgVAHgOQAGgQALgMQAJgLAOgGQAOgGAPAAQAMAAAKADIATAIIAAhGIA1AAIAADiIg1AAIAAgRQgNALgMAGQgKAFgQAAQgeAAgSgXgAgUgEQgKALAAAXQAAAYAIALQAIALARAAQAHAAAJgDQAHgDAGgEIAAhPQgFgCgGgBIgLgBQgTAAgLANg");
	this.shape_1.setTransform(336.8,50.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBIQgQgPAAgWQAAgSAIgMQAIgJAPgHQAPgGAWgDQATgDAYgBIAAgBQAAgOgMgFQgLgFgTAAQgNAAgPAEIgVAHIgFAAIAAgnIAbgFQATgDATAAQArAAAUANQAUAOAAAeIAABuIg1AAIAAgSIgKAIIgMAHQgHAEgHACQgJABgKAAQgXAAgQgOgAAGAHIgRAEQgIACgEAFQgEAFAAAHIABAJQABADADADQAEADAEABIAOABQAHAAAIgDQAIgDAGgFIAAgiIgXACg");
	this.shape_2.setTransform(311.3,53.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBRQgSgFgNgLQgNgKgHgRQgHgQAAgWQAAgVAHgRQAIgQAOgLQANgLASgEQAPgFATAAQARAAAOADQAOAEAMAGIAAAtIgHAAIgHgGIgLgHIgNgFQgIgDgJAAQgVAAgJAOQgMANAAAVQAAAYAMAMQAKAMAVAAQAKAAAIgCIANgFIAJgGIAHgHIAHAAIAAAtQgMAGgOAEQgNADgRAAQgUAAgRgFg");
	this.shape_3.setTransform(288.1,53.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6BSIAAiiIA1AAIAAAYQAPgQANgEQANgFALAAIAGAAIAGABIAAAxIgEAAIgMgBIgMgBQgLABgIABQgKABgHAEIAABsg");
	this.shape_4.setTransform(267.7,53.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA2BtIgPgsIhPAAIgPAsIg4AAIBQjZIA/AAIBQDZgAgaAYIAzAAIgZhLg");
	this.shape_5.setTransform(242.6,50.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#33FF99").ss(1,1,1).p("Egu7AAKIAAgTMBd3AAAIAAAT");
	this.shape_6.setTransform(300.5,-1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56C99F").s().p("Egu7Au8MAAAhd3MBd3AAAMAAABd3g");
	this.shape_7.setTransform(300.5,300.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.movieClip_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299,297,603,604);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;