function PhotoInfo({
  photo,
  ingredient,
  packaging,
  nutritionEnergy,
  energyPortion,
  fat,
  fatPortion,
  glucide,
  glucidePortion,
  fiber,
  fiberPortion,
  proteins,
  proteinsPortion,
  saltPortion,
  salt,
  servingSize,
  quantity,
  saturatedFat,
  saturatedFatPortion,
  sugars,
  sugarsPortion,
  categorie,
  bio,
  vege,
}) {
  return (
    <div id="photoInfo" className="my-3 fs-5 col-md-11 m-auto p-3">
      <div className="row">
        <div className="col animate__animated animate__bounceInLeft">
          <div id="img" className="p-2 ">
            {" "}
            {bio === "en:organic" && (
              <img
                id="bio"
                src="https://spi-etiquetage.com/999-home_default/etiquette-rond-artisan-d385.jpg"
                alt="bio"
              />
            )}
            {vege === "en:vegetarian" && (
              <img
                id="vege"
                src="https://fr.openfoodfacts.org/images/lang/en/labels/european-vegetarian-union.90x90.svg"
                alt="bio"
              />
            )}
            <img
              className=""
              src={
                photo ||
                "https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg"
              }
              alt="non disponible"
            />
          </div>
        </div>
        <div className="col align-self-center">
          <div
            id="infoCarre"
            className="text-start p-2 animate__animated animate__bounceInRight"
          >
            <p id="info">
              <i class="fa-solid fa-utensils"></i>{" "}
              <u>
                <b>Ingredients:</b>
              </u>
              &nbsp;
              {!ingredient && " Information non disponible"}
              {ingredient} <br></br>
              <br></br>
              <i class="fa-solid fa-weight-scale"></i>
              &nbsp;
              <u>
                <b>Quantité:</b>
              </u>{" "}
              {!quantity && "Information non disponible"}
              {quantity}
              <br></br>
              <br></br> <i class="fa-solid fa-box"></i>&nbsp;{" "}
              <u>
                <b>Conditionnement:</b>
              </u>
              &nbsp; {!packaging && "Information non disponible"}
              {packaging}
              {packaging == "" && "Information non disponible"}
              <br></br>
              <br></br>
              <i class="fa-solid fa-list"></i>&nbsp;
              <u>
                <b>Catégories:</b>
              </u>{" "}
              {!categorie && "Information non disponible"}
              {categorie}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="w-100">
          <div>
            <div className="p-2">
              <table className="table-danger animate__animated animate__backInUp animate__delay-1s">
                <thead>
                  <tr>
                    <th scope="col">Tableau nutritionnel </th>
                    <th scope="col">Pour 100 g / 100 ml</th>
                    <th scope="col">Par portion: {servingSize}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Énergie </th>
                    <td>
                      {" "}
                      {!nutritionEnergy &&
                        nutritionEnergy != 0 &&
                        "Non disponible"}
                      {nutritionEnergy && nutritionEnergy + " kj"}
                    </td>
                    <td>
                      {!energyPortion && "Non disponible"}
                      {energyPortion && energyPortion + " kj"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"> Matières grasses </th>
                    <td>
                      {!fat && fat != 0 && "Non disponible"}
                      {fat && fat + " g"}
                    </td>
                    <td>
                      {!fatPortion && fatPortion != 0 && "Non disponible"}
                      {fatPortion && fatPortion + " g"}
                    </td>
                  </tr>
                  <tr>
                    <th className="fst-italic" scope="row">
                      &nbsp;&nbsp;dont Acides gras saturés{" "}
                    </th>
                    <td>
                      {!saturatedFat && saturatedFat != 0 && "Non disponible"}
                      {saturatedFat && saturatedFat + " g"}
                    </td>
                    <td>
                      {!saturatedFatPortion &&
                        saturatedFatPortion != 0 &&
                        "Non disponible"}{" "}
                      {saturatedFatPortion && saturatedFatPortion + " g"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Glucides</th>
                    <td>
                      {!glucide && glucide != 0 && "Non disponible"}
                      {glucide && glucide + " g"}
                    </td>
                    <td>
                      {!glucidePortion &&
                        glucidePortion != 0 &&
                        "Non disponible"}{" "}
                      {glucidePortion && glucidePortion + " g"}
                    </td>
                  </tr>
                  <tr>
                    <th className="fst-italic" scope="row">
                      &nbsp;&nbsp;dont Sucres
                    </th>
                    <td>
                      {!sugars && sugars != 0 && "Non disponible"}
                      {sugars && sugars + " g"}{" "}
                    </td>
                    <td>
                      {!sugarsPortion && sugarsPortion != 0 && "Non disponible"}
                      {sugarsPortion && sugarsPortion + " g"}{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Fibres alimentaires</th>
                    <td>
                      {!fiber && fiber != 0 && "Non disponible"}
                      {fiber && fiber + " g"}{" "}
                    </td>
                    <td>
                      {!fiberPortion && fiberPortion != 0 && "Non disponible"}
                      {fiberPortion && fiberPortion + " g"}{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Protéines</th>
                    <td>
                      {!proteins && proteins != 0 && "Non disponible"}
                      {proteins && proteins + " g"}{" "}
                    </td>
                    <td>
                      {!proteinsPortion &&
                        proteinsPortion != 0 &&
                        "Non disponible"}
                      {proteinsPortion && proteinsPortion + " g"}{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Sel</th>
                    <td>
                      {!salt && salt != 0 && "Non disponible"}{" "}
                      {salt && salt + " g"}{" "}
                    </td>
                    <td>
                      {!saltPortion && saltPortion != 0 && "Non disponible"}
                      {saltPortion && saltPortion + " g"}{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoInfo;
