import './App.css';
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [category, setCategory] = useState("Entrees");
  const [entreesIndex, setEntreesIndex] = useState(0);
  const [appetizersIndex, setAppetizersIndex] = useState(0);

  // Configuración de `react-slick` con el índice inicial basado en la categoría actual
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: category === "Entrees" ? entreesIndex : appetizersIndex, // Usa el índice correspondiente
    beforeChange: (oldIndex, newIndex) => {
      // Actualiza el índice correspondiente basado en la categoría actual
      if (category === "Entrees") {
        setEntreesIndex(newIndex);
      } else {
        setAppetizersIndex(newIndex);
      }
    }
  };

  const menuData = {
    Entrees: [
      { 
        title: '"The Original" Koja', 
        description: 'Korean BBQ short rib, sesame vinaigrette lettuce, katsu aioli, sesame seeds - $6.95', 
        model: '/3DModels/astronaut.glb',
        poster: '/images/astronaut.jpg'  // Imagen de vista previa
      },
      { 
        title: '"Veggie Delight" Koja', 
        description: 'Grilled vegetables, sesame vinaigrette lettuce, katsu aioli, sesame seeds - $5.95', 
        model: '/3DModels/shiba.glb',
        poster: '/images/astronaut.jpg'  // Imagen de vista previa
      },
      { 
        title: '"Spicy Chicken" Koja', 
        description: 'Grilled chicken, spicy aioli, sesame vinaigrette lettuce, sesame seeds - $7.95', 
        model: '/3DModels/door.glb',
        poster: '/images/astronaut.jpg'  // Imagen de vista previa
      }
    ],
    Appetizers: [
      { 
        title: '"Spring Rolls"', 
        description: 'Crispy rolls with vegetables and dipping sauce - $4.95', 
        model: '/3DModels/shiba.glb',
        poster: '/images/astronaut.jpg'  // Imagen de vista previa
      },
      { 
        title: '"Garlic Bread"', 
        description: 'Toasted bread with garlic and herbs - $3.95', 
        model: '/3DModels/door.glb',
        poster: '/images/astronaut.jpg'  // Imagen de vista previa
      }
    ]
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Morning Cafe Menu</h1>
        
        {/* Navegación para las categorías */}
        <nav>
          <button className={category === "Entrees" ? "active" : ""} onClick={() => setCategory("Entrees")}>
            Entrees
          </button>
          <button className={category === "Appetizers" ? "active" : ""} onClick={() => setCategory("Appetizers")}>
            Appetizers
          </button>
        </nav>

        {/* Slider con la clave para reiniciar la posición según el índice almacenado */}
        <Slider key={category} {...settings}>
          {menuData[category].map((item, index) => (
            <div className="menu-item" key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <model-viewer 
                src={item.model}                // Ruta al modelo 3D específico
                alt={`3D model of ${item.title}`}
                poster={item.poster}             // Imagen de vista previa específica
                reveal="interaction"             // Carga diferida hasta la interacción
                ar
                ar-modes="scene-viewer webxr quick-look"
                camera-controls
                auto-rotate
                style={{ width: '100%', height: '300px' }}
              />
            </div>
          ))}
        </Slider>
      </header>
    </div>
  );
}

export default App;
