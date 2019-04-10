import Producto from "./Producto.js";
export default class saldo {
    constructor(movimientos, tablainfo) {
        this._movimientos = movimientos;
        this._tablainfo = tablainfo;
        this._contadorR = 0;
        this._contadorD = 0;
        this._contadorS = 10000;
        //variables localstorage
        this._LocalProducto = [];
        this._initTable();
    }

    _initTable() {
        //localStorage.removeItem("LocalProducto")
        let LocalProducto = JSON.parse(localStorage.getItem("LocalProducto"));
        if(LocalProducto === null)
        {
            return ;
        }
        LocalProducto.forEach((Productos, index) => {
            Productos.fecha = new Date(Productos.fecha);
            this._showInTable(new Producto(Productos));
        })
    }
    _showInTable(Productos) 
    {
        let Tipo = Productos.Tipo;
        let Nombre = Productos.Nombre;
        let Movimiento = Productos.Costo;
        let Cantidad =  Productos.Cantidad;
        if(Tipo === "Deposito")
        {
            this._LocalProducto.forEach((Productos, index) => {
                if (Productos.Nombre === Nombre)
                {
                    Productos.Cantidad = Number(Productos.Cantidad) + Number(Cantidad);
                    Productos.Costo = Number(Movimiento);
                    Movimiento = Productos.Costo;
                    Cantidad = Productos.Cantidad;
                return;
                }})
            
        let row = this._movimientos.insertRow(-1);
        let cellFecha = row.insertCell(0);
        let cellTipo = row.insertCell(1);
        let cellNombre = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellCosto = row.insertCell(4);
        cellFecha.innerHTML = Productos.getFechaAsString();
        cellTipo.innerHTML = Productos.Tipo;
        cellNombre.innerHTML = Productos.Nombre;
        cellCantidad.innerHTML = Cantidad;
        cellCosto.innerHTML = Movimiento;
        let Saldo = Number(this._contadorS);
        //Tipo de movimiento
                this._contadorD = Number(this._contadorD) + (Number(Movimiento)*Number(Cantidad));
                this._contadorS = Saldo + Number(Movimiento);
        Saldo = this._contadorS;
        //tabla pequeña de valores
        this._tablainfo.rows[1].cells[1].innerHTML = this._contadorR;
        this._tablainfo.rows[2].cells[1].innerHTML = this._contadorD;
        this._tablainfo.rows[3].cells[1].innerHTML = this._contadorS;
        let objProductos = {
            Tipo: Productos.Tipo,
            Nombre: Productos.Nombre,
            Cantidad: Productos.Cantidad,
            Costo: Productos.Costo,
            fecha: Productos.fecha,
        }
        this._LocalProducto.push(objProductos);
            }
        else if(Tipo === "Retiro")
        {
            let valorRevision = -1;
            this._LocalProducto.forEach((Productos, index) => {
                if (Productos.Nombre === Nombre)
                {
                valorRevision = index;
                return;
                }
                                    })
            if(valorRevision === -1)
            {
                alert("objeto no registrado");
            }
            else
            {
                let row = this._movimientos.insertRow(-1);
        let cellFecha = row.insertCell(0);
        let cellTipo = row.insertCell(1);
        let cellNombre = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellCosto = row.insertCell(4);
        cellFecha.innerHTML = Productos.getFechaAsString();
        cellTipo.innerHTML = Productos.Tipo;
        cellNombre.innerHTML = Productos.Nombre;
        cellCantidad.innerHTML = Productos.Cantidad;
        cellCosto.innerHTML = Productos.Costo;
        let Movimiento = Productos.Costo;
        let Cantidad =  Productos.Cantidad;
        let Saldo = Number(this._contadorS);
        //Tipo de movimiento
                this._contadorR = Number(this._contadorR) + (Number(Movimiento)*Number(Cantidad));
                this._contadorS = Saldo - Number(Movimiento);
        Saldo = this._contadorS;
        //tabla pequeña de valores
        this._tablainfo.rows[1].cells[1].innerHTML = this._contadorR;
        this._tablainfo.rows[2].cells[1].innerHTML = this._contadorD;
        this._tablainfo.rows[3].cells[1].innerHTML = this._contadorS;
        let objProductos = {
            Tipo: Productos.Tipo,
            Nombre: Productos.Nombre,
            Cantidad: Productos.Cantidad,
            Costo: Productos.Costo,
            fecha: Productos.fecha,
        }
        this._LocalProducto.push(objProductos);
            }
        }
        
    }
    addProducto(Productos) {
        this._showInTable(Productos);
        localStorage.setItem("LocalProducto", JSON.stringify(this._LocalProducto));
    }
}