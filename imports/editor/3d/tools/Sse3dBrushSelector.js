import Sse3dSelector from "./Sse3dSelector";

export default class extends Sse3dSelector {

    mouseDown(ev, brushWidth=12) {
        if (ev.which == 3) {
            this.pushPoint(ev.offsetX, ev.offsetY);
            this.startX = ev.offsetX;
            this.startY = ev.offsetY;


            this.polygon.length = 0;
            const precision = 6;
            const PI2 = Math.PI * 2;
            const ox = ev.offsetX;
            const oy = ev.offsetY;
            const nx = ev.offsetX + brushWidth;
            const ny = ev.offsetY + brushWidth;

            const r = Math.sqrt((nx - ox) * (nx - ox) + (ny - oy) * (ny - oy));
            for (let a = 0; a < PI2; a += PI2 / precision) {
                this.pushPoint(ox + r * Math.cos(a), oy - r * Math.sin(a));
            }
            this.scene.selectByPolygon(this.polygon);
            this.polygon.length = 0;
            this.startX = this.startY = NaN;
        }
    }

    mouseUp(ev) {
        // if (ev.which == 3) {
        //     this.scene.selectByPolygon(this.polygon);
        //     this.polygon.length = 0;
        //     this.startX = this.startY = NaN;
        // }
    }

    mouseDrag(ev, brushWidth=12) {
        if (ev.which == 3) {
            this.pushPoint(ev.offsetX, ev.offsetY);
            this.startX = ev.offsetX;
            this.startY = ev.offsetY;

            this.polygon.length = 0;
            const precision = 6;
            const PI2 = Math.PI * 2;
            const ox = ev.offsetX;
            const oy = ev.offsetY;
            const nx = ev.offsetX + brushWidth;
            const ny = ev.offsetY + brushWidth;

            const r = Math.sqrt((nx - ox) * (nx - ox) + (ny - oy) * (ny - oy));
            for (let a = 0; a < PI2; a += PI2 / precision) {
                this.pushPoint(ox + r * Math.cos(a), oy - r * Math.sin(a));
            }
            this.scene.selectByPolygon(this.polygon);
            this.polygon.length = 0;
            this.startX = this.startY = NaN;
        }
    }


}