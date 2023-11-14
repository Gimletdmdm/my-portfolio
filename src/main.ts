import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import route from './app/routes';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent,
  {
    providers: [
    provideRouter(route),
    provideAnimations()
]
  }
  ).catch(err => console.error(err));
