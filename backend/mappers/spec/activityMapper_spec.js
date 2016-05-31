var activityMapper = require('../activityMapper');

describe('activityMapper', function() {
  describe('mapRides', function() {
    describe('default return', function() {
      it('should be of type array', function() {
        expect(activityMapper.mapRides()).toEqual(jasmine.any(Array));
      });
      it('should be an empty array', function() {
        expect(activityMapper.mapRides()).toEqual([]);
      });
    });

    describe('when activities are passed', function() {
      it('should return all the activities with type RIDE', function() {
        var activities = [
          { id: 1, type: 'run' },
          { id: 2, type: 'ride' },
          { id: 3, type: 'run' }
        ];
        expect(activityMapper.mapRides(activities).length).toEqual(1);
      });
    });

    describe('when activities are passed as undefined', function() {
      it('should return an empty array', function() {
        expect(activityMapper.mapRides(undefined)).toEqual([]);
      });
    });


  });
});

