import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';

const route: Routes = [
    {
        path: '',
        component: AppComponent,
        title: 'Home'
    },
    {
        path: 'blog',
        component: BlogComponent,
        title: 'Blog'
    },
    {
        path: 'portfolio',
        component: PortfolioComponent,
        title: 'portfolio'
    },
    {
        path: 'profile',
        component: ProfileComponent,
        title: 'profile'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'contact'
    }
];

export default route;