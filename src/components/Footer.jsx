import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '2rem 0',
      textAlign: 'center',
      backgroundColor: 'var(--bg-secondary)',
      marginTop: 'auto',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Ponlawat Suwanyukabordin. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
