import { Component, OnInit } from '@angular/core';
import { Realtor } from 'src/app/models/realtor';
import { RealtorService } from 'src/app/services/realtor.service';

@Component({
  selector: 'app-realtor-list',
  templateUrl: './realtor-list.component.html',
  styleUrls: ['./realtor-list.component.scss']
})
export class RealtorListComponent implements OnInit {
  realtors: Realtor[] = [];

  constructor(private realtorService: RealtorService) { }

  ngOnInit(): void {
    this.realtorService.loadRealtors().subscribe(result => {
      this.realtors = result as Realtor[];
    });
  }
}
