/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MinMaxInsertDateDto } from '../../models/min-max-insert-date-dto';

export interface ScaleDataMinMaxSearchParamsGet$Params {
}

export function scaleDataMinMaxSearchParamsGet(http: HttpClient, rootUrl: string, params?: ScaleDataMinMaxSearchParamsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<MinMaxInsertDateDto>> {
  const rb = new RequestBuilder(rootUrl, scaleDataMinMaxSearchParamsGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MinMaxInsertDateDto>;
    })
  );
}

scaleDataMinMaxSearchParamsGet.PATH = '/scale_data/min-max-search-params';
