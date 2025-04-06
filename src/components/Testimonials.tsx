import React from 'react';

const TestimonialCard = ({ name, text, avatarSrc }: { name: string; text: string; avatarSrc: string }) => (
  <div className="card">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
          <img src={avatarSrc} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-100 mb-2">{name}</h3>
        <p className="text-gray-300">{text}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section>
      <h2 className="section-title">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TestimonialCard
          name="Daniel Lewis"
          text="Richard was hired to create a corporate identity. We were very pleased with the work..."
          avatarSrc="https://via.placeholder.com/48x48.png?text=DL"
        />
        <TestimonialCard
          name="Jessica Miller"
          text="Richard was hired to create a corporate identity. We were very pleased with the work..."
          avatarSrc="https://via.placeholder.com/48x48.png?text=JM"
        />
      </div>
    </section>
  );
};

export default Testimonials; 