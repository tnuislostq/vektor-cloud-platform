import React, { useEffect, useRef } from 'react';

interface HexagonalVaultProps {
  cellSize?: number;
  lightRadius?: number;
  glowColor?: string;
  accentColor?: string;
  baseColor?: string;
  idleSpeed?: number;
  enableSparks?: boolean;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

export const HexagonalVault: React.FC<HexagonalVaultProps> = ({
  cellSize = 38,
  lightRadius = 240,
  glowColor = '#06B6D4',
  accentColor = '#8B5CF6',
  baseColor = 'rgba(255, 255, 255, 0.045)',
  idleSpeed = 0.0008,
  enableSparks = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const targetMouse = { x: width * 0.5, y: height * 0.35, isHovering: false };
    const springLight = { x: width * 0.5, y: height * 0.35, vx: 0, vy: 0 };
    const sparks: Spark[] = [];

    let idleAngle = 0;
    let lastMouseMove = Date.now();

    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      lastMouseMove = Date.now();
      targetMouse.isHovering = true;
      if ('touches' in e && e.touches.length > 0) {
        targetMouse.x = e.touches[0].clientX;
        targetMouse.y = e.touches[0].clientY;
      } else if ('clientX' in e) {
        targetMouse.x = e.clientX;
        targetMouse.y = e.clientY;
      }
    };

    const handlePointerLeave = () => {
      targetMouse.isHovering = false;
    };

    const handleClick = (e: MouseEvent) => {
      if (!enableSparks) return;
      const x = e.clientX;
      const y = e.clientY;
      const angles = [0, Math.PI / 3, (2 * Math.PI) / 3, Math.PI, (4 * Math.PI) / 3, (5 * Math.PI) / 3];
      for (let i = 0; i < 18; i++) {
        const baseAngle = angles[i % angles.length] + (Math.random() - 0.5) * 0.3;
        const speed = 2.5 + Math.random() * 4.5;
        sparks.push({
          x,
          y,
          vx: Math.cos(baseAngle) * speed,
          vy: Math.sin(baseAngle) * speed,
          life: 1.0,
          maxLife: 0.8 + Math.random() * 0.6,
          color: i % 2 === 0 ? glowColor : accentColor,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('click', handleClick);

    const R = cellSize;
    const h = R * Math.sqrt(3);
    const vertDist = 1.5 * R;
    const horizDist = h;

    const drawHexagon = (cx: number, cy: number, radius: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
    };

    const render = () => {
      const now = Date.now();
      const isIdle = !targetMouse.isHovering || now - lastMouseMove > 3000;

      if (isIdle) {
        idleAngle += idleSpeed * 16;
        targetMouse.x = width * 0.5 + Math.cos(idleAngle * 0.7) * (width * 0.35);
        targetMouse.y = height * 0.4 + Math.sin(idleAngle * 1.1) * (height * 0.25);
      }

      const k = 0.08;
      const friction = 0.76;
      const dx = targetMouse.x - springLight.x;
      const dy = targetMouse.y - springLight.y;
      springLight.vx = (springLight.vx + dx * k) * friction;
      springLight.vy = (springLight.vy + dy * k) * friction;
      springLight.x += springLight.vx;
      springLight.y += springLight.vy;

      const speed = Math.hypot(springLight.vx, springLight.vy);
      const dynamicRadius = Math.min(lightRadius * 1.4, lightRadius + speed * 4);

      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(
        springLight.x,
        springLight.y,
        0,
        springLight.x,
        springLight.y,
        dynamicRadius
      );
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.16)');
      gradient.addColorStop(0.45, 'rgba(139, 92, 246, 0.10)');
      gradient.addColorStop(1, 'rgba(6, 10, 23, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const startRow = -1;
      const endRow = Math.ceil(height / vertDist) + 1;
      const startCol = -1;
      const endCol = Math.ceil(width / horizDist) + 1;

      for (let row = startRow; row <= endRow; row++) {
        const rowOffset = (row % 2) * (horizDist / 2);
        const cy = row * vertDist;

        for (let col = startCol; col <= endCol; col++) {
          const cx = col * horizDist + rowOffset;
          const distToLight = Math.hypot(cx - springLight.x, cy - springLight.y);

          if (distToLight < dynamicRadius) {
            const normDist = 1 - distToLight / dynamicRadius;
            const glowFactor = Math.pow(normDist, 1.8);

            if (glowFactor > 0.35) {
              drawHexagon(cx, cy, R - 1.5);
              ctx.fillStyle = `rgba(6, 182, 212, ${glowFactor * 0.12})`;
              ctx.fill();
            }

            drawHexagon(cx, cy, R);
            ctx.lineWidth = 1 + glowFactor * 1.5;
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 + glowFactor * 0.6})`;
            ctx.stroke();

            if (glowFactor > 0.65) {
              ctx.beginPath();
              ctx.arc(cx, cy, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${glowFactor * 0.9})`;
              ctx.fill();
            }
          } else {
            drawHexagon(cx, cy, R);
            ctx.lineWidth = 1;
            ctx.strokeStyle = baseColor;
            ctx.stroke();
          }
        }
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.94;
        s.vy *= 0.94;
        s.life -= 0.024;

        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, 2 * s.life, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('click', handleClick);
    };
  }, [cellSize, lightRadius, glowColor, accentColor, baseColor, idleSpeed, enableSparks]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          background: 'linear-gradient(180deg, #050814 0%, #060A17 50%, #070C1E 100%)',
        }}
      />
    </div>
  );
};