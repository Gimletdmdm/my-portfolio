import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import route from './app/routes';


bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(route)
    ]
  }
  ).catch(err => console.error(err));
