import {Routes, RouteConfigLoadEnd} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessageComponent } from './message/message.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {
      path: '', // localhost:4200/''/members
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        {path: 'members', component: MemberListComponent },
        {path: 'messages', component: MessageComponent},
        {path: 'lists', component: ListsComponent} ,
      ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
