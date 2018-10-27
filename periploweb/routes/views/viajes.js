var keystone = require('keystone');

exports = module.exports = function(req, res){
    var view = new keystone.View(req,res);
    var locals = res.locals;

    locals.section ='viajes';

    view.query('viajes',keystone.list('Viaje').model.find());
    view.render('viajes');
}