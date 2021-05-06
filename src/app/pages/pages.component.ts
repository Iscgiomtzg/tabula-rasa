import { Component, OnInit } from '@angular/core';
import { RedactService } from '../services/write/redact.service';

@Component({
  selector: 'app-pages',
  styleUrls: ['./pages.component.scss'],
  template: `
  <div class="card" style="margin: 2%; padding: 20px 16px;">
    <div class="container" [innerHtml]='post.control'>
    </div>
  </div>`
})
export class PagesComponent implements OnInit {
  public post;

  constructor(private redactservice: RedactService) { }

  ngOnInit(): void {
    this.post = this.redactservice.getPostById(localStorage.getItem('indexOfPost'));
  }

}
