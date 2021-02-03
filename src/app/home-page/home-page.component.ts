import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../core-module/data-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  optionList = [];
  filterOption = '';
  product = ''
  productList = [];
  searchOption = '';
  searchKey = ''
  constructor(private serv : DataServiceService) { }

  ngOnInit(): void {
  }

  fetchFilteredList(){
    this.serv.getData(this.filterOption)
    .subscribe(res => {
      
      if(this.filterOption == 'c'){
        this.optionList = res['drinks'].map(ele => ele['strCategory'])
      }
      else if(this.filterOption == 'i'){
        this.optionList = res['drinks'].map(ele => ele['strIngredient1'])
      }
      else if(this.filterOption == 'a'){
        this.optionList = res['drinks'].map(ele => ele['strAlcoholic'])
      }
      else if(this.filterOption == 'g'){
        this.optionList = res['drinks'].map(ele => ele['strGlass'])
      }

      console.log(res);
    })
  }

  fetchProductList(){
    this.serv.getProductList(this.filterOption, this.product)
    .subscribe(res => {
      
      this.productList = res['drinks']
      console.log(this.productList);
    })
  }

  searchProduct(){
    this.serv.getSearchList(this.searchOption, this.searchKey)
    .subscribe(res => {
      
      this.productList = res['drinks']
      
    })
  }
}


