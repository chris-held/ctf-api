/**
 * LocationController
 *
 * @description :: Server-side logic for managing locations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	nearby: function(req, res){
    console.log(req.query);

    //parse all of these to prevent sql injection
    var opts = {
      lat: parseFloat(req.query.lat) || null,
      lng: parseFloat(req.query.lng) || null,
      radius: parseInt(req.query.radius) || 50,
      limit: parseInt(req.query.limit) || 10
    };
    if (!opts.lat || !opts.lng) {
      return res.badRequest("lat or lng is missing / invalid");
    }


    var sql = "SELECT *, point(" + opts.lng + ", " + opts.lat + ") <@> point(longitude, latitude)::point AS dist \n";
    sql += "FROM location \n";
    sql += "WHERE (point(" + opts.lng + ", " + opts.lat + ") <@> point(longitude, latitude)) < " + opts.radius + " \n";
    sql += "ORDER by dist LIMIT " + opts.limit + ";";

    var countSql = "SELECT count(*)  \n";
    countSql += "FROM location \n";
    countSql += "WHERE (point(" + opts.lng + ", " + opts.lat + ") <@> point(longitude, latitude)) < " + opts.radius + ";";


    Location.query(sql, function(err, result){
      if (err) return res.serverError(err);
      Location.query(countSql, function(err, count) {
        if (err) return res.serverError(err);

        return res.ok({
          data: result.rows,
          total: count.rows[0].count
        });
      });

    });
  }
};

