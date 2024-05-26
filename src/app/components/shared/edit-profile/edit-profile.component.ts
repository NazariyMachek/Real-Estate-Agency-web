import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  // user!: User =         
  user: User = {
    id: 2,
    firstname: "Петро",
    middlename: "Петрович",
    lastname: "Петренко",
    telephone: "+38000000000",
    email: "example@example.com",
    login: "123",
    password: "123",
    role: 3,
  };

  password: string = '';
  confirmedPassword: string = '';

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(this.user);
    if (id) {
       this.userService.getById(+id).subscribe(result => {
         this.user = result as User;
       })
    }
  }

  saveEditedUser() {
    if (this.user.firstname && this.user.middlename && this.user.lastname && this.user.email && this.user.telephone && this.password === this.confirmedPassword) {
      this.user.password = this.password;
      console.log(this.user);
      this.userService.updateUser(this.user.id, this.user).subscribe(res => {
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

  goToHomePage() {
    this.router.navigate(['/home']);
  }
}
