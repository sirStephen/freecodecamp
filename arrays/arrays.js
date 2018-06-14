let myArray = [];
console.log(myArray);

let pizza = [];
pizza[0] = 'Margherita';

pizza[0] = 'Ham & Pineapple';
pizza[1] = 'Mushroom';
pizza[2] = 'Spinach & Rocket';

pizza[3] = 'Pineapple & Sweetcorn';
console.log(pizza);

// delete the an array
delete pizza[3];
console.log(pizza);

pizza[3] = 'Apples & Oranges';
pizza[4] = 'Mango & Cherish';
console.log(pizza);

// find the last item in an array
console.log(pizza[pizza.length - 1]);

// remove the last item of an array
pizza.pop();
console.log(pizza);

// add an item to the end of an array
pizza.push('Pepperoni');
console.log(pizza);

// remove the first item of an array
pizza.shift();
console.log(pizza);

// add an item to the beginning of an array
pizza.unshift('Chicken & Bacon');
console.log(pizza);

// merging arrays 
pizza = pizza.concat(['Cashew', 'Pea']);
console.log(pizza);

// join() method
pizza = pizza.join();
console.log(pizza);

// note to myself: checking out the splice() on mdn

// note to myself: check out sort()

pizza = pizza.indexOf('Apples');
console.log(pizza);