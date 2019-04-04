import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {

  personaNew: Item = {
    id: 1,
    featured: true,
    name: '',
    image: "",
    category: '',
    label: '',
    price: '',
    description: '',
    comments: [],
    
};

  constructor() { }

  ngOnInit() {
  }

}
