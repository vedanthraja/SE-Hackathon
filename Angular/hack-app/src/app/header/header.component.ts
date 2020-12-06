import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'login'
    },
    {
      label: 'About',
      icon: 'help'
    },
    {
      label: 'Pricing',
      icon: 'attach_money'
    },
    {
      label: 'Docs',
      icon: 'notes'
    },
    {
      label: 'Showcase',
      icon: 'slideshow'
    },
    {
      label: 'Blog',
      icon: 'rss_feed'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
