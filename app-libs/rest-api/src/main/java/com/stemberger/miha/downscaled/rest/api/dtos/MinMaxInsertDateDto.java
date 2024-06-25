package com.stemberger.miha.downscaled.rest.api.dtos;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.Instant;

@Builder
@Getter
@ToString
public class MinMaxInsertDateDto {

    private Instant min;
    private Instant max;

}
