// data/scenes.js

export const scenes = [
  {
    id: 'scene-1',
    title: 'Le Bureau Sombre',
    description: 'Vous vous trouvez dans un bureau plongé dans la pénombre. Une seule lampe de bureau projette une faible lumière sur un désordre apparent.',
    clues: [
      { id: 'clue-1', text: 'Un stylo rouge renversé près d\'un document déchiré.' },
      { id: 'clue-2', text: 'Une empreinte digitale sur le rebord de la fenêtre.' },
    ],
    puzzle: {
      type: 'logic',
      description: 'Sur le document déchiré, vous voyez des chiffres : 3, 7, ?. Quelle est la suite logique ?',
      solution: '11',
      successMessage: 'La porte semble s\'être déverrouillée !',
      failureMessage: 'Ce n\'est pas la bonne combinaison.'
    },
    nextScene: 'scene-2'
  },
  {
    id: 'scene-2',
    title: 'Le Couloir Secret',
    description: 'Le bureau s\'ouvre sur un couloir étroit et faiblement éclairé.',
    clues: [
      { id: 'clue-3', text: 'Une étrange marque sur le mur, comme une griffe.' }
    ],
    puzzle: {
      type: 'text',
      description: 'Sur le mur, des lettres semblent avoir été griffées : "S U I V R E L E ...". Quel mot manque ?',
      solution: 'CHAT',
      successMessage: 'Vous remarquez une porte cachée derrière une étagère !',
      failureMessage: 'Ce n\'est pas ça...'
    },
    nextScene: 'scene-3'
  },
  {
    id: 'scene-3',
    title: 'La Bibliothèque Ancienne',
    description: 'Des étagères remplies de livres poussiéreux s\'étendent jusqu\'au plafond.',
    clues: [
      { id: 'clue-4', text: 'Un livre sorti de sa place avec un signet en cuir.' }
    ],
    puzzle: {
      type: 'logic',
      description: 'Le signet indique les pages 12, 26, 40. Quelle sera la prochaine page logique ?',
      solution: '54',
      successMessage: 'Un compartiment secret s\'ouvre dans l\'étagère !',
      failureMessage: 'Ce n\'est pas le bon nombre.'
    },
    nextScene: 'scene-4'
  },
  {
    id: 'scene-4',
    title: 'Le Laboratoire Oublié',
    description: 'Des fioles et des instruments scientifiques rouillés jonchent les tables.',
    clues: [
      { id: 'clue-5', text: 'Une note griffonnée : "Mélanger A et C pour la réaction".' }
    ],
    puzzle: {
      type: 'text',
      description: 'Sur une étiquette, on lit : "Si l\'eau bout à 100°C et le mercure à 357°C, à quelle température gèle l\'azote liquide ?"',
      solution: '-210',
      successMessage: 'Un gaz étrange s\'échappe d\'un bécher !',
      failureMessage: 'Ce n\'est pas la bonne température.'
    },
    nextScene: 'scene-5'
  },
  {
    id: 'scene-5',
    title: 'Le Jardin Hanté',
    description: 'Des roses noires grimpent sur des statues brisées sous un ciel spectral.',
    clues: [
      { id: 'clue-6', text: 'Un médaillon argenté portant les initiales "E.R.".' }
    ],
    puzzle: {
      type: 'logic',
      description: 'Comptez les pétales de chaque rose : 5, 8, 13, ?. Combien y en a-t-il ensuite ?',
      solution: '21',
      successMessage: 'Une tombe s\'ouvre légèrement !',
      failureMessage: 'Ce n\'est pas le bon nombre.'
    },
    nextScene: 'scene-6'
  },
  {
    id: 'scene-6',
    title: 'La Cuisine Démantelée',
    description: 'Des casseroles renversées et des aliments éparpillés sur le sol carrelé.',
    clues: [
      { id: 'clue-7', text: 'Un message écrit avec de la farine sur le plan de travail : "Cherchez l\'heure".' }
    ],
    puzzle: {
      type: 'logic',
      description: 'Une horloge cassée affiche les aiguilles sur 3 et 12. Quel angle forment-elles ?',
      solution: '90',
      successMessage: 'Un tiroir secret s\'ouvre avec un clic !',
      failureMessage: 'Ce n\'est pas le bon angle.'
    },
    nextScene: 'scene-7'
  },
  {
    id: 'scene-7',
    title: 'Le Salon des Portraits',
    description: 'Des regards fixes vous suivent depuis les murs où sont accrochés de vieux portraits.',
    clues: [
      { id: 'clue-8', text: 'Un portrait légèrement de travers révèle une inscription cachée derrière.' }
    ],
    puzzle: {
      type: 'text',
      description: 'L\'inscription dit : "Le premier suit le second, qui précède le troisième". Quel est le premier ?',
      solution: 'DEUX',
      successMessage: 'Les yeux d\'un portrait s\'illuminent !',
      failureMessage: 'Ce n\'est pas la bonne réponse.'
    },
    nextScene: 'scene-8'
  },
  {
    id: 'scene-8',
    title: 'La Cave à Vin Poussiéreuse',
    description: 'Des bouteilles de vin recouvertes de toiles d\'araignées reposent sur des étagères en bois.',
    clues: [
      { id: 'clue-9', text: 'Une bouteille étiquetée avec une année inhabituelle : "MDCCLXXVI".' }
    ],
    puzzle: {
      type: 'logic',
      description: 'MDCCLXXVI en chiffres romains, quelle année est-ce ?',
      solution: '1776',
      successMessage: 'Un passage secret s\'ouvre derrière une étagère à vin !',
      failureMessage: 'Ce n\'est pas la bonne année.'
    },
    nextScene: 'scene-9'
  }
];

export function getSceneById(id) {
  return scenes.find((scene) => scene.id === id);
}
