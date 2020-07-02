import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  public pageTitle : String;

  constructor(private router:  Router) { 
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() );
  }

  handleRouteChange = () => {
    switch(this.router.url){
      case "/maze" : this.pageTitle = "Maze game"; break;
      default: this.pageTitle = "Reinforcement Learning playground"; break; 
    }
  };

  ngOnInit(): void {
  }

}
