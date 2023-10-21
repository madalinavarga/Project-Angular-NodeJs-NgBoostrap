import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subject, debounceTime, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy {
  @Output() filterValueChange = new EventEmitter<string>();
  private filterInput$ = new Subject<string>();
  private destroy$ = new Subject<void>();


  constructor() {
    this.filterInput$
      .pipe(debounceTime(1000),
        takeUntil(this.destroy$)) //dezabonare cand componenta e distrusa
      .subscribe((inputValue) => {
        this.filterValueChange.emit(inputValue);
      })

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleChangeSearch(event: Event) {
    const inputValue = (event.target as HTMLInputElement)?.value;
    this.filterInput$.next(inputValue);
  }
}


