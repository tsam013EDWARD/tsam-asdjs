function CircolarQueue(n){
	this.myarray=[];
	this.length=n;
	this.out=0;
	this.inp=0;
}

CircolarQueue.prototype.enqueue =function(x){
	if(!this.isFull()){
		this.myarray[this.inp]=x;
		this.inp++;
		this.imp%=this.myarray.length;
	}
}

CircolarQueue.prototype.dequeue =function(){
	if(!this.isEmpty()){
		var temp= this.myarray[this.out];
		this.myarray[this.out]=undefined;
		this.out=(this.out+1)%this.myarray.length;
		return temp
	}
}

CircolarQueue.prototype.front =function(){
	var temp= this.myarray[this.out];
	this.out=(this.out+1)%this.myarray.length;
	return temp
}

CircolarQueue.prototype.isEmpty =function(){
	return this.size()==0;
}

CircolarQueue.prototype.size =function(){
	return Math.abs(this.inp-this.out);
}

CircolarQueue.prototype.isFull =function(){
	temp =this.inp+1
	temp%= temp;
	return temp==this.out;
}