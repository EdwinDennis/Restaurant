/**
 * Categorias.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

   attributes: {

     nombre:{
       type:'string'
     },
     descripcion:{
       type:'string'
     },
     numeroPlatillos:{
       type:'integer'
     },
     establecimiento_id:{
       model:"Establecimientos"

     },

     platillos:{
       collection:'Platillos',
       via:'platillo_id'
     }

   }
 };
