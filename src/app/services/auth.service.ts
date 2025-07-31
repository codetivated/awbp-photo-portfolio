import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, User, authState } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private auth: Auth) {}

  login(email: string, password: string) {
    console.log("Attempting to log in with email:", email);
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  getUser(): Observable<User | null> {
    console.log("Fetching user authentication state...");
    console.log(authState(this.auth));

    return authState(this.auth);
  }
}
