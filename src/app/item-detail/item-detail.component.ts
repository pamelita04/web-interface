import {Component, OnInit} from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item: Item;
  image1;
  image2;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private location: Location) {

                
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    // this.item = this.itemService.getItem(id);
    this.itemService.getItem(id).subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }

  deleteItem(){
    let id ="" + this.item.id;
    this.itemService.deleteItem(id).subscribe(item => {
      console.log("removed")
    });
  }

}
