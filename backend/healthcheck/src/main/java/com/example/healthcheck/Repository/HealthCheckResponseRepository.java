package com.example.healthcheck.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.healthcheck.Entity.HealthCheckResponse;

@Repository
public interface HealthCheckResponseRepository extends JpaRepository<HealthCheckResponse, Long> {
}
