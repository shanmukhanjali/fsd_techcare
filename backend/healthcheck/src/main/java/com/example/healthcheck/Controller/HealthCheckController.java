package com.example.healthcheck.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.healthcheck.Entity.HealthCheckResponse;
import com.example.healthcheck.Service.HealthCheckService;

@RestController
@RequestMapping("/api/healthcheck")
@CrossOrigin(origins = "*")
public class HealthCheckController {

    @Autowired
    private HealthCheckService healthCheckService;

    @GetMapping
    public HealthCheckResponse checkUrl(@RequestParam String url) {
        return healthCheckService.checkUrl(url);
    }

    @GetMapping("/all")
    public List<HealthCheckResponse> getAllResults() {
        return healthCheckService.getAllResults();
    }
}
