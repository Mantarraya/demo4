var keystone = require('keystone');

exports = module.exports = function(req, res){
    var view = new keystone.View(req,res);
    var locals = res.locals;

    locals.section ='viajes';
    locals.filters = {
        viaje: req.params.viaje
    }

    locals.data = {
        viajes:[]
    }
   view.on('init',function(next){
        var q = keystone.list('Viaje').model.findOne({
            slug: locals.filters.viaje
        });

        q.exec(function(err, result){
            locals.data.viaje = result;
            next(err);
        });
   });
    view.render('viaje');
}