/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { MinMaxInsertDateDto } from '../models/min-max-insert-date-dto';
import { scaleDataAddPost } from '../fn/operations/scale-data-add-post';
import { ScaleDataAddPost$Params } from '../fn/operations/scale-data-add-post';
import { scaleDataByInsertDateRangeGet } from '../fn/operations/scale-data-by-insert-date-range-get';
import { ScaleDataByInsertDateRangeGet$Params } from '../fn/operations/scale-data-by-insert-date-range-get';
import { ScaleDataDto } from '../models/scale-data-dto';
import { scaleDataGet } from '../fn/operations/scale-data-get';
import { ScaleDataGet$Params } from '../fn/operations/scale-data-get';
import { scaleDataIdDelete } from '../fn/operations/scale-data-id-delete';
import { ScaleDataIdDelete$Params } from '../fn/operations/scale-data-id-delete';
import { scaleDataIdGet } from '../fn/operations/scale-data-id-get';
import { ScaleDataIdGet$Params } from '../fn/operations/scale-data-id-get';
import { scaleDataIdPut } from '../fn/operations/scale-data-id-put';
import { ScaleDataIdPut$Params } from '../fn/operations/scale-data-id-put';
import { scaleDataMinMaxSearchParamsGet } from '../fn/operations/scale-data-min-max-search-params-get';
import { ScaleDataMinMaxSearchParamsGet$Params } from '../fn/operations/scale-data-min-max-search-params-get';

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `scaleDataGet()` */
  static readonly ScaleDataGetPath = '/scale_data';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `scaleDataGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  scaleDataGet$Response(params?: ScaleDataGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ScaleDataDto>>> {
    return scaleDataGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `scaleDataGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  scaleDataGet(params?: ScaleDataGet$Params, context?: HttpContext): Observable<Array<ScaleDataDto>> {
    return this.scaleDataGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ScaleDataDto>>): Array<ScaleDataDto> => r.body)
    );
  }

  /** Path part for operation `scaleDataAddPost()` */
  static readonly ScaleDataAddPostPath = '/scale_data/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `scaleDataAddPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  scaleDataAddPost$Response(params?: ScaleDataAddPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return scaleDataAddPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `scaleDataAddPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  scaleDataAddPost(params?: ScaleDataAddPost$Params, context?: HttpContext): Observable<void> {
    return this.scaleDataAddPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `scaleDataByInsertDateRangeGet()` */
  static readonly ScaleDataByInsertDateRangeGetPath = '/scale_data/by-insert-date-range';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `scaleDataByInsertDateRangeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  scaleDataByInsertDateRangeGet$Response(params: ScaleDataByInsertDateRangeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ScaleDataDto>>> {
    return scaleDataByInsertDateRangeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `scaleDataByInsertDateRangeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  scaleDataByInsertDateRangeGet(params: ScaleDataByInsertDateRangeGet$Params, context?: HttpContext): Observable<Array<ScaleDataDto>> {
    return this.scaleDataByInsertDateRangeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ScaleDataDto>>): Array<ScaleDataDto> => r.body)
    );
  }

  /** Path part for operation `scaleDataMinMaxSearchParamsGet()` */
  static readonly ScaleDataMinMaxSearchParamsGetPath = '/scale_data/min-max-search-params';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `scaleDataMinMaxSearchParamsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  scaleDataMinMaxSearchParamsGet$Response(params?: ScaleDataMinMaxSearchParamsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<MinMaxInsertDateDto>> {
    return scaleDataMinMaxSearchParamsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `scaleDataMinMaxSearchParamsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  scaleDataMinMaxSearchParamsGet(params?: ScaleDataMinMaxSearchParamsGet$Params, context?: HttpContext): Observable<MinMaxInsertDateDto> {
    return this.scaleDataMinMaxSearchParamsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<MinMaxInsertDateDto>): MinMaxInsertDateDto => r.body)
    );
  }

  /** Path part for operation `scaleDataIdGet()` */
  static readonly ScaleDataIdGetPath = '/scale_data/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `scaleDataIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  scaleDataIdGet$Response(params: ScaleDataIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ScaleDataDto>> {
    return scaleDataIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `scaleDataIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  scaleDataIdGet(params: ScaleDataIdGet$Params, context?: HttpContext): Observable<ScaleDataDto> {
    return this.scaleDataIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ScaleDataDto>): ScaleDataDto => r.body)
    );
  }

  /** Path part for operation `scaleDataIdPut()` */
  static readonly ScaleDataIdPutPath = '/scale_data/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `scaleDataIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  scaleDataIdPut$Response(params: ScaleDataIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return scaleDataIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `scaleDataIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  scaleDataIdPut(params: ScaleDataIdPut$Params, context?: HttpContext): Observable<void> {
    return this.scaleDataIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `scaleDataIdDelete()` */
  static readonly ScaleDataIdDeletePath = '/scale_data/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `scaleDataIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  scaleDataIdDelete$Response(params: ScaleDataIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return scaleDataIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `scaleDataIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  scaleDataIdDelete(params: ScaleDataIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.scaleDataIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
