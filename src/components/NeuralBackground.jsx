import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Neural Network Particles Component
function NeuralParticles({ mouse }) {
  const ref = useRef()
  const { size } = useThree()
  
  // Generate random positions for particles
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      // Rotate the entire particle system
      ref.current.rotation.x = state.clock.elapsedTime * 0.05
      ref.current.rotation.y = state.clock.elapsedTime * 0.075
      
      // React to mouse movement
      if (mouse.current) {
        ref.current.rotation.x += mouse.current.y * 0.0001
        ref.current.rotation.y += mouse.current.x * 0.0001
      }
    }
  })

  return (
    <group ref={ref}>
      <Points positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00d4ff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  )
}

// Neural Network Connections Component
function NeuralConnections({ mouse }) {
  const ref = useRef()
  const { size } = useThree()
  
  const connections = useMemo(() => {
    const lines = []
    const nodeCount = 50
    const nodes = []
    
    // Generate nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * 15,
        y: (Math.random() - 0.5) * 15,
        z: (Math.random() - 0.5) * 15,
      })
    }
    
    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].x - nodes[j].x, 2) +
          Math.pow(nodes[i].y - nodes[j].y, 2) +
          Math.pow(nodes[i].z - nodes[j].z, 2)
        )
        
        if (distance < 3) {
          lines.push([
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          ])
        }
      }
    }
    
    return lines
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
      
      // React to mouse movement
      if (mouse.current) {
        ref.current.rotation.x += mouse.current.y * 0.00005
        ref.current.rotation.y += mouse.current.x * 0.00005
      }
    }
  })

  return (
    <group ref={ref}>
      {connections.map((line, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array(line)}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#00d4ff"
            transparent
            opacity={0.1}
          />
        </line>
      ))}
    </group>
  )
}

// Floating Neural Nodes Component
function FloatingNodes({ mouse }) {
  const groupRef = useRef()
  const nodesRef = useRef([])
  
  const nodePositions = useMemo(() => {
    const positions = []
    for (let i = 0; i < 20; i++) {
      positions.push({
        x: (Math.random() - 0.5) * 12,
        y: (Math.random() - 0.5) * 12,
        z: (Math.random() - 0.5) * 12,
        speed: Math.random() * 0.02 + 0.01,
        amplitude: Math.random() * 2 + 1,
      })
    }
    return positions
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.01
      
      // Animate individual nodes
      nodesRef.current.forEach((node, index) => {
        if (node) {
          const position = nodePositions[index]
          node.position.y = position.y + Math.sin(state.clock.elapsedTime * position.speed) * position.amplitude
          node.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {nodePositions.map((pos, index) => (
        <mesh
          key={index}
          ref={(el) => (nodesRef.current[index] = el)}
          position={[pos.x, pos.y, pos.z]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial
            color="#00ff88"
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  )
}

// Main Neural Background Component
function NeuralBackground() {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.2} color="#00ff88" />
      
      <NeuralParticles mouse={mouse} />
      <NeuralConnections mouse={mouse} />
      <FloatingNodes mouse={mouse} />
      
      {/* Fog for depth */}
      <fog attach="fog" args={['#0a0a0f', 5, 25]} />
    </Canvas>
  )
}

export default NeuralBackground