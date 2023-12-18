import React, { useState, useEffect } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';

function Theme() {
  // Retrieve the theme from local storage or set it to 'light' by default
  const initialTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(initialTheme);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Effect to apply the theme to the body element and update local storage
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <MdOutlineDarkMode size={32} /> : <CiLight size={32}/>}
    </button>
  );
}

export default Theme;
