package com.stemberger.miha.downscaled.rest.api;

import com.stemberger.miha.downscaled.entities.sql.Order;
import com.stemberger.miha.downscaled.rest.api.dtos.MinMaxInsertDateDto;
import com.stemberger.miha.downscaled.rest.api.dtos.ScaleDataDto;
import com.stemberger.miha.downscaled.rest.api.validation.groups.ScaleDataValidationGroups;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.groups.ConvertGroup;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.time.Instant;
import java.util.List;

@Path("/scale_data")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public interface ScaleDataApi {

    @GET
    List<ScaleDataDto> getAllScaleData();

    @GET
    @Path("/{id}")
    ScaleDataDto getScaleDataById(@NotNull @NotBlank @PathParam("id") final String id);

    @GET
    @Path("/by-insert-date-range")
    List<ScaleDataDto> getScaleDataByInsertionDateRange(@NotNull @QueryParam("from") final Instant from,
                                                        @NotNull @QueryParam("to") final Instant to);


    @GET
    @Path("/min-max-search-params")
    MinMaxInsertDateDto getMinMaxInsertDate();

    @POST
    @Path("/add")
    void addScaleData(@Valid @ConvertGroup(to = ScaleDataValidationGroups.Post.class) @NotNull final ScaleDataDto scaleDataDto);

    @PUT
    @Path("/{id}")
    void updateScaleData(@NotNull @NotBlank @PathParam("id") final String id,
                         @Valid @ConvertGroup(to = ScaleDataValidationGroups.Put.class) final ScaleDataDto scaleDataDto);

    @DELETE
    @Path("/{id}")
    void deleteScaleData(@NotNull @NotBlank @PathParam("id") final String id);
}
