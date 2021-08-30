import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  numberOfProducts: any;
  filter = { tShirts: false, sweatShirts: false, tankTops: false, dressShirts: false };
  products: any[] = [];
  filteredProducts: any[] = [];
  filteredByIdProducts: any[] = [];
  constructor(private _ApiService: ApiService) {
    this._ApiService.getProducts('women').subscribe((res) => {
      this.products = res;
      this.numberOfProducts = res.length;
      this.filteredProducts = this.products.filter(product => product.id >= 0 && product.id < 12)

    })
  }

  ngOnInit(): void {

  }

  filterChange() {
    this.filteredProducts = this.products.filter(product =>
      (product.type === 'tShirts' && this.filter.tShirts)
      || (product.type === 'sweatShirts' && this.filter.sweatShirts)
      || (product.type === 'tankTops' && this.filter.tankTops)
      || (product.type === 'dressShirts' && this.filter.dressShirts)

    );
  }

  filterSize(size: string) {
    this.filteredProducts = this.products.filter(product =>
      product.size === size
    );
  }

  filterColor(color: string) {
    this.filteredProducts = this.products.filter(product =>
      product.color === color
    );
  }


}
