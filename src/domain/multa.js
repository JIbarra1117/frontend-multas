export class Multa {
    constructor({ id, descripcion, usuarioMultadoId, usuarioAutorId, aprobado, aprobaciones }) {
      this.id = id;
      this.descripcion = descripcion;
      this.usuarioMultadoId = usuarioMultadoId;
      this.usuarioAutorId = usuarioAutorId;
      this.aprobado = aprobado;
      this.aprobaciones = aprobaciones;
    }
  }
  