import React from "react";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-6">🔐 Politique de Confidentialité</h1>

        <h2 className="text-2xl font-semibold">Collecte et utilisation des données</h2>
        <p>
          Le site bmt-motors.fr ne collecte pas de données personnelles directement via des formulaires ou comptes clients.
          Si vous nous contactez par e-mail ou par téléphone, nous utilisons uniquement les informations que vous nous fournissez
          (nom, téléphone, e-mail) pour répondre à votre demande.
        </p>

        <h2 className="text-2xl font-semibold">Responsable du traitement</h2>
        <p>
          BMT.MOTORS – 315 rue de Rouen, 80000 Amiens – bmt.motors80@gmail.com
        </p>

        <h2 className="text-2xl font-semibold">Conservation et partage des données</h2>
        <p>
          Les données échangées sont conservées uniquement le temps nécessaire au suivi de la demande, puis supprimées.
          Aucune donnée n’est transmise à des tiers ni utilisée à des fins commerciales.
        </p>

        <h2 className="text-2xl font-semibold">Cookies</h2>
        <p>
          Le site ne dépose pas de cookies de suivi ou de mesure d’audience. 
          Seuls des cookies techniques peuvent être utilisés par l’hébergeur (IONOS).
        </p>

        <h2 className="text-2xl font-semibold">Vos droits</h2>
        <p>
          Conformément au RGPD, vous pouvez à tout moment demander l’accès, la modification ou la suppression de vos données
          en écrivant à : <span className="text-red-500">bmt.motors80@gmail.com</span>.
          Vous pouvez aussi déposer une réclamation auprès de la CNIL.
        </p>

        <p className="text-gray-400 text-sm mt-6">
          Dernière mise à jour : octobre 2025
        </p>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
