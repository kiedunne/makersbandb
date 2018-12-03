'use strict'

function Property(owner) {
  this._owner = owner;
  this._name = '';
  this._bedrooms = '';
  this._price = '';
  this._photo = '';
};

// Property.prototype.isAvailable = function(date) {
//   check if this property is in the joiner table on that date
// };

Property.prototype.updateName = function(name) {
  this._name = name;
};

Property.prototype.updatePrice = function(price) {
  this._price = price;
};

Property.prototype.updateBedrooms = function(size) {
  this._bedrooms = size;
};

Property.prototype.updatePhoto = function(photo) {
  this._photo = photo;
};
