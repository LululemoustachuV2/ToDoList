# ✅ ToDoList - Ligne de Commande

## 📦 Prérequis

Avant de lancer le projet, assurez-vous d’avoir installé sur votre machine :

- ⚙️ **Node.js** (version recommandée : 18+)
- 📦 **NPM**
- 🛠️ **Angular CLI** (`@angular/cli`)
- 🧱 **NestJS CLI** (`@nestjs/cli`)
- 🗄️ **MongoDB** (via Atlas)

---

## 🗂️ Structure du projet

```bash
ToDoList/
├── back_nest-js/      # Backend en NestJS
└── front_angular/     # Frontend en Angular
```

---

## 🔍 Description

**ToDoList** est une application web de gestion de tâches réalisée en **Angular** (front) et **NestJS + MongoDB** (back).  
Projet réalisé dans le cadre d’un mini-projet d'alternance.

---

## 🧠 Stack Technique

- 💻 **Frontend** : Angular
- 🧠 **Backend** : NestJS
- 💾 **Base de données** : MongoDB (cloud)
- 🔗 **ORM** : Mongoose
- 📝 **Langage** : TypeScript

---

## 🚀 Lancer l'application

> 🧭 Cloner le repo et placez-vous à la racine du projet.

### 1️⃣ Configuration initiale

Créez un fichier `.env` dans le dossier `back_nest-js/` avec la variable que je vous fournirai.

⚠️ **Attention** : ne pas oublier le `.` devant `.env`, sinon NestJS ne le chargera pas.

---

### 2️⃣ Démarrage du backend (NestJS)

```bash
cd ToDoList/back_nest-js
npm install
npm run start:dev
```

Si vous avez des problèmes :

```bash
npm install -g @nestjs/cli
npm install @nestjs/mongoose mongoose
npm install @nestjs/config
```

---

### 3️⃣ Démarrage du frontend (Angular)

Dans un autre terminal :

```bash
cd ToDoList/front_angular
npm install
ng serve
```

Puis ouvrez votre navigateur à l’adresse :  
👉 [http://localhost:4200](http://localhost:4200)

---

## 🧪 Fonctionnalités

- ➕ Ajouter / ✏️ Modifier / 🗑️ Supprimer une tâche
- ✅ Marquer une tâche comme complétée
- 🔍 Filtrer les tâches : actives / complétées / toutes
- 🧠 Recherche en temps réel via barre de recherche
- 📋 Formulaire réactif (**ReactiveForms**)
- 🔄 Interaction temps réel avec l’API **NestJS**

---

## 🛠️ Dépendances principales

### Backend :
- `@nestjs/core`
- `@nestjs/mongoose`
- `@nestjs/config`
- `mongoose`

### Frontend :
- `@angular/forms`
- `@angular/common/http`
- `rxjs`

---

## 🏗️ Détails structure

```bash
ToDoList/
├── back_nest-js/      
│   ├── src/
│   ├── .env
│   └── ...
├── front_angular/     
│   ├── src/
│   └── ...
```

---

## ✨ Bonus

- ✅ **Code propre et modulaire**
- 📦 Bonnes pratiques Angular : services, composants, reactive forms
- 🔄 **Séparation claire front / back**
- 💬 **Commentaires explicites**
- 🖥️ UI/UX clair, moderne et fonctionnel

---

## 🙌 Auteur

Projet réalisé par **Lukas Marquis**
