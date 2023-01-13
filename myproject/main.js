import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);


// Sphere
const mesh = new THREE.Mesh(
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.MeshStandardMaterial({color:"orange"  })
);
var btn = document.getElementById("green");
        btn.addEventListener("click", () => {
            mesh.material.color.set("green");});
var btn1 = document.getElementById("red");
            btn1.addEventListener("click", () => {
                mesh.material.color.set("red");});
var btn2 = document.getElementById("blue");
                btn2.addEventListener("click", () => {
                    mesh.material.color.set("blue");});
scene.add(mesh);


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

// Animation Loop

function animate() {
    requestAnimationFrame(animate);
    controls.update();
  
    renderer.render(scene, camera);
  }
  
  animate();
