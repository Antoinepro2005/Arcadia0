let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds

}

function showDetails(habitat) {
    const modal = document.getElementById('details-modal');
    const modalBody = document.getElementById('modal-body');

    const habitats = {
        savane: {
            title: 'Savane',
            description: 'Découvrez les animaux de la savane africaine.',
            animals: ['Lion', 'Éléphant', 'Girafe', 'Zèbre']
        },
        foret_tropicale: {
            title: 'Forêt Tropicale',
            description: 'Explorez la biodiversité des forêts tropicales.',
            animals: ['Jaguar', 'Toucan', 'Singe hurleur', 'Paresseux']
        },
        desert: {
            title: 'Désert',
            description: 'Rencontrez les espèces vivant dans les déserts arides.',
            animals: ['Chameau', 'Fennec', 'Scorpion', 'Serpent à sonnette']
        },
        ocean: {
            title: 'Océan',
            description: 'Plongez dans les profondeurs de l\'océan et ses mystères.',
            animals: ['Dauphin', 'Requin', 'Méduse', 'Poisson-clown']
        }
        // Ajoutez plus d'habitats ici
    };

    const habitatDetails = habitats[habitat];
    modalBody.innerHTML = `
        <h2>${habitatDetails.title}</h2>
        <p>${habitatDetails.description}</p>
        <h3>Animaux</h3>
        <ul>
            ${habitatDetails.animals.map(animal => `<li>${animal}</li>`).join('')}
        </ul>
    `;

    modal.style.display = 'block';
}

function closeDetails() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';
}
