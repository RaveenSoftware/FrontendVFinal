import { TipoDocumento } from './tipo-documento.model';
import { TipoGenero } from './tipo-genero.model';
import { ProgramaAcademico } from './programa-academico.model';
import { Rol } from './rol.model';

export interface Student {
  id?: number;
  
  nombre?: string;
  telefono?: string;
  correoPersonal?: string;
  fechaNacimiento?: string;
  numeroDocumento?: string;
  estado?: boolean;
  tipoDocumento?: TipoDocumento;
  tipoDocumentoId?: number;
  genero?: TipoGenero;
  generoId?: number;
  rol?: Rol;
  rolId?: number;

  // Academic Data
  programa?: ProgramaAcademico;
  programaId?: number;
  codigoInstitucional?: string;
  correoInstitucional?: string;

  // Agrega estas dos propiedades 👇
  programaNombre?: string;
  facultadNombre?: string;
}
  




