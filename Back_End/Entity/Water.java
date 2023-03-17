package com.Utilities.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "vinay_utitlity_water")
public class Water {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "isWaterOn")
	private String isWaterOn;
	
	@Column(name = "ElectricityGasWaterOnVerifiedByID")
	private String waterVerifiedBy;
	
	@Column(name = "MeterReading")
	private String waterMeterReading;
	
	@Column(name = "SpecifyUnknown")
	private String waterSpecifyUnknown;
	
	@Column(name = "SpecifyVerifiedByOther")
	private String waterVerifiedOtherSpecifyOther;
	
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
	@Column(name = "modifiedDate")
	private Date modifiedDate;
	
	@OneToOne
	@JoinColumn(name = "electricityid", referencedColumnName = "id")
	private electricity elect;
	

	public electricity getElect() {
		return elect;
	}

	public void setElect(electricity elect) {
		this.elect = elect;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getIsWaterOn() {
		return isWaterOn;
	}

	public void setIsWaterOn(String isWaterOn) {
		this.isWaterOn = isWaterOn;
	}

	public String getWaterVerifiedBy() {
		return waterVerifiedBy;
	}

	public void setWaterVerifiedBy(String waterVerifiedBy) {
		this.waterVerifiedBy = waterVerifiedBy;
	}

	public String getWaterMeterReading() {
		return waterMeterReading;
	}

	public void setWaterMeterReading(String waterMeterReading) {
		this.waterMeterReading = waterMeterReading;
	}

	public String getWaterSpecifyUnknown() {
		return waterSpecifyUnknown;
	}

	public void setWaterSpecifyUnknown(String waterSpecifyUnknown) {
		this.waterSpecifyUnknown = waterSpecifyUnknown;
	}

	public String getWaterVerifiedOtherSpecifyOther() {
		return waterVerifiedOtherSpecifyOther;
	}

	public void setWaterVerifiedOtherSpecifyOther(String waterVerifiedOtherSpecifyOther) {
		this.waterVerifiedOtherSpecifyOther = waterVerifiedOtherSpecifyOther;
	}

	public String getIsDeleted() {
		return isDeleted;
	}

	public void setIsDeleted(String isDeleted) {
		this.isDeleted = isDeleted;
	}

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
		return "Water [id=" + id + ", isWaterOn=" + isWaterOn + ", waterVerifiedBy=" + waterVerifiedBy
				+ ", waterMeterReading=" + waterMeterReading + ", waterSpecifyUnknown=" + waterSpecifyUnknown
				+ ", waterVerifiedOtherSpecifyOther=" + waterVerifiedOtherSpecifyOther + ", isDeleted=" + isDeleted
				+ ", createdDate=" + createdDate + ", modifiedDate=" + modifiedDate + "]";
	}
	
	

}
