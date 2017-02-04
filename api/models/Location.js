/**
* Location.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    address1: {
      type: 'string'
    },
    address2: {
      type: 'string'
    },
    city: {
      type: 'string',
      required: true
    },
    state: {
      type: 'string',
      required: true
    },
    postalCode: {
      type: 'string',
      required: true
    },
    phoneNumber: {
      type: 'string'
    },
    hours: {
      type: 'string'
    },
    latitude: {
      type: 'float',
      required: true
    },
    longitude: {
      type: 'float',
      required: true
    },

    toJSON: function () {
      var location = this.toObject();
      location.locationDisplay = location.city + ", " + location.state + " " + location.country;
      return location;
    }

  }
};



//SELECT *, point(43.767760, -87.706580) <@> point(longitude, latitude)::point AS dist
//FROM location
//--WHERE (point(43.767760, -87.706580) <@> point(longitude, latitude)) < 100 --feel free to play this!
//  ORDER by dist;