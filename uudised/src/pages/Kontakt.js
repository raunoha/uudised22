import { useState } from "react";

function Kontakt() {
const [n2itaTelKummiku, muudaN2itaTelKummiku] = useState(false);
const [n2itaTelSussi, muudaN2itaTelSussi] = useState(false);
const [n2itaTelSaapa, muudaN2itaTelSaapa] = useState(false);

    return ( <div>
        <div><strong> See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</strong></div>
        <div><p align="center" > <b>Helista või kirjuta meile:</b></p></div>
        <br/>
        <div className={n2itaTelKummiku === true ? "valitud" : undefined} onClick={() => muudaN2itaTelKummiku(!n2itaTelKummiku)}>Kummiku Maja</div>
        {n2itaTelKummiku && <div className= "valitud">+22334455</div> }
        <div className={n2itaTelKummiku === true ? "valitud" : undefined}>Eesti</div>
        <br/>
        <div className={n2itaTelSussi === true ? "valitud" : undefined} onClick={() => muudaN2itaTelSussi(!n2itaTelSussi)}>Sussi Maja</div>
        {n2itaTelSussi && <div className= "valitud">+1234567</div> }
        <div className={n2itaTelSussi === true ? "valitud" : undefined}>Läti</div>
        <br/>
        <div className={n2itaTelSaapa === true ? "valitud" : undefined} onClick={() => muudaN2itaTelSaapa(!n2itaTelSaapa)}> Saapa Maja</div>
        {n2itaTelSaapa && <div className= "valitud">+88997700</div> }
        <div className={n2itaTelSaapa === true ? "valitud" : undefined}>Leedu</div>
    </div> );
}

export default Kontakt;