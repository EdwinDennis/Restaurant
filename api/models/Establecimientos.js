/**
 * Establecimientos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

   attributes: {

     nombre: 'string',
     direccion: 'json',
     descripcion: 'string',
     telefonos: 'json',
     horaAtencion: 'json',
     coordenadas:'json', //17.0110227,-96.7089412
     categorias: {
       collection: "Categorias",
       via: "establecimiento_id"
     }

   }


 };
