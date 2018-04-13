'use strict';
const Dog = function(name, breed, age) {
  this.name= name;
  this.breed= breed;
  this.age = age;
}
const Cat = function(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}
const Ferret = function(name, age, foodRequirements) {
  this.name = name;
  this.age = age;
  this.foodRequirements = foodRequirements;
}
const Bird = function(name, breed) {
  this.name = name;
  this.breed = breed;
}
const Fish = function(name, species, waterConditions) {
  this.name = name;
  this.waterConditions = waterConditions;
}