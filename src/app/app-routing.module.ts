import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { WatchComponent } from './watch/watch.component';
import { UploadComponent } from './upload/upload.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'signIn', component: SignInComponent},
    {path: 'signUp', component: SignUpComponent},
    {path: 'watch', component: WatchComponent},
    {path: 'upload', component: UploadComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
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
