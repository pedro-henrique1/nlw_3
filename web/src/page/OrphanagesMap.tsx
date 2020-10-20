import React, {useEffect, useState,} from "react";
import {Link} from "react-router-dom"
import {FiPlus, FiArrowRight} from "react-icons/fi"
import {Map, TileLayer, Marker, Popup} from "react-leaflet"
import mapMarkerImg from "../images/Local.svg"
import "../styles/pages/OrphanagesMap.css"
import api from "../services/api";
import happyMapIcon from "../utils/mapIcon";

require("dotenv").config()

interface Orphanage {
    id: number,
    latitude: number,
    longitude: number,
    name: string
}


function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([])
    useEffect(() => {
        api.get("orphanages").then(response => {
            setOrphanages(response.data)
        })
    }, [])
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
            <Map
                center={[-22.0196667, -44.3147937]}
                zoom={15}
                style={{width: "100%", height: "100%"}}>

                <TileLayer
                    // url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN_MAP}`}
                />
                {orphanages.map(orphanage => {
                    return (
                        <Marker key={orphanage.id} icon={happyMapIcon}
                                position={[orphanage.latitude, orphanage.longitude]}>
                            <Popup closeButton={false} className="map-popup" minWidth={240}
                                   maxWidth={240}> {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#fff"/>
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>

        </div>
    );
}


export default OrphanagesMap;
