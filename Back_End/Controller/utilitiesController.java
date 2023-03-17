package com.Utilities.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Utilities.Entity.Gas;
import com.Utilities.Entity.Water;
import com.Utilities.Entity.electricity;
import com.Utilities.Service.electricityService;
import com.Utilities.Service.gasService;
import com.Utilities.Service.waterService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class utilitiesController {
	
	@Autowired
	electricityService electricService;
	
	@Autowired
	gasService gasServ;
	
	@Autowired
	waterService waterServ;
	
	@PostMapping("/electricCreate")
	public ResponseEntity<electricity> createElectricty(@RequestBody electricity electric){
		System.out.println("controller electricity data... :"+electric);
		return electricService.createElectricity(electric);
	}
	
	@PostMapping("/gasCreate")
	public ResponseEntity<Gas> createGas(@RequestBody Gas gas){
		System.out.println("controller gas data... :"+gas);
		return gasServ.createGas(gas);
	}
	
	@PostMapping("/waterCreate")
	public ResponseEntity<Water> createWater(@RequestBody Water water){
		System.out.println("controller water data... :"+water);
		return waterServ.createWater(water);
	}
	
	@GetMapping("/getElectricity/{id}")
	public ResponseEntity<electricity> getElectricity(@PathVariable("id") long id){
		return electricService.getElectricity(id);
	}
	
//	@GetMapping("/gasElectricID")
//	public ResponseEntity<Gas> gasElectricId(@RequestParam long electricity_id){
//		return gasServ.gasElectricId(electricity_id);
//	}
	
	@GetMapping("/generatedId")
	public long getGeneratedId(long id) {
		System.out.println("controller generated id : "+id);
		return electricService.generatedId(id);
	}
	
}
