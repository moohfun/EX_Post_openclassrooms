import { Component, Input, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  posts = [
    {
      title: 'windsurf',
      // tslint:disable-next-line: max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nec eros nec sollicitudin. Sed sagittis, ligula sit amet pellentesque imperdiet, nulla lacus euismod dolor, a scelerisque tellus tellus congue massa. Proin hendrerit vel leo sed porttitor. Duis iaculis, lorem sit amet sollicitudin porttitor, metus libero feugiat sem, in mattis enim lectus vitae arcu. Vestibulum elementum a tellus eget pellentesque. Duis eu maximus nulla. Donec laoreet congue faucibus. Praesent malesuada erat sit amet commodo fringilla.',
      loveIts: 1300,
      dontLoveIts: 0,
      created_at: new Date(2019, 3, 2, 13, 52),
      UserName: 'jacson'
    },
    {
      title: 'Kite surf',
      // tslint:disable-next-line: max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus nibh ut quam posuere suscipit. Suspendisse diam nibh, scelerisque eu tincidunt et, vestibulum ac nibh. Sed mollis libero nunc, eget tempor arcu tempus quis. Proin erat ipsum, varius cursus mollis nec, lacinia quis erat. Nunc a libero a nisi porttitor suscipit id quis lorem.',
      loveIts: 11,
      dontLoveIts: 13,
      created_at: new Date(2019, 3, 2, 16, 52),
      UserName: 'Zelda'
    },
    {
      title: 'Surf',
      // tslint:disable-next-line: max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis nibh at metus ornare, at sollicitudin elit eleifend. Nam odio sapien, consectetur quis nibh quis, elementum suscipit felis. Vivamus odio ex, elementum nec suscipit id, dignissim vehicula metus. Pellentesque at ante finibus leo rutrum fringilla.',
      loveIts: 11,
      dontLoveIts: 11,
      created_at: new Date(2019, 3, 5, 17, 29),
      UserName: 'toto'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
