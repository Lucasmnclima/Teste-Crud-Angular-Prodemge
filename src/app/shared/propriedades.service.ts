import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropriedadesService {
  // bem complexo realizar a importação do rxjs para o pipe do map;
  //Toda parte da requisição http foi complexa pra mim.
  constructor(private http: HttpClient) { }
  addListing(data: any) {
    return this.http.post('http://localhost:3000/secundario', data).pipe(map((res: any) => {
      return res;
    }))
  }
  // Requisição responsiva do http para adicionar dados.
  getAllprop() {
    return this.http.get("http://localhost:3000/secundario").pipe(map((res: any) => {
      return res;
    }))
  }
  // Utilizando a requisição para editar os dados requisitados na db.json
  updatePrp(data: any, id: number) {
    return this.http.put('http://localhost:3000/secundario/' + id, data).pipe(map((res: any) => {
      return res;
    }))
  }
  // Criando o método de delete.
  deletePrp(id: number) {
    return this.http.delete('http://localhost:3000/secundario/' + id).pipe(map((res: any) => {
      return res;
    }))
  }
  //Ok, fiz a construção da requisição https na raça. 
}