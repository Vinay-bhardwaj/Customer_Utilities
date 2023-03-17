package com.Utilities.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Utilities.Dao.gasDao;
import com.Utilities.Entity.Gas;
import com.Utilities.Service.gasService;

@Service
public class gasServiceImpl implements gasService {
	
	@Autowired
	gasDao gasdao;

	@Override
	public ResponseEntity<Gas> createGas(Gas gas) {
		return gasdao.createGas(gas);
	}

//	@Override
//	public ResponseEntity<Gas> gasElectricId(long electricity_id) {
//		return gasdao.findByElectricId(electricity_id);
//	}

}
