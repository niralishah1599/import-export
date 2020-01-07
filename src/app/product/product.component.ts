import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productdetail = [
    {productid:1,productname:"cosmatics"},
    {productid:2,productname:"women-cloths"},
    {productid:3,productname:"earings"},
    {productid:4,productname:"gogals"},
    {productid:5,productname:"children-cloths"},
    {productid:6,productname:"men cloths"},
    {productid:7,productname:"watch"},
    {productid:8,productname:"shoes"},
    {productid:9,productname:"electronics"},
    {productid:10,productname:"other"},
    
  ];

  constructor() { }

  ngOnInit() {

   
}
}
