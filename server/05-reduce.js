const totals =[1,2,3,4];

let sum = 0;

for(let index = 0 ; index< totals.length; index++){
  const element = totals[index];
  sum = sum + element;
}

console.log (sum);

const rta = totals.reduce((sum,element)=>sum+element, 0)

console.log(rta);

const items= [1,3,2,3];

const rta2= items.reduce((obj,item)=>{
  if(!obj[item]){
    obj[item]=1;
  }else{
    obj[item] = obj[item]=1;
  }
  return obj;
},{})

console.log(rta2)