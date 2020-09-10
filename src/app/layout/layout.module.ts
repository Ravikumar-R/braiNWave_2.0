import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent, TopnavComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SideBarComponent, TopnavComponent],
  exports: [SideBarComponent, TopnavComponent]
})
export class LayoutModule { }
