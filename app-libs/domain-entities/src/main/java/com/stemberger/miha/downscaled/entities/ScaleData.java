package com.stemberger.miha.downscaled.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
public class ScaleData {

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
