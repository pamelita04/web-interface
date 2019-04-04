import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items: Item[];
  selectedItem: Item;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    // this.items = this.itemService.getItems();
    this.loadCategorias();
    this.loadItems();
  }

  loadCategorias(){
    this.itemService.getItems().subscribe(items => this.items = items);
    console.log("ITEMS---", this.items)
  }

  loadItems(){

  }

  onSelect(item: Item) {
    this.selectedItem = item;
  }
}
