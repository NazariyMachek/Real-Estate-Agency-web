import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit {

  @Input() review!: Review;
  user!: User;

  avatarBuffer: string[] = [
    'https://i.pinimg.com/564x/77/df/64/77df645e32515d4b6ece5f1596daf411.jpg',
    'https://i.pinimg.com/564x/13/5b/0c/135b0c39da3c4807d3ed58dd98cc3acb.jpg',
    'https://i.pinimg.com/564x/56/06/d3/5606d32a2fbebe382966966426d4e60c.jpg',
    'https://i.pinimg.com/564x/56/06/d3/5606d32a2fbebe382966966426d4e60c.jpg',
    'https://i.pinimg.com/564x/fb/95/ff/fb95ff855574da655675c583e9016df1.jpg',
    'https://i.pinimg.com/564x/85/2d/92/852d9288b8c12c3167acddcc6d1865c2.jpg',
    'https://i.pinimg.com/564x/ab/d8/fe/abd8fe620a52bc83b584640c14865664.jpg',
    'https://i.pinimg.com/564x/77/bc/a3/77bca36e0f7a2afbcec76043f4678ef2.jpg',
    'https://i.pinimg.com/564x/83/7d/a8/837da8f3cecaaa237e483db0454bcfb3.jpg',
    'https://i.pinimg.com/564x/f9/95/39/f99539925523169aed4690355882f34b.jpg'
  ]
  image: string = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getById(this.review.userid).subscribe(result => {
      this.user = result as User;
    })
    // this.user = {
    //   id: 2,
    //   firstName: "Hanna",
    //   middleName: "Ops",
    //   lastName: "Montana",
    //   telephone: "+38000000000",
    //   email: "example@example.com",
    //   login: "hannamontana",
    //   password: "123456",
    //   role: 3,
    // }
    this.image = this.avatarBuffer.at(Math.floor(Math.random() * 10)) ?? '';
  }

}
