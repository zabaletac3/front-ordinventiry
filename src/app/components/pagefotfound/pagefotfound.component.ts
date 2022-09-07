import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-pagefotfound',
  templateUrl: './pagefotfound.component.html',
  styleUrls: ['./pagefotfound.component.css']
})
export class PagefotfoundComponent implements OnInit {

  constructor(

    public router: Router

  ) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigateByUrl('/login');
  }

}
