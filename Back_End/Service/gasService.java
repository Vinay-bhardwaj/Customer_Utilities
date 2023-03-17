package com.Utilities.Service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.Utilities.Entity.Gas;

public interface gasService {
	public ResponseEntity<Gas> createGas(@RequestBody Gas gas);
//	public ResponseEntity<Gas> gasElectricId(@RequestParam long electricity_id);

}
