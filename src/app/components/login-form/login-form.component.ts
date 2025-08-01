import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  imports: [FormsModule, RouterModule, CommonModule]
})
export class LoginFormComponent {
  email = '';
  password = '';
  error = '';
  isLoggedIn = false;


  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  this.checkIsLoggedIn();
}

  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.error = '';
        this.router.navigate(['/gallery']);
      })
      .catch(err => {
        this.error = err.message;
      });
  }

  checkIsLoggedIn() {
    console.log("Checking if user is logged in");
    this.authService.getUser().subscribe(user => {
      this.isLoggedIn = !!user;
      console.log("User is logged in:", this.isLoggedIn);
  })
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(err => {
        console.error('Logout failed', err);
      });
  }
}
