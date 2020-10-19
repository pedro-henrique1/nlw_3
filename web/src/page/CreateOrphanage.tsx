import React, {ChangeEvent, useState} from "react";
import {Map, Marker, TileLayer} from 'react-leaflet';
import {LeafletMouseEvent} from "leaflet"
import {useHistory} from "react-router-dom"
import '../styles/pages/create-orphanage.css';
import Sidebar from "../components/Sidebar"
import {FiPlus} from "react-icons/fi"
import happyMapIcon from "../utils/mapIcon";
import api from "../services/api";



async function CreateOrphanage()  {
    const history = useHistory()
    const [position, setPosition] = useState({latitude: 0, longitude: 0})
    const [name, setName] = useState("")
    const [about, setAbout] = useState("")
    const [instructions, setInstructions] = useState("")
    const {latitude, longitude} = position
    const [openingHours, setOpeningHours] = useState("")
    const [openOnWeekends, setOpenOnWeekends] = useState("true")
    const [image, setImage] = useState<File[]>([])
    const [previewImage, setPreviewImage] = useState<string[]>([])

     function handleMap(event: LeafletMouseEvent) {
        const {lat, lng} = event.latlng
        setPosition({
            latitude: lat,
            longitude: lng
        })
    }

    function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) {
            return
        }

        const selectImages = Array.from(event.target.files)
        setImage(selectImages)

        setImage(image)
        const selectedImagePreview = selectImages.map(image => {
            return URL.createObjectURL(image)
        })
        setPreviewImage(selectedImagePreview)
    }

    const data = new FormData()

    data.append("name", name)
    data.append("about", about)
    data.append("latitude", String(latitude))
    data.append("longitude", String(longitude))
    data.append("instructions", instructions)
    data.append("opening_hours", openingHours)
    data.append("open_on_weekends", String(openOnWeekends))

    image.forEach(image => {
        data.append("image", image)
    })

    await api.post("orphanages", data)

    history.push("/app")

    return (
        <div id="page-create-orphanage">
            <Sidebar/>
            <main>
                <form className="create-orphanage-form">
                    <fieldset>
                        <legend>Dados</legend>

                        <Map
                            center={[-27.2092052, -49.6401092]}
                            style={{width: '100%', height: 280}}
                            zoom={15}
                            onClick={handleMap}
                        >
                            <TileLayer
                                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVkcm9oaWZkZ2lyZ25pcnRpYm5nZmlibmciLCJhIjoiY2tnOXgwdGZwMDFqMjJ6cnZmNGQ5aXhhYiJ9.ytkRAceC9Iy5-iVhGs8zwQ`}
                            />
                            {position.latitude !== 0 && (
                                <Marker interactive={false} icon={happyMapIcon}
                                        position={[position.latitude, position.longitude]}/>
                            )
                            }

                        </Map>

                        <div className="input-block">
                            <label htmlFor="name">Nome</label>
                            <input id="name"
                                   value={name} onChange={event => setName(event.target.value)}/>
                        </div>

                        <div className="input-block">
                            <label
                                htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
                            <textarea id="about" maxLength={300}
                                      value={about}
                                      onChange={event => setAbout(event.target.value)}/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="images">Fotos</label>
                            {previewImage.map(image => {
                                return (
                                    <img key={image} src={image} alt="image"/>
                                )
                            })}
                            <div className="image Container">
                                <label className="new-image">
                                    <FiPlus size={24} color="#15b6d6"/>
                                </label>

                            </div>
                            <input multiple onChange={handleSelectImage} type='file' id="image[]"/>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Visitação</legend>

                        <div className="input-block">
                            <label htmlFor="instructions">Instruções</label>

                            <textarea id="instructions"
                                      value={instructions}
                                      onChange={event => setInstructions(event.target.value)}/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_hours">horario de funcinamento</label>
                            <input id="opening_hours"
                                   value={openingHours}
                                   onChange={event => setOpeningHours(event.target.value)}/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="open_on_weekends">Atende fim de semana</label>

                            <div className="button-select">
                                <button type="button"
                                        className={openOnWeekends ? "active" : ""}
                                        onClick={() => setOpenOnWeekends("true")}>Sim
                                </button>
                                <button type="button"
                                        className={!openOnWeekends ? "active" : ""}
                                        onClick={() => setOpenOnWeekends("false")}
                                >Não
                                </button>
                            </div>
                        </div>
                    </fieldset>

                    <button className="confirm-button" type="submit">
                        Confirmar
                    </button>
                </form>
            </main>
        </div>
    );
}

export default CreateOrphanage
// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;






































