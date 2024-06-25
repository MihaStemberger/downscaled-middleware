package com.stemberger.miha.downscaled.entities.scale;

class ScaleDataQueryStrings {

    protected static final String SELECT_ALL = "SELECT s FROM ScaleData s ORDER BY s.insertDate ASC";
    protected static final String SELECT_MIN_MAX_INSERT_DATE = "SELECT min(s.insertDate), max(s.insertDate) FROM ScaleData s";
    protected static final String SELECT_IN_INSERT_DATE_RANGE = "SELECT s FROM ScaleData s WHERE s.insertDate BETWEEN :from AND :to ORDER BY s.insertDate ASC";

}
