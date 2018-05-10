import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks:Array<Stock>;
  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock(1,"zsh1",100,1.5,"这是我的练习项目",["1","2"]),
      new Stock(2,"zsh2",100,1.5,"这是我的练习项目",["1","2"]),
      new Stock(3,"zsh3",100,1.5,"这是我的练习项目",["1","2"]),
      new Stock(4,"zsh4",100,1.5,"这是我的练习项目",["1","2"]),
      new Stock(5,"zsh5",100,1.5,"这是我的练习项目",["1","2"]),
      new Stock(6,"zsh6",100,1.5,"这是我的练习项目",["1","2"]),
    ]
  }

}
export class Stock{
  constructor(
    public id:number,
    public  name:string,
    public  price:number,
    public  rating:number,
    public  desc:string,
    public  categories:Array<string>
  ){

  }
}
