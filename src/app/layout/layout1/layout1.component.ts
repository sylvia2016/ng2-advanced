import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.css']
})
export class Layout1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  enter(){
    this.router.navigateByUrl('/content/dashboard');
    //this.router.navigate(['..','content']);    
  }
}
