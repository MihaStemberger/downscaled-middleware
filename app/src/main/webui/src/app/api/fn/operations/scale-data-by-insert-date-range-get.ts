/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Instant } from '../../models/instant';
import { ScaleDataDto } from '../../models/scale-data-dto';

export interface ScaleDataByInsertDateRangeGet$Params {
  from: Instant;
  to: Instant;
}

export function scaleDataByInsertDateRangeGet(http: HttpClient, rootUrl: string, params: ScaleDataByInsertDateRangeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ScaleDataDto>>> {
  const rb = new RequestBuilder(rootUrl, scaleDataByInsertDateRangeGet.PATH, 'get');
  if (params) {
    rb.query('from', params.from, {});
    rb.query('to', params.to, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ScaleDataDto>>;
    })
  );
}

scaleDataByInsertDateRangeGet.PATH = '/scale_data/by-insert-date-range';
