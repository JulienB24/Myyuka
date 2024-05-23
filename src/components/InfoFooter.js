function InfoFooter({ store, fabriquant }) {
  return (
    <div id="infoFooter" className="fs-4 col-md-11 m-auto my-2 p-2 ">
      <div className="mb-2 text-start">
        <i class="fa-solid fa-cart-shopping"></i>&nbsp;
        <u>
          <b>Distributeur</b>
        </u>
        :{" "}
        {(!store && " Information non disponible") ||
          (store == "" && " Information non disponible")}
        {store}
      </div>
      <div className="text-start">
        <i class="fa-solid fa-industry"></i>&nbsp;
        <u>
          <b>Fabrication</b>
        </u>
        :{" "}
        {(!fabriquant && "Information non disponible") ||
          (fabriquant == "" && "Information non disponible")}
        {fabriquant}
      </div>
    </div>
  );
}

export default InfoFooter;
