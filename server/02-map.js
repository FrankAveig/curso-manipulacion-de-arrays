const letters = ['a','b','c'];

const newArray = letters.map(item => item +'++')
console.log(letters);
console.log(newArray);


function solution(array) {
	let newArray = array.map(function (item,) {
		let nombre = item.name;
        console.log(iterador)
        nombre = nombre
		return nombre;
	}) 
	console.log(newArray)
    return newArray;
    
}; 

solution([
	{
		name: 'Nicolas',
		lastName: 'Molina',
		age: 28
	},
	{
		name: 'Valentina',
		lastName: 'Molina',
		age: 19
	}
]);

function solution(array){
    return array.map(item => ({
        ...item,
        taxes: Math.trunc(item.price * .19)
    }))
}; 

console.log(solution([
    {
      name: "Product 1",
      price: 1000345,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    }
    
  ]))

