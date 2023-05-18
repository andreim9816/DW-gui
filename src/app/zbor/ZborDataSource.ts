import {ZborDto} from "../model/ZborDto";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, catchError, finalize, Observable, of} from "rxjs";
import {ZborService} from "../services/zbor.service";
import {Type} from "../app.routes";

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

  loadZboruri(filter = '', sortDirection = 'desc', pageIndex = 0, pageSize = 20, type: Type) {

    this.loadingSubject.next(true);

    switch (type) {
      case Type.GLOBAL:
        this.zborService.getAllGlobal(filter, sortDirection, pageIndex, pageSize).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
        )
          .subscribe(rezervari => this.lessonsSubject.next(rezervari));
        break;

      case Type.LOWCOST:
        this.zborService.getAllLow(filter, sortDirection, pageIndex, pageSize).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
        )
          .subscribe(rezervari => this.lessonsSubject.next(rezervari));
        break;

      case Type.NONLOWCOST:
        this.zborService.getAllNonLow(filter, sortDirection, pageIndex, pageSize).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
        )
          .subscribe(rezervari => this.lessonsSubject.next(rezervari));
        break;
    }
  }
}
