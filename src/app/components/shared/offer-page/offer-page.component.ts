import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { Review } from 'src/app/models/review';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OfferService } from 'src/app/services/offer.service';
import { ReviewService } from 'src/app/services/review.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.scss']
})
export class OfferPageComponent implements OnInit {

  offer!: Offer;
  reviews?: Review[];
  offerOwner!: User;

  reviewMessage: string = '';

  imagesArray: string[] = [
    'https://i.pinimg.com/564x/19/ad/b5/19adb513a7a943bc471dc0fd03594797.jpg',
    'https://i.pinimg.com/564x/70/35/a3/7035a340bf0eff6a25b669641af754a8.jpg',
    'https://i.pinimg.com/564x/62/5e/67/625e6750455e00233c44af37feee5c38.jpg',
    'https://i.pinimg.com/564x/78/05/a4/7805a4bf5bfd027b6781a22cdf77cc94.jpg',
    'https://i.pinimg.com/564x/31/a5/4b/31a54b669d559861cd3c367a5919f616.jpg',
    'https://i.pinimg.com/564x/0b/c0/39/0bc039b722fc2a35dd4f21731b669a7b.jpg',
    'https://i.pinimg.com/564x/e8/76/a8/e876a8bb20cb6de993d19ec8d1af4ec6.jpg',
    'https://i.pinimg.com/564x/18/f9/dd/18f9dd048ee4750f61cf494497ac6efb.jpg',
    'https://i.pinimg.com/564x/a6/93/81/a693812d5e09fca1fda71f9c9f6af966.jpg',
    'https://i.pinimg.com/564x/7e/49/6b/7e496b36da5af2c9fa740eb03a1a55a9.jpg'
  ];
  isLivingRoomShown: boolean = true;
  isDiningRoomShown: boolean = false;
  isBedroomRoomShown: boolean = false;
  isLivingRoom2Shown: boolean = false;
  
  constructor(private route: ActivatedRoute, private offerService: OfferService, private reviewService: ReviewService, private authenticationService: AuthenticationService,
    private userService: UserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.offerService.loadOfferById(+id).subscribe(result => {
        this.offer = result as Offer;
        this.reviewService.loadLinkedReviews(this.offer.id).subscribe(res => {
          this.reviews = res as Review[];
        })
        this.userService.getById(this.offer.userid).subscribe(user => {
          this.offerOwner = user as User;
        });
      });
    }
  }

  showLivingRoom() {
    this.isLivingRoomShown = true;
    this.isBedroomRoomShown = false;
    this.isLivingRoom2Shown = false;
    this.isDiningRoomShown = false;

  }

  showDiningRoom() {
    this.isLivingRoomShown = false;
    this.isBedroomRoomShown = false;
    this.isLivingRoom2Shown = false;
    this.isDiningRoomShown = true;
  }

  showBedroom() {
    this.isLivingRoomShown = false;
    this.isBedroomRoomShown = true;
    this.isLivingRoom2Shown = false;
    this.isDiningRoomShown = false;
  }

  showLivingRoom2() {
    this.isLivingRoomShown = false;
    this.isBedroomRoomShown = false;
    this.isLivingRoom2Shown = true;
    this.isDiningRoomShown = false;
  }

  onSendMessageSubmit() { 
    let review: Review = {
      id: 0,
      review: this.reviewMessage,
      offerid: this.offer.id,
      userid: this.authenticationService.currentUserValue.id,
    };
    this.reviewService.createReview(review).subscribe();
  }

  loadOfferReviews() {
    this.reviewService.allReviews.subscribe(result => {
        this.reviews = result as Review[];
        this.reviews.filter(r => {
            r.id !== this.offer.id;
        })
    })
  }

  addOfferToPreferences() {
    let storedPreferences;
    try {
      storedPreferences = JSON.parse(localStorage.getItem('preferences') ?? '');
    }
    catch(ex) {
      console.log('Empty favorites list');
      storedPreferences = [];
    }
    finally {
      storedPreferences.push(this.offer);
      localStorage.setItem('preferences', JSON.stringify(storedPreferences));
    }
  }
}
