package com.stemberger.miha.downscaled.rest.resources;

import com.stemberger.miha.downscaled.rest.api.ScaleDataApi;
import com.stemberger.miha.downscaled.rest.api.dtos.ScaleDataDto;
import com.stemberger.miha.downscaled.rest.api.mappers.ScaleDataMapper;
import com.stemberger.miha.downscaled.rest.repositories.ScaleDataRepository;
import jakarta.inject.Inject;

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
        return scaleDataRepository.listAll().stream()
                .map(ScaleDataMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public ScaleDataDto getScaleById(final String id) {
        return null;
    }

    @Override
    public List<ScaleDataDto> getScaleDataByTimestampRange(final Instant from, final Instant to) {
        return scaleDataRepository.findByInsertDateRange(from, to).stream()
                .map(ScaleDataMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public void addScale(final ScaleDataDto scaleDataDto) {

    }

    @Override
    public void updateScale(final String id, final ScaleDataDto scaleDataDto) {

    }

    @Override
    public void deleteScale(final String id) {

    }
}
