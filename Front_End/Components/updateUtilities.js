import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./updateUtilities.css";

class UpdateUtilities extends Component{
    constructor(props){
        super(props);
        this.state = {

            id : "",

            electricity : [
                {
                    isElecricityOn : "",
                    electricSpecifyUnknown : "N/A",
                    electricVerifiedBy : "N/A",
                    electricMeterReading : "N/A",
                    electricVerifiedOtherSpecifyOther : "N/A"
                }
            ],

            gas : [
                {
                    isGasOn : "",
                    gasSpecifyUnknown : "N/A",
                    gasVerifiedBy : "N/A",
                    gasMeterReading : "N/A",
                    gasVerifiedOtherSpecifyOther : "N/A"
                }
            ],

            water : [
                {
                    isWaterOn : "",
                    waterSpecifyUnknown : "N/A",
                    waterVerifiedBy : "N/A",
                    waterMeterReading : "N/A",
                    waterVerifiedOtherSpecifyOther : "N/A"
                }
            ],

            ElectricIsOnError : "",
            electricUnknownWhyError : "",
            electricVerifiedByError : "",
            electricVerifiedByMeterReadingError : "",
            electricSpecifyOtherError : "",

            GasIsOnError : "",
            gasUnknownWhyError : "",
            gasVerifiedByError : "",
            gasVerifiedByMeterReadingError : "",
            gasSpecifyOtherError : "",

            WaterIsOnError : "",
            waterUnknownWhyError : "",
            waterVerifiedByError : "",
            waterVerifiedByMeterReadingError : "",
            waterSpecifyOtherError : ""
        }
    }

