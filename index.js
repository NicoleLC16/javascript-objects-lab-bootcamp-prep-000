var recipes = { food: "ingredient"};

function updateObjectWithKeyAndValue(recipes, food, ingredient){
  Object.assign({}, recipes, { [food]:ingredient })
  
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, food, ingredient) {
  
  recipes[food] = ingredient;
  
  return recipes
}

function deleteFromObjectByKey(recipes, food) {
  delete recipes[food];
  return recipes;
}