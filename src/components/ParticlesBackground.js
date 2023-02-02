import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesBackground = (props) => {
  const options = useMemo(() => {
    return {
      background: {
        color: "rgba(198, 47, 111, 1)",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        links: {
          enable: true,
          distance: 130,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesBackground;
