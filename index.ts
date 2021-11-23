
interface Persona {

  nombre: string,
  edad: number,
  genero: string
}


class Empleado {
  id: number;
  puesto: string;
  horasTrabajadas: number;
  salarioHora: number

  constructor(id: number, puesto: string, horasTrabajadas: number, salarioHora: number) {
          this.id = id;
          this.puesto = puesto;
          this.horasTrabajadas = horasTrabajadas;
          this.salarioHora = salarioHora;
  }

  getSalary() : any {
      let resultado: number =  this.horasTrabajadas * this.salarioHora;
      console.log(resultado);

  }
}


let empleado1 = new Empleado(122, 'trainee', 25, 350);
empleado1.getSalary();










