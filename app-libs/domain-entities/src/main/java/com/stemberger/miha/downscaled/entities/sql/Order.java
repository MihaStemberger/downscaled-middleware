package com.stemberger.miha.downscaled.entities.sql;

public enum Order {

    ASCENDING("ASC"),
    DESCENDING("DESC");

    public String value;

    Order(final String value) {
        this.value = value;
    }
}
