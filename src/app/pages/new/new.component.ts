import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNoteComponent } from 'src/app/components/form-note/form-note.component';
import { NotesService } from 'src/app/services/notes.service';
import { Router } from '@angular/router';
import { Theme, ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule, FormNoteComponent],
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  isDarkTheme = false;
  constructor(private noteS:NotesService, private router: Router,private themeService: ThemeService ){{
      this.themeService.currentTheme$.subscribe(theme => {
      this.isDarkTheme = theme === Theme.Dark;
    }); }
  }

  ngOnInit(): void {
    
  }
  addNote($event:any){
    this.noteS.createNote($event)
    .then(() => {
      // Después de crear la nota, navegar a la página de inicio
      this.router.navigateByUrl('/home');
    })
    .catch((error: any) => {
      console.error('Error al crear la nota:', error);
      // Manejar el error según tus necesidades
    });
  }

}
