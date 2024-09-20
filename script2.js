let currentRating = 0;

// Gestion de la sélection des étoiles
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
        currentRating = this.getAttribute('data-value');
        document.querySelectorAll('.star').forEach((s, index) => {
            s.style.color = index < currentRating ? 'gold' : 'gray';
        });
    });
});

function savePseudo() {
    const pseudo = document.getElementById('pseudo').value.trim();
    if (pseudo === "") {
        alert("Veuillez entrer un pseudo.");
        return;
    }
    localStorage.setItem('pseudo', pseudo);
    alert("Pseudo enregistré : " + pseudo);
}

function addComment() {
    const commentText = document.getElementById('commentText').value.trim();
    const pseudo = localStorage.getItem('pseudo') || "Anonyme";

    if (commentText === "") {
        alert("Veuillez entrer un commentaire.");
        return;
    }

    if (currentRating === 0) {
        alert("Veuillez sélectionner une note.");
        return;
    }

    const commentContainer = document.createElement('div');
    commentContainer.className = 'comment';

    const starContainer = document.createElement('div');
    starContainer.className = 'comment-rating';
    for (let i = 0; i < currentRating; i++) {
        starContainer.innerHTML += '★';
    }
    for (let i = currentRating; i < 5; i++) {
        starContainer.innerHTML += '☆';
    }

    const textContainer = document.createElement('p');
    textContainer.innerHTML = `<strong>${pseudo}:</strong> ${commentText}`;

    commentContainer.appendChild(starContainer);
    commentContainer.appendChild(textContainer);

    document.getElementById('comments').appendChild(commentContainer);

    // Réinitialiser le formulaire
    document.getElementById('commentText').value = '';
    document.querySelectorAll('.star').forEach(s => s.style.color = 'gray');
    currentRating = 0;
}

// Fonction pour trier les commentaires par nombre d'étoiles
function sortCommentsByRating() {
    const comments = Array.from(document.querySelectorAll('.comment'));
    comments.sort((a, b) => {
        const ratingA = a.querySelector('.comment-rating').textContent.split('★').length - 1;
        const ratingB = b.querySelector('.comment-rating').textContent.split('★').length - 1;
        return ratingB - ratingA;
    });
    const commentsContainer = document.getElementById('comments');
    commentsContainer.innerHTML = '';
    comments.forEach(comment => commentsContainer.appendChild(comment));
}
