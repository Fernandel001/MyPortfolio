import React from 'react';
const imageURL='https://plus.unsplash.com/premium_photo-1677109899683-9d449c66d9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG9yYW5nZSUyMHBob25lc3xlbnwwfHwwfHx8MA%3D%3D'

const Introduction: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center  bg-center justify-center bg-cover text-white px-6 bg-no-repeat" style={{backgroundImage:`url(${imageURL})`}}>
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">BONI Wéri N'doissi</h1>
        <p className="text-2xl md:text-3xl text-slate-400 mb-4">Développeur Web...</p>
        <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
  Passionné par la création d'expériences web innovantes, élégantes et 
  profondément orientées utilisateur. J’aime donner vie à des interfaces 
  modernes, immersives et performantes, où chaque détail compte. 
  À travers le code, je transforme des idées abstraites en solutions claires, 
  accessibles et pensées pour durer.  
  Toujours poussé par la curiosité et l’envie de comprendre le fonctionnement 
  du monde numérique, je développe avec une vision : offrir des expériences 
  fluides, rapides et mémorables.
</p>

      </div>
    </section>
  );
};

export default Introduction;