var recipes = { food: "ingredient"};

function updateObjectWithKeyAndValue(recipes, food, ingredient){
  Object.assign({}, recipes, { [food]:ingredient })
  
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, food, ingredient) {
  
  recipes[food] = newIngredient
  
  return recipes
}
