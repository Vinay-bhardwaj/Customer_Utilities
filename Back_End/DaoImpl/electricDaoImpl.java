package com.Utilities.DaoImpl;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.Utilities.Dao.electricityDao;
import com.Utilities.Entity.electricity;
import com.Utilities.Repository.electricityRepository;


@Repository
public class electricDaoImpl implements electricityDao{

	@Autowired
	electricityRepository electricRepo;

	@Override
	public ResponseEntity<electricity> createElectricity(electricity electric) {
		try {
			electricity elect = electricRepo.save(electric);
			final long generatedId = electric.getId();
			System.out.println("generated id is : "+electric.getId());
			System.out.println("........... : "+electric);
			return new ResponseEntity<>(elect, HttpStatus.CREATED);
		}
		catch(Exception e){
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Override
	public ResponseEntity<electricity> getElectricity(long id) {

		Optional<electricity> elect = electricRepo.findById(id);

		if(elect.isPresent()) {
			return new ResponseEntity<>(elect.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		

	}

	@Override
	public long generatedId(long id) {
		long generatedid = electricRepo.findTopByOrderByIdDesc();
		System.out.println("id generated is : "+generatedid);
		return generatedid;
	}

}
