import React from 'react';

const Contact: React.FC = () => {
  return (
   <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-200 via-orange-100 to-blue-200 text-slate-800 px-6">
  <div className="max-w-2xl w-full">
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">
      Contact
    </h2>

    <div className="bg-white/70 backdrop-blur-md rounded-lg p-8 md:p-12 shadow-xl">
      <div className="space-y-6 mb-8">
  <div>
    <p className="text-slate-600 mb-2">Email</p>
    <p className="text-xl text-slate-900">
      werindoissireal@gmail.com  
      <span className="block text-slate-600 text-base mt-1">
        Pour toute demande de collaboration, d’informations ou simplement pour échanger 
        autour d’un projet, je suis disponible et à l’écoute.
      </span>
    </p>
  </div>

  <div>
    <p className="text-slate-600 mb-2">Téléphone</p>
    <p className="text-xl text-slate-900">
      01 40 44 44 03  
      <span className="block text-slate-600 text-base mt-1">
        N’hésitez pas à appeler : un échange direct est parfois la meilleure manière 
        de donner vie à une idée !
      </span>
    </p>
  </div>
</div>


      <button 
  className="w-full bg-slate-900 text-white px-8 py-4 rounded-lg 
  font-semibold text-lg hover:bg-slate-800 transition-colors"
>
  <a href="mailto:werindoissireal@gmail.com">
    Me contacter — Parlons de votre projet !
  </a>
</button>

    </div>
  </div>
</section>


  );
};

export default Contact;