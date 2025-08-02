// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("globe"), alpha: true });
// renderer.setSize(300, 300);

// // Sphere (Earth)
// const geometry = new THREE.SphereGeometry(1, 64, 64);
// const texture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard-pro/assets/img/earth.jpg');
// const material = new THREE.MeshStandardMaterial({ map: texture });
// const earth = new THREE.Mesh(geometry, material);
// scene.add(earth);

// // Lighting
// const light = new THREE.PointLight(0xffffff, 1.2);
// light.position.set(5, 3, 5);
// scene.add(light);

// camera.position.z = 2.5;

// // Animate
// function animate() {
//   requestAnimationFrame(animate);
//   earth.rotation.y += 0.005;
//   renderer.render(scene, camera);
// }
// animate();
