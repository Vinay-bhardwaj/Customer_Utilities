package com.Utilities.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Utilities.Dao.electricityDao;
import com.Utilities.Entity.electricity;
import com.Utilities.Service.electricityService;

@Service
public class electricServiceImpl implements electricityService{
	
	@Autowired
	electricityDao electricDao;

	@Override
	public ResponseEntity<electricity> createElectricity(electricity electric) {
		return electricDao.createElectricity(electric);
	}

	@Override
	public ResponseEntity<electricity> getElectricity(long id) {
		return electricDao.getElectricity(id);
	}

	@Override
	public long generatedId(long id) {
		
		return electricDao.generatedId(id);
	}
	

}
