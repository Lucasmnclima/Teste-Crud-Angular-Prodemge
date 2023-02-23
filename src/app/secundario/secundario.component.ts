import { propriedades } from './secundario.model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropriedadesService } from '../shared/propriedades.service';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.scss']
})
export class SecundarioComponent {
  allProperty: any;
  //Importando FormGroup do module @angular
  formValue!: FormGroup;
  propriedadesModelObj: propriedades = new propriedades();
  botadicionar!:boolean;
  boteditar!:boolean;

  constructor(private fb: FormBuilder, private api: PropriedadesService) { }

  ngOnInit(): void {
    //fazendo o formValue responder ao comportamento no html e buscar a requisição http de cada entrada de dados no crud
    this.formValue = this.fb.group({
      snome: [''],
      sorganizacao: [''],
      sdata: [''],
      scodigo: [''],
      scompetencias: [''],
    })
    this.getAllProperty()
  }
  // Programando as funcionalidade dos botões de adicionar e editar
  clickAddProp(){
    this.formValue.reset();
    this.botadicionar = true;
    this.boteditar = false;
  }
  getAllProperty() {
    this.api.getAllprop().subscribe((res) => {
      this.allProperty = res;
      console.warn(this.allProperty)
    })
  }
  //Adicionando as propriedades para o nó
  addProp() {
    this.propriedadesModelObj.snome = this.formValue.value.snome;
    this.propriedadesModelObj.sorganizacao = this.formValue.value.sorganizacao;
    this.propriedadesModelObj.sdata = this.formValue.value.sdata;
    this.propriedadesModelObj.scodigo = this.formValue.value.scodigo;
    this.propriedadesModelObj.scompetencias = this.formValue.value.scompetencias;
    this.api.addListing(this.propriedadesModelObj).subscribe((res) => {
      console.log(res);
      alert("Salvo com sucesso!")
      let ref = document.getElementById('limpar');
      ref?.click();
      this.formValue.reset();
      this.getAllProperty();
    }, err => {
      alert("Ops! Algo deu errado.")
    })
  }
  deletProp(data:any){
    this.api.deletePrp(data.id).subscribe((res)=>{
      alert('Curso deletado com sucesso!')
      this.getAllProperty()
    })
  }
}
