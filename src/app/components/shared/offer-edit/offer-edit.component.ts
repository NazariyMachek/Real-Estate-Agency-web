import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.scss']
})
export class OfferEditComponent implements OnInit {
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

  constructor(private offerService: OfferService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.offerService.loadOfferById(+id).subscribe(result => {
        this.offer = result as Offer;
      });
    }
  }

  updateOffer() {
    console.log(this.offer);
    this.offerService.updateOffer(this.offer.id, this.offer).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Data was successfully updated!',
      })
    });
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
