class Vehiculo {
    tipo: string;
    marca: string;
    modelo: string;
    año: number;
  
    constructor(tipo: string, marca: string, modelo: string, año: number) {
      this.tipo = tipo;
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    getTipo(): string {
      return this.tipo;
    }
  
    setTipo(tipo: string): void {
      this.tipo = tipo;
    }
  
    getMarca(): string {
      return this.marca;
    }
  
    setMarca(marca: string): void {
      this.marca = marca;
    }
  
    getModelo(): string {
      return this.modelo;
    }
  
    setModelo(modelo: string): void {
      this.modelo = modelo;
    }
  
    getAño(): number {
      return this.año;
    }
  
    setAño(año: number): void {
      this.año = año;
    }
  }
  
  class RegistroAutomotor {
    vehiculos: Vehiculo[] = [];
  
    agregarVehiculo(tipo: string, marca: string, modelo: string, año: number): void {
      const vehiculo = new Vehiculo(tipo, marca, modelo, año);
      this.vehiculos.push(vehiculo);
    }
  
    getVehiculos(): Vehiculo[] {
      return this.vehiculos;
    }
  
    modificarVehiculo(indice: number, tipo?: string, marca?: string, modelo?: string, año?: number): void {
      if (0 <= indice && indice < this.vehiculos.length) {
        const vehiculo = this.vehiculos[indice];
        if (tipo) {
          vehiculo.setTipo(tipo);
        }
        if (marca) {
          vehiculo.setMarca(marca);
        }
        if (modelo) {
          vehiculo.setModelo(modelo);
        }
        if (año) {
          vehiculo.setAño(año);
        }
      } else {
        console.log("Indice de vehículo invalido.");
      }
    }
  
    darDeBaja(indice: number): void {
      if (0 <= indice && indice < this.vehiculos.length) {
        const nuevosVehiculos: Vehiculo[] = [];
        for (let i = 0; i < this.vehiculos.length; i++) {
          if (i !== indice) {
            nuevosVehiculos.push(this.vehiculos[i]);
          }
        }
        this.vehiculos = nuevosVehiculos;
      } else {
        console.log("Indice de vehículo invalido.");
      }
    }
  }
  
  
  const registro = new RegistroAutomotor();//agregar vehiculos
  registro.agregarVehiculo("Coche", "Toyota", "Corolla", 2020);
  registro.agregarVehiculo("Motocicleta", "Honda", "CBR600RR", 2018);
  registro.agregarVehiculo("Camión", "Mercedes-Benz", "Actros", 2022);
  
  console.log("Vehículos registrados:");
  registro.getVehiculos().forEach((vehiculo, i) => {
    console.log(`  ${i}: ${vehiculo.getTipo()} - ${vehiculo.getMarca()} ${vehiculo.getModelo()} (${vehiculo.getAño()})`);
  });
  
  registro.modificarVehiculo(1, "Motocicleta", "Yamaha", "XS450", 2021);
  
  console.log("Vehículos registrados después de la modificación:");
  registro.getVehiculos().forEach((vehiculo, i) => {
    console.log(`  ${i}: ${vehiculo.getTipo()} - ${vehiculo.getMarca()} ${vehiculo.getModelo()} (${vehiculo.getAño()})`);
  });
  
  registro.darDeBaja(0);
  
  console.log("Vehículos registrados después de dar de baja:");
  registro.getVehiculos().forEach((vehiculo, i) => {
    console.log(`  ${i}: ${vehiculo.getTipo()} - ${vehiculo.getMarca()} ${vehiculo.getModelo()} (${vehiculo.getAño()})`);
  });