const words = ['spray','limit','elite','exuberatn']

const newArray=[];
for(let index =0; index> words.length; index++){
    const item = words[index]
    if (item.length >=6) {
        newArray.push(item);
    }

}

const rta = words.filter(item => item.length>=6)

console.log(rta);
console.log(words);

const orders = [
    {
      customerName: "Nicolas",
      total: '60',
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: '120',
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: '180',
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: '240',
      delivered: true,
    },
  ];

const rta3 = orders.filter(item =>(item.delivered && item.total > 100))
console.log(rta3)

const search = (query)=>{
  return orders.filter(item=> item.customerName.includes(query)|| item.total.includes(query))
  }


console.log(search('60'))
