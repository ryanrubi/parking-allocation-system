import { createSlice, configureStore } from "@reduxjs/toolkit";

const ParkingSlot = createSlice({
    name: 'parkingslot',
    initialState: {
        data: [],
        count_id: 0
    },
    reducers: {
        saveData(state, action){
            const newData = action.payload;

            state.data.push({
                id: state.count_id++,
                hour: newData.hour,
                vehicle: newData.vehicle,
                parking: newData.parking,
                slot: newData.slot,
                amount: newData.amount
            }); 
        },
        addAmount(state, action){
            const slotId = parseInt(action.payload.id);
            const existingData = state.data.find(i => i.id === slotId);

            let hourExceeds = parseInt(existingData.hour) >= 23 ? 5000 : 0;

            if(existingData.parking === "SP") {
                existingData.amount = existingData.amount + 20 + hourExceeds;
            }else if (existingData.parking === "MP") {
                existingData.amount = existingData.amount + 60 + hourExceeds;
            }else {
                existingData.amount = existingData.amount + 100 + hourExceeds;
            }

            existingData.hour = parseInt(existingData.hour) + 1;
            
        },
        removeData(state, action){
            const slotId = parseInt(action.payload.id);
            state.data = state.data.filter(i => i.id !== slotId);
        }
    }
});

const store = configureStore({
    reducer : {
        parkingslot: ParkingSlot.reducer,
    }
});

export const ParkingSlotActions = ParkingSlot.actions;

export default store;