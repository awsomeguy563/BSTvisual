var can1 = document.getElementById("can");
var ctx = can1.getContext("2d");
can1.width = window.innerWidth;
can1.height = window.innerHeight;
var treep = document.getElementById("tree");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, can.width, can.height);

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
		ctx.fillText(val, can1.width/2, 16);
	}

	if(val < this.value){
		if(!this.left){
			this.left = new BST(val);
			ctx.fillText(val, this.x - 100, this.y + 50);
			console.log(this.left.x + 100, this.y + 50);
		}else{
			this.left.addNode(val);
		}
	}else if(val > this.value){
		if(this.right == null){
			this.right = new BST(val);
			parent = this.right;
			console.log(this.x + 100, this.y + 50);
			ctx.fillText(val, this.x + 100, this.y + 50);
		}else{
			this.right.addNode(val);
		}
	}
}

BST.prototype.printTree = function(){
	if(this.left != null){
		this.left.printTree();
	}

	$('p').append(this.value + " ,");
	console.log(this.value);

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


var BST1 = new BST();
for(var i = 0; i < 10; i++){
	BST1.addNode(Math.floor(Math.random() * 100));
}

BST1.printTree();
