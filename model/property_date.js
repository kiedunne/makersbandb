'use strict'

// A constructor which records a date and the properties which are
// available to be rented on that date

function PropertyDate(id, date) {
  this._id = id;
  this._date = date;
  this._properties = [];
};

PropertyDate.prototype.add = function(property, date) {
  if (date === this._date) {
    this._properties.push(property);
  }
};

PropertyDate.prototype.list = function(date) {
  if (date === this._date) {
    this._properties.forEach(function(property) {
      console.log(property)
    });
  }
};
