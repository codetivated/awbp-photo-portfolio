import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PhotoService } from '../../services/photo.service';
import { GalleryPhoto } from '../../models/galleryphoto.model';


@Component({
  selector: 'app-gallery-grid',
  imports: [FormsModule, CommonModule],
  templateUrl: './gallery-grid.component.html',
  styleUrl: './gallery-grid.component.css'
})
export class GalleryGridComponent implements OnInit {
  photos: GalleryPhoto[] = [];
  isLoggedIn = false;

  constructor(private authService: AuthService, private photoService: PhotoService) {}

  ngOnInit() {
  this.checkIsLoggedIn();
    this.photoService.getPhotos().subscribe((photos) => {
      this.photos = photos;
    });
    this.authService.getUser().subscribe(user => {
      if (user) {
        this.uploadedBy = user.email || 'Anonymous';
      } else {
        this.uploadedBy = 'Anonymous';
      }
      console.log("User email for upload:", this.uploadedBy);
    });
    console.log("Photos loaded:", this.photos);
}


  title: string = '';
  file: File | null = null;
  uploadProgress: number = 0;
  uploadError: string | null = null;
  uploadSuccess: boolean = false;
  isUploading: boolean = false;
  allowedFileTypes: string[] = ['image/jpeg', 'image/png', 'image/jpg'];
  uploadedBy: string = '';


uploadPhoto() {
  if (!this.file || !this.title) {
    this.uploadError = 'Please provide a title and select a file to upload.';
    return;
  }

  if (!this.allowedFileTypes.includes(this.file.type)) {
    this.uploadError = 'Invalid file type.';
    return;
  }
  console.log("Uploading photo:", this.title, this.file, "by", this.uploadedBy);


  this.photoService.uploadPhoto(this.title, this.file, this.uploadedBy)
    .then(() => {
      this.uploadSuccess = true;
      this.uploadError = null;
      this.title = '';
      this.file = null;
    })
    .catch(err => {
      console.error('Upload failed:', err);
      this.uploadError = 'Upload failed. Try again.';
    });
}


handleFileInput(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.file = input.files[0];
    console.log("Selected file:", this.file);
  } else {
    this.file = null;
    console.log("No file selected");
  }
}


    checkIsLoggedIn() {
    console.log("Checking if user is logged in");
    this.authService.getUser().subscribe(user => {
      this.isLoggedIn = !!user;
      console.log("User is logged in:", this.isLoggedIn);
  })
  }

}
