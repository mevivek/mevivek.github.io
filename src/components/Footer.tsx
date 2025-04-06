import React from 'react';

const Footer = () => {
  const links = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];
  const [activeLink, setActiveLink] = React.useState('About');

  return (
    <footer className="mt-12 py-6 border-t border-gray-800">
      <nav className="flex justify-center space-x-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`nav-link ${activeLink === link ? 'active' : ''}`}
            onClick={() => setActiveLink(link)}
          >
            {link}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer; 