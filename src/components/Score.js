function Score({
  nutriscore,
  codeNova,
  huilePalme,
  huilePalmeUnknown,
  codeNovaUnknown,
}) {
  return (
    <div id="score" className="col-md-11 m-auto col-10">
      <div className="row align-items-center">
        <div className="col ">
          <div className="p-2 table-danger ">
            {nutriscore == "e" && (
              <img
                id="nutriScore"
                src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-e.svg"
                alt="nutriScore E"
                className="shadow-lg bg-body-tertiary rounded "
              />
            )}
            {nutriscore == "d" && (
              <img
                id="nutriScore"
                src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-d.svg"
                alt="nutriScore D"
                className="shadow-lg bg-body-tertiary rounded"
              />
            )}
            {nutriscore == "c" && (
              <img
                id="nutriScore"
                src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-c.svg"
                alt="nutriScore C"
                className="shadow-lg bg-body-tertiary rounded"
              />
            )}
            {nutriscore == "b" && (
              <img
                id="nutriScore"
                src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-b.svg"
                alt="nutriScore B"
                className="shadow-lg bg-body-tertiary rounded "
              />
            )}
            {nutriscore == "a" && (
              <img
                id="nutriScore"
                src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-a.svg"
                alt="nutriScore A"
                className="shadow-lg bg-body-tertiary rounded"
              />
            )}
            {(nutriscore === "not-applicable" || nutriscore === "unknown") && (
              <p className="border bg-secondary rounded border-5 text-dark">
                Nutri-Score indisponible
              </p>
            )}
          </div>
        </div>
        <div data-aos="flip-down" className="col">
          <div className="p-2 align-items-center">
            {codeNova === 4 && (
              <img
                id="nova"
                src="https://static.openfoodfacts.org/images/attributes/dist/nova-group-4.svg"
                alt="Code Nova 4"
                className="shadow-lg p-2 bg-body-tertiary rounded"
              />
            )}
            {codeNova === 3 && (
              <img
                id="nova"
                src="https://static.openfoodfacts.org/images/attributes/dist/nova-group-3.svg"
                alt="Code Nova 3"
                className="shadow-lg p-2 bg-body-tertiary rounded"
              />
            )}
            {codeNova === 2 && (
              <img
                id="nova"
                src="https://static.openfoodfacts.org/images/attributes/dist/nova-group-2.svg"
                alt="Code Nova 2"
                className="shadow-lg p-2 bg-body-tertiary rounded"
              />
            )}
            {codeNova === 1 && (
              <img
                id="nova"
                src="https://static.openfoodfacts.org/images/attributes/dist/nova-group-1.svg"
                alt="Code Nova 1"
                className="shadow-lg p-2 bg-body-tertiary rounded"
              />
            )}
            {codeNovaUnknown === "unknown" && (
              <p className="border bg-secondary p-2 rounded border-5 text-dark">
                Code Nova non disponible
              </p>
            )}
          </div>
        </div>
        <div className="col">
          <div className="fs-5 p-2">
            {huilePalme === 1 && (
              <div className="border bg-danger text-dark p-2 rounded border-5">
                <img
                  id="palm"
                  className=""
                  alt="huileDePalme"
                  src="https://static.openfoodfacts.org/images/icons/dist/palm-oil.svg"
                ></img>
                <p></p>
                Ce produit contient de l'huile de palme.
              </div>
            )}
            {huilePalme === 0 &&
              huilePalmeUnknown !== "en:palm-oil-content-unknown" && (
                <div className="border bg-success p-2 rounded border-5 text-dark">
                  <img
                    id="palm"
                    className=""
                    alt="huileDePalme"
                    src="https://static.openfoodfacts.org/images/icons/dist/palm-oil.svg"
                  ></img>
                  <p>Ce produit ne contient pas d'huile de palme.</p>
                </div>
              )}
            {huilePalme === 0 &&
              huilePalmeUnknown === "en:palm-oil-content-unknown" && (
                <div className="border bg-secondary p-2 rounded border-5 text-dark">
                  <p>Présence indéterminée</p>
                </div>
              )}

            {!huilePalme && huilePalme != 0 && (
              <div className="border bg-secondary p-2 rounded border-5 text-dark">
                <p>Présence indéterminée</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Score;
