// Fichier : src/App.tsx

import Header from './components/Header'; // <-- On importe notre nouveau composant

function App() {
  return (
    // Le div principal avec une couleur de fond grise
    <div className="bg-gray-100 min-h-screen">

      <Header /> {/* <-- On utilise notre composant ici */}

      <main className="p-4">
        <p className="text-center text-gray-500">
          Ici, nous afficherons bientôt le solde et la liste des transactions.
        </p>
      </main>

    </div>
  )
}

export default App;