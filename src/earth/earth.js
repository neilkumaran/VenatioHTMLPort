import * as THREE from "three";
import clouds from "./clouds.js";
import nightTimeEarth from "./nightTimeEarth.js";
import atmosphericGlow from "./atmosphereGlow.js";

export default function earth(earthRadius, lightDirection, camera){
    console.log("Hello from earth.js");
    const dayTimeTexture = '/assets/dayTimeEarth.jpg';
    const nightTimeTexture = '/assets/nightTimeEarth.jpg';
    const earthGrouping = new THREE.Group();

    const geometry = new THREE.SphereGeometry(earthRadius, 96, 240);

    const nightEarth = nightTimeEarth(geometry, dayTimeTexture, nightTimeTexture, camera, lightDirection);
    earthGrouping.add(nightEarth);

    const cloudsMesh = clouds(geometry);
    earthGrouping.add(cloudsMesh);

    //atmospheric glow
    const atmoSphereMaterial = atmosphericGlow();
    const atmoSphere = new THREE.Mesh(geometry, atmoSphereMaterial);
    earthGrouping.add(atmoSphere);
    atmoSphere.scale.setScalar(1.01);

    return earthGrouping;
}