import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, catchError, finalize, Observable, of} from "rxjs";
import {PlataDto} from "../model/PlataDto";
import {PlataService} from "../services/plata.service";
import {Type} from "../app.routes";

export class PlataDataSource implements DataSource<PlataDto> {

  lessonsSubject = new BehaviorSubject<PlataDto[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private plataService: PlataService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<PlataDto[]> {
    return this.lessonsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.lessonsSubject.complete();
    this.loadingSubject.complete();
  }

  loadPlati(filter = '', sortDirection = 'desc', pageIndex = 0, pageSize = 20, type: Type) {

    this.loadingSubject.next(true);

    switch (type) {
      case Type.GLOBAL:
        this.plataService.getAllGlobal(filter, sortDirection, pageIndex, pageSize).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
        )
          .subscribe(plati => this.lessonsSubject.next(plati));
        break;

      case Type.LOWCOST:
        this.plataService.getAllLow(filter, sortDirection, pageIndex, pageSize).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
        )
          .subscribe(plati => this.lessonsSubject.next(plati));
        break;

      case Type.NONLOWCOST:
        this.plataService.getAllNonLow(filter, sortDirection, pageIndex, pageSize).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
        )
          .subscribe(plati => this.lessonsSubject.next(plati));
        break;
    }
  }
}
