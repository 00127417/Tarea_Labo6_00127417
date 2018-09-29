var productos=[];
var ventas=[];

function agregarP(codigo,descrip,tipo,precioC,precioV,stock){
    var producto = new Object();
    producto.codigo=codigo;
    producto.descrip=descrip;
    producto.tipo=tipo;
    producto.precioC=precioC;
    producto.precioV=precioV;
    producto.stock=stock;

    productos.push(producto);
}

function modifStock(codigo,nuevoStock){
    for(let e of productos){
        if(e.codigo==codigo){e.stock=nuevoStock; return;}
        else alert('NO HAY PRODUCTOS CON EL CODIGO INGRESADO');
    }
}

function regVenta(cod,cantVendida){
    for (let e of productos){
        if(e.codigo==cod) {
            if(e.stock-cantVendida<0) return alert('No hay suficientes productos en stock para realizar la vernta');
            ventas.push(e.precioV*cantVendida);
            e.stock=e.stock-cantVendida;
        }
    }
}

function promVentas(){
    var suma=0;
    for(let i=0;i<ventas.length;i++){
        suma=suma+ventas[i];
    }
    console.log('El promedio de ventas es de: $'+suma/ventas.length)
}

function stockCero(){
    for(let e of productos){
        if(e.stock==0) console.log(e);
    }
}

function menu(){
    var flag=true;
    while(flag){
        console.log('1) Agregar producto');
        console.log('2) Modificar stock');
        console.log('3) Registrar venta y reducir Stock');
        console.log('4) Promedio de ventas realizadas');
        console.log('5) Mostrar productos con Stock 0');
        console.log('6) Salir del sistema');
        console.log('-----------------------');
        var opc=parseInt(prompt('Ingrese una opcion'));
        switch(opc){
            case 1:
                var cod=prompt('Ingrese el codigo del producto');
                var desc=prompt('Ingrese la descripcion del producto');
                var tipo=prompt('Ingrese el tipo del producto');
                var preciComp=parseFloat(prompt('Ingrese el precio de compra del producto'));
                var preciVent=parseFloat(prompt('Ingrese el precio de venta del producto'));
                var stock=parseInt(prompt('Ingrese la cantidad de stock del producto'));
                agregarP(cod,desc,tipo,preciComp,preciVent,stock);
                break;
            case 2:
                var cod=prompt('Ingrese el codigo del producto');
                var nuevoSt=parseInt(prompt('Ingrese el nuevo stock del producto'));
                modifStock(cod,nuevoSt);
                break;
            case 3:
                var cod=prompt('Ingrese el codigo del producto');
                var cantVend=parseInt(prompt('Ingrese la cantidad de productos vendidos'));
                regVenta(cod,cantVend);
                break;
            case 4:
                promVentas()
                break;
            case 5:
                stockCero();    
                break;
            case 6:
                flag=false;
                break;
            default:
                console.log('El valor ingresado es incorrecto o no existe en el menu');
        }
    }
}
