import {ZborDto} from "../model/ZborDto";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, catchError, finalize, Observable, of} from "rxjs";
import {ZborService} from "../services/zbor.service";

export class ZborDataSource implements DataSource<ZborDto> {

  lessonsSubject = new BehaviorSubject<ZborDto[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private zborService: ZborService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<ZborDto[]> {
    return this.lessonsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.lessonsSubject.complete();
    this.loadingSubject.complete();
  }

  loadZboruri(filter = '', sortDirection = 'desc', pageIndex = 0, pageSize = 20) {

    this.loadingSubject.next(true);

    this.zborService.getAll(filter, sortDirection, pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(zboruri => this.lessonsSubject.next(zboruri));
  }
}
