import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:number;
  gender:string='';
  productDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute , private _ApiService:ApiService) {
   this.gender= _ActivatedRoute.snapshot.params.gender;
   this .id=_ActivatedRoute.snapshot.params.id;
   this._ApiService.getProductDetails(this.gender,this.id).subscribe((res)=>{
     this.productDetails=res;
   })
   }

  ngOnInit(): void {
  }

}
