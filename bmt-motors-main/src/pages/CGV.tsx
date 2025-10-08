import React from "react";

const CGV = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-6">⚙️ Conditions Générales de Vente (CGV)</h1>

        <h2 className="text-2xl font-semibold">Article 1 – Objet</h2>
        <p>
          Les présentes conditions définissent les règles applicables aux prestations proposées par BMT.MOTORS,
          notamment la réparation, l’entretien, la préparation et la vente de pièces de motos.
        </p>

        <h2 className="text-2xl font-semibold">Article 2 – Prestations</h2>
        <p>
          Les services sont réalisés dans l’atelier situé au 315 rue de Rouen, 80000 Amiens.
          Aucune vente en ligne n’est effectuée sur le site bmt-motors.fr. Les devis sont établis avant toute intervention.
        </p>

        <h2 className="text-2xl font-semibold">Article 3 – Prix et paiement</h2>
        <p>
          Les prix sont exprimés en euros TTC. Les modes de paiement acceptés sont : carte bancaire, virement ou espèces.
          Le paiement est dû à la fin de la prestation.
        </p>

        <h2 className="text-2xl font-semibold">Article 4 – Livraison et retrait</h2>
        <p>
          Les pièces commandées sont à retirer directement à l’atelier, sauf accord contraire. BMT.MOTORS n’effectue pas d’expédition.
        </p>

        <h2 className="text-2xl font-semibold">Article 5 – Droit de rétractation</h2>
        <p>
          Les prestations personnalisées ne donnent pas droit à un délai de rétractation. 
          Pour les pièces neuves non montées, un échange ou remboursement peut être envisagé sous 14 jours.
        </p>

        <h2 className="text-2xl font-semibold">Article 6 – Garanties</h2>
        <p>
          Les prestations sont couvertes par une garantie pièces et main-d’œuvre.
          Les pièces neuves bénéficient de la garantie constructeur lorsqu’elle est applicable.
        </p>

        <h2 className="text-2xl font-semibold">Article 7 – Responsabilité</h2>
        <p>
          BMT.MOTORS s’engage à exécuter les prestations avec soin. 
          Sa responsabilité ne peut être engagée en cas de mauvaise utilisation du véhicule ou d’intervention d’un tiers.
        </p>

        <h2 className="text-2xl font-semibold">Article 8 – Litiges</h2>
        <p>
          En cas de litige, une solution amiable sera recherchée. À défaut, le tribunal compétent est celui du siège de BMT.MOTORS.
        </p>

        <p className="text-gray-400 text-sm mt-6">
          Dernière mise à jour : octobre 2025
        </p>
      </div>
    </div>
  );
};

export default CGV;
