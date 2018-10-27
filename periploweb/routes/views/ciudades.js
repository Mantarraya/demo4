var keystone = require('keystone');

exports = module.exports = function(req, res){
    var view = new keystone.View(req,res);
    var locals = res.locals;

    locals.section ='ciudades';

    view.query('ciudades',keystone.list('Ciudad').model.find());
    view.render('ciudades');
}