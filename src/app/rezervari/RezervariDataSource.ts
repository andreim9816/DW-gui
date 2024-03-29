import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, catchError, finalize, Observable, of} from "rxjs";
import {RezervareDto} from "../model/RezervareDto";
import {RezervareService} from "../services/rezervare.service";

export class RezervariDataSource implements DataSource<RezervareDto> {

  lessonsSubject = new BehaviorSubject<RezervareDto[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private rezervariService: RezervareService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<RezervareDto[]> {
    return this.lessonsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.lessonsSubject.complete();
    this.loadingSubject.complete();
  }

  loadRezervari(filter = '', sortDirection = 'desc', pageIndex = 0, pageSize = 20) {

    this.loadingSubject.next(true);

    this.rezervariService.getAllGlobal(filter, sortDirection, pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(rezervari => this.lessonsSubject.next(rezervari));
  }
}
