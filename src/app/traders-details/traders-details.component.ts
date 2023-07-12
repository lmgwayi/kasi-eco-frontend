import { Component } from '@angular/core';
import { Traders-details } from 'src/app/services'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-traders-details',
  templateUrl:'./traders-details.component.html',
  styleUrls: ['./traders-details.component.css']
})
export class TradersDetailsComponent implements OnInit {

  product: any

  constructor(
    private productServices: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOne()
  }

  getOne(){
    let id = this.route.snapshot.paramMap.get("id")
    console.log(id)
    this.productServices.getOne(id).subscribe({
      next: data => {
        this.product = data
        console.log(this.product)
      }
    })
  }
}
