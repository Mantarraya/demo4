var keystone = require("keystone");
var Types = keystone.Field.Types;

var Usuario = new keystone.List('Usuario', {
	map: {
		name: 'username'
	},
	singular: 'Usuario',
	plural: 'Usuarios',
	autokey: {
		path: 'slug',
		from: 'username',
		unique: true
	}
});

Usuario.add({
	Nombres: {
		type: String,
		initial: true,
		required: true,
		index: true
	},

	Apellidos: {
		type: String,
		initial: true,
		required: true
	},

	username: {
		type: String,
		initial: true,
		required: true
	},
	password: {
		type: Types.Password,
		initial: true,
		required: true
	},
});
Usuario.relationship({ ref: 'Viaje', refPath: 'username' });
Usuario.register();