//-----------------------------------ESERCIZIO 1-----------------------------------------//

Array.prototype.sumpos=function(){
    var tot=0;
    this.every( x=>{
        if(x>0)
            tot+=x;
        return x>0});
    return tot;
}
function ex_1(k){
    return sumpos(k);
}
//-----------------------------------ESERCIZIO 3-----------------------------------------//

Array.prototype.media=function (){
    return (this.reduce((acc,x)=>acc+x))/this.length;
}

function ex_2(k){
    return media(k);
}

//-----------------------------------ESERCIZIO 11----------------------------------------//

Array.prototype.sort=function (){
	return this.filter(x=>x%2!=0).concat(this.filter(x=>x%2==0))
}

function ex_3(k){
    return sort(k);
}