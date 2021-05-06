import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedactService {

  constructor() { }

  public publishPost(post): void{
    let items: void[] = JSON.parse(localStorage.getItem('posts')) || [];
    items.push(post);
    localStorage.setItem('posts', JSON.stringify(items));
  }

  public getPosts(): string{
    return JSON.parse(localStorage.getItem('posts')) || [];
  }

  public getPostById(id: string): string{
    return JSON.parse(localStorage.getItem('posts'))[id] || [];
  }

  public deletePostById(id: string): string{
    return  JSON.parse(localStorage.getItem('posts'))[id].pop() || [];
  }

}
