import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './components/note/note.component';



@NgModule({
  imports: [CommonModule],
  declarations: [NoteComponent],
  exports: [NoteComponent/*, FormsModule*/]
})
export class SharedmoduleModule { }
