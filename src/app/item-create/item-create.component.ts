import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {

  personaNew: Item = {
    id: 0,
    codigo_categoria: '',
    nombre_categoria: '',
    categoria_id: 1,
    marca: '',
    modelo: '',
    capacidad: '',
    gasto_total: 0,
    gasto_id: 0,
    cantidad: 0,
    estado: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
