import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-curriculum';
  email = 'kevinegp13@gmail.com';

  logos = {
    js: {
      url: 'https://th.bing.com/th/id/OIP.DN7ToydkJZEdVaJVK_NhvwAAAA?rs=1&pid=ImgDetMain',
      width: '30px',
    },
    angular: {
      url: 'https://th.bing.com/th/id/R.3ed91427828c7b282e4926da2423b8d6?rik=rPGjT4VSZUZkKg&pid=ImgRaw&r=0',
      width: '30px',
    },
    jasmine: {
      url: 'https://th.bing.com/th/id/OIP.8jrdGzYi4x5yt_CoxLxRnQHaHY?rs=1&pid=ImgDetMain',
      width: '30px',
    },
    karma: {
      url: 'https://th.bing.com/th/id/OIP.XZ2lIaSekqhteeB3k-qHpAAAAA?w=400&h=400&rs=1&pid=ImgDetMain',
      width: '30px',
    },
    java: {
      url: 'https://th.bing.com/th/id/OIP.vPjYMeFKIrBkH4YunRwMKQHaHa?rs=1&pid=ImgDetMain',
      width: '50px',
    },
    spring: {
      url: 'https://logodix.com/logo/1614306.png',
      width: '30px',
    },
    junit: {
      url: 'https://th.bing.com/th/id/OIP.21TDHqUZJfhNFm-odW-eZwHaHa?rs=1&pid=ImgDetMain',
      width: '50px',
    },
    mockito: {
      url: 'https://media.licdn.com/dms/image/C5112AQFC5QeajM8syQ/article-cover_image-shrink_600_2000/0/1520204180604?e=2147483647&v=beta&t=YoW2wDdyAZzkuwTOpuRICu0nwtghaGb2GXMRdsk74YQ',
      width: '50px',
    },
    mysql: {
      url: 'https://th.bing.com/th/id/R.bab2c760c60f17191cb3a002e08a3dbf?rik=zJoEjAb2we9vbQ&pid=ImgRaw&r=0',
      width: '30px',
    },
    postgres: {
      url: 'https://th.bing.com/th/id/OIP.ep7kJfQJa8PmzOhbO8m7nAHaHa?rs=1&pid=ImgDetMain',
      width: '40px',
    },
    mongo: {
      url: 'https://miro.medium.com/v2/resize:fit:512/1*WSP9OMyXbULdfZmx8_t6Vw.jpeg',
      width: '50px',
    },
    elastic: {
      url: 'https://th.bing.com/th/id/R.68519aaac0ff5649bd4756df2d946cea?rik=sLdLW4Q4o4SQzQ&pid=ImgRaw&r=0',
      width: '30px',
    },
    jenkins: {
      url: 'https://th.bing.com/th/id/OIP.qKXKlZZ6ZmTNgRxrLutg0QAAAA?rs=1&pid=ImgDetMain',
      width: '30px',
    },
    sonar: {
      url: 'https://www.excentia.es/img/sonarsource-products/SonarQube%20logo%20black%20512%20px.png',
      width: '50px',
    },
    docker: {
      url: 'https://th.bing.com/th/id/OIP.UYdYxJ342AMD6KXTmckDuwHaFG?rs=1&pid=ImgDetMain',
      width: '50px',
    },
    git: {
      url: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/git-13.png',
      width: '30px',
    },
    aws: {
      url: 'https://th.bing.com/th/id/OIF.B4dgAhSF2UHWtSkKD3v1wQ?rs=1&pid=ImgDetMain',
      width: '30px',
    },
  }
}
