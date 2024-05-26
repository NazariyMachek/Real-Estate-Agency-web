import { Component, Input, OnInit } from '@angular/core';
import { Agency } from 'src/app/models/agency';
import { Realtor } from 'src/app/models/realtor';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-realtor-card',
  templateUrl: './realtor-card.component.html',
  styleUrls: ['./realtor-card.component.scss']
})
export class RealtorCardComponent implements OnInit {
  @Input() realtor!: Realtor;
  agency!: Agency;

  avatarsArray: string[] = [
    'https://i.pinimg.com/564x/07/48/c7/0748c7845e256073ca527b0c3795d00b.jpg',
    'https://i.pinimg.com/564x/16/b2/f0/16b2f02d4a436be88194f96c57d7d36f.jpg',
    'https://i.pinimg.com/736x/cd/01/ab/cd01aba2a6ae7c80d3834c975ef9590d.jpg',
    'https://i.pinimg.com/564x/0b/cc/08/0bcc080ac224da7cf00ce9144a2ef808.jpg',
    'https://i.pinimg.com/564x/c9/f5/31/c9f53172231c07f34b939ffcdfe67408.jpg',
    'https://i.pinimg.com/564x/65/a6/9f/65a69f061b3979d11f24cc3debe91499.jpg',
    'https://i.pinimg.com/564x/5b/ef/20/5bef203d82ba76e489fc4396a7b21bf2.jpg',
    'https://i.pinimg.com/564x/4f/4b/78/4f4b78895cb05116786166fe96aafe0b.jpg',
    'https://i.pinimg.com/564x/ad/90/35/ad903513cf4aa9989d63ed2fbb4dbd34.jpg',
    'https://i.pinimg.com/564x/44/25/13/442513d7fe4f415ae1cef704b2d53bcc.jpg'
  ]

  avatar: string = '';

  constructor(private agencyService: AgencyService) { }

  ngOnInit(): void {
    this.avatar = this.avatarsArray.at(Math.floor(Math.random() * 10)) ?? '';
    this.agencyService.loadAgencyById(this.realtor.agencyid).subscribe(result => {
      this.agency = result as Agency;
    })
  }

}
