package com.stemberger.miha.downscaled.entities.scale;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.UUID;


@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "scale_data")
@NamedQueries({
        @NamedQuery(name = ScaleData.GET_ALL, query = ScaleDataQueryStrings.SELECT_ALL),
        @NamedQuery(name = ScaleData.GET_IN_INSERT_DATE_RANGE, query = ScaleDataQueryStrings.SELECT_IN_INSERT_DATE_RANGE),
        @NamedQuery(name = ScaleData.GET_MIN_AND_MAX_INSERT_DATE, query = ScaleDataQueryStrings.SELECT_MIN_MAX_INSERT_DATE)
})
public class ScaleData {

    public static final String GET_ALL = "scaleDataAll";
    public static final String GET_IN_INSERT_DATE_RANGE = "scaleDataInInsertDateRange";
    public static final String GET_MIN_AND_MAX_INSERT_DATE = "scaleDataMinMaxInsertDate";

    @Id
    private UUID id;

    private Double weight;
    private Double bmi;
    private Double height;

    @Column(name = "insert_date", nullable = false)
    private Instant insertDate;

    @Column(name = "body_fat_percentage")
    private Double bodyFatPercentage;

    @Column(name = "basal_metabolism")
    private Double basalMetabolism;

    @Column(name = "muscle_percentage")
    private Double musclePercentage;

    @Column(name = "soft_lean_mass")
    private Double softLeanMass;

    @Column(name = "body_water_mass")
    private Double bodyWaterMass;

    private Double impedance;
}
