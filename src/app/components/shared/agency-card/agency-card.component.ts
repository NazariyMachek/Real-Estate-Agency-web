import { Component, Input, OnInit } from '@angular/core';
import { Agency } from 'src/app/models/agency';

@Component({
  selector: 'app-agency-card',
  templateUrl: './agency-card.component.html',
  styleUrls: ['./agency-card.component.scss']
})
export class AgencyCardComponent implements OnInit {
  @Input() agency!: Agency;
  images: string[] = [
    'https://i.pinimg.com/236x/ed/2a/20/ed2a204234d6f29e2ea941d523ec704b.jpg',
    'https://i.pinimg.com/236x/34/47/28/34472848db865f9f9c613b860e40bf25.jpg',
    'https://i.pinimg.com/236x/79/d0/91/79d091424f91c91e6d7af06393362892.jpg',
    'https://i.pinimg.com/236x/e2/2f/b7/e22fb79a2cf702853996db7205e7e74e.jpg',
    'https://i.pinimg.com/236x/b0/82/c7/b082c7967a991e5312939f1ffacfc7d4.jpg',
    'https://i.pinimg.com/236x/4d/79/f3/4d79f30697c77efd1992996aa8d5a50d.jpg',
    'https://i.pinimg.com/236x/f5/8e/cf/f58ecf245667aea4415690a1cb2fe569.jpg',
    'https://i.pinimg.com/236x/c6/b4/dc/c6b4dcd67052d8db4a3441798403b480.jpg',
    'https://i.pinimg.com/236x/8d/3f/6b/8d3f6bbe698ecbd58da001e067d7ef7d.jpg',
    'https://i.pinimg.com/236x/37/ba/4c/37ba4ce0bb0b53dbb2f04c3e0804b44c.jpg',
  ];
  image: string = '';
  constructor() { }

  ngOnInit(): void {
    this.image = this.images.at(Math.floor(Math.random() * 10)) ?? '';
  }

}
