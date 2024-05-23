import React, { useState } from "react";
import Banner from "./Banner";
import TitreProduit from "./TitreProduit";
import PhotoInfo from "./Photo&Info";
import Score from "./Score";
import Allergenes from "./Allergenes";
import InfoFooter from "./InfoFooter";
import Footer from "./Footer";
import "animate.css";
// Définition du composant App
function App() {
  // Déclaration des variables d'état
  const [codeBarre, setCodeBarre] = useState(""); // Code-barres entré par l'utilisateur
  const [productInfo, setProductInfo] = useState(null); // Informations du produit
  const [error, setError] = useState(null); // Erreurs éventuelles

  // Fonction appelée à chaque changement dans le champ de saisie du code-barres
  const handleChange = (event) => {
    setCodeBarre(event.target.value);
  };

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

    setError(null); // Réinitialise la variable d'état des erreurs

    try {
      // Effectue une requête à l'API Open Food Facts pour obtenir les informations du produit
      const response = await fetch(
        `https://world.openfoodfacts.org/api/v0/product/${codeBarre}.json`
      );

      // Vérifie si la réponse de l'API est correcte
      if (!response.ok) {
        throw new Error("Produit non trouvé."); // Lance une erreur si le produit n'est pas trouvé
      }

      // Récupère les données renvoyées par l'API au format JSON
      const data = await response.json();

      // Met à jour l'état des informations du produit avec les données récupérées
      setProductInfo(data.product);
    } catch (error) {
      // En cas d'erreur lors de la requête à l'API, met à jour l'état des erreurs avec le message d'erreur correspondant
      setError(error.message);
    }
  };

  return (
    <div id="body">
      <Banner />
      <div id="recherche" className="  text-center col-md-11 m-auto my-4">
        <form className="col-11 m-auto p-2" onSubmit={handleSubmit}>
          <input
            data-testid="search-input"
            className="text-center"
            type="text"
            value={codeBarre}
            onChange={handleChange}
            placeholder="Entrez un code-barres"
          />
          <br />
          <button id="bouton" className="btn m-2" type="submit">
            <b>Rechercher</b> <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        {error && <p>{error}</p>}
        {/* Passer productInfo en tant que prop aux composants qui en ont besoin */}
        {productInfo && (
          <TitreProduit
            productName={
              productInfo.product_name_en ||
              productInfo.product_name ||
              productInfo.product_name_pl
            }
            infoBrand={productInfo.brands}
            barreCode={productInfo.id}
          />
        )}
        {/* Passer productInfo à d'autres composants */}
        {productInfo && (
          <PhotoInfo
            bio={productInfo.labels_hierarchy?.[0] ?? "Bio par défaut"}
            vege={productInfo.labels_hierarchy?.[1] ?? "Végétarien par défaut"}
            photo={productInfo?.image_front_url}
            categorie={productInfo?.food_groups?.split(/en:|fr:/)}
            ingredient={
              productInfo?.ingredients_text_fr || productInfo?.ingredients_text
            }
            quantity={productInfo.quantity}
            nutritionEnergy={productInfo.nutriments.energy}
            energyPortion={productInfo.nutriments.energy_serving}
            fat={productInfo.nutriments.fat_100g}
            fatPortion={productInfo.nutriments.fat_serving}
            saturatedFat={productInfo.nutriments["saturated-fat"]}
            saturatedFatPortion={
              productInfo.nutriments["saturated-fat_serving"]
            }
            glucide={productInfo.nutriments.carbohydrates}
            glucidePortion={productInfo.nutriments.carbohydrates_serving}
            sugars={productInfo.nutriments.sugars}
            sugarsPortion={productInfo.nutriments.sugars_serving}
            fiber={productInfo.nutriments.fiber}
            fiberPortion={productInfo.nutriments.fiber_serving}
            proteins={productInfo.nutriments.proteins}
            proteinsPortion={productInfo.nutriments.proteins_serving}
            salt={productInfo.nutriments.salt}
            saltPortion={productInfo.nutriments.salt_serving}
            servingSize={productInfo.serving_size}
            packaging={
              productInfo?.packaging_old?.split(/en:|fr:|pt:/) ||
              productInfo?.packaging?.split(/en:|fr:|pt:/)
            }
          />
        )}
        {productInfo && (
          <Score
            nutriscore={
              productInfo?.nutriscore_2023_tags[0] ||
              productInfo?.nutriscore_2023_tags.category_available
            }
            codeNova={productInfo.nova_group}
            codeNovaUnknown={productInfo.nova_groups_tags[0]}
            huilePalme={productInfo.ingredients_from_palm_oil_n}
            huilePalmeUnknown={
              productInfo?.ingredients_analysis_tags &&
              productInfo.ingredients_analysis_tags.length > 0
                ? productInfo.ingredients_analysis_tags[0]
                : ""
            }
          />
        )}
        {productInfo && (
          <Allergenes
            allergene={
              productInfo?.allergens_from_ingredients.split(/en:|fr:/) ||
              productInfo?.allergens.split(/en:|fr:/)
            }
          />
        )}
        {productInfo && (
          <InfoFooter
            store={productInfo.stores}
            fabriquant={productInfo.manufacturing_places}
            quantite={productInfo.quantity}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
