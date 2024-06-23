package com.stemberger.miha.downscaled.rest.api.mappers;

import com.stemberger.miha.downscaled.entities.ScaleData;
import com.stemberger.miha.downscaled.rest.api.dtos.ScaleDataDto;

public class ScaleDataMapper {

    public static ScaleDataDto toDto(final ScaleData scale) {
        return ScaleDataDto.builder()
                .id(scale.getId())
                .weight(scale.getWeight())
                .bmi(scale.getBmi())
                .height(scale.getHeight())
                .insertDate(scale.getInsertDate())
                .bodyFatPercentage(scale.getBodyFatPercentage())
                .basalMetabolism(scale.getBasalMetabolism())
                .musclePercentage(scale.getMusclePercentage())
                .softLeanMass(scale.getSoftLeanMass())
                .bodyWaterMass(scale.getBodyWaterMass())
                .impedance(scale.getImpedance())
                .build();
    }

    public static ScaleData fromDto(final ScaleDataDto dto) {
        return ScaleData.builder()
                .id(dto.getId())
                .weight(dto.getWeight())
                .bmi(dto.getBmi())
                .height(dto.getHeight())
                .insertDate(dto.getInsertDate())
                .bodyFatPercentage(dto.getBodyFatPercentage())
                .basalMetabolism(dto.getBasalMetabolism())
                .musclePercentage(dto.getMusclePercentage())
                .softLeanMass(dto.getSoftLeanMass())
                .bodyWaterMass(dto.getBodyWaterMass())
                .impedance(dto.getImpedance())
                .build();
    }

}
