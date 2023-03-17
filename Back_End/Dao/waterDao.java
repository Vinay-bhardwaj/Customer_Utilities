package com.Utilities.Dao;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import com.Utilities.Entity.Water;


public interface waterDao {
	
	public ResponseEntity<Water> createWater(@RequestBody Water water);

}
