
import { useState } from "react";

function Meist() {
    const [kontakt, n2itaKontakt] = useState("");
   const tootajad=[
       {nimi: "Porsas Kummik", ala: "Porilompide juhataja",telefon:"+37233"},
       {nimi: "Lammas Sussid", ala: "Talumaja direktor",telefon:"+37244"},
       {nimi: "Koer Saabas", ala: "Liivakasti spetsialist",telefon:"37255"},
       {nimi: "Poni Kauboi", ala: "Kauboi vanemspetsialist",telefon:"+3728899"},
       {nimi: "Porsas Kummik", ala: "Porilompide juhataja",telefon:"+37233"},
       {nimi: "Lammas Sussid", ala: "Talumaja direktor",telefon:"+37244"},
       {nimi: "Koer Saabas", ala: "Liivakasti spetsialist",telefon:"37255"},
       {nimi: "Poni Kauboi", ala: "Kauboi vanemspetsialist",telefon:"+3728899"}
       ]


const [valitud, uuendaValitud] = useState("");

const v6taYhendust = (tootaja) => {
    n2itaKontakt(tootaja.telefon);
    uuendaValitud(tootaja.nimi);
}

   return ( <div>
        <div>
            <h1>See on meist leht, nähtav localhost:3000/meist aadressil</h1></div>
        <div>
            <h2><p align="center" >Meie töötajad</p></h2></div>
            <div>{valitud}</div>
            <div>{kontakt}</div>
        <br/>
        <div>{tootajad.map((tootaja, index) =>
          <div key={index} className={tootaja.nimi === valitud ? "valitud" : undefined}>
            <div>{tootajad.nimi}</div>
            <div>{tootajad.ala}</div>
            <button onClick={() => v6taYhendust(tootaja)}>Võta ühendust</button>
            <br/><br />
          </div>)} 
        </div>
        {/* 
        <button onClick={() => n2itaKontakt(tootaja.nimi)}>Nimi</button>
            <button onClick={() => n2itaKontakt(tootaja.ala)}>Ala</button>
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
   <br/><br /> */}
{ kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>);
}
export default Meist;