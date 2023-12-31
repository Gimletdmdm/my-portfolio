import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';

const route: Routes = [
    {
        path: '',
        component: HomeComponent,
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
    },
    {
        path: 'blog-detail',
        component: BlogDetailsComponent,
        title: 'blog-detail'
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

export default route;