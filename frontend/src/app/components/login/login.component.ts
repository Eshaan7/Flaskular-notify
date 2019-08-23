import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  user: User = new User();

  constructor(private router: Router, private auth: AuthService) {
    
  }

  onLogin(): void {
    this.auth.login(this.user)
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
