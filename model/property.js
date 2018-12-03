'use strict'

function Property(id, owner) {
  this._id = id;
  this._owner = owner;
  this._name = '';
  this._bedrooms = '';
  this._price = '';
  this._photo = '';
  this._address = '';
};

// Property.prototype.isAvailable = function(date) {
//   check if this property is in the joiner table on that date
// };

// Property.prototype.noLongerAvailable = function() {
//   property is removed from joiner table
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

Property.prototype.updateAddress = function(address) {
  this._address = address;
};
