import { useEffect, useRef } from "react";
import { Camera, Color, Geometry, Mesh, Program, Renderer } from "ogl";
import { fragment, vertex } from "./backgroundShaders.js";
import styles from "./Background.module.css";

const PARTICLE_COUNT = 260;
const palette = { a: "#8b7cf6", b: "#ff7ab6", c: "#5eead4" };

function createParticles(gl) {
  const position = new Float32Array(PARTICLE_COUNT * 3);
  const random = new Float32Array(PARTICLE_COUNT * 4);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    position.set(
      [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1],
      i * 3,
    );
    random.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
  }
  return new Geometry(gl, {
    position: { size: 3, data: position },
    random: { size: 4, data: random },
  });
}

export default function Background() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });
    const { gl } = renderer;
    container.appendChild(gl.canvas);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, 20);

    const program = new Program(gl, {
      vertex,
      fragment,
      transparent: true,
      depthTest: false,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: 10 },
        uBaseSize: { value: 160 * renderer.dpr },
        uMouse: { value: [0, 0] },
        uColorA: { value: new Color(palette.a) },
        uColorB: { value: new Color(palette.b) },
        uColorC: { value: new Color(palette.c) },
      },
    });
    const particles = new Mesh(gl, {
      mode: gl.POINTS,
      geometry: createParticles(gl),
      program,
    });

    function resize() {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    }

    function trackMouse(event) {
      const mouse = program.uniforms.uMouse.value;
      mouse[0] = (event.clientX / window.innerWidth) * 2 - 1;
      mouse[1] = -((event.clientY / window.innerHeight) * 2 - 1);
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame;
    function render(time) {
      program.uniforms.uTime.value = time * 0.001;
      particles.rotation.z = time * 0.00003;
      renderer.render({ scene: particles, camera });
      if (!reduceMotion) frame = requestAnimationFrame(render);
    }

    resize();
    frame = requestAnimationFrame(render);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", trackMouse, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", trackMouse);
      container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <div ref={containerRef} className={styles.background} aria-hidden="true" />;
}
