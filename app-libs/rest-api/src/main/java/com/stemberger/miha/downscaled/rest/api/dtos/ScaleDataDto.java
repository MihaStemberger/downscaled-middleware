package com.stemberger.miha.downscaled.rest.api.dtos;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@Getter
@Builder
@ToString
public class ScaleDataDto {

    private UUID id;
    private Double weight;
    private Double bmi;
    private Double height;
    private Instant insertDate;
    private Double bodyFatPercentage;
    private Double basalMetabolism;
    private Double musclePercentage;
    private Double softLeanMass;
    private Double bodyWaterMass;
    private Double impedance;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final ScaleDataDto scaleDataDto = (ScaleDataDto) o;
        return Objects.equals(id, scaleDataDto.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}