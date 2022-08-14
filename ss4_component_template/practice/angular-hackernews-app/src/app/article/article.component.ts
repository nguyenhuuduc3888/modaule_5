import {Component, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [
    {
      title: 'duc',
      url: 'https://levunguyen.com/laptrinhjava/2020/01/01/khai-bao-bien-trong-lap-trinh-java/'
    },
    {
      title: 'hau',
      url: 'https://www.facebook.com/'
    },
    {
      title: 'quyen',
      url: 'https://flixtor.video/home'
    },
  ];

  addNewArticle() {
    this.articles.push(this.article);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
