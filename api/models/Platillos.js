/**
 * Platillos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {


   attributes: {

     id:{
       type: "integer",
       primaryKey: true
     },

     platillo_id:{
       model:'Categorias',
       columnName:'platillo_id'
     },
     nombre:{
       type:'string'
     },
     porcion:{
       type:'integer'
     },
     tiempoPreparacion:{
       type:'time'
     },
     descripcion:{
       type:'string'
     },
     disponible:{
       type:'boolean',
       defaultsTo:'true'
     },
     ingredientes:{
       type:'string'
     }

   }
 };
