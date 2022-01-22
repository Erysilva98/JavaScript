const maca = {
    value: 2,
}

function mapComThis(arr, thisArg) {
    return arr.map( function(intem){
        return intem * this.value;
    
    }, thisArg);
}

const nums = [1, 2];

console.log ('this -> maçã', mapComThis(nums, maca));
console.log ('this -> laranja', mapComThis(nums, maca));