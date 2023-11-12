import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { INote } from '../../model/INote';
import { SharedmoduleModule } from 'src/app/sharedmodule.module';
import { HighlightDirective } from
'../../directives/highlight.directive';
import { NotesService } from '../../services/notes.service';
import { FormNoteComponent } from '../../components/form-note/form-note.component';
import { Theme, ThemeService } from 'src/app/services/theme.service';
@Component({
selector: 'app-notes',
standalone: true,
imports: [CommonModule,FormsModule,SharedmoduleModule,HighlightDirective,
FormNoteComponent],
templateUrl: './notes.component.html',
styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
    isDarkTheme = false;
public _editingNote!:INote;
constructor(public notesS:NotesService, private themeService: ThemeService) {    this.themeService.currentTheme$.subscribe(theme => {
    this.isDarkTheme = theme === Theme.Dark;
  });}
ngOnInit(): void {
    
}
public removingNote($event:INote){
console.log("Elminando Nota");
this.notesS.removeNote($event.id)
}
public editingNote($event:INote){
console.log("Editando Nota");
this._editingNote=$event;
document.getElementById("launchModal")?.click();
}
trackByNotes(index:number,item:INote){
return item.id;
}
updateNote($event:any){
this.notesS.updateNote($event); //<-new
document.getElementById("closeModal")?.click();
}
toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}