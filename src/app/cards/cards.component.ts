import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  num = 0;
  p1;
  p2;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.p1 = this.route.snapshot.params['p1'];
    this.p2 = this.route.snapshot.params['p2'];

    //比較常用的接收參數
    this.route.params.subscribe((para: Params) => {
      if (!isNaN(parseInt(para['number']))) {
        this.num = parseInt(para['number']);
      }
    });
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  goFlot() {
    this.router.navigate(['/charts', 'flot']);
  }

  addNum() {
    //this.router.navigate(['/cards', this.num + 1]);  //絕對路徑寫法
    //this.router.navigate(['..', this.num + 1], { relativeTo: this.route });  //相對路徑寫法

    //用分號加上optionParams
    // this.router.navigate(['..', this.num + 1, { p1: this.p1, p2: this.p2 }], 
    //                      { relativeTo: this.route });

    //加上queryParams
    this.router.navigate(['..', this.num + 1, { p1: this.p1, p2: this.p2 }],
      {
        relativeTo: this.route,
        queryParams: { 'Will': '111' }
      });
  }
}
