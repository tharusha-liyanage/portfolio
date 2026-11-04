import React from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const initializeParticles = async (engine) => {
  try {
    await loadSlim(engine);
  } catch (error) {
    console.error("Failed to initialize the global particle background.", error);
    throw error;
  }
};

const particleOptions = {
  autoPlay: true,
  background: { color: { value: "transparent" } },
  detectRetina: true,
  fpsLimit: 45,
  fullScreen: { enable: false },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: { enable: true, mode: "grab" },
    },
    modes: {
      grab: {
        distance: 155,
        links: { opacity: 0.45 },
      },
    },
  },
  particles: {
    color: { value: ["#8b5cf6", "#22d3ee"] },
    links: {
      color: ["#8b5cf6", "#22d3ee"],
      distance: 145,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      speed: 0.35,
      outModes: { default: "out" },
    },
    number: {
      value: 50,
      density: { enable: true, width: 1000, height: 1000 },
    },
    opacity: { value: { min: 0.15, max: 0.42 } },
    size: { value: { min: 1, max: 2.5 } },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
};

export default function ParticleNetwork() {
  return (
    <ParticlesProvider init={initializeParticles}>
      <Particles
        id="global-particle-network"
        options={particleOptions}
        className="absolute inset-0 h-full w-full opacity-70"
        style={{ pointerEvents: "none" }}
      />
    </ParticlesProvider>
  );
}
