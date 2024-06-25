package com.stemberger.miha.downscaled.rest.api.dtos;

import com.stemberger.miha.downscaled.rest.api.validation.groups.ScaleDataValidationGroups;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
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

    @Null(groups= ScaleDataValidationGroups.Post.class)
    @NotNull(groups= ScaleDataValidationGroups.Put.class)
    private UUID id;
    private Double weight;
    private Double bmi;
    private Double height;
    @Null(groups= ScaleDataValidationGroups.Post.class)
    @NotNull(groups= ScaleDataValidationGroups.Put.class)
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