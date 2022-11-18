import {CursoState} from "../../models/curso.state";
import {createReducer, on} from "@ngrx/store";
import {cargarCursos, cursosCargados} from "../actions/cursos.action";

const estadoInicial: CursoState = {
  cargando: false,
  cursos: []
}

//crear reductor de cursos.action.ts usando createReducer

export const cursosReducer = createReducer(
  estadoInicial,
  on(cargarCursos, (estado) => {
    //retornar lo que quiera agregar al store. creando un nuevo estado, actualizando true y manteniendo estado de a lista de cursos
    const estadoNuevo: CursoState ={
      cargando: true,
      cursos: estado.cursos
    }
    return estadoNuevo
  }),

    on(cursosCargados, (estado, {cursos}) => {
      const estadoNuevo: CursoState = {
        cargando: false,
        cursos: cursos
      }
      return estadoNuevo
  })

)
