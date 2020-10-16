import react from "react"
import mapMarkerImg from "../images/Local.svg";
import {useHistory} from "react-router-dom";
import React from "react";
import { FiArrowLeft} from "react-icons/fi";

import  "../styles/component/sidebar.css"

export default function Sidebar() {
    const { goBack } = useHistory();

    return (
        <aside className="app-sidebar">
            <img src={mapMarkerImg} alt="Happy"/>

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF"/>
                </button>
            </footer>
        </aside>

    )
}
