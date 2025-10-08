import React from "react";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-6">🧾 Mentions légales</h1>

        <p>
          <strong>BMT.MOTORS</strong><br />
          Auto-entreprise enregistrée sous le numéro SIRET 888 462 843 00028<br />
          Siège social : 315 rue de Rouen, 80000 Amiens, France<br />
          Téléphone : 07 65 64 60 88<br />
          E-mail : bmt.motors80@gmail.com<br />
          Responsable de la publication : BMT.MOTORS
        </p>

        <h2 className="text-2xl font-semibold">Hébergement du site</h2>
        <p>
          Le site bmt-motors.fr est hébergé par IONOS,<br />
          7 place de la Gare, BP 70109, 57201 Sarreguemines Cedex, France<br />
          Téléphone : 09 70 80 89 11<br />
          Site web : <a href="https://www.ionos.fr" className="text-red-500 hover:underline">www.ionos.fr</a>
        </p>

        <h2 className="text-2xl font-semibold">Activité</h2>
        <p>
          BMT.MOTORS propose des services de réparation, d’entretien et de préparation de motos,
          ainsi que la vente de pièces détachées pour motos.
        </p>

        <h2 className="text-2xl font-semibold">Propriété intellectuelle</h2>
        <p>
          L’ensemble du contenu du site (textes, images, logos, etc.) est la propriété exclusive de BMT.MOTORS.
          Toute reproduction ou utilisation sans autorisation est interdite.
        </p>

        <h2 className="text-2xl font-semibold">Limitation de responsabilité</h2>
        <p>
          BMT.MOTORS met tout en œuvre pour fournir des informations exactes sur le site,
          mais ne peut être tenue responsable d’erreurs, d’omissions ou de problèmes techniques.
          Le site peut contenir des liens vers d’autres sites dont le contenu n’est pas sous notre responsabilité.
        </p>

        <p className="text-gray-400 text-sm mt-6">
          Dernière mise à jour : octobre 2025
        </p>
      </div>
    </div>
  );
};

export default MentionsLegales;
