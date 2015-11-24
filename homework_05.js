function Stack () {
	this.array = [];
	
}

Stack.prototype.push = function(e){
	this.array[this.array.length] = e;
};

Stack.prototype.pop = function(){
	var temp = this.array[this.array.length - 1];
	this.array.splice(this.array.length - 1, 1);
	return temp;
};

Stack.prototype.peek = function(){
	return this.array[this.array.length - 1];
};

Stack.prototype.isEmpty = function(){
	return this.array.length == 0;
};

Stack.prototype.popall = function(callback){
	while(!this.isEmpty()){
		callback(this.pop());
	}
}

function dec2bin(x) {

	var stack = new Stack();

	if (x == 0)
		return '0';

	while (x > 0) {
		stack.push(Math.floor(x % 2));
		x = Math.floor(x/2);
	}

	var res = '';
	stack.popall(function(e) {res += e.toString();})

	return res;
}



function rpm(k){
	var array=k.split(' ');
	stack= new Stack();
	array.forEach(function(x){
		var temp=0;
		switch(x){
			case '+':
				temp=stack.pop();
				stack.push(temp+stack.pop());
				break;
			case '-':
				temp=stack.pop();
				stack.push(stack.pop()-temp);
				break;
			case '*':
				temp=stack.pop();
				stack.push(temp*stack.pop());
				break;
			case '/':
				temp=stack.pop();
				stack.push(stack.pop()/temp);
				break;
			default:
				stack.push(parseInt(x,10));

		}

	})
	return stack.peek();
}