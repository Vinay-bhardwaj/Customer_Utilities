package com.Utilities.DaoImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.Utilities.Dao.gasDao;
import com.Utilities.Entity.Gas;
import com.Utilities.Repository.gasRepository;

@Repository
public class gasDaoImpl implements gasDao{
	
	@Autowired
	gasRepository gasRepo;

	@Override
	public ResponseEntity<Gas> createGas(Gas gas) {
		try {
			Gas elect = gasRepo.save(gas);
			System.out.println("gas is : "+gas);
			return new ResponseEntity<>(elect, HttpStatus.CREATED);
		}
		catch(Exception e){
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

//	@Override
//	public ResponseEntity<Gas> findByElectricId(long electricity_id) {
//		Optional<Gas> gasElectId = gasRepo.findByElectricityid(electricity_id);
//		if(gasElectId.isPresent()) {
//			return new ResponseEntity<>(gasElectId.get(), HttpStatus.OK);
//		}
//		else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}

}
