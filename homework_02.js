//-----------------------------------ESERCIZIO 1-----------------------------------------//

function sumpos(a){
    var tot=0
    a.every( x=>{
        if(x>0)
            tot+=x;
        return x>0});
    return tot;
}

function sumpos2(a){
    var tot=0
    a.every( x=>{
        if(x>0)
		 tmparray.push(x);
	return x>0;
});
return tmparray.reduce((acc,x)=>acc+x);
}

function buildUntil(myarray, check) {
    var tmparray = [];
    myarray.every(x => {
        if (check(x)) {
            tmparray.push(x);
            return true;
        } else {
            return false;
        }
    });
    return tmparray;
}
function sumpos3(a) {
    return buildUntil(a, x => x > 0).reduce((acc, x) => acc + x, 0);
}

function ex_01_F(k){
    return sumpos3(k);
}

//-----------------------------------ESERCIZIO 2-----------------------------------------//

function range(n){
	a=[];
	for(var i=0;i<n;i++)
	{
		a[i]=i;
	}
	return a;
}

function sumodd(n){
	return range(n).map(x=> 2*x+1).reduce((acc,x)=>acc+x);
}

function ex_02_F(k){
    return sumodd(k);
}

//-----------------------------------ESERCIZIO 3-----------------------------------------//

function media(a){
    return (a.reduce((acc,x)=>acc+x))/a.length;
}

function ex_03_F(k){
    return media(k);
}

//-----------------------------------ESERCIZIO 4-----------------------------------------//
function rangedarray(a,b){
    a=[];
    for(var i=a;i<=b;i++)
    {
        a[i]=i;
    }
    return a;
}

function sumInterval(a,b){
    if(a<b)
        return rangedarray(a,b).reduce((acc,x)=>acc+x);
    else
        return rangedarray(b,a).reduce((acc,x)=>acc+x);
}

function ex_04_F(a,b){
    return sumInterval(a,b);
}

//-----------------------------------ESERCIZIO 5-----------------------------------------//
function replicate(a,b){
    var x=[]
    for(var i=0;i<b;i++)
        x[i]=a;
    return x;

}

function mult(a,b){
    return replicate(a,b).reduce((acc,x)=>acc+x);
}


function ex_05_F(a,b){
    return mult(a,b);
}


//-----------------------------------ESERCIZIO 7-----------------------------------------//
function pow(a,b){
    return replicate(a,b).reduce((acc,x) => mult(acc,x),1);
}

function ex_07_F(a,b){
    return pow(a,b);
}

//-----------------------------------ESERCIZIO 8 Prof-mode--------------------------------//

function bidimensionaleR(myarray) {
    function magic(myarray, matrix) {
        matrix.unshift(myarray);
        return matrix;
    }
    function bidimensionaleRInternal(myarray, n) {
        if (myarray.length == n) {
           return [myarray];
        } else {
            return magic(myarray.slice(0, n),
                         bidimensionaleRInternal(myarray.slice(n), n));
        }
    }
    return bidimensionaleRInternal(myarray, Math.sqrt(myarray.length));
}


function ex_08_F(k){
    return bidimensionaleR(k);
}

//-----------------------------------ESERCIZIO 9-----------------------------------------//
function ex_09_F(k){
    var r=[];
    k.forEach(x=>{ r.unshift(x);
    });
    return r;
}

//-----------------------------------ESERCIZIO 9-----------------------------------------//
function ex_10_F(a,b){
    return replicate(a,b);
}

//-----------------------------------ESERCIZIO 11----------------------------------------//

function sort(k){
	return k.filter(x=>x%2!=0).concat(k.filter(x=>x%2==0))
}

function ex_11_F(k){
    return sort(k);
}