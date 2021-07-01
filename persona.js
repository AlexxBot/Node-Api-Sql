class Persona{
    constructor(codPersona, tipoDocumento, nroDocumento, tipoPersona, nombre, apPaterno, apMaterno, razonSocial, direccion, telefono, mail, tipoRelacion,flagActivo, flagEsExtrajero){
        this.codPersona = codPersona,
        this.tipoDocumento = tipoDocumento,
        this.nroDocumento = nroDocumento,
        this.tipoPersona = tipoPersona,
        this.nombre = nombre,
        this.apPaterno = apPaterno,
        this.apMaterno = apMaterno,
        this.razonSocial = razonSocial,
        this.Direccion = direccion,
        this.telefono = telefono,
        this.mail = mail,
        this.tipoRelacion = tipoRelacion,
        this.flagActivo = flagActivo,
        this.flagEsExtrajero = flagEsExtrajero
    }
}

module.exports = Persona;