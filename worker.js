const ICON = "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";

addEventListener("fetch", (event) => {
  const path = new URL(event.request.url).pathname;
  if (path === "/favicon.ico" || path === "/favicon.png") {
    const bytes = Uint8Array.from(atob(ICON), (c) => c.charCodeAt(0));
    event.respondWith(new Response(bytes, {
      headers: {
        "content-type": "image/png",
        "cache-control": "public, max-age=86400"
      }
    }));
    return;
  }
  event.respondWith(new Response(PAGE, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store"
    }
  }));
});

const PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Blaine Yeager</title>
<link rel="icon" href="/favicon.png" type="image/png">
<style>
  html, body { margin: 0; height: 100%; background: #141311; color: #efece6; }
  body { font-family: "Iowan Old Style", Palatino, "Palatino Linotype", Georgia, serif; overflow: hidden; }
  canvas { display: block; width: 100%; height: 100%; }
  .copy {
    position: fixed; left: 8vw; top: 50%; transform: translateY(-50%);
    z-index: 2; pointer-events: none;
  }
  h1 { margin: 0; font-weight: 400; font-size: clamp(40px, 5vw, 68px); letter-spacing: -0.02em; }
  .rule { width: 148px; height: 1px; background: rgba(239,236,230,0.45); margin: 22px 0 20px; }
  .marks { display: flex; gap: 22px; align-items: center; pointer-events: auto; }
  .marks a { color: #efece6; display: flex; opacity: 0.9; }
  .marks a:hover { opacity: 1; }
  .marks svg { width: 22px; height: 22px; display: block; }
</style>
</head>
<body>
  <div class="copy">
    <h1>Blaine Yeager</h1>
    <div class="rule"></div>
    <div class="marks">
      <a href="https://github.com/blaineyeager" aria-label="GitHub">
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.7 7.7 0 0 1 8 4.77c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>
      <a href="https://x.com/blaineyeager" aria-label="X">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
    </div>
  </div>
  <script type="module">
    import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#141311");
    const camera = new THREE.PerspectiveCamera(32, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0.4, 0.15, 7.2);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    document.body.prepend(renderer.domElement);

    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.15, 0.36, 240, 32),
      new THREE.MeshPhysicalMaterial({
        color: "#c4b39a",
        metalness: 1,
        roughness: 0.22,
        clearcoat: 0.4
      })
    );
    knot.position.x = 1.55;
    scene.add(knot);

    scene.add(new THREE.AmbientLight("#fff4e8", 0.35));
    const key = new THREE.DirectionalLight("#fff6ea", 2.4);
    key.position.set(4, 6, 8);
    scene.add(key);
    const rim = new THREE.DirectionalLight("#8a7660", 1.6);
    rim.position.set(-6, -2, -4);
    scene.add(rim);

    let dragging = false, px = 0, py = 0, vx = 0.004, vy = 0;
    const el = renderer.domElement;
    el.addEventListener("pointerdown", (e) => {
      dragging = true; px = e.clientX; py = e.clientY; vx = 0; vy = 0;
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = e.clientX - px, dy = e.clientY - py;
      knot.rotation.y += dx * 0.008;
      knot.rotation.x += dy * 0.008;
      vx = dx * 0.008; vy = dy * 0.008;
      px = e.clientX; py = e.clientY;
    });
    const up = () => { dragging = false; };
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);

    addEventListener("resize", () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    });

    function frame() {
      if (!dragging) {
        vx *= 0.96; vy *= 0.96;
        if (Math.abs(vx) < 0.0008) vx = 0.004;
        knot.rotation.y += vx;
        knot.rotation.x += vy;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(frame);
    }
    frame();
  </script>
</body>
</html>`;
