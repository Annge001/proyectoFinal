import {CursoState} from "../models/curso.state";
import {ActionReducerMap} from "@ngrx/store";
import {cursosReducer} from "./reducers/cursos.reducers";

export interface appState{
  cursos: CursoState
}



export const ROOT_REDUCERS: ActionReducerMap<appState>={
  cursos: cursosReducer
}
