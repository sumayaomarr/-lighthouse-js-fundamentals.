const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

while (item < ingredients.length) {
  console.log(ingredients[item])
  item++;
}

for (var item = 0; item < 7; item++)
  console.log(ingredients[item]);

for (var item = 7; item >= 0; item--)
  console.log(ingredients[item]);