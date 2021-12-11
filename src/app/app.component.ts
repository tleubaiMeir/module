import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'module';
constructor(private router: Router) {
}

public navigateToRouter1(): void {
  this.router.navigate(['route1'])
}
}
