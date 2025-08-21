import { useEffect, useRef } from 'react';

const CanvasAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) {
            console.error('Canvas element is not mounted');
            return;
        }

        const cnv = canvasRef.current;
        const ctx = cnv.getContext('2d');
        if (!ctx) return;

        let W: number, H: number, L: number;
        const n = 10;
        const { sin, cos, PI, random } = Math;

        function init() {
            W = cnv.clientWidth;
            H = cnv.clientHeight;

            cnv.width = W;
            cnv.height = H;
            L = Math.min(W, H) / 2;
            ctx!.fillStyle = '#fff';
            ctx!.fillRect(0, 0, W, H);
        }

        class Point {
            ang: number;
            dang: number;
            r: number;
            x: number;
            y: number;

            constructor() {
                this.ang = 2 * PI * random();
                this.dang = (-0.5 + random()) / 10;
                this.r = 0.9 * L;
                this.x = W / 2 + this.r * cos(this.ang);
                this.y = H / 2 + this.r * sin(this.ang);
            }

            update() {
                this.ang += this.dang;
                this.x = W / 2 + this.r * cos(this.ang);
                this.y = H / 2 + this.r * sin(this.ang);
            }
        }

        init();

        const ctrls: Point[] = [];
        for (let i = 0; i < n; i++) {
            ctrls.push(new Point());
        }

        function animate() {
            if (!ctx) return;
            
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.fillRect(0, 0, W, H);
            ctx.beginPath();
            ctx.moveTo((ctrls[0].x + ctrls[n - 1].x) / 2, (ctrls[0].y + ctrls[n - 1].y) / 2);
            for (let p = 0; p < n; p++) {
                let q = p + 1;
                if (q === n) q = 0;
                ctx.quadraticCurveTo(ctrls[p].x, ctrls[p].y, (ctrls[p].x + ctrls[q].x) / 2, (ctrls[p].y + ctrls[q].y) / 2);
                ctrls[p].update();
            }

            ctx.strokeStyle = '#000';
            ctx.lineWidth = L * (1 / 432);
            ctx.stroke();

            animationFrameId = window.requestAnimationFrame(animate);
        }

        let animationFrameId = window.requestAnimationFrame(animate);

        const handleResize = () => {
            init();
            // Reinitialize points with new L
            ctrls.length = 0;
            for (let i = 0; i < n; i++) {
                ctrls.push(new Point());
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[480px] lg:h-[480px]"
        >
            Your browser does not support the canvas element.
        </canvas>
    );
};

export default CanvasAnimation;