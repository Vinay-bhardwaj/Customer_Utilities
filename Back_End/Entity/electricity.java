package com.Utilities.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;



@Entity
@Table(name = "vinay_utitlity_electricity")
public class electricity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "IsElecricityOn")
	private String isElecricityOn;
	
	@Column(name = "ElectricityGasWaterOnVerifiedByID")
	private String electricVerifiedBy;
	
	@Column(name = "MeterReading")
	private String electricMeterReading;
	
	@Column(name = "SpecifyUnknown")
	private String electricSpecifyUnknown;
	
	@Column(name = "SpecifyVerifiedByOther")
	private String electricVerifiedOtherSpecifyOther;
	
	@Column(name = "isDeleted")
	private String isDeleted = "fasle";
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "createdDate")
	private Date createdDate;
	
	@PrePersist
	private void onCreate() {
	    createdDate = new Date();
	}
	
	@Temporal(TemporalType.TIMESTAMP)
//	@LastModifiedDate
	@Column(name = "modifiedDate")
	private Date modifiedDate;
	
	@PreUpdate
	private void onUpdate() {
		modifiedDate = new Date(); 
	}
	
	@OneToOne(mappedBy = "elect")
	private Gas gas;
	
	@OneToOne(mappedBy = "elect")
	private Water water;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getIsElecricityOn() {
		return isElecricityOn;
	}

	public void setIsElecricityOn(String isElecricityOn) {
		this.isElecricityOn = isElecricityOn;
	}

	public String getElectricVerifiedBy() {
		return electricVerifiedBy;
	}

	public void setElectricVerifiedBy(String electricVerifiedBy) {
		this.electricVerifiedBy = electricVerifiedBy;
	}

	public String getElectricMeterReading() {
		return electricMeterReading;
	}

	public void setElectricMeterReading(String electricMeterReading) {
		this.electricMeterReading = electricMeterReading;
	}

	public String getElectricSpecifyUnknown() {
		return electricSpecifyUnknown;
	}

	public void setElectricSpecifyUnknown(String electricSpecifyUnknown) {
		this.electricSpecifyUnknown = electricSpecifyUnknown;
	}

	public String getElectricVerifiedOtherSpecifyOther() {
		return electricVerifiedOtherSpecifyOther;
	}

	public void setElectricVerifiedOtherSpecifyOther(String electricVerifiedOtherSpecifyOther) {
		this.electricVerifiedOtherSpecifyOther = electricVerifiedOtherSpecifyOther;
	}

	public String getIsDeleted() {
		return isDeleted;
	}

	public void setIsDeleted(String isDeleted) {
		this.isDeleted = isDeleted;
	}
	
	

//	public String getCreatedDate() {
//		return createdDate;
//	}
//
//	public void setCreatedDate(String createdDate) {
//		this.createdDate = createdDate;
//	}
//
//	public String getModifiedDate() {
//		return modifiedDate;
//	}
//
//	public void setModifiedDate(String modifiedDate) {
//		this.modifiedDate = modifiedDate;
//	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(Date modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	@Override
	public String toString() {
		return "electricity [id=" + id + ", isElecricityOn=" + isElecricityOn + ", electricVerifiedBy="
				+ electricVerifiedBy + ", electricMeterReading=" + electricMeterReading + ", electricSpecifyUnknown="
				+ electricSpecifyUnknown + ", electricVerifiedOtherSpecifyOther=" + electricVerifiedOtherSpecifyOther
				+ ", isDeleted=" + isDeleted + ", createdDate=" + createdDate + ", modifiedDate=" + modifiedDate + "]";
	}

	

}
