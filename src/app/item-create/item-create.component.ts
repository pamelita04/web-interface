import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import { DomSanitizer } from '@angular/platform-browser';
import { ItemService } from '../services/item.service';

import CATEGORIES from '../shared/categories';
import MARCAS from '../shared/marcas';
import { Category } from '../shared/category';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {

  item: any = {
    id: null,
    marca: '',
    modelo: '',
    estado: 0,
    codigo_categoria: '',
    nombre_categoria: '',
    categoria_id: null,
    capacidad: '',
    gasto_total: null,
    gasto_id: null,
    cantidad: null,
    image0: '',
    image1: '',
    image2: '',
  };

  categories: any[] = CATEGORIES;
  selectedCategory: Category;

  marcas: string[] = MARCAS;

  image0: any = ''
  image1: any = ''
  image2: any = ''

  constructor(
    private sanitizer: DomSanitizer,
    private itemService: ItemService,
  ) {}

  ngOnInit() {
    // const items = Object.keys(this.itemService.items).map((key) => {
    //   return this.itemService.items[key];
    // });
  }

  saveItem() {
    console.log(this.item);
    this.item.categoria_id = this.selectedCategory.id;
    this.item.nombre_categoria = this.selectedCategory.nombre;
    this.item.codigo_categoria = this.selectedCategory.codigo;
    this.itemService.createItem(this.item);
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
      }
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    const base64textString = btoa(binaryString);
    if (!this.item.image0) {
      this.image0 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64textString);
      this.item.image0 = base64textString
    } else if (!this.item.image1) {
      this.image1 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64textString);
      this.item.image1 = base64textString
    } else if (!this.item.image2){
      this.image2 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64textString);
      this.item.image2 = base64textString
    }
  }


}
