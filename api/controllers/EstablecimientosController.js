/**
 * EstablecimientosController
 *
 * @description :: Server-side logic for managing Establecimientos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {

   agregarEstablecimiento: function(req, res) {
     Establecimientos.create({
       nombre: req.body.nombre,
 			 direccion:req.body.direccion,
       descripcion:req.body.descripcion,
       telefonos:req.body.telefonos,
       horaAtencion:req.body.horaAtencion,
       coordenadas:req.body.coordenadas

     }).exec(function(err, establecimiento) {
       if (!err) {
         res.end('establecimiento agregado: ' + JSON.stringify(establecimiento));
         sails.log("Se agrego al establecimiento" + JSON.stringify(establecimiento));

       } else {
         sails.log(err);
         res.send('error al guardar el establecimiento: ' + err);
       }

     });
   },

   eliminarEstablecimiento: function(req, res) {
        var recibi=req.body.id;

     Establecimientos.findOne({id:req.body.id}).exec(function(err,encontrado){
       if(err)
       {
         sails.log('erro de servidor',err);
         return res.serverError(err);
       }
       if(!encontrado)
       {
         sails.log('establecimiento no encontrado');
         return res.send('no encontrado');
       }
       else {

         Establecimientos.destroy({id:encontrado.id}).exec(function(err,eliminado){
           if(err)
           {
             return res.serverError(err);
           }
           else{
             return res.ok('establecimiento eliminado ',encontrado);
           }
         });
       }

     });
   },
   verCategorias: function(req, res) {
     Establecimientos.find({ id: req.body.id })
       .populate('categorias', {})
       .exec(function(err, establ) {
         if(err) return res.serverError(err);
         res.json(establ);
 });
   }


 };
