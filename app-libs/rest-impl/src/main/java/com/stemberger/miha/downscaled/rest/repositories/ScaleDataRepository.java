package com.stemberger.miha.downscaled.rest.repositories;

import com.stemberger.miha.downscaled.entities.scale.ScaleData;
import com.stemberger.miha.downscaled.entities.sql.Order;
import com.stemberger.miha.downscaled.rest.api.dtos.MinMaxInsertDateDto;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import java.time.Instant;
import java.util.List;

@ApplicationScoped
public class ScaleDataRepository {

    @PersistenceContext
    private EntityManager em;

    public List<ScaleData> getAll() {
        return em.createNamedQuery(ScaleData.GET_ALL, ScaleData.class).getResultList();
    }

    public List<ScaleData> getInDateRange(final Instant from,
                                          final Instant to) {
        return em.createNamedQuery(ScaleData.GET_IN_INSERT_DATE_RANGE, ScaleData.class)
                .setParameter("from", from)
                .setParameter("to", to)
                .getResultList();
    }

    public MinMaxInsertDateDto getMinAndMaxInsertDate() {
        return em.createNamedQuery(ScaleData.GET_MIN_AND_MAX_INSERT_DATE, MinMaxInsertDateDto.class)
                .getSingleResult();
    }

}
