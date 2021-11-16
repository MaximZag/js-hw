let array=[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while(i<array.length){
    console.log(array[i]);
    i++;
}

for(let a=0; a<array.length; a++){
    console.log(array[a])
}

let b=0;
while(b<array.length){
    if (b%2!==0){
        console.log(array[b])
    }
    b++;
}

for(let c=0; c<array.length; c++){
    if (c%2!==0){
        console.log(array[c])
    }
}

let d=0;
while(d<array.length){
    if (d%2===0){
        console.log(array[d])
    }
    d++;
}

for(let e=0; e<array.length; e++){
    if (e%2===0){
        console.log(array[e])
    }
}