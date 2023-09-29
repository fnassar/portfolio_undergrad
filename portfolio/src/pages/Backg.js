import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Backg = () => {
    const options = {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: ["#2e426b80", "#2e336b80", "#332e6b80", "#422e6b80"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 1
        },
        size: {
          value: { min: 1, max: 8 }
        },
        links: {
          enable: true,
          distance: 150,
          color: "#707090",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 5,
          direction: "none",
          random: false,
          straight: false,
          outModes: "out"
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab"
          },
          onClick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 1
            }
          },
          push: {
            quantity: 4
          }
        }
      }
    };
  
    const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);
  
    return (
      <div className="App zIndex1">
        <Particles options={options} init={particlesInit} />
      </div>
    );
  };
  
  export default Backg