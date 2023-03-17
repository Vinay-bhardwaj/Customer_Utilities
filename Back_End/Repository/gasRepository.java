package com.Utilities.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Utilities.Entity.Gas;

public interface gasRepository extends JpaRepository<Gas, Long> {
//	Optional<Gas> findByElectricityid(long electricity_id);
}
