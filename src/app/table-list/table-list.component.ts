import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  objectKeys = Object.keys;
  cryptos: any;
  apikey = {
    key:"b8670993-2da7-4471-8155-01fc40e767bc"
  }
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getPrices();
    /* this.cryptos = setInterval(() => {
      this.getPrices(); 
    }, 10000); // Datayı 10 saniyede bir yenile
    this.getPrices(); */
  }


  getPrices()
  {
    //this.http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USDT,BNB,USDC,SOL,XRP,LUNA,ADA,DOGE,AVAX,UST,BUSD,DOT,SHIB&tsyms=USD")
     // this.http.get("https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY="+this.apikey.key)
     this.http.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY="+this.apikey.key)
      .subscribe(response => {
                this.cryptos = response;
                this.cryptos = this.cryptos.data;
                console.log(this.cryptos)
                //console.log(this.cryptos.data[0].quote.USD);

              },
              error => {
                console.log(error);
              })
  }

}
