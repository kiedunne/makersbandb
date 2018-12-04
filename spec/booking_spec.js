'use strict'

describe('Booking', function() {

  var booking;

  beforeEach(function() {
    booking = new Booking(1, 'property', 'cris', 'today');
  });

  describe('can be created', function() {
    it('in respect of a property', function() {
      expect(booking._property).toEqual('property')
    });
    it('by a requesting user', function() {
      expect(booking._requester).toEqual('cris')
    });
    it('in respect of a date', function() {
      expect(booking._requestDate).toEqual('today')
    });
    it('with a default status of pending', function() {
      expect(booking._status).toEqual('pending')
    });
  });

  describe('has an approve method', function() {
    it('which sets the booking status as approved', function() {
      booking.approve();
      expect(booking._status).toEqual('approved');
    });
  });

  describe('has a decline method', function() {
    it('which sets the booking status as declined', function() {
      booking.decline();
      expect(booking._status).toEqual('declined');
    });
  });

});
