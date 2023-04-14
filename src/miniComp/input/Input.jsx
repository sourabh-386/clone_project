import React, { useReducer, useState } from "react";
import './Input.css'
import location from '../../images/location.png'
import edit from '../../images/edit.png'
import close from '../../images/close.png'
import { searchReducer } from "../../reducers/reducers";

function Input() {

    let initialvalue = { cross: false, text: 'panipat' }

    const [state, dispatch] = useReducer(searchReducer, initialvalue)

    function settingtext(e) {
        dispatch({ type: 'text', payload: e.target.value })
        dispatch({ type: 'cross', payload: true })
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            dispatch({ type: 'cross', payload: false })
        }
    }

    return (
        <div className="input">
            <input
                type="text"
                value={state.text}
                onChange={settingtext}
                onKeyDown={handleKeyDown}
                placeholder="Enter Your Location"
            />
            {

                !state.cross ? <img src={edit} alt="" className="input_edit" onClick={() => dispatch({ type: 'text', payload: '' })} />
                    : <img src={close} alt="" className="input_edit2" onClick={() => dispatch({ type: 'text', payload: '' })} />
            }

            <img src={location} alt="" className="input_location" />
        </div>
    );
}
export default Input
