import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitsComponent } from './ui-kits/ui-kits.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UiKitsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    MatButtonModule,
  ]
})
export class PagesModule { }
