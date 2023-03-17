package com.Utilities.Dao;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.Utilities.Entity.Gas;


public interface gasDao {
	
	public ResponseEntity<Gas> createGas(@RequestBody Gas gas);
//	public ResponseEntity<Gas> findByElectricId(@RequestParam long electricity_id);

}
