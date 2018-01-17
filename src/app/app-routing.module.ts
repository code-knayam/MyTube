import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { WatchComponent } from './watch/watch.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'signIn', component: SignInComponent},
    {path: 'signUp', component: SignUpComponent},
    {path: 'watch', component: WatchComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}