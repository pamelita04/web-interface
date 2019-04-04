import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import { ItemService } from '../services/item.service';
import { Category } from '../shared/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items: Item[];
  categories: Category[];
  // categories: any;
  selectedItem;
  backItems: Item[];

  constructor(private itemService: ItemService, private categoryService: CategoryService) {
  }

  ngOnInit() {
    // this.items = this.itemService.getItems();
    this.loadCategorias();
    this.loadItems();
  }

  loadCategorias(){
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  loadItems(){
    this.itemService.getItems().subscribe(items => this.items = this.backItems = items);
  }

  filterCatalog(event){
    if(this.selectedItem){
      this.items = this.backItems.filter(element => element.nombre_categoria == this.selectedItem)
    }else{
      this.loadItems()
    }
  }
}
