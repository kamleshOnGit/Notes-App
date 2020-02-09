import {Component, OnInit , Inject} from '@angular/core';
import {NotedataService} from '../notedata.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {Note} from '../models/data.model';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({selector: 'app-note-list', templateUrl: './note-list.component.html', styleUrls: ['./note-list.component.css']})
export class NoteListComponent implements OnInit {

  newnote: Observable < Note[] >;
  searchtext: string;
  showtime;
  giventime;
  constructor(private store: Store < AppState >, private noteservice: NotedataService) {
    this.newnote = store.select('Notes');

  }

  removeedit(item , index) {
    this
      .noteservice
      .removeNote(index);
    this.noteservice.editNote(item , index);

  }

  ngOnInit() {
    this.noteservice.searchmeathod$.subscribe(val => this.searchtext = val);
  }


}
