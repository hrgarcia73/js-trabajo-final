//Defino clase registros de fermentadores
export class registroFermentador {
    constructor(lote, fecha, hora, ph, densidad, gradoPlato, conductividad,
        temperatura, oxigeno, co2, celulasTotales, viabilidad,
        volumen, presion, observaciones){
        this.lote = lote;
        this.fecha = fecha;
        this.hora = hora;
        this.ph = ph;
        this.densidad = densidad;
        this.gradoPlato = gradoPlato;
        this.conductividad = conductividad;
        this.temperatura = temperatura;
        this.oxigeno = oxigeno;
        this.co2 = co2;
        this.celulasTotales=celulasTotales;
        this.viabilidad = viabilidad
        this.volumen = volumen;
        this.presion = presion;
        this.observaciones = observaciones;
    }
}