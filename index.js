var recipes = { food: "ingredient"};

function updateObjectWithKeyAndValue(recipes, food, ingredient){
  Object.assign({}, recipes, { [food]:ingredient })
  
  return recipes;
}

function updateObjectWithKeyAndValue(recipes, food, ingredient) {
  const recipes =  { food: "ingredient"};
}