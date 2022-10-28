import { useRef, useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ParkingSlotActions } from "../store";
import "./form.css";
const FormInput = () => {

    // let hour = useRef();
    let vehicle = useRef();
    let parking = useRef();
    let slot = useRef();

    const [parkingVal, setParkingVal] = useState([]);
    const [slotVal, setSlotVal] = useState([]);
    // DISPATCH
    const dispatch = useDispatch();
    // SUBSCRIPTION
    const data = useSelector(state => state.parkingslot.data);

    const selectParkingValue = useCallback(() => {

        switch (vehicle.current.value) {
            case "S":
                setParkingVal(["SP","MP","LP"]);
                setSlotVal([1,2,3,4,5]);
                break;
            case "M":
                setParkingVal(["MP","LP"]);
                setSlotVal([1,2,3]);
                break;
            case "L":
                setParkingVal(["LP"]);
                setSlotVal([1,2]);
                break;
        }
    },[vehicle]);

    const selectSlotValue = useCallback(() => {
        switch (parking.current.value) {
            case "SP":
                setSlotVal([1,2,3,4,5]);
                break;
            case "MP":
                setSlotVal([1,2,3]);
                break;
            case "LP":
                setSlotVal([1,2]);
                break;
        }
    },[parking]);

    useEffect(() => {
        selectParkingValue();
    }, [])

    //SAVE DATA
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(ParkingSlotActions.saveData({
            hour: 3,
            vehicle: vehicle.current.value,
            parking: parking.current.value,
            slot: slot.current.value,
            amount: 40,
        }));

        // hour.current.value = "";
        vehicle.current.value = "";
        parking.current.value = "";
        slot.current.value = "";
    };

    // ADD AMOUNT AND HOUR 
    const addAmount = (event) => {
        dispatch(ParkingSlotActions.addAmount({
            id: event.target.value
        }));
    };

    // REMOVE SLOT
    const removeSlot = (event) => {
        dispatch(ParkingSlotActions.removeData({
            id: event.target.value
        }));

        alert("Payment Successfully");
    };

    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
                {/* <label>Hour</label><br/>
                <input type="number" ref={hour} value={3}/><br/> */}

                <label>Vehicle</label><br/>
                <select ref={vehicle} onChange={selectParkingValue}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                </select><br/>

                <label>Parking</label><br/>
                <select ref={parking} onChange={selectSlotValue}>
                    {parkingVal.map((i) => {
                        return <option value={i}>{i}</option>;
                    })}
                </select><br/>

                <label>Slot</label><br/>
                <select ref={slot}><br/>
                    {slotVal.map((i) => {
                        return <option value={i}>{i}</option>;
                    })}
                </select><br/>

                <input type="submit" value="SUBMIT"/><br/>
            </form>
                    
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Vehicle</th>
                            <th>Parking</th>
                            <th>Slot</th>
                            <th>Hour</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((i) => {
                            return(
                                <tr>
                                    <td>{i.vehicle}</td>
                                    <td>{i.parking}</td>
                                    <td>{i.slot}</td>
                                    <td>{i.hour}</td>
                                    <td>{i.amount}</td>
                                    <td>
                                        <button onClick={addAmount} value={i.id}>+</button>&nbsp;
                                        <button onClick={removeSlot} value={i.id}>P</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FormInput;