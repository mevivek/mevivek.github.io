import React from 'react';

const ClientLogo = ({ name, src }: { name: string; src: string }) => (
  <div className="flex items-center justify-center p-4">
    <div className="h-12 w-32 bg-gray-700 rounded flex items-center justify-center">
      <span className="text-gray-400 text-sm font-medium">{name}</span>
    </div>
  </div>
);

const Clients = () => {
  const clients = [
    { name: 'Ransom & Wilder', src: 'https://via.placeholder.com/128x48.png?text=R%26W' },
    { name: 'Big Enough', src: 'https://via.placeholder.com/128x48.png?text=BE' },
    { name: 'Cara Indoors', src: 'https://via.placeholder.com/128x48.png?text=CI' },
    { name: 'Authentic Collection', src: 'https://via.placeholder.com/128x48.png?text=AC' },
  ];

  return (
    <section>
      <h2 className="section-title">Clients</h2>
      <div className="card">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client) => (
            <ClientLogo key={client.name} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients; 