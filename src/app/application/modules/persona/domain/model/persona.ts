import { Core_eps } from '../model/core_eps';

export interface Persona {
  schema_version ? : number,
    document_version ? : number,
    fecha_creacion ? : Date,
    fecha_ultima_modificacion ? : Date,
    codigo_interno ? : string,
    primer_nombre ? : string,
    segundo_nombre ? : string,
    primer_apellido ? : string,
    segundo_apellido ? : string,
    numero ? : string,
    fecha_expedicion ? : Date,
    lugar_expedicion ? : string,
    tipo ? : string,
    estado_civil ? : string,
    sexo ? : string,
    correo_electronico ? : Array < string > ,
    fecha_nacimiento ? : Date,
    core_eps ? : Array < Core_eps > ,
};
