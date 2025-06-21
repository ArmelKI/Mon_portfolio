```markdown
# 🌐 Portfolio de Armel Stéphane Novak KI

Bienvenue sur mon portfolio personnel. Il a pour objectif de présenter mes projets, certifications, compétences techniques ainsi qu’un système d’administration en temps réel avec des fonctionnalités dynamiques.

---

## 🧩 Fonctionnalités principales

- **📄 Pages dynamiques :** expériences, certifications, compétences, contact
- **🗂️ Système de certifications :**
  - Filtrage par catégorie (IA, Data, Cyber, etc.)
  - Ajout de fichier PDF téléchargeable (certificat)
  - Lien de vérification vers les plateformes (Coursera, Udemy…)
- **🧑‍💻 Espace admin sécurisé :**
  - Ajout de certifications
  - Upload de CV et documents
  - Suppression, filtrage, gestion dynamique
- **📨 Formulaire de contact :**
  - Envoi d’un message personnalisé
  - Upload facultatif d’un fichier
  - Réception directe dans ma boîte Gmail via Nodemailer
- **📬 Notifications automatiques** à chaque upload
- **🎨 Design responsive** avec **dark mode** natif

---

## 🛠️ Technologies utilisées

### Front-End
- React.js
- Tailwind CSS
- Formspree / Fetch
- React Icons
- Framer Motion (optionnel)

### Back-End
- Node.js + Express
- Nodemailer (e-mail automatique)
- Multer (upload de fichiers)
- Stockage local (`/uploads`)
- Système CRUD sur fichier JSON

---

## 🚀 Lancer le projet en local

### 📦 Installation

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### ▶️ Lancer le projet

```bash
# Backend (port 5000)
cd server
npm run dev

# Frontend (port 3000)
cd ../client
npm start
```

Puis accéder à :
- 🖥️ Frontend : http://localhost:3000
- 🧠 API : http://localhost:5000/api/certifications

---

## 📁 Arborescence rapide

```
client/
│
├─ pages/
│   ├─ Certifications.jsx
│   ├─ Skills.jsx
│   └─ Contact.jsx
│
├─ components/
│   ├─ AdminCertifications.jsx
│   ├─ AdminFichiers.jsx
│   └─ TechIcon.jsx

server/
├─ routes/
│   └─ certifications.js
├─ uploads/
├─ data/
│   └─ certifications.json
└─ server.js
```

---

## 📬 Me contacter

- 📧 Email : kiarmelstephanenovak@gmail.com
- 🌍 Site : [à venir…]

> Certaines routes (admin, upload) sont restreintes pour des raisons de sécurité.
> Un accès temporaire peut être fourni pour la démo.

---

## 📌 À venir

- Authentification pour l’interface admin
- Connexion à une base MongoDB
- Déploiement sur Render / Vercel

---

✨ Merci d’avoir exploré mon univers de développeur passionné !
```

---

