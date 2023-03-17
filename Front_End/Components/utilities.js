import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import UpdateUtilities from "./updateUtilities";

class Utility extends Component{
    constructor(props){
        super(props);
        this.state = {

            id : "",
            sapmleId : "",

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

    componentDidMount(){
        this.setState({
            ...this.state,
        })
    }

    searchChange = e => {
        const id = e.target.value;
        this.setState({sapmleId : id});
        console.log(id);
    }

    searchById = e => {
        this.setState({id : this.state.sapmleId})
        // if(this.state.id == ""){
        //     alert("Please enter id");
        // }
        // else{
        axios.get('http://localhost:8080/api/getElectricity/'+this.state.sapmleId)
        .then(reponse => {
            console.log(reponse);
            // this.setState(prevState => ({
            //     electricity : prevState.electricity.map(
            //         obj => (Object.assign(obj, {isElecricityOn : reponse.isElecricityOn}))
            //     )
            // }));
            // console.log("value from database isElectricOn is : "+this.state.electricity.map(elect => {return elect.isElecricityOn}));
        })
        // }
        // let path = "./updateUtilities.js";
        // Navigate(path);
    }

    electricChange = e =>{
        const selected = e.target.value;
        this.setState(prevState => ({
            electricity: prevState.electricity.map(
            obj => (Object.assign(obj, {isElecricityOn : selected,
                electricSpecifyUnknown : "N/A",
                electricVerifiedBy : "N/A",
                electricMeterReading : "N/A",
                electricVerifiedOtherSpecifyOther : "N/A"}))
          )
        }));
        this.setState({ElectricIsOnError : ""});
    }

    electricSpecifyWhy = e => {
        const specifyWhy = e.target.value
        this.setState(prevState => ({
            electricity: prevState.electricity.map(
            obj => (Object.assign(obj, {electricSpecifyUnknown : specifyWhy,
                electricMeterReading : "N/A",
                electricVerifiedOtherSpecifyOther : "N/A"}))
          )
        }));
        this.setState({electricUnknownWhyError : ""});
    }

    electricVerifiedBy = e => {
        const electricVerifier = e.target.value;
        this.setState(prevState => ({
            electricity: prevState.electricity.map(
            obj => (Object.assign(obj, {electricVerifiedBy : electricVerifier,
                 electricSpecifyUnknown : "N/A",
                 electricMeterReading : "N/A",
                 electricVerifiedOtherSpecifyOther : "N/A"}))
          )
        }));
        this.setState({electricVerifiedByError : ""});
        console.log("electric verifier is : "+electricVerifier);
    }

    electricMeterReading = e => {
        const meterReading = e.target.value;
        this.setState(prevState => ({
            electricity: prevState.electricity.map(
            obj => (Object.assign(obj, {electricMeterReading : meterReading,
            electricSpecifyUnknown : "N/A",
            electricVerifiedOtherSpecifyOther : "N/A"}))
          )
        }));
        this.setState({electricVerifiedByMeterReadingError : ""});
        console.log(meterReading);
    }

    electricOnOtherspecify = e => {
        const onOtherspecify = e.target.value;
        this.setState(prevState => ({
            electricity: prevState.electricity.map(
            obj => (Object.assign(obj, {electricVerifiedOtherSpecifyOther : onOtherspecify,
                electricMeterReading : "N/A",
                electricSpecifyUnknown : "N/A"}))
          )
        }));
        this.setState({electricSpecifyOtherError : ""});
    }

    gasChange = e => {
        const selectedgas = e.target.value;
        this.setState(prevState => ({
            gas: prevState.gas.map(
            obj => (Object.assign(obj, {isGasOn : selectedgas,
                gasSpecifyUnknown : "N/A",
                gasVerifiedBy : "N/A",
                gasMeterReading : "N/A",
                gasVerifiedOtherSpecifyOther : "N/A"}))
          )
        }));
        this.setState({GasIsOnError : ""});
        console.log("Gas selected is : "+selectedgas);
    }

    specifyGasChange = e => {
        const specifyWhy = e.target.value
        this.setState(prevState => ({
            gas: prevState.gas.map(
            obj => (Object.assign(obj, {gasSpecifyUnknown : specifyWhy,
                gasMeterReading : "N/A",
                gasVerifiedOtherSpecifyOther : "N/A"}))
          )
        }));
        this.setState({gasUnknownWhyError : ""});
        console.log(specifyWhy);
    }

    gasVerifiedBy = e => {
        const gasVerifier = e.target.value;
        this.setState(prevState => ({
            gas: prevState.gas.map(
            obj => (Object.assign(obj, {gasVerifiedBy : gasVerifier,
                gasSpecifyUnknown : "N/A",
                gasMeterReading : "N/A",
                gasVerifiedOtherSpecifyOther : "N/A"}))
          )
        }));
        this.setState({gasVerifiedByError : ""});
        console.log("Gas verifier is : "+gasVerifier);
    }

    gasMeterReading = e => {
        const meterReading = e.target.value;
        this.setState(prevState => ({
            gas: prevState.gas.map(
            obj => (Object.assign(obj, {gasMeterReading : meterReading,
                gasSpecifyUnknown : "N/A",
                gasVerifiedOtherSpecifyOther : "N/A"}))
          )
        }));
        this.setState({gasVerifiedByMeterReadingError : ""});
        console.log(meterReading);
    }

    gasOnOtherspecify = e => {
        const gasOnOtherspecify = e.target.value;
        this.setState(prevState => ({
            gas: prevState.gas.map(
            obj => (Object.assign(obj, {gasVerifiedOtherSpecifyOther : gasOnOtherspecify,
                gasMeterReading : "N/A",
                gasSpecifyUnknown : "N/A"}))
          )
        }));
        this.setState({gasSpecifyOtherError : ""});
        console.log(gasOnOtherspecify);
    }


    waterChange = e => {
        const selectedWater = e.target.value;
        this.setState(prevState => ({
            water: prevState.water.map(
            obj => (Object.assign(obj, {isWaterOn : selectedWater,
                waterSpecifyUnknown : "N/A",
                waterVerifiedBy : "N/A",
                waterMeterReading : "N/A",
                waterVerifiedOtherSpecifyOther : "N/A"}))
          )
        }));
        this.setState({WaterIsOnError : ""});
        console.log("Water selected is : "+selectedWater);
    }

    specifyWaterChange = e => {
        const specifyWhy = e.target.value
        this.setState(prevState => ({
            water: prevState.water.map(
            obj => (Object.assign(obj, {waterSpecifyUnknown : specifyWhy,
                waterMeterReading : "N/A",
                waterVerifiedOtherSpecifyOther : "N/A"}))
          )
        }));
        this.setState({waterUnknownWhyError : ""});
        console.log(specifyWhy);
    }

    waterVerifiedBy = e => {
        const waterVerifier = e.target.value;
        this.setState(prevState => ({
            water: prevState.water.map(
            obj => (Object.assign(obj, {waterVerifiedBy : waterVerifier,
                waterSpecifyUnknown : "N/A",
                waterMeterReading : "N/A",
                waterVerifiedOtherSpecifyOther : "N/A"}))
          )
        }));
        this.setState({waterVerifiedByError : ""});
        console.log("Water verifier is : "+waterVerifier);
    }

    waterMeterReading = e => {
        const meterReading = e.target.value;
        this.setState(prevState => ({
            water: prevState.water.map(
            obj => (Object.assign(obj, {waterMeterReading : meterReading,
                waterSpecifyUnknown : "N/A",
                waterVerifiedOtherSpecifyOther : "N/A"}))
          )
        }));
        this.setState({waterVerifiedByMeterReadingError : ""});
        console.log(meterReading);
    }

    waterOnOtherspecify = e => {
        const waterOnOtherspecify = e.target.value;
        this.setState(prevState => ({
            water: prevState.water.map(
            obj => (Object.assign(obj, {waterVerifiedOtherSpecifyOther : waterOnOtherspecify,
                waterMeterReading : "N/A",
                waterSpecifyUnknown : "N/A"}))
          )
        }));
        this.setState({waterSpecifyOtherError : ""});
        console.log(waterOnOtherspecify);
    }

    validate(){
        let electricOnerr = "";
        let verifiedByError = "";
        let electUnknownWhyError = "";
        let electMeterReadingError = "";
        let electSpecifyOtherError = "";

        let gasOnerr = "";
        let gasverifiedByError = "";
        let gasUnknownWhyError = "";
        let gasMeterReadingError = "";
        let gasSpecifyOtherError = "";

        let waterOnerr = "";
        let waterverifiedByError = "";
        let waterUnknownWhyError = "";
        let waterMeterReadingError = "";
        let waterSpecifyOtherError = "";


        if(this.state.electricity.map(elect => {return elect.isElecricityOn}) == ""){
            electricOnerr = "*Please Select Yes, No or Unknown.";
        }
        if((this.state.electricity.map(elect => {return elect.isElecricityOn}) == "unknown") && (
        this.state.electricity.map(elect => {return elect.electricSpecifyUnknown}) == "N/A")) {
            electUnknownWhyError = "*Please specify reason";
        }
        if((this.state.electricity.map(elect => {return elect.isElecricityOn}) == "yes" || 
        this.state.electricity.map(elect => {return elect.isElecricityOn}) == "no") && 
        this.state.electricity.map(elect => {return elect.electricVerifiedBy}) == "N/A"){
            verifiedByError = "*Please select Verified By.";
        }
        if((this.state.electricity.map(elect => {return elect.isElecricityOn}) == "yes" || 
        this.state.electricity.map(elect => {return elect.isElecricityOn}) == "no") && 
        (this.state.electricity.map(elect => {return elect.electricVerifiedBy}) == "meter" &&
        this.state.electricity.map(elect => {return elect.electricMeterReading})) == "N/A"){
            electMeterReadingError = "*Please provide Meter Reading.";
        }
        if((this.state.electricity.map(elect => {return elect.isElecricityOn}) == "yes" || 
        this.state.electricity.map(elect => {return elect.isElecricityOn}) == "no") && 
        (this.state.electricity.map(elect => {return elect.electricVerifiedBy}) == "other" && 
        this.state.electricity.map(elect => {return elect.electricVerifiedOtherSpecifyOther}) == "N/A")){
            electSpecifyOtherError = "*Please Specify Other.";
        }


        if(this.state.gas.map(gas => {return gas.isGasOn}) == ""){
            gasOnerr = "*Please Select Yes, No or Unknown.";
        }
        if((this.state.gas.map(gas => {return gas.isGasOn}) == "unknown") && (
            this.state.gas.map(gas => {return gas.gasSpecifyUnknown}) == "N/A")) {
                gasUnknownWhyError = "*Please specify reason";
        }
        if((this.state.gas.map(gas => {return gas.isGasOn}) == "yes" || 
        this.state.gas.map(gas => {return gas.isGasOn}) == "no") && 
        this.state.gas.map(gas => {return gas.gasVerifiedBy}) == "N/A"){
            gasverifiedByError = "Please select Verified By.";
        }
        if((this.state.gas.map(gas => {return gas.isGasOn}) == "yes" ||
        this.state.gas.map(gas => {return gas.isGasOn}) == "no") && 
        (this.state.gas.map(gas => {return gas.gasVerifiedBy}) == "meter" &&
        this.state.gas.map(gas => {return gas.gasMeterReading}) == "N/A")){
            gasMeterReadingError = "*Please provide meter reading.";
        }
        if((this.state.gas.map(gas => {return gas.isGasOn}) == "yes" ||
        this.state.gas.map(gas => {return gas.isGasOn}) == "no") &&
        (this.state.gas.map(gas => {return gas.gasVerifiedBy}) == "other" &&
        this.state.gas.map(gas => {return gas.gasVerifiedOtherSpecifyOther}) == "N/A")){
            gasSpecifyOtherError = "*Please Specify other.";
        }


        if(this.state.water.map(water => {return water.isWaterOn}) == ""){
            waterOnerr = "*Please Select Yes, No or Unknown.";
        }
        if((this.state.water.map(water => {return water.isWaterOn}) == "unknown") && 
        (this.state.water.map(water => {return water.waterSpecifyUnknown}) == "N/A")){
            waterUnknownWhyError = "*Please Specify reason.";
        }
        if((this.state.water.map(water => {return water.isWaterOn}) == "yes" || 
        this.state.water.map(water => {return water.isWaterOn}) == "no") && 
        this.state.water.map(water => {return water.waterVerifiedBy}) == "N/A"){
            waterverifiedByError = "*Please select Verified By.";
        }
        if((this.state.water.map(water => {return water.isWaterOn}) == "yes" ||
        this.state.water.map(water => {return water.isWaterOn}) == "no") &&
        (this.state.water.map(water => {return water.waterVerifiedBy}) == "meter" &&
        this.state.water.map(water => {return water.waterMeterReading}) == "N/A")){
            waterMeterReadingError = "*Please provide meter reading.";
        }
        if((this.state.water.map(water => {return water.isWaterOn}) == "yes" || 
        this.state.water.map(water => {return water.isWaterOn}) == "no") && 
        (this.state.water.map(water => {return water.waterVerifiedBy}) == "other" && 
        this.state.water.map(water => {return water.waterVerifiedOtherSpecifyOther}) == "N/A")){
            waterSpecifyOtherError = "*Please specify Other.";
        }



        if(electricOnerr){
            this.setState({ElectricIsOnError : electricOnerr});
            return false;
        }
        if(electUnknownWhyError){
            this.setState({electricUnknownWhyError : electUnknownWhyError})
            return false;
        }
        if(verifiedByError){
            this.setState({electricVerifiedByError : verifiedByError});
            return false;
        }
        if(electMeterReadingError){
            this.setState({electricVerifiedByMeterReadingError : electMeterReadingError});
            console.log("meter reading :"+electMeterReadingError);
            return false;
        }
        if(electSpecifyOtherError){
            this.setState({electricSpecifyOtherError : electSpecifyOtherError});
            return false;
        }
        
        if(gasOnerr){
            console.log("gas error :"+gasOnerr);
            this.setState({GasIsOnError : gasOnerr});
            return false;
        }
        if(gasUnknownWhyError){
            this.setState({gasUnknownWhyError : gasUnknownWhyError})
            return false;
        }
        if(gasverifiedByError){
            this.setState({gasVerifiedByError : gasverifiedByError});
            return false;
        }
        if(gasMeterReadingError){
            this.setState({gasVerifiedByMeterReadingError : gasMeterReadingError});
            return false;
        }
        if(gasSpecifyOtherError){
            this.setState({gasSpecifyOtherError : gasSpecifyOtherError})
            return false;
        }

        if(waterOnerr){
            console.log("electric error :"+waterOnerr);
            this.setState({WaterIsOnError : waterOnerr});
            return false;
        }
        
        if(waterUnknownWhyError){
            this.setState({waterUnknownWhyError : waterUnknownWhyError});
            return false;
        }
        if(waterverifiedByError){
            this.setState({waterVerifiedByError : waterverifiedByError});
            return false;
        }

        if(waterMeterReadingError){
            this.setState({waterVerifiedByMeterReadingError : waterMeterReadingError});
            return false;
        }
        if(waterSpecifyOtherError){
            this.setState({waterSpecifyOtherError : waterSpecifyOtherError})
            return false;
        }
        return true;
    }

    save = async(e) => {
        e.preventDefault();
        if(this.validate()){
            
            const electricity = this.state.electricity[0];
            axios.post('http://localhost:8080/api/electricCreate',electricity)
            .then(reponse => {
            console.log(reponse);
            })

            const gas = this.state.gas[0];
            axios.post('http://localhost:8080/api/gasCreate',gas)
            .then(reponse => {
            console.log(reponse);
            })

            const water = this.state.water[0];
            axios.post('http://localhost:8080/api/waterCreate',water)
            .then(reponse => {
            alert("Utilities Data Saved");
            console.log(reponse);
            })

        }

        // window.location.reload();
    }

    GoHome = e => {
        window.location.reload();
    }

    reset = e => {
        window.location.reload();
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
            <div>
                <div className='box'>
                    {/* <UpdateUtilities data = {this.state}/> */}
                    {/* <BrowserRouter>
                        <Routes>
                            <Route path = "/" element = {}>
                            <Route path="./updateUtilities.js" element={UpdateUtilities}></Route>
                            </Route>
                        </Routes>
                    </BrowserRouter> */}
                    <div className='head'><strong>UTILITIES</strong></div>
                    {/* <input type='text' name = 'search' id = 'search' placeholder="Enter id to search" onChange={this.searchChange}/>
                    <a href="/src/Components/updateUtilities.js">
                        
                        <button type = "submit" onClick = {this.searchById}>🔍</button>
                    </a> */}
                    <input type='text' name = 'search' id = 'search' placeholder="Enter id to search" onChange={this.searchChange}/>
                    <a href="./updateUtilities.js" onClick={this.searchById}>🔍</a>
                    {/* <Link to = "./updateUtilities.js">🔍</Link> */}
                    <button type = "button" onClick = {this.searchById}>🔍</button>
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
                            {/* {id ? (
                                <div>
                                    <button type ="button" onClick={this.Update}>Update</button>
                                    <button type = 'button' onClick={this.Delete}>Delete</button>
                                    <button type = "button" onClick={this.GoHome}>Go Home</button>
                                </div>
                            ) : (
                                <div>
                                    <button type ="button" onClick={this.save}>Save</button>
                                    <button type = 'button' onClick={this.reset}>Reset</button>
                                </div>
                            )} */}
                            <button type ="button" onClick={this.save}>Save</button>
                            <button type = 'button' onClick={this.reset}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Utility;