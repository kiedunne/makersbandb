'use strict'

function Property(owner) {
  this._owner = owner;
  this._name = '';
  this._size = '';
  this._price = '';
  this._photo = '';
};

Property.prototype.isAvailable = function(date) {
  // check if this property is in the joiner table on that date
};

Property.prototype.updatePrice = function(price) {
  this._price = price;
};
