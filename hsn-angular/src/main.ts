import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Registration } from './app/core/auth/registration/registration';

bootstrapApplication(Registration, appConfig).catch((err) => console.error(err));
