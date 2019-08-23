import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  user: User = new User();

  constructor(private router: Router, private auth: AuthService) {
  }

  onRegister(): void {

    this.auth.register(this.user)
      .subscribe(
        (user) => {
        localStorage.setItem('token', user.authentication_token);
        this.router.navigateByUrl('');
        },
        (error) => {
          console.log(error);
        });
  }
}