import {TestBed} from '@angular/core/testing';

import {UsuariosService} from './usuarios.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";

describe('UsuariosService', () => {
  //trae la informacion mockeada
  let httpClientSpy: { get: jasmine.Spy };
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new UsuariosService(httpClientSpy as any);
  });

  it('El servicio se instancia correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio retorna un arreglo de usuarios mockeados', (done) => {
    const mockDatos = [
      [
        {"usuario": "Trace_Langosh26@yahoo.com", "constrasena": "KKrRdAfty1Ea7_L", "admin": true, "id": "1"},
        {"usuario": "Lelia_Rosenbaum@yahoo.com", "constrasena": "9iFm7vqLjDiOWC9", "admin": true, "id": "2"},
        {"usuario": "Tyrel.Halvorson@gmail.com", "constrasena": "5ON8caq3bMhUjmU", "admin": false, "id": "3"},
        {"usuario": "Orland64@gmail.com", "constrasena": "w14wBoBS__Y0m7z", "admin": true, "id": "4"}]
    ];
    httpClientSpy.get.and.returnValue(of(mockDatos));


    // @ts-ignore
    service.obtenerUsuarios().subscribe((usuarios) =>{
      // @ts-ignore
      expect(usuarios).toEqual(mockDatos)
      //finaliza prueba
      done();
    })
  });


});
