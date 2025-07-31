import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { AdminComponent } from "../../pages/admin/admin.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  imports: [FormsModule, RouterModule]
})
export class LoginFormComponent {
  email = '';
  password = '';
  error = '';


  constructor(private authService: AuthService, private router: Router) {}

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

  // login() {
  //  console.log('Login attempt with:', this.email, this.password);
  // }
}
