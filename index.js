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
  var newRecipe = Object.assign ({}, recipes)
  return recipes;
}

function destructivelyDeleteFromObjectByKey(recipes, food){
  delete recipes[food];
  return recipes;
}