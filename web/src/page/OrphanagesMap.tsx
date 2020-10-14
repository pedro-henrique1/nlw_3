import React from "react";
import {Link} from "react-router-dom"
import {FiPlus} from "react-icons/fi"
import {Map, TileLayer, Marker, Popup} from "react-leaflet"
import mapMarkerImg from "../images/Local.svg"
import Leaflet from "leaflet"

import "../styles/pages/OrphanagesMap.css"
import "leaflet/dist/leaflet.css"



const mayIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function Orfanato() {


    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="icone"/>
                    <h2>Escolha um orfanato no mapa </h2>
                    <p>Muitas crianças estão te esprendo</p>
                </header>

                <footer>
                    <strong> Liberdade</strong>
                    <strong> MG </strong>
                </footer>

            </aside>
            <Map center={[-22.0196667, -44.3147937]}
                 zoom={15}
                 style={{width: "100%", height: "100%"}}>

                <TileLayer
                    // url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    url={ `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVkcm9oaWZkZ2lyZ25pcnRpYm5nZmlibmciLCJhIjoiY2tnOXgwdGZwMDFqMjJ6cnZmNGQ5aXhhYiJ9.ytkRAceC9Iy5-iVhGs8zwQ` }
                />
                <Marker icon={mayIcon} position={[-22.0196667, -44.3147937]} >
                <Popup closeButton={false} minWidth={240}  maxWidth={240}> Lar das meninas </Popup>
                </Marker>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>

        </div>
    );
}


export default Orfanato;
