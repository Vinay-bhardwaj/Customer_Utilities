package com.Utilities.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Utilities.Dao.waterDao;
import com.Utilities.Entity.Water;
import com.Utilities.Service.waterService;

@Service
public class waterServiceImpl implements waterService{
	
	@Autowired
	waterDao waterdao;

	@Override
	public ResponseEntity<Water> createWater(Water water) {
		return waterdao.createWater(water);
	}

}
