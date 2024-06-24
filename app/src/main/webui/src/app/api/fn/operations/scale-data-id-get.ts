/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ScaleDataDto } from '../../models/scale-data-dto';

export interface ScaleDataIdGet$Params {
  id: string;
}

export function scaleDataIdGet(http: HttpClient, rootUrl: string, params: ScaleDataIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ScaleDataDto>> {
  const rb = new RequestBuilder(rootUrl, scaleDataIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ScaleDataDto>;
    })
  );
}

scaleDataIdGet.PATH = '/scale_data/{id}';
