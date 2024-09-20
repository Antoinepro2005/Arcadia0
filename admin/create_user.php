<?php
// Connexion à la base de données
$conn = new mysqli('localhost', 'root', '', 'nom_de_la_base_de_donnees');

if ($conn->connect_error) {
    die("Erreur de connexion : " . $conn->connect_error);
}

// Récupération des données du formulaire
$username = $_POST['username'];
$password = $_POST['password'];
$role_id = $_POST['role'];

// Hash du mot de passe pour la sécurité
$hashed_password = password_hash($password, PASSWORD_BCRYPT);

// Requête d'insertion de l'utilisateur
$sql = "INSERT INTO utilisateur (username, password, role_id) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $username, $hashed_password, $role_id);

if ($stmt->execute()) {
    // Si l'utilisateur est ajouté avec succès, envoyer un email
    $to = $username;
    $subject = "Votre compte a été créé";
    $message = "Votre compte a été créé avec succès. Votre nom d'utilisateur est : " . $username . "\nVeuillez contacter l'administrateur pour obtenir votre mot de passe.";
    $headers = "From: admin@votre-zoo.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi de l'email.";
    }

    echo "Utilisateur créé avec succès.";
} else {
    echo "Erreur lors de la création de l'utilisateur : " . $stmt->error;
}

$stmt->close();
$conn->close();
