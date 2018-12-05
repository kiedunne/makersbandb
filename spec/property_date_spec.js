'use strict'

describe('PropertyDate', function() {

var propertyDate;

  beforeEach(function() {
    propertyDate = new PropertyDate('1', 'today');
  });

  describe('stores an array of available properties', function() {
    it('which can be added to with the .add function', function() {
      propertyDate.add('testProperty', 'today');
      expect(propertyDate._properties).toContain('testProperty');
    });
    it('which can be listed with the .list function', function() {
      propertyDate.add('testProperty', 'today');
      expect(propertyDate.list()).toEqual('testProperty')
    });
  });

});
