var recipes = { food: "ingredient"};

function updateObjectWithKeyAndValue(recipes, food, ingredient){
  Object.assign({}, recipes, { [food]:ingredient })
  
  return recipes;
}

function updateObjectWithKeyAndValue(recipes, food, ingredient) {
  const recipe =  { food: "ingredient"};
  return updateObjectWithKeyAndValue(recipes, food, ingredient);
}