import { Component, OnInit } from '@angular/core';
import { RedactService } from 'src/app/services/write/redact.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public list;
  constructor(private redactService: RedactService) { }

  ngOnInit(): void {
    this.list = this.redactService.getPosts();
  }

  sendIndex(i){
    // Colocar esto en un servicio
    localStorage.setItem('indexOfPost', i);
    setTimeout(()=> window.location.reload(), 1);
  }
}
