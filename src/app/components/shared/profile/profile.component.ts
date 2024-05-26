import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { User } from 'src/app/models/user';
import { OfferService } from 'src/app/services/offer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: User;
  userOffers: Offer[] = [];
  userRole: string = '';

  constructor(private route: ActivatedRoute, private userService: UserService, private offerService: OfferService, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getById(+id).subscribe(result => {
        this.user = result as User;
        this.getUserRole();
        this.offerService.loadAllOffersByUserId(this.user.id).subscribe(res => {
          this.userOffers = res as Offer[];
        })
      })
    }
  }

  getUserRole() {
    switch (this.user.role) {
      case 0:
        this.userRole = 'Owner';
        break;
      case 1:
        this.userRole = 'Administrator';
        break;
      case 2:
        this.userRole = 'Operator';
        break;
      case 3:
        this.userRole = 'Guest';
        break;
    }
  }

  goToEditPage() {
    this.router.navigate(['/edit/' + this.user.id]);
  }
}
