import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Firestore, collection, addDoc, collectionData, CollectionReference } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { GalleryPhoto } from '../models/galleryphoto.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
    private photosCollection: CollectionReference;

  constructor(private firestore: Firestore, private storage: Storage) {
    this.photosCollection = collection(this.firestore, 'photos');
  }

  getPhotos(): Observable<GalleryPhoto[]> {
    return collectionData(this.photosCollection, { idField: 'id' }) as Observable<GalleryPhoto[]>;
  }

async uploadPhoto(title: string, file: File, uploadedBy: string): Promise<void> {
    const filePath = `photos/${uuidv4()}_${file.name}`;
    const storageRef = ref(this.storage, filePath);

    const snapshot = await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(snapshot.ref);

    const photo: GalleryPhoto = {
      title,
      url: downloadURL,
      uploadedBy,
      createdAt: Date.now()
    };

    await addDoc(this.photosCollection, photo);
  }


}


