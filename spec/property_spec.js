'use strict'

describe('Property', function() {

var property;

  beforeEach(function() {
    property = new Property('testOwner');
  });

  describe('can be created', function() {
    it('with an owner property being stored', function() {
      expect(property._owner).toEqual('testOwner')
    });
  });

  describe('has a name property', function() {
    it('which can be set with updateName', function() {
      property.updateName('Cris');
      expect(property._name).toEqual('Cris');
    });
  });

  describe('has a price property', function() {
    it('which can be set with updatePrice', function() {
      property.updatePrice(100);
      expect(property._price).toEqual(100);
    });
  });

  describe('has a bedrooms property', function() {
    it('which can be set with updateBedrooms', function() {
      property.updateBedrooms(2);
      expect(property._bedrooms).toEqual(2);
    });
  });

  describe('has a Photo property', function() {
    it('which can be set with updatePhoto', function() {
      property.updatePhoto('testURL');
      expect(property._photo).toEqual('testURL');
    });
  });

});
