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
@Table(name = "vinay_utitlity_gas")
public class Gas {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "isGasOn")
	private String isGasOn;
	
	@Column(name = "ElectricityGasWaterOnVerifiedByID")
	private String gasVerifiedBy;
	
	@Column(name = "MeterReading")
	private String gasMeterReading;
	
	@Column(name = "SpecifyUnknown")
	private String gasSpecifyUnknown;
	
	@Column(name = "SpecifyVerifiedByOther")
	private String gasVerifiedOtherSpecifyOther;
	
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
	
	@OneToOne
	@JoinColumn(name ="electricityid", referencedColumnName = "id")
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

	public String getIsGasOn() {
		return isGasOn;
	}

	public void setIsGasOn(String isGasOn) {
		this.isGasOn = isGasOn;
	}

	public String getGasVerifiedBy() {
		return gasVerifiedBy;
	}

	public void setGasVerifiedBy(String gasVerifiedBy) {
		this.gasVerifiedBy = gasVerifiedBy;
	}

	public String getGasMeterReading() {
		return gasMeterReading;
	}

	public void setGasMeterReading(String gasMeterReading) {
		this.gasMeterReading = gasMeterReading;
	}

	public String getGasSpecifyUnknown() {
		return gasSpecifyUnknown;
	}

	public void setGasSpecifyUnknown(String gasSpecifyUnknown) {
		this.gasSpecifyUnknown = gasSpecifyUnknown;
	}

	public String getGasVerifiedOtherSpecifyOther() {
		return gasVerifiedOtherSpecifyOther;
	}

	public void setGasVerifiedOtherSpecifyOther(String gasVerifiedOtherSpecifyOther) {
		this.gasVerifiedOtherSpecifyOther = gasVerifiedOtherSpecifyOther;
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
		return "Gas [id=" + id + ", isGasOn=" + isGasOn + ", gasVerifiedBy=" + gasVerifiedBy + ", gasMeterReading="
				+ gasMeterReading + ", gasSpecifyUnknown=" + gasSpecifyUnknown + ", gasVerifiedOtherSpecifyOther="
				+ gasVerifiedOtherSpecifyOther + ", isDeleted=" + isDeleted + ", createdDate=" + createdDate
				+ ", modifiedDate=" + modifiedDate + "]";
	}
	
	

}
