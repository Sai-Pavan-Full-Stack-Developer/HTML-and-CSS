let items = [1000,450,485,541,800,584,685];
let  i=0;
for(let value of items){
    let offer= value/10;
    items[i]= value-offer;
    console.log(`Value after offer = ${items[i]}`);
    i++;
}