package com.Utilities.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Utilities.Entity.electricity;

public interface electricityRepository extends JpaRepository<electricity, Long>{
//	@Query(value = "SELECT TOP id FROM vinay_utitlity_electricity ORDER BY DESC")
	long findTopByOrderByIdDesc();
	
}
