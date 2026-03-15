'use client';

import React, { useEffect, useRef } from 'react';

const WebGLBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext;
        if (!gl) {
            canvas.style.display = 'none';
            return;
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
        };

        resize();
        window.addEventListener('resize', resize);

        const vsSource = `
      attribute vec3 aPos;
      attribute float aSz;
      attribute vec3 aCol;
      uniform float uT;
      uniform float uAsp;
      uniform vec2 uMouse;
      varying vec3 vCol;
      varying float vA;
      void main(){
        vec3 p=aPos;
        float s=aPos.x*1.73+aPos.y*3.17+aPos.z*2.31;
        p.y+=sin(uT*0.28+s)*0.018;
        p.x+=cos(uT*0.19+s*1.3)*0.012;
        p.x+=uMouse.x*0.045*(1.0-abs(aPos.z)*0.3);
        p.y+=uMouse.y*0.028*(1.0-abs(aPos.z)*0.3);
        gl_Position=vec4(p.x/uAsp,p.y,p.z*0.25,1.0);
        gl_PointSize=aSz*(1.0/(1.0+abs(p.z)*0.4));
        vCol=aCol;
        vA=0.72+0.28*sin(uT*0.5+s);
      }
    `;

        const fsSource = `
      precision mediump float;
      varying vec3 vCol;
      varying float vA;
      void main(){
        vec2 uv=gl_PointCoord-0.5;
        float d=length(uv);
        if(d>0.5)discard;
        float a=(1.0-smoothstep(0.2,0.5,d))*vA;
        gl_FragColor=vec4(vCol,a);
      }
    `;

        const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error(gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const program = gl.createProgram();
        if (!program) return;
        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
        if (!vertexShader || !fragmentShader) return;

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        const N = 2600;
        const pos = new Float32Array(N * 3);
        const col = new Float32Array(N * 3);
        const sz = new Float32Array(N);
        const C = [
            [0.094, 0.031, 0.020],
            [0.06, 0.018, 0.010],
            [0.940, 0.952, 0.961],
            [0.988, 0.310, 0.184],
        ];

        for (let i = 0; i < N; i++) {
            const i3 = i * 3;
            const r = Math.random();
            pos[i3] = (Math.random() - 0.5) * 2.8;
            pos[i3 + 1] = (Math.random() - 0.5) * 2.0;
            pos[i3 + 2] = (Math.random() - 0.5) * 3.0;
            const c = r < 0.038 ? C[3] : r < 0.18 ? C[2] : r < 0.55 ? C[0] : C[1];
            col[i3] = c[0];
            col[i3 + 1] = c[1];
            col[i3 + 2] = c[2];
            sz[i] = r < 0.038 ? 3.2 + Math.random() * 2.8 : r < 0.18 ? 1.1 + Math.random() * 1.6 : 0.4 + Math.random() * 0.9;
        }

        const createBuffer = (data: Float32Array, attrName: string, size: number) => {
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
            const loc = gl.getAttribLocation(program, attrName);
            gl.enableVertexAttribArray(loc);
            gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
        };

        createBuffer(pos, 'aPos', 3);
        createBuffer(col, 'aCol', 3);
        createBuffer(sz, 'aSz', 1);

        const uT = gl.getUniformLocation(program, 'uT');
        const uAsp = gl.getUniformLocation(program, 'uAsp');
        const uMouse = gl.getUniformLocation(program, 'uMouse');

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

        let mx = 0, my = 0, t = 0;
        const handleMouseMove = (e: MouseEvent) => {
            mx = (e.clientX / window.innerWidth - 0.5) * 2;
            my = -(e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener('mousemove', handleMouseMove);

        let animationFrameId: number;
        const render = () => {
            t += 0.011;
            gl.clearColor(25 / 255, 8 / 255, 5 / 255, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.uniform1f(uT, t);
            gl.uniform1f(uAsp, canvas.width / canvas.height);
            gl.uniform2f(uMouse, mx, my);
            gl.drawArrays(gl.POINTS, 0, N);
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ background: '#190805' }}
        />
    );
};

export default WebGLBackground;
