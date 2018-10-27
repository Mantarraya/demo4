var keystone = require("keystone");
var Types = keystone.Field.Types;

var Ciudad = new keystone.List('Ciudad', {
	map: {
		name: 'Nombre'
	},
	singular: 'Ciudad',
	plural: 'Ciudades',
	autokey: {
		from: 'Nombre',
		path: 'slug',
		unique: true
	},
});
Ciudad.add({
	Nombre: {
		type: String,
		required: true,
		index: true
	},

	Descripcion: {
		type: Types.Html,
		wysiwyg: true,
		height: 300
	},

	Imagen: {
		type: Types.CloudinaryImages
	},
});

Ciudad.relationship({ ref: 'Viaje', refPath: 'origen' });
Ciudad.relationship({ ref: 'Viaje', refPath: 'destino' });
Ciudad.register();