    render(){
        const {electricity, gas, water} = this.state;
        const id = this.state.id;
        const selectedelectricity = this.state.electricity.map(electric =>{return electric.isElecricityOn});
        const selectedgas = this.state.gas.map(gas =>{return gas.isGasOn});
        const selectedwater = this.state.water.map(water =>{return water.isWaterOn});
       // const electricverified = this.state.electricity.map(electric =>{return electric.electricVerified});
        const waterverified = this.state.water.map(water => {return water.waterVerifiedBy});
        const meter = this.state.electricity.map(electric =>{return electric.electricMeterReading});
        console.log("electricity On : "+selectedelectricity);
        console.log("electricity unknown why :"+this.state.electricity.map(elect=>{return elect.electricSpecifyUnknown}));
        console.log("electric meter reading : "+meter);
        console.log("electric specify other :"+this.state.electricity.map(elect=>{return elect.electricVerifiedOtherSpecifyOther}));
        console.log("id to search is : "+this.state.id);
        console.log("hello......................................")
        return(
            <div className="update">
                <div className='box'>
                    <div className='head'><strong>UTILITIES</strong></div>
                    {/* <input type='text' name = 'search' id = 'search' placeholder="Enter id to search" onChange={this.searchChange}/>
                    <button type = "submit" onClick = {this.searchById}>🔍</button> */}
                    {/* <button type = "submit" onClick = {()=>this.searchName(id)}>🔍</button> */}
                    <form>
                        <div className='electric_on'>
                            <label htmlFor='electricity' className="starlabel"><strong>Electricity ON : </strong></label><hr></hr>
                            <input type ="radio" id = "electric unknown" name='electric' value="unknown" onChange={this.electricChange}/>Unknown
                            <input type ="radio" id = "electric on" name='electric' value="yes" onChange={this.electricChange}/>Yes
                            <input type ="radio" id = "electric off" name='electric' value="no" onChange={this.electricChange}/>No<br></br>
                            <span className="error">{this.state.ElectricIsOnError}</span>

                        <div id='electric_Radio' className='electricity'>

                            {(electricity.map(electric => {return electric.isElecricityOn}) == "unknown") ? (
                                <div>
                                    <label htmlFor='specifywhy'><strong>Unknown : </strong></label><hr></hr>
                                    <label htmlFor='specify' className="starlabel"><strong>Specify Why ? </strong></label>
                                    <input type = 'text' id = 'specify' name='specify' onChange={this.electricSpecifyWhy}></input><br></br>
                                    <span className="error">{this.state.electricUnknownWhyError}</span>
                                </div>
                            ) : (<div></div>)
                            }
                            {(electricity.map(electric => {return electric.isElecricityOn}) == "yes" || electricity.map(electric => {return electric.isElecricityOn}) == "no") ? (
                                <div>
                                    <label htmlFor='Verifier' className="starlabel"><strong>Verified By : </strong></label><hr></hr>
                                    <input type ="radio" id = "verifier meter" name='electricverifier' value="meter" onChange={this.electricVerifiedBy}/>Meter
                                    <input type ="radio" id = "verifier company" name='electricverifier' value="utility company" onChange={this.electricVerifiedBy}/>Utility Company
                                    <input type ="radio" id = "verifier other" name='electricverifier' value="other" onChange={this.electricVerifiedBy}/>Other<br></br>
                                    <span className="error">{this.state.electricVerifiedByError}</span>

                                    {(electricity.map(electric => {return electric.electricVerifiedBy}) == "meter") ? (
                                        <div>
                                            <label htmlFor="verifiedByMeter" className="starlabel"><strong>Meter Reading : </strong></label>
                                            <input type = "text" id="meterReading" name="meterReading" onChange={this.electricMeterReading}></input><br></br>
                                            <span className="error">{this.state.electricVerifiedByMeterReadingError}</span>
                                        </div>
                                    ) : (<div></div>)
                                    }

                                    {electricity.map(electric => {return electric.electricVerifiedBy}) == "other" ? (
                                        <div>
                                            <label htmlFor='electricSpecifyOther' className="starlabel"><strong>Specify Other ? </strong></label>
                                            <input type = 'text' id = 'specify' name='specify' onChange={this.electricOnOtherspecify}></input><br></br>
                                            <span className="error">{this.state.electricSpecifyOtherError}</span>
                                        </div>
                                    ) : (<div></div>)
                                    }

                                </div>
                            ) : (<div></div>) 
                            }
              
                        </div>
                        </div>
                        <div>
                            <label htmlFor='gas' className="starlabel"><strong>Gas ON :</strong></label><hr></hr>
                            <input type ="radio" id = "electric unknown" name='gas' value="unknown" onChange={this.gasChange}/>Unknown
                            <input type ="radio" id = "electric on" name='gas' value="yes" onChange={this.gasChange}/>Yes
                            <input type ="radio" id = "electric off" name='gas' value="no" onChange={this.gasChange}/>No<br></br>
                            <span className="error">{this.state.GasIsOnError}</span>
                                
                        <div id='electric_Radio' className='electricity'>

                            {gas.map(gas => {return gas.isGasOn}) == "unknown" ? (
                                <div>
                                    <label htmlFor='specifywhy'><strong>Unknown : </strong></label><hr></hr>  
                                    <label htmlFor='specify' className="starlabel"><strong>Specify Why ? </strong></label>
                                    <input type = 'text' id = 'specify' name='specify' onChange={this.specifyGasChange}></input><br></br>
                                    <span className="error">{this.state.gasUnknownWhyError}</span>
                                </div>  
                            ) : (<div></div>)
                            }

                            {(gas.map(gas => {return gas.isGasOn}) == "yes" || gas.map(gas => {return gas.isGasOn}) == "no") ? (
                                <div>
                                    <label htmlFor='Verifier' className="starlabel"><strong>Verified By : </strong></label><hr></hr>
                                    <input type ="radio" id = "verifier meter" name='gasverifier' value="meter" onChange={this.gasVerifiedBy}/>Meter
                                    <input type ="radio" id = "verifier company" name='gasverifier' value="utility company" onChange={this.gasVerifiedBy}/>Utility Company
                                    <input type ="radio" id = "verifier other" name='gasverifier' value="other" onChange={this.gasVerifiedBy}/>Other<br></br>
                                    <span className="error">{this.state.gasVerifiedByError}</span>

                                    {gas.map(gas => {return gas.gasVerifiedBy}) == "meter" ? (
                                        <div>   
                                            <label htmlFor="verifiedByMeter" className="starlabel"><strong>Meter Reading : </strong></label>
                                            <input type = "text" id="meterReading" name="meterReading" onChange={this.gasMeterReading}></input><br></br>
                                            <span className="error">{this.state.gasVerifiedByMeterReadingError}</span>
                                        </div>
                                    ) : (<div></div>)
                                    }

                                    {gas.map(gas => {return gas.gasVerifiedBy}) == "other" ? (
                                        <div>
                                            <label htmlFor='gasSpecifyOther' className="starlabel"><strong>Specify Other ? </strong></label>
                                            <input type = 'text' id = 'specify' name='specify' onChange={this.gasOnOtherspecify}></input><br></br>
                                            <span className="error">{this.state.gasSpecifyOtherError}</span>
                                        </div>
                                    ) : (<div></div>)
                                    }

                                </div>
                            ) : (<div></div>)
                            }
                        </div>
                        </div>
                        <div>
                            <label htmlFor='water' className="starlabel"><strong>Water ON : </strong></label><hr></hr>
                            <input type ="radio" id = "electric unknown" name='water' value="unknown" onChange={this.waterChange}/>Unknown
                            <input type ="radio" id = "electric on" name='water' value="yes" onChange={this.waterChange}/>Yes
                            <input type ="radio" id = "electric off" name='water' value="no" onChange={this.waterChange }/>No<br></br>
                            <span className="error">{this.state.WaterIsOnError}</span>

                        <div id='electric_Radio' className='electricity'>

                            {selectedwater == "unknown" ? (
                                <div>
                                    <label htmlFor='specifywhy'><strong>Unknown : </strong></label><hr></hr>
                                    <label htmlFor='specify' className="starlabel"><strong>Specify Why ? </strong></label>
                                    <input type = 'text' id = 'specify' name='specify' onChange={this.specifyWaterChange}></input><br></br>
                                    <span className="error">{this.state.waterUnknownWhyError}</span>
                                </div>
                            ) : (<div></div>)
                            }

                            {(selectedwater == "yes" || selectedwater == "no") ? (
                                <div>
                                    <label htmlFor='Verifier' className="starlabel"><strong>Verified By : </strong></label><hr></hr>
                                    <input type ="radio" id = "verifier meter" name='waterverifier' value="meter" onChange={this.waterVerifiedBy}/>Meter
                                    <input type ="radio" id = "verifier company" name='waterverifier' value="utility company" onChange={this.waterVerifiedBy}/>Utility Company
                                    <input type ="radio" id = "verifier other" name='waterverifier' value="other" onChange={this.waterVerifiedBy}/>Other<br></br>
                                    <span className="error">{this.state.waterVerifiedByError}</span>

                                    {waterverified == "meter" ? (
                                        <div>
                                            <label htmlFor="verifiedByMeter" className="starlabel"><strong>Meter Reading : </strong></label>
                                            <input type = "text" id="meterReading" name="meterReading" onChange={this.waterMeterReading}></input><br></br>
                                            <span className="error">{this.state.waterVerifiedByMeterReadingError}</span>
                                        </div>
                                    ) : (<div></div>)
                                    }

                                    {waterverified == "other" ? (
                                        <div>
                                            <label htmlFor='waterSpecifyOther' className="starlabel"><strong>Specify Other ? </strong></label>
                                            <input type = 'text' id = 'specify' name='specify' onChange={this.waterOnOtherspecify}></input><br></br>
                                            <span className="error">{this.state.waterSpecifyOtherError}</span>
                                        </div>
                                    ) : (<div></div>)
                                    }

                                </div>
                            ) : (<div></div>)
                            }
                        </div>
                        </div>
                        <div className='save'>
                            
                                <div>
                                    <button type ="button" onClick={this.Update}>Update</button>
                                    <button type = 'button' onClick={this.Delete}>Delete</button>
                                    {/* <Link to = "./utilities.js">
                                        <button type = "button" onClick={this.GoHome}>Go Home</button>
                                    </Link> */}
                                    <button type = "button" onClick={this.GoHome}>Go Home</button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default UpdateUtilities;