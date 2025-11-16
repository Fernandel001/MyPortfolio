import React from 'react';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "React Markdown",
      description: 
`Éditeur Markdown complet en temps réel, conçu pour offrir une expérience 
d'écriture fluide et intuitive. Grâce à une prévisualisation instantanée, 
l’utilisateur voit son contenu prendre forme au fur et à mesure. 
L’interface, bâtie avec ReactJS, combine performance, simplicité et 
ergonomie pour transformer le markdown brut en un rendu HTML propre, 
soigné et parfaitement lisible.`,
      githubUrl: "https://rmarkdownedito.netlify.app/"
    },
    {
      title: "Sudoku JS",
      description:
`Générateur et résolveur de Sudoku entièrement codé en JavaScript, avec 
une interface interactive pensée pour les joueurs curieux comme pour les 
passionnés. L'algorithme de backtracking, optimisé pour la vitesse, permet 
de résoudre instantanément même les grilles les plus complexes. 
Le tout est présenté dans une interface claire, moderne et agréable.`
,
      githubUrl: "https://fernandel001.github.io/Sudoku/"
    },
    {
      title: "Explainet AI – NASA Space Apps Challenge",
      description:
`Application éducative et immersive développée dans le cadre du NASA Space 
Apps Challenge. Elle utilise l’intelligence artificielle pour analyser et 
interpréter les données spatiales en temps réel, permettant d’identifier 
des exoplanètes de manière intuitive. Le projet combine science, design et 
technologie pour rendre compréhensible un domaine souvent jugé complexe.`
,
      githubUrl: "https://exoplanet-ai-584i.vercel.app/"
    }
  ];

  return (
   <section className="min-h-screen bg-gradient-to-br from-orange-600 via-pink-600 to-purple-700 py-20 px-6 text-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center drop-shadow-lg">
      Projets récents
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 flex flex-col border border-white/20 hover:bg-white/20 transition-all"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
          <p className="text-white/80 mb-6 flex-grow">{project.description}</p>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors text-center"
          >
            Voir le projet
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Projects;