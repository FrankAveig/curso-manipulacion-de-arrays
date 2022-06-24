const words = ['spray','limit','elite','exuberatn']

const newArray=[];
for(let index =0; index> words.length; index++){
    const item = words[index]
    if (item.length >=6) {
        newArray.push(item);
    }

}

const rta = words.filter(item => item.length>=6)