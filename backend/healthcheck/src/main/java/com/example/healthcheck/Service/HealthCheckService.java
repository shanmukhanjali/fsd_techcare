package com.example.healthcheck.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.healthcheck.Entity.HealthCheckResponse;
import com.example.healthcheck.Repository.HealthCheckResponseRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class HealthCheckService {

    @Autowired
    private HealthCheckResponseRepository repository;

    public HealthCheckResponse checkUrl(String url) {
        RestTemplate restTemplate = new RestTemplate();
        long startTime = System.currentTimeMillis();
        var responseEntity = restTemplate.getForEntity(url, String.class);
        long endTime = System.currentTimeMillis();

        HealthCheckResponse response = new HealthCheckResponse();
        response.setUrl(url);
        response.setStatusCode(responseEntity.getStatusCodeValue());
        response.setResponseSize(responseEntity.getBody().getBytes().length / 1024);
        response.setResponseTime(endTime - startTime);
        response.setTimestamp(LocalDateTime.now());

        repository.save(response);
        return response;
    }

    public List<HealthCheckResponse> getAllResults() {
        return repository.findAll();
    }
}
