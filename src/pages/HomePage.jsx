import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <span>
          Welcome to Phonebook!{' '}
        </span>
      </h1>
      <style>{keyframes}</style>
    </div>
  );
}

export default HomePage;

const styles = {
  container: {
    minHeight: 'calc(100vh - 200px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 600,
    fontSize: 55,
    fontFamily: 'italic',
    textAlign: 'center',
    display: 'inline-block',
    animation: 'rotateColor 4s infinite', 
  },
};

const keyframes = `
  @keyframes rotateColor {
    0% {
      color: #6d8434;
    }

    25% {
      color: #ff5a5f;
    }

    50% {
      color: #00a699;
    }

    75% {
      color: #ffb400;
    }

    100% {
      color: #6d8434;
    }
  }
`;