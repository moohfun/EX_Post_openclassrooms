import { Component, Input, OnInit } from '@angular/core';
import { NullAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postLovIt: number;
  @Input() postDontLovit: number;
  @Input() postUserName: string;

  choix = false;

  constructor() { }

  ngOnInit() {
  }

  getLoveStatue() {
    if ( this.postLovIt > this.postDontLovit) {return 'love'; }
    // tslint:disable-next-line: one-line
    else if (this.postLovIt < this.postDontLovit) {return 'dontLove'; }
    // tslint:disable-next-line: one-line
    else if (this.postLovIt === this.postDontLovit) { return '';   }

  }

  clickLove(btn: string) {
    if (btn === 'loveIt') {this.postLovIt = this.postLovIt + 1; }

    if (btn === 'dontLovIt') {this.postDontLovit = this.postDontLovit + 1; }

    this.choix = true;
  }
}
