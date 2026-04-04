'use client';

import { useEffect, useRef } from 'react';

const VS = `
  attribute vec3 aPos;
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aPhase;

  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uRes;

  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec3 pos = aPos;
    pos.y += sin(uTime + aPhase) * 0.012;
    pos.x += cos(uTime * 0.7 + aPhase) * 0.008;
    pos.x += uMouse.x * 0.04;
    pos.y += uMouse.y * 0.04;

    float fov = 2.0;
    float z = pos.z * 0.5 + 0.5;
    float perspective = fov / (fov + z);

    gl_Position = vec4(pos.x * perspective, pos.y * perspective, pos.z, 1.0);
    gl_PointSize = aSize * perspective * (uRes.y / 600.0);

    vColor = aColor;
    vAlpha = perspective * 0.85;
  }
`;

const FS = `
  precision mediump float;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    if (dist > 0.5) discard;
    float alpha = (1.0 - dist * 2.0) * vAlpha;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

function compileShader(gl: WebGLRenderingContext, type: number, src: string): WebGLShader {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  return shader;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const vs = compileShader(gl, gl.VERTEX_SHADER, VS);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FS);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const N = 2600;
    const pos = new Float32Array(N * 3);
    const sizes = new Float32Array(N);
    const colors = new Float32Array(N * 3);
    const phases = new Float32Array(N);

    const ORANGE = [0.988, 0.310, 0.184];
    const WHITE  = [0.940, 0.952, 0.961];
    const VOID   = [0.094, 0.031, 0.020];
    const VOID2  = [0.060, 0.018, 0.010];

    for (let i = 0; i < N; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 2.2;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2.2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1.8;
      sizes[i]  = Math.random() * 3.5 + 1.0;
      phases[i] = Math.random() * Math.PI * 2;

      const r = Math.random();
      let c: number[];
      if (r < 0.038)       c = ORANGE;
      else if (r < 0.18)   c = WHITE;
      else if (r < 0.55)   c = VOID;
      else                  c = VOID2;

      colors[i * 3]     = c[0];
      colors[i * 3 + 1] = c[1];
      colors[i * 3 + 2] = c[2];
    }

    const makeBuf = (data: Float32Array, attr: string, size: number) => {
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, attr);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
    };

    makeBuf(pos,    'aPos',   3);
    makeBuf(sizes,  'aSize',  1);
    makeBuf(colors, 'aColor', 3);
    makeBuf(phases, 'aPhase', 1);

    const uTime  = gl.getUniformLocation(prog, 'uTime');
    const uMouse = gl.getUniformLocation(prog, 'uMouse');
    const uRes   = gl.getUniformLocation(prog, 'uRes');

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    const mouse = { x: 0, y: 0 };
    const onMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth)  * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMouse);

    let t = 0;
    let raf: number;

    const draw = () => {
      t += 0.011;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.POINTS, 0, N);
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'transparent',
        pointerEvents: 'none',
      }}
    />
  );
}
