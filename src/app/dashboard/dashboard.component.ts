import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public routes: any[] = [
    {
      path: 'cards',
      viewValue: 'Card1',
      img: ''
    },
    {
      path: 'second-cards',
      viewValue: 'Card2',
      img: '',
    },
    {
      path: 'card_num3',
      viewValue: 'Card3',
      img: '',
    },
    {
      path: 'card_num4',
      viewValue: 'Card4',
      img: '',
    },
    {
      path: 'card_num5',
      viewValue: 'Card5',
      img: '',
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public  navigateTo(path: string): void{
    this.router.navigate(['dashboard', path])
  }
}
