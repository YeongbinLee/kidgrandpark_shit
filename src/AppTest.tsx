console.log('AppTest.tsx is loading...');

function AppTest() {
  console.log('AppTest component rendering...');
  return (
    <div style={{ padding: '20px', background: 'lightblue', minHeight: '100vh' }}>
      <h1>React is working!</h1>
      <p>If you see this, React is rendering correctly.</p>
    </div>
  );
}

export default AppTest;
