import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [

    { path: '' , pathMatch: 'full' , redirectTo:'home'},

    { path: '', component: AppComponent, children: 
        [  
            { path: 'home', loadChildren: () => import('./home/home.module').then(
                (file) => file.HomeModule
                ),
            },
        ],
    },
];

@NgModule(
    { imports: [RouterModule.forRoot(appRoutes)],
      exports: [RouterModule],
    }
)

export class AppRoutingModule{}

export const routing = RouterModule.forRoot(appRoutes)
