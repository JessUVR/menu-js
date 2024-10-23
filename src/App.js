import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Morning Cafe Menu</h1>
        <div className="menu-item">
          <h2>"The Original" Koja</h2>
          <p>Korean BBQ short rib, sesame vinaigrette lettuce, katsu aioli, sesame seeds - $6.95</p>
          <model-viewer 
            src="3DModels/astronaut.glb"
            alt="3D model of The Original Koj"
            ar
            auto-rotate
            camera-controls
            shadow-intensity="1"
            style={{ width: '100%', height: '300px' }}>
          </model-viewer>
        </div>
      </header>
    </div>
  );
}

export default App;
