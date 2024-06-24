/* tslint:disable */
/* eslint-disable */
import { Instant } from '../models/instant';
import { Uuid } from '../models/uuid';
export interface ScaleDataDto {
  basalMetabolism?: number;
  bmi?: number;
  bodyFatPercentage?: number;
  bodyWaterMass?: number;
  height?: number;
  id?: Uuid;
  impedance?: number;
  insertDate?: Instant;
  musclePercentage?: number;
  softLeanMass?: number;
  weight?: number;
}
