import {appState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {CursoState} from "../../models/curso.state";

export const selectorCurso = (state: appState ) => state.cursos;

export const selectorCargandoCursos = createSelector(
  selectorCurso,
  (state: CursoState) => state.cargando
)
export const selectorCursosCargados = createSelector(
  selectorCurso,
  (state:CursoState) => state.cursos
)
