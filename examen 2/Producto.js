export default class Producto
{
    constructor(Productos)
    {
        this._Tipo = Productos.Tipo;
        this._Nombre = Productos.Nombre;
        this._Cantidad = Productos.Cantidad;
        this._Costo = Productos.Costo;
        this._fecha = Productos.fecha;
        this._months = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octtubre",
            "Noviembre",
            "Diciembre"
        ];
        this._dias = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",
        ];
    }
    //retorna dia faltante
    getFechaAsString() 
    {
        let dateN = this._dias[this._fecha.getDay()] +" "+ this._fecha.getDate() + " de " + this._months[this._fecha.getMonth()] + " del " + this._fecha.getFullYear();
        return dateN;
    }
    get Tipo()
    {
        return this._Tipo;
    }
    get Nombre()
    {
        return this._Nombre;
    }
    get Cantidad()
    {
        return this._Cantidad;
    }
    get Costo()
    {
        return this._Costo;
    }
    get fecha()
    {
        return this._fecha;
    }
}