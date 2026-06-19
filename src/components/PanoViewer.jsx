import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

/**
 * 360° panoramic viewer — opens in a full-screen modal.
 * Uses a Three.js sphere with inverted normals + equirectangular texture.
 * Controllable via mouse drag / touch swipe.
 * Respects prefers-reduced-motion (no auto-rotation if reduced).
 */
export default function PanoViewer({ src, alt, onClose }) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);

  const setup = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 0.1);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Sphere with inverted normals (we're inside)
    const geometry = new THREE.SphereGeometry(50, 64, 32);
    geometry.scale(-1, 1, 1);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(src);
    texture.colorSpace = THREE.SRGBColorSpace;

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Mouse/touch controls
    let isDown = false;
    let prevX = 0;
    let prevY = 0;
    let lon = 0;
    let lat = 0;
    const sensitivity = 0.25;

    const onPointerDown = (e) => {
      isDown = true;
      prevX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      prevY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    };

    const onPointerMove = (e) => {
      if (!isDown) return;
      const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      const y = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
      lon -= (x - prevX) * sensitivity;
      lat += (y - prevY) * sensitivity;
      lat = Math.max(-85, Math.min(85, lat));
      prevX = x;
      prevY = y;
    };

    const onPointerUp = () => { isDown = false; };

    const canvas = renderer.domElement;
    canvas.addEventListener('mousedown', onPointerDown);
    canvas.addEventListener('mousemove', onPointerMove);
    canvas.addEventListener('mouseup', onPointerUp);
    canvas.addEventListener('mouseleave', onPointerUp);
    canvas.addEventListener('touchstart', onPointerDown, { passive: true });
    canvas.addEventListener('touchmove', onPointerMove, { passive: true });
    canvas.addEventListener('touchend', onPointerUp);

    // Scroll to zoom
    const onWheel = (e) => {
      camera.fov = Math.max(30, Math.min(90, camera.fov + e.deltaY * 0.05));
      camera.updateProjectionMatrix();
    };
    canvas.addEventListener('wheel', onWheel, { passive: true });

    // Resize
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Render loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      // Gentle auto-rotation when not dragging
      if (!isDown && !reducedMotion) {
        lon += 0.03;
      }

      const phi = THREE.MathUtils.degToRad(90 - lat);
      const theta = THREE.MathUtils.degToRad(lon);

      const target = new THREE.Vector3(
        50 * Math.sin(phi) * Math.cos(theta),
        50 * Math.cos(phi),
        50 * Math.sin(phi) * Math.sin(theta),
      );

      camera.lookAt(target);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      cancelAnimationFrame(frameRef.current);
      canvas.removeEventListener('mousedown', onPointerDown);
      canvas.removeEventListener('mousemove', onPointerMove);
      canvas.removeEventListener('mouseup', onPointerUp);
      canvas.removeEventListener('mouseleave', onPointerUp);
      canvas.removeEventListener('touchstart', onPointerDown);
      canvas.removeEventListener('touchmove', onPointerMove);
      canvas.removeEventListener('touchend', onPointerUp);
      canvas.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [src]);

  useEffect(() => {
    const cleanup = setup();
    return cleanup;
  }, [setup]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/95"
      role="dialog"
      aria-label={`Visite virtuelle — ${alt}`}
      aria-modal="true"
    >
      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-4">
        <p className="text-sm font-medium text-cream/80">{alt}</p>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center text-cream/60 transition-colors duration-300 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
          aria-label="Fermer la visite virtuelle"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        </button>
      </div>

      {/* Three.js canvas container */}
      <div ref={containerRef} className="h-full w-full" />

      {/* Hint */}
      <div className="absolute inset-x-0 bottom-6 text-center">
        <p className="text-xs text-cream/30">
          Glissez pour explorer · Molette pour zoomer · Échap pour fermer
        </p>
      </div>
    </div>
  );
}
