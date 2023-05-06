import { Injectable } from '@angular/core';

@Injectable()
export class AuthFirebaseCodeErrorService {

  constructor() { }

  firebaseError(code: string){
    switch(code){
      case 'auth/email-already-in-use':
        return 'El Usuario Ya Existe';
      case 'auth/weak-password':
        return 'Debe Mejorar La Contraseña';
      case 'auth/invalid-email':
        return 'Debe Ingresar un Correo Valido';
      case 'auth/wrong-password':
        return 'Contraseña Incorrecta';
      case 'auth/user-not-found':
        return 'Usuario No Registrado';
      case 'auth/missing-password':
        return 'Debe Ingresar Una Contraseña';
      default:
        return 'Error Desconosido'
    }

}}
