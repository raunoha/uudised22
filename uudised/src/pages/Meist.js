
import { useState } from "react";

function Meist() {
    const [kontakt, n2itaKontakt] = useState("");
   
   return ( <div>
        <div>
            <h1>See on meist leht, nähtav localhost:3000/meist aadressil</h1></div>
        <div>
            <h2><p align="center" >Meie töötajad</p></h2></div>
        <br/>
        <div>Porsas Kummik</div>
        
        <div>Porilompide juhataja</div>
        <button onClick={() => n2itaKontakt("+37233")}>Võta ühendust</button>
        <br/> <br/>
        <div><mark>Lammas Sussid</mark></div>
        <div>Talumaja direktor</div>
        <button onClick={() => n2itaKontakt("+37244")}>Võta ühendust</button>
        <br/><br />
        <div>Koer Saabas</div>
        <div>Liivakasti spetsialist</div>
        <button onClick={() => n2itaKontakt("+37255")}>Võta ühendust</button>
        <br/><br />
        <div>Poni Kauboi</div>
        <div>Kauboi vanemspetsialist</div>
        <button onClick={() => n2itaKontakt("+3728899")}>Võta ühendust</button>
        <br/><br />
{ kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>);
}
export default Meist;