package com.Utilities.DaoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.Utilities.Dao.waterDao;
import com.Utilities.Entity.Water;
import com.Utilities.Repository.waterRepository;

@Repository
public class waterDaoImpl implements waterDao{
	
	@Autowired
	waterRepository waterRepo;

	@Override
	public ResponseEntity<Water> createWater(Water water) {
		try {
			Water elect = waterRepo.save(water);
			System.out.println("water is : "+water);
			return new ResponseEntity<>(elect, HttpStatus.CREATED);
		}
		catch(Exception e){
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
