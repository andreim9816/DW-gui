import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, catchError, finalize, Observable, of} from "rxjs";
import {RezervareDto} from "../model/RezervareDto";
import {RezervareService} from "../services/rezervare.service";
import {Type} from "../app.routes";

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

  loadRezervari(filter = '', sortDirection = 'desc', pageIndex = 0, pageSize = 20, type: Type) {

    this.loadingSubject.next(true);

    switch (type) {
      case Type.GLOBAL:
        this.rezervariService.getAllGlobal(filter, sortDirection, pageIndex, pageSize).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
        )
          .subscribe(rezervari => this.lessonsSubject.next(rezervari));
        break;

      case Type.LOWCOST:
        this.rezervariService.getAllLow(filter, sortDirection, pageIndex, pageSize).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
        )
          .subscribe(rezervari => this.lessonsSubject.next(rezervari));
        break;

      case Type.NONLOWCOST:
        this.rezervariService.getAllNonLow(filter, sortDirection, pageIndex, pageSize).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
        )
          .subscribe(rezervari => this.lessonsSubject.next(rezervari));
        break;
    }
  }
}
