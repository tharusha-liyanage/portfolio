import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParticleNetwork = React.lazy(() => import("./ParticleNetwork.jsx"));

const geometricShapes = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  type: ["cross", "ring", "dot"][index % 3],
  left: `${(index * 37 + 9) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
}));

export default function GlobalEffects() {
  const cursorRef = useRef(null);
  const backgroundRef = useRef(null);

  useGSAP(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (!reducedMotion) {
      const background = backgroundRef.current;
      const orbs = gsap.utils.toArray(".ambient-orb", background);
      const orbit = gsap.timeline({ repeat: -1, defaults: { ease: "sine.inOut" } });
      const destinations = [
        [
          { x: "32vw", y: "-14vh" },
          { x: "12vw", y: "30vh" },
          { x: "-18vw", y: "12vh" },
        ],
        [
          { x: "-25vw", y: "16vh" },
          { x: "18vw", y: "-22vh" },
          { x: "28vw", y: "10vh" },
        ],
        [
          { x: "16vw", y: "24vh" },
          { x: "-32vw", y: "-10vh" },
          { x: "-8vw", y: "-24vh" },
        ],
        [
          { x: "0vw", y: "0vh" },
          { x: "0vw", y: "0vh" },
          { x: "0vw", y: "0vh" },
        ],
      ];

      destinations.forEach((positions, step) => {
        positions.forEach((position, index) => {
          orbit.to(orbs[index], { ...position, duration: 26 }, step * 26);
        });
      });

      gsap.utils.toArray(".ambient-shape", background).forEach((shape) => {
        const scale = gsap.utils.random(0.55, 1.35);
        gsap.set(shape, {
          y: gsap.utils.random(0, window.innerHeight),
          rotation: gsap.utils.random(-180, 180),
          scale,
          opacity: gsap.utils.random(0.1, 0.3),
        });
        gsap.to(shape, {
          y: () => -window.innerHeight - 80,
          rotation: `+=${gsap.utils.random(90, 360)}`,
          opacity: () => gsap.utils.random(0.1, 0.3),
          duration: () => gsap.utils.random(24, 50),
          ease: "none",
          repeat: -1,
          repeatRefresh: true,
          onRepeat: () => {
            gsap.set(shape, {
              y: window.innerHeight + 80,
              scale: gsap.utils.random(0.55, 1.35),
            });
          },
        });
      });

      const parallaxLayers = gsap.utils.toArray("[data-speed]");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      parallaxLayers.forEach((layer) => {
        const speed = Number(layer.dataset.speed);
        if (!Number.isFinite(speed)) return;

        if (layer.matches(".section-shell")) {
          timeline.to(
            layer,
            {
              "--grid-offset-y": () => `${window.innerHeight * speed}px`,
              ease: "none",
            },
            0
          );
        } else {
          timeline.to(
            layer,
            {
              "--parallax-y": () => `${window.innerHeight * speed}px`,
              ease: "none",
            },
            0
          );
        }
      });
    }

    if (reducedMotion || !finePointer) return;

    const cursor = cursorRef.current;
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursorX = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
    const moveCursorY = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });
    const scaleCursor = gsap.quickTo(cursor, "scale", { duration: 0.25, ease: "power3.out" });
    const magneticTargets = Array.from(
      document.querySelectorAll("nav a, [data-magnetic]")
    ).map((element) => ({
      element,
      moveX: gsap.quickTo(element, "x", { duration: 0.3, ease: "power3.out" }),
      moveY: gsap.quickTo(element, "y", { duration: 0.3, ease: "power3.out" }),
    }));

    let activeTarget = null;
    let cursorVisible = false;

    const handlePointerMove = (event) => {
      moveCursorX(event.clientX);
      moveCursorY(event.clientY);

      if (!cursorVisible) {
        gsap.to(cursor, { autoAlpha: 1, duration: 0.2 });
        cursorVisible = true;
      }

      let nearest = null;
      let nearestDistance = Infinity;

      magneticTargets.forEach((target) => {
        const bounds = target.element.getBoundingClientRect();
        const dx = Math.max(bounds.left - event.clientX, 0, event.clientX - bounds.right);
        const dy = Math.max(bounds.top - event.clientY, 0, event.clientY - bounds.bottom);
        const distance = Math.hypot(dx, dy);

        if (distance <= 30 && distance < nearestDistance) {
          nearest = target;
          nearestDistance = distance;
        }
      });

      if (activeTarget !== nearest) {
        activeTarget?.moveX(0);
        activeTarget?.moveY(0);
        activeTarget = nearest;
        scaleCursor(activeTarget ? 1.6 : 1);
      }

      if (activeTarget) {
        const bounds = activeTarget.element.getBoundingClientRect();
        const offsetX = (event.clientX - (bounds.left + bounds.width / 2)) * 0.18;
        const offsetY = (event.clientY - (bounds.top + bounds.height / 2)) * 0.18;
        activeTarget.moveX(gsap.utils.clamp(-15, 15, offsetX));
        activeTarget.moveY(gsap.utils.clamp(-15, 15, offsetY));
      }
    };

    const handlePointerLeave = () => {
      gsap.to(cursor, { autoAlpha: 0, duration: 0.2 });
      activeTarget?.moveX(0);
      activeTarget?.moveY(0);
      activeTarget = null;
      scaleCursor(1);
      cursorVisible = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={backgroundRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <React.Suspense fallback={null}>
          <ParticleNetwork />
        </React.Suspense>

        <div className="ambient-orb absolute -left-[15rem] -top-[14rem] h-[500px] w-[500px] rounded-full bg-purple-500 opacity-20 blur-[150px]" />
        <div className="ambient-orb absolute -right-[14rem] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-400 opacity-20 blur-[150px]" />
        <div className="ambient-orb absolute bottom-[-18rem] left-[28%] h-[500px] w-[500px] rounded-full bg-violet-600 opacity-20 blur-[150px]" />

        {geometricShapes.map(({ id, type, left, top }) => (
          <svg
            key={id}
            className="ambient-shape absolute h-5 w-5 text-violet-400"
            style={{ left, top }}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {type === "cross" && (
              <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.5" />
            )}
            {type === "ring" && (
              <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
            )}
            {type === "dot" && <circle cx="12" cy="12" r="2" fill="currentColor" />}
          </svg>
        ))}
      </div>

      <div
        ref={cursorRef}
        aria-hidden="true"
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[100] h-4 w-4 rounded-full border border-violet-500/80 bg-violet-400/20 opacity-0 shadow-[0_0_18px_rgba(139,92,246,0.35)]"
      />
    </>
  );
}
