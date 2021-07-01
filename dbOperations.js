var config = require('./dbconfig');
const sql = require('mssql');
//const Persona = require('./persona');

async function getPersonas() {
    try {

        let pool = await sql.connect(config);
        let personas = await pool.request().query("select * from Global.TPersona");
        return personas.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getPersona(codPersona) {
    try {

        let pool = await sql.connect(config);
        //este es una forma de hacerlo
        //let persona = await pool.request().query(`select * from Global.TPersona where cod_Persona= '${codPersona}'`);

        let persona = await pool.request()
            .input('codPersona', sql.VarChar, codPersona)
            .query("select * from Global.TPersona where cod_Persona = @codPersona")
        return persona.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function addPersona(persona) {
    try {
        let pool = await sql.connect(config);

        //console.log(persona);
        console.dir(persona);
        let insertPersona = await pool.request()
            .input('Cod_Persona', sql.NVarChar, persona.codPersona)
            .input('Tipo_Documento', sql.NVarChar, persona.tipoDocumento)
            .input('Nro_Documento', sql.NVarChar, persona.nroDocumento)
            .input('Tipo_Persona', sql.Char, persona.tipoPersona)
            .input('Nombre', sql.NVarChar, persona.nombre)
            .input('Ap_Paterno', sql.NVarChar, persona.apPaterno)
            .input('Ap_Materno', sql.NVarChar, persona.apMaterno)
            .input('Razon_Social', sql.NVarChar, persona.razonSocial)
            .input('Direccion', sql.NVarChar, persona.direccion)
            .input('Telefono', sql.NVarChar, persona.telefono)
            .input('Mail', sql.NVarChar, persona.mail)
            .input('Tipo_Relacion', sql.Char, persona.tipoRelacion)
            .input('flagActivo', sql.Bit, persona.flagActivo)
            .input('flagEsExtranjero', sql.Bit, persona.flagEsExtranjero)
            //.output('output_parameter', sql.Int)
            .execute('Global.spu_Persona_Guardar');
        return insertPersona.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getPersonas: getPersonas,
    getPersona: getPersona,
    addPersona : addPersona
}