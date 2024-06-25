package com.stemberger.miha.downscaled.rest.resources;

import com.stemberger.miha.downscaled.entities.sql.Order;
import com.stemberger.miha.downscaled.rest.api.ScaleDataApi;
import com.stemberger.miha.downscaled.rest.api.dtos.MinMaxInsertDateDto;
import com.stemberger.miha.downscaled.rest.api.dtos.ScaleDataDto;
import com.stemberger.miha.downscaled.rest.api.mappers.ScaleDataMapper;
import com.stemberger.miha.downscaled.rest.api.validation.groups.ScaleDataValidationGroups;
import com.stemberger.miha.downscaled.rest.repositories.ScaleDataRepository;
import jakarta.inject.Inject;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.groups.ConvertGroup;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

public class ScaleDataResource implements ScaleDataApi {

    private final ScaleDataRepository scaleDataRepository;

    @Inject
    public ScaleDataResource(final ScaleDataRepository scaleDataRepository) {
        this.scaleDataRepository = scaleDataRepository;
    }

    @Override
    public List<ScaleDataDto> getAllScaleData() {
        return scaleDataRepository.getAll().stream()
                .map(ScaleDataMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public ScaleDataDto getScaleDataById(final String id) {
        return null;
    }

    @Override
    public List<ScaleDataDto> getScaleDataByInsertionDateRange(final Instant from,
                                                               final Instant to) {
        return scaleDataRepository.getInDateRange(from, to).stream()
                .map(ScaleDataMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public MinMaxInsertDateDto getMinMaxInsertDate() {
        return scaleDataRepository.getMinAndMaxInsertDate();
    }

    @Override
    public void addScaleData(final ScaleDataDto scaleDataDto) {

    }

    @Override
    public void updateScaleData(final String id,
                                final ScaleDataDto scaleDataDto) {

    }

    @Override
    public void deleteScaleData(final String id) {

    }
}
