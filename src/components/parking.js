import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./parking.css";

const Parking = () => {

    const data = useSelector(state => state.parkingslot.data);
    const dataSp = data.filter(i => i.vehicle === "S" );
    const dataMp = data.filter(i => i.vehicle === "M" );
    const dataLp = data.filter(i => i.vehicle === "L" );

    const [sp, setSp] = useState({});
    const [mp, setMp] = useState({});
    const [lp, setLp] = useState({});

    useEffect(() => {
        let arrSp = [];
        for(let a = 0; a <= dataSp.length-1; a++){
            arrSp.push(parseInt(dataSp[a].slot));
        }
        setSp(() => {
            const ret = {};
            ret.slot_1 = arrSp.includes(1);
            ret.slot_2 = arrSp.includes(2);
            ret.slot_3 = arrSp.includes(3);
            ret.slot_4 = arrSp.includes(4);
            ret.slot_5 = arrSp.includes(5);
            return ret;
        });

        let arrMp = [];
        for(let b = 0; b <= dataMp.length-1; b++){
            arrMp.push(parseInt(dataMp[b].slot));
        }
        setMp(() => {
            const ret = {};
            ret.slot_1 = arrMp.includes(1);
            ret.slot_2 = arrMp.includes(2);
            ret.slot_3 = arrMp.includes(3);
            return ret;
        });

        let arrLp = [];
        for(let c = 0; c <= dataLp.length-1; c++){
            arrLp.push(parseInt(dataLp[c].slot));
        }
        setLp(() => {
            const ret = {};
            ret.slot_1 = arrLp.includes(1);
            ret.slot_2 = arrLp.includes(2);
            return ret;
        });
    }, []);

    return(
        <div className="container">
            <img className="arrow-left" src={require("../assets/arrow.png")} alt="vehicle"/>

            <div className="slot-container">
                <div className="sp-container">
                    <h1>SP</h1>
                    <div className="s-vehicle">{sp.slot_1 ? <img src={require("../assets/s_vehicle.JPG")} alt="vehicle"/> : 1}</div>
                    <div className="s-vehicle">{sp.slot_2 ? <img src={require("../assets/s_vehicle.JPG")} alt="vehicle"/> : 2}</div>
                    <div className="s-vehicle">{sp.slot_3 ? <img src={require("../assets/s_vehicle.JPG")} alt="vehicle"/> : 3}</div>
                    <div className="s-vehicle">{sp.slot_4 ? <img src={require("../assets/s_vehicle.JPG")} alt="vehicle"/> : 4}</div>
                    <div className="s-vehicle">{sp.slot_5 ? <img src={require("../assets/s_vehicle.JPG")} alt="vehicle"/> : 5}</div>
                </div>

                <div className="lg-container">
                    <div className="mp-container">
                        <h1>MP</h1>
                        <div className="m-vehicle">{mp.slot_1 ? <img src={require("../assets/m_vehicle.JPG")} alt="vehicle"/> : 1}</div>
                        <div className="m-vehicle">{mp.slot_2 ? <img src={require("../assets/m_vehicle.JPG")} alt="vehicle"/> : 2}</div>
                        <div className="m-vehicle">{mp.slot_3 ? <img src={require("../assets/m_vehicle.JPG")} alt="vehicle"/> : 3}</div>
                    </div>

                    <div className="lp-container">
                        <h1>LP</h1>
                        <div className="l-vehicle">{lp.slot_1 ? <img src={require("../assets/l_vehicle.JPG")} alt="vehicle"/> : 1}</div>
                        <div className="l-vehicle">{lp.slot_2 ? <img src={require("../assets/l_vehicle.JPG")} alt="vehicle"/> : 2}</div>
                    </div>
                </div>
            </div>

            <div className="arrow-container">
                <img className="arrow-top" src={require("../assets/arrow.png")} alt="vehicle"/>
                <img className="arrow-bottom" src={require("../assets/arrow.png")} alt="vehicle"/>
            </div>
        </div>
    );
};

export default Parking;