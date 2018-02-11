var can1 = document.getElementById("can");
var ctx = can1.getContext("2d");
can1.width = window.innerWidth;
can1.height = window.innerHeight;
var treep = document.getElementById("tree");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, can.width, can.height);
ctx.font = "10px Verdana";


/*  Note for next time:
	make a list of all the nodes in the binary tree
	then clear up all the functions so that it doesn't log to the console
	make it so that printtree() prints to the canvas instead
	and the printtree() should also have jquery to add nodes to the list in the
	paragrah element above the textbox. Find out how to save all!

	*Idea - Let the addNode() initialize everything and add nodes, cause they
	all the nodes get a x and a y value. Then let the printTree() traverse the
	tree and print each node using it's x and y coords - Do this using an algorithm
	online.

	Ideas to implement:
	- animation for various tree functions
	- input num value to add to the tree (Change Addnode to take input)
	- Add to gitpages as a standalone product
	- Fix the print method with ellipses and lines and with algorithms
	- Use CSS to make the buttons and layout look nicer!
*/


// Function pertaining to a BST

var BST = function(val){
	this.value = val;
	this.right = null;
	this.left = null;
	this.x = 0;
	this.y= 0;
}

BST.prototype.addNode = function(val){

	if (!this.value){
		this.value = val;
		ctx.fillStyle = "white";
		this.x  = can1.width/2;
		this.y = 16;
	}

	if(val < this.value){
		if(!this.left){
			this.left = new BST(val);
			this.left.x = this.x - 100;
			this.left.y = this.y + 50;
		}else{
			this.left.addNode(val);
		}
	}else if(val > this.value){
		if(this.right == null){
			this.right = new BST(val);
			this.right.x = this.x + 100;
			this.right.y = this.y + 50;
		}else{
			this.right.addNode(val);
		}
	}
}

BST.prototype.printTree = function(){
	if(this.left != null){
		this.left.printTree();
	}

	ctx.fillText(this.value, this.x, this.y);

	if(this.right != null){
		this.right.printTree();
	}

}

BST.prototype.search = function(val){
	if(val === this.value){
		return true;
	}
	if(val < this.value){
		if(!this.left){
			return false
		} else{
			return this.left.search(val);
		}
	}
	else if(val > this.value){
		if(!this.right){
			return false
		} else{
			return this.right.search(val);
		}
	}

BST.prototype.printToP = function(){
	
}


// Functions with buttons


}

function Submit(){
	var t = document.getElementById("t1").value;
	console.log(parseInt(t));
	var p = document.getElementById("result");
	if(BST1.search(parseInt(t))){
		p.innerHTML = "found";
		console.log("Found");
	}else{
		p.innerHTML = "not found";
		console.log("Not found");
	}
}

function ButAddNode(){
	ctx.clearRect(0, 0, can1.width, can1.height);
	BST1.addNode(Math.floor(Math.random() * 100));
	BST1.printTree();
}


var BST1 = new BST();
