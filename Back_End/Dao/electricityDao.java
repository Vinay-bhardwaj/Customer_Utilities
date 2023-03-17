package com.Utilities.Dao;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.Utilities.Entity.electricity;


public interface electricityDao {
	public ResponseEntity<electricity> createElectricity(@RequestBody electricity electric);
	public ResponseEntity<electricity> getElectricity(@PathVariable("id") long id);
	public long generatedId(long id);
}
