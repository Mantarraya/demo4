var keystone = require("keystone");
var Types = keystone.Field.Types;

var Viaje = new keystone.List('Viaje');

Viaje.add({

    origen:{
		type: Types.Relationship, ref: 'Ciudad'
    },
    
    destino:{
		type: Types.Relationship, ref: 'Ciudad'
    },

    fecha: {
        type: String,
        initial: true,
		required: true
    },
    
    precio: {
        type: String,
        initial: true,
		required: true
    },

    descripcion: {
		type: Types.Html,
		wysiwyg: true,
		height: 300
    },

    estado:{
        type: String,
        initial: true,
        required:true
    },
    
    username:{
        type: Types.Relationship, ref: 'Usuario'
    }
});

Viaje.register();