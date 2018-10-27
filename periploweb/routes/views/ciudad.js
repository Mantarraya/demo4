var keystone = require('keystone');

exports = module.exports = function(req, res){
    var view = new keystone.View(req,res);
    var locals = res.locals;

    locals.section ='ciudades';
    locals.filters = {
        ciudad: req.params.ciudad
    }

    locals.data = {
        ciudades:[]
    }
   view.on('init',function(next){
        var q = keystone.list('Ciudad').model.findOne({
            slug: locals.filters.ciudad
        });

        q.exec(function(err, result){
            locals.data.ciudad = result;
            next(err);
        });
   });
    view.render('ciudad');
}