import { useState } from "react";

function Kontakt() {
const [n2itaTelKummiku, muudaN2itaTelKummiku] = useState(false);
const [n2itaTelSussi, muudaN2itaTelSussi] = useState(false);
const [n2itaTelSaapa, muudaN2itaTelSaapa] = useState(false);

    return ( <div>
        <div><strong> See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</strong></div>
        <div><p align="center" > <b>Helista või kirjuta meile:</b></p></div>
        <br/>
        <div onClick={() => muudaN2itaTelKummiku(!n2itaTelKummiku)}>Kummiku Maja</div>
        <div>Eesti</div>
        {n2itaTelKummiku && <div>+22334455</div> }
        <br/>
        <div onClick={() => muudaN2itaTelSussi(!n2itaTelSussi)}>Sussi Maja</div>
        <div>Läti</div>
        {n2itaTelSussi && <div>+1234567</div> }
        <br/>
        <div onClick={() => muudaN2itaTelSaapa(!n2itaTelSaapa)}> Saapa Maja</div>
        <div>Leedu</div>
        {n2itaTelSaapa && <div>+88997700</div> }
    </div> );
}

export default Kontakt;