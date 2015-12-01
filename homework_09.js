function ricorsione1 (array) {
	if (array.length == 0)
		return 10;
	return 5 * array[0] + ricorsione1(array.slice(1));
}

function ex_1a(array) {
	return ricorsione1(array);
}
function oddElement(myarray){
    if(myarray.length == 0){
        return 0;
    }else{
        if(myarray[0] % 2 == 0){
            return myarray[0] * myarray[0] + oddElement(myarray.slice(1));
        }else{
            return oddElement(myarray.slice(1));
        }
    }
}
function ex_1b(myarray){
    return oddElement(myarray);
    //o(n)
}function oddSquare(myarray){
   var c = myarray.filter(function(myarray){
        if(myarray%2 == 0)
            return myarray;
        });
    return c.map(c => c * c).reduce((c,d) => c+d);
}
function ex_2(myarray){
    return oddSquare(myarray); //o(n)
}
Stack.prototype.push = function(e) { this.myarray.push(e); }
Stack.prototype.pop = function() { return this.myarray.pop(); }
Stack.prototype.peek = function() { return this.myarray[this.myarray.length - 1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }


Stack.prototype.popall = function() {
    while (!this.isEmpty()){
        return this.pop();
    }
}
function multiplyqueues(myarray){
    var stackEven = new Stack();
    var stackOdd = new Stack();
    myarray.forEach(x => {
        if (x % 2 == 0){
            stackEven.push(x);
        } else {
            stackOdd.push(x); 
        }
    });
    var stackResult = new Stack();
    
    while (!(stackEven.isEmpty()) && !(stackOdd.isEmpty())){
        
        stackResult.push(stackEven.pop() * stackOdd.pop());
    }
    return stackResult.popall();
} 

function ex_3(myarray){
    return multiplyqueues(myarray);
}


function LNode(indexNode,value,succNode){
    this.item=value;
    this.index=indexNode;
    this.succ=succNode;
}


function LinkedList(){
    this.root=null;
}

function ex_4(){
    return LinkedList();
}



LinkedList.prototype.addNode=function(prevNode,index,e,nextNode){
  
    if (index>prevNode.index){
        if(index<nextNode.index || nextNode==0){
            prevNode.succ=new LNode(index,e,nextNode);
            }else{
              this.addNode(nextNode,index,e,nextNode.succ);  
            }
    }else{
          this.root=new LNode(index,e,prevNode); 
    }

}


LinkedList.prototype.add=function(index,e){
    if (this.root==null){
        this.root=new LNode(index,e,0);
    }else {
        this.addNode(this.root, index, e, this.root.succ);

    }
}

LinkedList.prototype.getNode= function(nextNode,index){
    if(nextNode.index==index){
        return nextNode;
    }else{
        return this.getNode(nextNode.succ,index);
    }
}


LinkedList.prototype.get= function (index){
    return this.getNode(this.root,index);

}


var list=new LinkedList();	


function Node(i, l, r){
	this.item = i;
	this.left = l;
	this.right = r;
}
function BST(){		
	this.root = null;
}
BST.prototype.add = function(e){
	if(this.root == null){
		this.root = new Node(e,null,null);
	}
	else{
		this.addNode(this.root,e);
	}
}
BST.prototype.addNode = function(currentNode,e){
	if(e<currentNode.item){
		if(currentNode.left == null){
			currentNode.left = new Node(e,null,null);
		} 
        else{
            this.addNode(currentNode.left,e);
        }
	}
	else{
		if(currentNode.right == null){
			currentNode.right = new Node(e,null,null);
		} 
		else{
			this.addNode(currentNode.right,e);
		}
	}
}		
BST.prototype.searchNode = function(e){
    return this.search(this.root,e);
}
BST.prototype.search = function(currentNode,e){
	if(currentNode == null){
		return false;
	}
	if(currentNode.item == e){
		return currentNode;
	}
	else{
		if(e >= currentNode.item){
			return this.search(currentNode.right,e);
		}
		else{
			return this.search(currentNode.left,e);
		}
	}
}
BST.prototype.exists = function(currentNode,e){
	if(currentNode == null){
		return false;
	}
	if(currentNode.item == e){
		return true;
	}
	else{
		if(e >= currentNode.item){
			return this.exists(currentNode.right,e);
		}
		else{
			return this.exists(currentNode.left,e);
		}
	}
}