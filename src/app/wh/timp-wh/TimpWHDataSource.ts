import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, catchError, finalize, Observable, of} from "rxjs";
import {TimpDtoWH} from "../../model/TimpDtoWH";
import {TimpService} from "../../services/timp.service";

export class TimpWHDataSource implements DataSource<TimpDtoWH> {

  lessonsSubject = new BehaviorSubject<TimpDtoWH[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private timpService: TimpService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<TimpDtoWH[]> {
    return this.lessonsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.lessonsSubject.complete();
    this.loadingSubject.complete();
  }

  loadTimpi(filter = '', sortDirection = 'desc', pageIndex = 0, pageSize = 20) {

    this.loadingSubject.next(true);

    this.timpService.getAll(filter, sortDirection, pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(timpi => this.lessonsSubject.next(timpi));
  }
}
