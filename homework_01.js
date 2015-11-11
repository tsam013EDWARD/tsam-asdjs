//Esercizio1
console.log("Primo esercizio");

a=[0,10,20,-1,30];

function sumfindnegI(myarray){
   somma=0;
   for(i=0;i<myarray.length;i++)
       if(myarray[i]%2==0) somma+=myarray[i];
       else break;
   return somma;  
}
 
function sumfindnegR(myarray){
   if(myarray.length>0 && myarray[0]>=0) return myarray[0] + sumfindnegR(myarray.slice(1));
   else return 0;
}

function ex_1_I(a)  { return sumfindnegI(a); }
console.log("Risultato iterativo: " + ex_1_I(a));

function ex_1_R(a)  { return sumfindnegR(a); }
console.log("Risultato ricorsivo: " + ex_1_R(a));


//Esercizio2
console.log("Secondo esercizio");


function sumoddI(n){
   somma=0;
   for(i=1;i<n;i++) if(i%2!=0) somma+=i;
   return somma;
}
 
function sumoddR(n){
   if(n>0)
       if(n%2!=0) return n+sumoddR(n-1);
       else return sumoddR(n-1);
   else return 0;
}

function ex_2_I()  { return sumoddI(10); }
console.log("Risultato iterativo: " + ex_2_I(a));

function ex_2_R(a)  { return sumoddR(10); }
console.log("Risultato ricorsivo: " + ex_2_R(a));


//Esercizio3
console.log("Terzo esercizio");
a=[1,2,3,4,5,6,7,8,9,10];

function sommaI(myarray){
   somma=0;
   for(i=0;i<=myarray.length;i++) somma+=i;
   return somma;
}

function sommaR(myarray){
   if(myarray.length>0) return myarray[0]+sommaR(myarray.slice(1));
   else return 0;
}

function ex_3_I(a)  { return sommaI(a)/a.length; }
console.log("Risultato iterativo: " + ex_3_I(a));

function ex_3_R(a)  { return sommaR(a)/a.length; }
console.log("Risultato ricorsivo: " + ex_3_R(a));


//Esercizio4
console.log("Quarto esercizio");
c=5;
d=3;

function sumIntervalI(start,cont){
   somma=0;
   for(;cont>0;cont--){
       somma+=start;
       somma+=start;  }
   return somma;
}
function sumIntervalR(start,cont){
   if(cont==0) return start;
   else return start+sumIntervalR(start+1,cont-1);
}

function ex_4_I(a,b)  { return sumIntervalI(Math.min(a,b),Math.abs(a-b)); }
console.log("Risultato iterativo: " + ex_4_I(c,d));

function ex_4_R(a,b)  { return sumIntervalR(Math.min(a,b),Math.abs(a-b));}
console.log("Risultato ricorsivo: " + ex_4_R(c,d));


//Esercizio5
console.log("Quinto esercizio");
e=5;
f=10;

function multI(a,b){
    mult=0;
    for(;b>0;b--) mult+=a;
    return mult;
}
function multR(a,b){
   if(b>0) return a + multR(a,b-1);
   else return 0;
}

function ex_5_I(c,d)  { return multI(c,d);}
console.log("Risultato iterativo: " + ex_5_I(e,f));

function ex_5_R(c,d)  { return multR(c,d);}
console.log("Risultato ricorsivo: " + ex_5_R(e,f));


//Esercizio6
console.log("Sesto esercizio");
a=15;
b=3;

function divI(c,d){
   risultato=0;
   for(;c>=d;c-=d) risultato+=1;
   return risultato + " resto: " + c;
}

function divR(c,d){
   if(c>=d) return parseInt(1 + divR(c-d,d));
   else {console.log("Resto: " + c);return 0;}
}

function ex_6_I(val1,val2)  { return divI(val1,val2);}
console.log("Risultato iterativo: " + ex_6_I(a,b));

function ex_6_R(c,d)  { return divR(c,d);}
console.log("Risultato ricorsivo: ");
console.log(ex_6_R(a,b));


//Esercizio7
console.log("Settimo esercizio");
function powI(a,b){
    potenza=0;
    for(b;b>1;b--) potenza+=multR(a,a);
    return potenza;
}

function powR(a,b){
   if(b==0) return 1;
   else return (multR(a,powR(a,b-1)));
}
e=2;
f=2;
function ex_7_I(c,d)  { return powI(c,d);}
console.log("Risultato iterativo: " + ex_7_I(e,f));

function ex_7_R(c,d)  { return powR(c,d);}
console.log("Risultato ricorsivo: " + ex_7_R(e,f));


//Esercizio8
console.log("Ottavo esercizio");
function matriceI(n){
   a=[];
   cont=0;
   for(x=0;x<n;x++){
       a[x]=[];
       for (y=0;y<n;y++){
           a[x][y]=cont;
           cont++;}
   }
   return a;
}

function matriceR(x,n,contatore){
    if(n>1)
        if(n%x!=0) return contatore + "," + matriceR(x,n-1,contatore+1);
        else return "\n" + contatore + "," + matriceR(x,n-1,contatore+1);
    else return contatore;
}

n=10;
function ex_8_I(x)  { return matriceI(x);}
console.log("Risultato iterativo: " + ex_8_I(n));

function ex_8_R(x1)  { return matriceR(x1,x1*x1,1);}
console.log("Risultato ricorsivo: " + ex_8_R(n));


//Esercizio9
console.log("Nono esercizio");
function invertiI(myarray){
   b=[];
   for(i=0;i<myarray.length;i++) b[i]=myarray[(myarray.length-1)-i];
   return b;
}

function invertiR(myarray){
    if(myarray.length>1)
        return myarray[myarray.length-1] + "," + invertiR(myarray.slice(0,myarray.length-1));
    else return  myarray[0];
}


a=[1,2,3,4,5,6,7,8,9,110];

function ex_9_I(myarray)  { return invertiI(myarray);}
console.log("Risultato iterativo: " + ex_9_I(a));

function ex_9_R(myarray)  { return invertiR(myarray);}
console.log("Risultato ricorsivo: " + ex_9_R(a));


//Esercizio10
console.log("Decimo esercizio");
function replicateI(a,b){
   arrayb=[];
   for (i=0;i<b;i++)
       arrayb[i]=a;
   return arrayb;
}
 
function replicateR(a,b){
   if(b>1) return a +","+replicateR(a,b-1);
   else return a;
}
f=3;
g=4;
function ex_10_I(a,b)  { return replicateI(a,b);}
console.log("Risultato iterativo: " + ex_10_I(f,g));

function ex_10_R(a,b)  { return replicateR(a,b);}
console.log("Risultato ricorsivo: " + ex_10_R(f,g)); 


//Esercizio11
console.log("Undicesimo esercizio");
function riordinaI(myarray){
    pari=[];
    dispari=[];
    for(i=0;i<myarray.length;i++)
        if(myarray[i]%2==0) pari[pari.length]=myarray[i];
        else dispari[dispari.length]=myarray[i];
    return dispari.concat(pari);
}
disp=[];
par=[];
function riordinaR(myarray){
    if(myarray.length==0)
    {
        out= disp.concat(par);
        return out;
    }
    else if(myarray[0]%2==0)
    {
        par.push(myarray[0]);
        return riordinaR(myarray.slice(1));
    }
    else if(myarray[0]%2!=0)
    {
        disp.push(myarray[0]);
        return riordinaR(myarray.slice(1));
    };
}
function ex_11_R(myarray){
	return riordinaR(myarray);
}
a=[10,2,5,20,21,23];
console.log(riordinaR(a));