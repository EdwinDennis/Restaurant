/**
 * CategoriasController
 *
 * @description :: Server-side logic for managing Categorias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {

 agregarCategoria:function(req,res){
 	Categorias.create({
 		nombre: req.body.nombre,
 		descripcion:req.body.descripcion,
 		numeroPlatillos:req.body.numeroPlatillos,
 		establecimiento_id:req.body.id
 	}).exec(function(err, categoria) {
 		if (!err) {
 			res.end('categoria agregada: ' + JSON.stringify(categoria));
 			sails.log("Se agrego la categoria" + JSON.stringify(categoria));

 		} else {
 			sails.log(err);
 			res.send('error al guardar la categoria: ' + err);
 		}

 	});
 }

 };
