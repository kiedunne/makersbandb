'use strict'

function Booking(id, property, requester, date) {
  this._id = id
  this._property = property;
  this._requester = requester;
  this._requestDate = date;
  this._status = 'pending';
};

Booking.prototype.approve = function() {
  this._status = 'approved';
};

Booking.prototype.decline = function() {
  this._status = 'declined';
};

// Booking.prototype.checkAvailable = function() {
//     this._property.isAvailable();
// };
//
// Booking.prototype.noLongerAvailable() = function() {
//   this._property.noLongerAvailable;
// };
