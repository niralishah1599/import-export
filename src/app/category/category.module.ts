import { NgModule } from '@angular/core';

import { CategoryComponent } from './category.component';
import { ProductModule } from '../product/product.module';
import { FormsModule}  from '@angular/forms';




@NgModule({
  declarations: [CategoryComponent],
  imports: [

    ProductModule,
    FormsModule
  
  ],
  exports:[
    CategoryComponent
  ]
})
export class CategoryModule { }
