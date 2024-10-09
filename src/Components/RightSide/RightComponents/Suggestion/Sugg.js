import React from 'react'
import Simg1 from "../../../../assets/Suggestion/img-1.jpg"
import Simg2 from "../../../../assets/Suggestion/img-2.jpg"
import "../Suggestion/Sugg.css"

const Sugg = () => {
  return (
    <div className="Sugg-comp">
      <h2>Sugerencia Para Ti</h2>

      <div className="sugg-people">
        <div className="s-left">
          <img src={Simg1} alt="" />
          <h3>Ayuda Somos Todo</h3>
        </div>

        <div className="s-right">
          <button>Seguir</button>
          <button>Dejar de Seguir</button>
        </div>
      </div>

      <div className="sugg-people">
        <div className="s-left">
          <img src={Simg2} alt="" />
          <h3>Luis_Ayuda</h3>
        </div>

        <div className="s-right">
          <button>Seguir</button>
          <button>Dejar de Seguir</button>
        </div>
      </div>

    </div>
  )
}

export default Sugg 