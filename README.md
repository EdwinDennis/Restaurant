# Restaurant


a [Sails](http://sailsjs.org) application


>crear Establecimiento

**ruta** http://localhost:1337/establecimientos/agregarEstablecimiento

```html
{"nombre":"macdonals",
"direccion":{"calle":"vicente guerrero",
            "numero":"125",
            "colonia":"ejidal",
            "estado":"oaxaca"},
"descripcion":"comida rapida espciales de mactrios",
"telefonos":{"local":"5123482","celular":"9512361238"},
"horaAtencion":{"horaApertura":"8:00 am","horaCierre":"7:00 pm"}
"coordenadas":{"latitud":"16.907956","longitud":"-96.7239559"}
}
```

---

>crear Categoria

**ruta** http://localhost:1337/categorias/agregarCategoria

```html
{"nombre":"Comida occidental",
"descripcion":"comida occidental cocinada en horno de lenia",
"numeroPlatillos":"8",
"id":"578ffda6dad68bf796a61e11"
}

```

---

>ver establecimientos

**ruta** http://localhost:1337/establecimientos

---

>ver catalogos

aplicando funcion populate

**ruta** http://localhost:1337/establecimientos/verCategorias

---

>ver categorias

**ruta** http://localhost:1337/categorias








