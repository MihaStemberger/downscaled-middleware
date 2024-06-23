package com.stemberger.miha.downscaled.rest.api;

import com.stemberger.miha.downscaled.rest.api.dtos.ScaleDataDto;
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
    ScaleDataDto getScaleById(@PathParam("id") final String id);

    @GET
    @Path("/by-timestamp-range")
    List<ScaleDataDto> getScaleDataByTimestampRange(@QueryParam("from") final Instant from,
                                                    @QueryParam("to") final Instant to);

    @POST
    @Path("/add")
    void addScale(final ScaleDataDto scaleDataDto);

    @PUT
    @Path("/{id}")
    void updateScale(@PathParam("id") final String id,
                     final ScaleDataDto scaleDataDto);

    @DELETE
    @Path("/{id}")
    void deleteScale(@PathParam("id") final String id);
}
