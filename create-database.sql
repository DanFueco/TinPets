CREATE DATABASE tinpets;
USE tinpets;

CREATE TABLE Proprietaire (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    motDePasse VARCHAR(255) NOT NULL
);

CREATE TABLE Animal (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    taille VARCHAR(50) NOT NULL,
    sexe VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    photo TEXT,
    caractéristiques TEXT,
    proprietaire_id INT NOT NULL,
    FOREIGN KEY (proprietaire_id) REFERENCES Proprietaire(id) ON DELETE CASCADE
);

CREATE TABLE Filtre (
    id INT PRIMARY KEY AUTO_INCREMENT,
    taille VARCHAR(50),
    sexe VARCHAR(10),
    ageMax INT,
    proprietaire_id INT NOT NULL,
    FOREIGN KEY (proprietaire_id) REFERENCES Proprietaire(id) ON DELETE CASCADE
);

CREATE TABLE Notification (
    id INT PRIMARY KEY AUTO_INCREMENT,
    message TEXT NOT NULL,
    proprietaire_id INT NOT NULL,
    FOREIGN KEY (proprietaire_id) REFERENCES Proprietaire(id) ON DELETE CASCADE
);

CREATE TABLE MatchTable (
    id INT PRIMARY KEY AUTO_INCREMENT,
    proprietaireA_id INT NOT NULL,
    proprietaireB_id INT NOT NULL,
    animalA_id INT NOT NULL,
    animalB_id INT NOT NULL,
    FOREIGN KEY (proprietaireA_id) REFERENCES Proprietaire(id) ON DELETE CASCADE,
    FOREIGN KEY (proprietaireB_id) REFERENCES Proprietaire(id) ON DELETE CASCADE,
    FOREIGN KEY (animalA_id) REFERENCES Animal(id) ON DELETE CASCADE,
    FOREIGN KEY (animalB_id) REFERENCES Animal(id) ON DELETE CASCADE,
    CONSTRAINT proprietaires_distincts CHECK (proprietaireA_id <> proprietaireB_id),
    CONSTRAINT animaux_distincts CHECK (animalA_id <> animalB_id)
);

CREATE TABLE Message (
    id INT PRIMARY KEY AUTO_INCREMENT,
    texte TEXT NOT NULL,
    expediteur_id INT NOT NULL,
    destinataire_id INT NOT NULL,
    match_id INT NOT NULL,
    FOREIGN KEY (expediteur_id) REFERENCES Proprietaire(id) ON DELETE CASCADE,
    FOREIGN KEY (destinataire_id) REFERENCES Proprietaire(id) ON DELETE CASCADE,
    FOREIGN KEY (match_id) REFERENCES MatchTable(id) ON DELETE CASCADE,
    CONSTRAINT exp_dest_distincts CHECK (expediteur_id <> destinataire_id)
);
