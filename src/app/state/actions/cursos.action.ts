import {createAction, props} from "@ngrx/store";
import {Curso} from "../../models/curso";

 export const cargarCursos = createAction(
  //funcion a la que pertenece la accion dentro de []
  //fuera de [] la accion que quiero crear
  '[Lista Cursos] Cargar cursos'
)
 export const cursosCargados = createAction(
  //funcion a la que pertenece la accion dentro de []
  //fuera de [] la accion que quiero crear
  '[Lista Cursos] Cursos cargados',

//metodo para obtener informacion de cursos
//props para mandar información al store
  props<{cursos: Curso[]}>()

)
