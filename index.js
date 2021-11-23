var Empleado = /** @class */ (function () {
    function Empleado(id, puesto, horasTrabajadas, salarioHora) {
        this.id = id;
        this.puesto = puesto;
        this.horasTrabajadas = horasTrabajadas;
        this.salarioHora = salarioHora;
    }
    Empleado.prototype.getSalary = function () {
        var resultado = this.horasTrabajadas * this.salarioHora;
        console.log(resultado);
    };
    return Empleado;
}());
var empleado1 = new Empleado(122, 'trainee', 25, 350);
empleado1.getSalary();
