import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-form',
  imports: [],
  templateUrl: './upload-form.component.html',
  styleUrl: './upload-form.component.css'
})
export class UploadFormComponent {

allowedEmails = ['you@example.com', 'owner@example.com'];
canUpload = false;

// constructor(private authService: AuthService) {
//   this.authService.getUser().subscribe(user => {
//     this.canUpload = !!user && this.allowedEmails.includes(user.email || '');
//   });
// }



}
