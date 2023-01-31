import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, catchError, finalize, Observable, of} from "rxjs";
import {ZborService} from "../../services/zbor.service";
import {ZborDtoWH} from "../../model/ZborDtoWH";
import {RezervareDtoWH} from "../../model/RezervareDtoWH";
import {RezervareService} from "../../services/rezervare.service";

export class RezervareWHDataSource implements DataSource<RezervareDtoWH> {

  lessonsSubject = new BehaviorSubject<RezervareDtoWH[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private rezervareService: RezervareService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<RezervareDtoWH[]> {
    return this.lessonsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.lessonsSubject.complete();
    this.loadingSubject.complete();
  }

  loadZboruri(filter = '', sortDirection = 'desc', pageIndex = 0, pageSize = 20) {

    this.loadingSubject.next(true);

    this.rezervareService.getAllWH(filter, sortDirection, pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(rezervari => this.lessonsSubject.next(rezervari));
  }
}
