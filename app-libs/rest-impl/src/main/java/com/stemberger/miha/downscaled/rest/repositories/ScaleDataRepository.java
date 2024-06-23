package com.stemberger.miha.downscaled.rest.repositories;

import com.stemberger.miha.downscaled.entities.ScaleData;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import java.time.Instant;
import java.util.List;

@ApplicationScoped
public class ScaleDataRepository {

//    TODO: see to this
    @PersistenceContext
    private EntityManager em;

//    TODO create named queries for these
    public List<ScaleData> listAll() {
        return em.createQuery("SELECT s FROM ScaleData s", ScaleData.class).getResultList();
    }

    public List<ScaleData> findByInsertDateRange(Instant from, Instant to) {
        return em.createQuery("SELECT s FROM ScaleData s WHERE s.insertDate BETWEEN :from AND :to", ScaleData.class)
                .setParameter("from", from)
                .setParameter("to", to)
                .getResultList();
    }

}
