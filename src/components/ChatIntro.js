import React from "react";
import "./ChatIntro.css";
import introWhatsapp from "../image/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg";

function ChatIntro() {
  return (
    <div className="chatIntro">
      <img src={introWhatsapp} alt="Whatsapp" />
      <h1>Mantenga su celular conectado.</h1>
      <h2>
        WhatsApp se conecta a su teléfono para sincronizar sus mensajes. <br />
        Para reducir el uso de datos, conecte su teléfono a una red Wi-Fi.
      </h2>
    </div>
  );
}

export default ChatIntro;
