import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OfferService } from 'src/app/services/offer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss']
})
export class CreateOfferComponent implements OnInit {

  offer!: Offer;
  offerTypes: string[] = [
    'Room',
    'House',
    'Garage',
    'Terrain'
  ];

  buyTypes: string[] = [
    'Buy',
    'Sell',
    'Rent'
  ]
  offerType: string = 'Room';
  constructor(private authenticationService: AuthenticationService,private offerService: OfferService, private router: Router) { }

  ngOnInit(): void {
    const currentUser = this.authenticationService.currentUserValue;
    this.offer = {
      id: 0,
      title: '',
      description: '',
      price: 0,
      square: 0,
      offertype: 0,
      buytype: 0,
      userid: currentUser.id
    }
  }

  goToHomePage() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will lose your changes!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(129 100 117)',
      cancelButtonColor: '#6e1202',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.router.navigate(['/home']);
      }
    })
    
  }

  createNewOffer() {
    if (this.offer.title.length && this.offer.description.length && this.offer.price && this.offer.square) {
      this.offerService.createOffer(this.offer).subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Data was successfully updated!',
        })
      });
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Input is not valid!',
      })
    }
  }

  setSelectedOfferType(event: any) {
    switch (event.target.value) {
      case 'Room':
        this.offer.offertype = 0;
        break;
      case 'House':
        this.offer.offertype = 1;
        break;
      case 'Garage':
        this.offer.offertype = 2;
        break;
      case 'Terrain':
        this.offer.offertype = 3;
        break;
    }
  }

  setSelectedBuyType(event: any) {
    switch (event.target.value) {
      case 'Buy':
        this.offer.buytype = 0;
        break;
      case 'Sell':
        this.offer.buytype = 1;
        break;
      case 'Rent':
        this.offer.buytype = 2;
        break;
    }
  }

}
