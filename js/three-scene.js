/* ==========================================================================
   Three.js Tech Network Constellation & Matrix Data Background Engine
   ========================================================================== */

(function () {
    'use strict';

    // 1. DYNAMIC TECH NETWORK CONSTELLATION BACKGROUND
    const canvas = document.getElementById('webgl-canvas');
    if (canvas) {
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0b0f17, 0.0018);

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 40;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        // A. Floating Network Nodes & Line Connections
        const nodeCount = 140;
        const nodePositions = new Float32Array(nodeCount * 3);
        const nodeVelocities = [];

        for (let i = 0; i < nodeCount; i++) {
            nodePositions[i * 3] = (Math.random() - 0.5) * 75;
            nodePositions[i * 3 + 1] = (Math.random() - 0.5) * 75;
            nodePositions[i * 3 + 2] = (Math.random() - 0.5) * 60;

            nodeVelocities.push({
                x: (Math.random() - 0.5) * 0.03,
                y: (Math.random() - 0.5) * 0.03,
                z: (Math.random() - 0.5) * 0.03
            });
        }

        const nodesGeometry = new THREE.BufferGeometry();
        nodesGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));

        const nodesMaterial = new THREE.PointsMaterial({
            color: 0x38bdf8,
            size: 0.6,
            transparent: true,
            opacity: 0.85,
            blending: THREE.AdditiveBlending
        });

        const nodesMesh = new THREE.Points(nodesGeometry, nodesMaterial);
        scene.add(nodesMesh);

        // B. Dynamic Network Lines (Constellation Connections)
        const linesGeometry = new THREE.BufferGeometry();
        const maxLines = nodeCount * 8;
        const linePositions = new Float32Array(maxLines * 6);
        linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

        const linesMaterial = new THREE.LineSegmentsMaterial ? new THREE.LineBasicMaterial({
            color: 0x0284c7,
            transparent: true,
            opacity: 0.25,
            blending: THREE.AdditiveBlending
        }) : new THREE.LineBasicMaterial({
            color: 0x0284c7,
            transparent: true,
            opacity: 0.25,
            blending: THREE.AdditiveBlending
        });

        const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
        scene.add(linesMesh);

        // C. Background Tech Grid Plane
        const gridHelper = new THREE.GridHelper(120, 40, 0x1e293b, 0x0f172a);
        gridHelper.position.y = -35;
        gridHelper.position.z = -20;
        gridHelper.rotation.x = 0.2;
        scene.add(gridHelper);

        // D. Floating Cyber Wireframe Octahedron Node
        const geoOct = new THREE.OctahedronGeometry(6, 1);
        const matOct = new THREE.MeshBasicMaterial({
            color: 0x38bdf8,
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });
        const octMesh = new THREE.Mesh(geoOct, matOct);
        octMesh.position.set(22, 5, -15);
        scene.add(octMesh);

        // E. Mouse Parallax Control
        let mouseX = 0;
        let mouseY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) * 0.003;
            mouseY = (e.clientY - window.innerHeight / 2) * 0.003;
        });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        const clock = new THREE.Clock();

        function animateTechBackground() {
            requestAnimationFrame(animateTechBackground);
            const elapsedTime = clock.getElapsedTime();

            // Rotate cyber node
            octMesh.rotation.y = elapsedTime * 0.15;
            octMesh.rotation.x = elapsedTime * 0.1;

            // Move Network Nodes & Update Connections
            const pos = nodesGeometry.attributes.position.array;
            let lineIdx = 0;

            for (let i = 0; i < nodeCount; i++) {
                pos[i * 3] += nodeVelocities[i].x;
                pos[i * 3 + 1] += nodeVelocities[i].y;
                pos[i * 3 + 2] += nodeVelocities[i].z;

                // Boundary bounce
                if (Math.abs(pos[i * 3]) > 38) nodeVelocities[i].x *= -1;
                if (Math.abs(pos[i * 3 + 1]) > 38) nodeVelocities[i].y *= -1;
                if (Math.abs(pos[i * 3 + 2]) > 30) nodeVelocities[i].z *= -1;

                // Connect nearby nodes
                for (let j = i + 1; j < nodeCount; j++) {
                    const dx = pos[i * 3] - pos[j * 3];
                    const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
                    const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (dist < 12 && lineIdx < maxLines * 6) {
                        linePositions[lineIdx++] = pos[i * 3];
                        linePositions[lineIdx++] = pos[i * 3 + 1];
                        linePositions[lineIdx++] = pos[i * 3 + 2];

                        linePositions[lineIdx++] = pos[j * 3];
                        linePositions[lineIdx++] = pos[j * 3 + 1];
                        linePositions[lineIdx++] = pos[j * 3 + 2];
                    }
                }
            }

            nodesGeometry.attributes.position.needsUpdate = true;
            linesGeometry.setDrawRange(0, lineIdx / 3);
            linesGeometry.attributes.position.needsUpdate = true;

            // Smooth Camera Movement
            camera.position.x += (mouseX - camera.position.x) * 0.04;
            camera.position.y += (-mouseY - camera.position.y) * 0.04;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        }
        animateTechBackground();
    }

    // 2. EMBEDDED QUANT LAB 3D VOLATILITY SURFACE
    window.initLab3DVolSurface = function () {
        const volCanvas = document.getElementById('lab-vol-canvas');
        if (!volCanvas) return;

        const volScene = new THREE.Scene();
        volScene.background = new THREE.Color(0x05070a);

        const volCamera = new THREE.PerspectiveCamera(45, volCanvas.clientWidth / volCanvas.clientHeight, 0.1, 100);
        volCamera.position.set(14, 11, 16);

        const volRenderer = new THREE.WebGLRenderer({ canvas: volCanvas, antialias: true });
        volRenderer.setSize(volCanvas.clientWidth, volCanvas.clientHeight);

        const controls = new THREE.OrbitControls(volCamera, volRenderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        const width = 14;
        const depth = 14;
        const planeGeo = new THREE.PlaneGeometry(width, depth, 26, 26);
        planeGeo.rotateX(-Math.PI / 2);

        const pos = planeGeo.attributes.position;
        const colors = [];

        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const z = pos.getZ(i);

            const strikeMoneyness = x / 3.5;
            const expiryTime = (z + 7) / 7 + 0.1;
            const ivHeight = (0.22 + 0.14 * Math.pow(strikeMoneyness, 2)) * (1.4 / Math.sqrt(expiryTime));
            const y = ivHeight * 3.5;

            pos.setY(i, y);

            const color = new THREE.Color();
            if (y > 2.2) color.setHex(0xfbbf24);
            else if (y > 1.1) color.setHex(0x38bdf8);
            else color.setHex(0x0284c7);

            colors.push(color.r, color.g, color.b);
        }

        planeGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        planeGeo.computeVertexNormals();

        const planeMat = new THREE.MeshPhongMaterial({
            vertexColors: true,
            wireframe: true,
            side: THREE.DoubleSide
        });

        const surfaceMesh = new THREE.Mesh(planeGeo, planeMat);
        volScene.add(surfaceMesh);

        const gridHelper = new THREE.GridHelper(18, 18, 0x38bdf8, 0x1e293b);
        volScene.add(gridHelper);

        const light1 = new THREE.DirectionalLight(0xffffff, 1);
        light1.position.set(10, 20, 10);
        volScene.add(light1);

        const ambLight = new THREE.AmbientLight(0x404040, 1.5);
        volScene.add(ambLight);

        function animateVol() {
            requestAnimationFrame(animateVol);
            surfaceMesh.rotation.y += 0.003;
            controls.update();
            volRenderer.render(volScene, volCamera);
        }
        animateVol();
    };

})();
