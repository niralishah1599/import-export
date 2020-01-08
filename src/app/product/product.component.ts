import { Component, OnInit ,Input,SimpleChanges,OnChanges} from '@angular/core';
import { Iproductdetail } from './Interfacefile';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit,OnChanges{
  @Input() productprice:number;
   i:number=0;
  isvalid:boolean=true; 

 product:Iproductdetail[];

  constructor() { }

  ngOnInit() {

    this.product = [
      { productid: 1, productname: "cosmatics",productprice: 10 },
      { productid: 2, productname: "women-cloths", productprice: 100},
      { productid: 3, productname: "earings", productprice: 10 },
      { productid: 4, productname: "gogals", productprice: 10 },
      { productid: 5, productname: "children-cloths", productprice: 10},
      { productid: 6, productname: "men cloths", productprice:10 },
      { productid: 7, productname: "watch", productprice:10},
      { productid: 8, productname: "shoes", productprice: 10 },
      { productid: 9, productname: "electronics", productprice: 10 },
      { productid: 10, productname: "other", productprice: 10 }
    ]
console.log(this.product);
  }

  ngOnChanges(changes:SimpleChanges)
  {
    for(let propName in changes)
    {
      let change = changes[propName];
	let curVal  = JSON.stringify(change.currentValue);
	let prevVal = JSON.stringify(change.previousValue);

        console.log(curVal);
        console.log(prevVal);
        this.i += 1;
       if(this.i>1)
        {
    
           this.isvalid=false;   
     
        }


    }

  }

}
