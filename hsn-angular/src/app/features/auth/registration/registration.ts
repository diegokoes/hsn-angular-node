import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  inputs: any[] = [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name',
      value: '',
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last name',
      placeholder: 'Enter your last name',
      value: '',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email address',
      value: '',
    },
    {
      name: 'gender',
      type: 'select',
      label: 'Gender',
      placeholder: 'Select your gender',
      value: '',
      options: ['Female', 'Male', 'Non-binary', 'Prefer not to say'],
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      value: '',
    },
    {
      name: 'repassword',
      type: 'password',
      label: 'Confirm password',
      placeholder: 'Repeat your password',
      value: '',
    },
    {
      name: 'codeFriendPlan',
      type: 'text',
      label: 'Friend plan code',
      placeholder: 'Enter your code (optional)',
      value: '',
    },
    {
      name: 'recievePromo',
      type: 'checkbox',
      label: 'Receive promotions',
      labelBold: "I'd like to receive promotions",
      labelSmall: 'I agree to receive marketing and promotional communications',
      value: false,
    },
    {
      name: 'acceptTerms',
      type: 'checkbox',
      label: 'Accept terms',
      labelBold: 'Terms and conditions',
      labelSmall: 'I have read and accept the terms and conditions',
      value: false,
    },
  ];

  registrationForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern(/[a-zA-ZÀ-ÿ\s]{3,30}/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{3,50}$/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
      Validators.email,
    ]),
    gender: new FormControl('', [
      Validators.pattern(/^(Female|Male|Non Binary|I prefer not to say it)$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,80}$/
      ),
    ]),
    repassword: new FormControl(''),
    codeFriendPlan: new FormControl('', [Validators.pattern(/^[0-9]{5}$/)]),
    recievePromo: new FormControl(false),
    acceptTerms: new FormControl(false, [Validators.requiredTrue]),
  });

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
