package com.Utilities.Service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import com.Utilities.Entity.Water;

public interface waterService {
	
	public ResponseEntity<Water> createWater(@RequestBody Water water);


}
