import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-auth-validators',
  templateUrl: './auth-validators.component.html',
  styleUrls: ['./auth-validators.component.scss']
})
export class AuthValidatorsComponent {
  @Input() control: AbstractControl;
  @Input() name: string;
  @Input() id: string;

}
