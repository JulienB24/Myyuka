import React from "react";

function TitreProduit({ productName, infoBrand, barreCode }) {
  return (
    <div
      id="titreProduit"
      className="text-center col-md-7 m-auto mt-2 rounded animate__animated animate__bounce"
    >
      <div>
        <h2 className="fs-2 fw-bold">
          <i class="fa-solid fa-id-card-clip"></i>&nbsp;
          {productName}
        </h2>
      </div>
      <div>
        <p className="mb-2 fs-4">
          <b>
            <i class="fa-solid fa-copyright"></i>&nbsp; Marque:{" "}
            {!infoBrand && "Information non disponible"}
            {infoBrand}
          </b>
        </p>
      </div>
      <div className="my-2">
        <p className="fst-italic" alt="Code-barre">
          <i class="fa-solid fa-barcode"></i>
          &nbsp;Code Barre: {barreCode}
        </p>
      </div>
    </div>
  );
}

export default TitreProduit;
