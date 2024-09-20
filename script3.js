// Fonction pour afficher les animaux lorsqu'on clique sur un habitat
function showAnimals(habitat) {
    const animals = animalsByHabitat[habitat];
    const animalCardsContainer = document.getElementById('animal-cards-container');
    animalCardsContainer.innerHTML = ''; // Clear previous animals

    animals.forEach(animal => {
        const card = document.createElement('div');
        card.classList.add('animal-card');
        card.onclick = () => showAnimalDetails(animal);

        card.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <h3>${animal.name}</h3>
        `;

        animalCardsContainer.appendChild(card);
    });

    document.getElementById('animals-container').style.display = 'block';
}

// Fonction pour afficher les détails des animaux
function showAnimalDetails(animal) {
    const modal = document.getElementById('animal-modal');
    const animalDetails = document.getElementById('animal-details');

    animalDetails.innerHTML = `
        <h2>${animal.name}</h2>
        <img src="${animal.image}" alt="${animal.name}">
        <p>${animal.description}</p>
    `;

    modal.style.display = 'block';
}

//


// Liste des animaux par habitat avec des détails supplémentaires
const animalsByHabitat = {
    savane: [
        {
            name: 'Leon',
            race: 'Panthera leo',
            age: 8,
            problemes_sante: 'Aucun',
            nourriture: '5 kg de viande par jour',
            date_veto: '12/09/2023',
            avis_veterinaire: 'Bonne santé',
            image: 'lion 3.jpg',
            description: 'Le roi de la savane'
        },
        {
            name: 'Dumbo',
            race: 'Loxodonta africana',
            age: 25,
            problemes_sante: 'Douleur aux articulations',
            nourriture: '150 kg de plantes par jour',
            date_veto: '03/09/2023',
            avis_veterinaire: 'Surveillance nécessaire',
            image: 'eléphant.jpg',
            description: 'Le géant de la savane'
        }
    ],
    foret_tropicale: [
        {
            name: 'Riy',
            race: 'Panthera onca',
            age: 5,
            problemes_sante: 'Aucun',
            nourriture: '2 kg de viande par jour',
            date_veto: '21/08/2023',
            avis_veterinaire: 'En bonne santé',
            image: 'jaguar.jpg',
            description: 'Chasseur silencieux'
        },
        {
            name: 'Eister',
            race: 'Ramphastos toco',
            age: 3,
            problemes_sante: 'Aucun',
            nourriture: '300g de fruits par jour',
            date_veto: '15/08/2023',
            avis_veterinaire: 'Aucun problème',
            image: 'toucan.jpg',
            description: 'Oiseau coloré'
        }
    ],
    desert: [
        {
            name: 'Camelos',
            race: 'Camelus dromedarius',
            age: 12,
            problemes_sante: 'Problème de peau',
            nourriture: '10 kg de plantes par jour',
            date_veto: '30/08/2023',
            avis_veterinaire: 'Traitement de la peau en cours',
            image: 'chameau.jpg',
            description: 'Survivant du désert'
        },
        {
            name: 'Fennec',
            race: 'Vulpes zerda',
            age: 4,
            problemes_sante: 'Aucun',
            nourriture: '200g d’insectes par jour',
            date_veto: '02/09/2023',
            avis_veterinaire: 'Bonne santé',
            image: 'fenec.jpg',
            description: 'Renard des sables'
        }
    ],
    ocean: [
        {
            name: 'Echo',
            race: 'Delphinus delphis',
            age: 10,
            problemes_sante: 'Aucun',
            nourriture: '5 kg de poissons par jour',
            date_veto: '11/09/2023',
            avis_veterinaire: 'Excellente santé',
            image: 'dauphin.jpg',
            description: 'Mammifère intelligent'
        },
        {
            name: 'Omos',
            race: 'Carcharodon carcharias',
            age: 20,
            problemes_sante: 'Problème dentaire',
            nourriture: '15 kg de viande par jour',
            date_veto: '01/09/2023',
            avis_veterinaire: 'Dent en traitement',
            image: 'phoque.jpg',
            description: 'Prédateur des océans'
        }
    ]
};

// Fonction pour afficher les détails des animaux, y compris la race, l'âge, et les autres informations
function showAnimalDetails(animal) {
    const modal = document.getElementById('animal-modal');
    const animalDetails = document.getElementById('animal-details');

    animalDetails.innerHTML = `
        <h2>${animal.name}</h2>
        <img src="${animal.image}" alt="${animal.name}" style="width: 300px; height: auto;">
        <p><strong>Race :</strong> ${animal.race}</p>
        <p><strong>Âge :</strong> ${animal.age} ans</p>
        <p><strong>Problèmes de santé :</strong> ${animal.problemes_sante}</p>
        <p><strong>Nourriture :</strong> ${animal.nourriture}</p>
        <p><strong>Date du dernier passage chez le vétérinaire :</strong> ${animal.date_veto}</p>
        <p><strong>Avis du vétérinaire :</strong> ${animal.avis_veterinaire}</p>
        <p>${animal.description}</p>
    `;

    modal.style.display = 'block';
}

// Fonction pour fermer le modal
function closeAnimalDetails() {
    document.getElementById('animal-modal').style.display = 'none';
}
