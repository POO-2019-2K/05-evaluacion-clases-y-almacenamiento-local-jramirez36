import saldo from "./inventario.js";
import Producto from "./Producto.js";
class Main {
    constructor() 
    {
        this._Productos = new saldo(document.querySelector("#movimientos"), document.querySelector("#info"));
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");
            if (form.checkValidity() === true) 
            {
                let Tipo = document.querySelector("#Tipo").value;
                let Nombre = document.querySelector("#Nombre").value;
                let Cantidad = document.querySelector("#Cantidad").value;
                let Costo = document.querySelector("#Coste").value;
                let fechai = document.querySelector("#Fecha").value;
                fechai = fechai.split("-");
                let fecha = new Date(fechai[0], fechai[1] - 1, fechai[2]);
                let objProductos = 
                {
                    Tipo: Tipo,
                    Nombre: Nombre,
                    Cantidad: Cantidad,
                    Costo: Costo,
                    fecha: fecha,
                };
                let Productos = new Producto(objProductos);
                this._Productos.addProducto(Productos);
            }
        })
        document.querySelector("#btnAdd2").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");
            if (form.checkValidity() === true) 
            {
                let Tipo = document.querySelector("#Tipo").value;
                let Nombre = document.querySelector("#Nombre").value;
                let Cantidad = document.querySelector("#Cantidad").value;
                let Costo = document.querySelector("#Coste").value;
                let fechai = document.querySelector("#Fecha").value;
                fechai = fechai.split("-");
                let fecha = new Date(fechai[0], fechai[1] - 1, fechai[2]);
                let objProductos = 
                {
                    Tipo: Tipo,
                    Nombre: Nombre,
                    Cantidad: Cantidad,
                    Costo: Costo,
                    fecha: fecha,
                };
                let Productos = new Producto(objProductos);
                this._Productos.addProducto(Productos);
            }
        })
    }
}
let m = new Main();
