'use strict';
import './src/scss/common.scss'

export class Snake {
    constructor(props = {}) {
        const {canvas, width, height, zoom, speed} = props;

        function newCanvas() {
            const canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
            return canvas
        }

        const optCanvas = canvas ? canvas : newCanvas();
        const optZoom = zoom ? zoom : 10;
        const optWidth = width ? width : 10;
        const optHeight = height ? height : 10;

        optCanvas.width = optWidth * optZoom;
        optCanvas.height = optHeight * optZoom;
        this.state = {
            start: {x: 0, y: 0,},
            frame: false,
            pause: false,
            speed: speed ? speed : 100,
            size: {x: optWidth, y: optHeight},
            zoom: optZoom,
            ctx: optCanvas.getContext('2d')
        };

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.lost = this.lost.bind(this);
        this.pause = this.pause.bind(this);
        this.animate = this.animate.bind(this);
        this.step = this.step.bind(this);
        this.newFruit = this.newFruit.bind(this);
        document.addEventListener('keydown', this.keypress.bind(this))
    }


    keypress(e) {
        const {vector} = this.state;
        const key = e.keyCode;
        switch (key) {

            case 37 : {
                if (vector.name !== 'right' && !vector.change) this.state.vector = {
                    x: -1,
                    y: 0,
                    name: 'left',
                    change: true
                };
                break;
            }
            case 38 : {
                if (vector.name !== 'bottom' && !vector.change) this.state.vector = {
                    x: 0,
                    y: -1,
                    name: 'top',
                    change: true
                };
                break;
            }
            case 39 : {
                if (vector.name !== 'left' && !vector.change) this.state.vector = {
                    x: 1,
                    y: 0,
                    name: 'right',
                    change: true
                };
                break;
            }
            case 40 : {
                if (vector.name !== 'top' && !vector.change) this.state.vector = {
                    x: 0,
                    y: 1,
                    name: 'bottom',
                    change: true
                };
                break;
            }
            case 13 : {

                this.start();
                break;
            }
            case 32 : {

                this.pause();
                break;
            }
            case 27 : {
                this.stop();
                break;
            }
        }

    }

    start() {
        const {frame, speed, start} = this.state;

        this.state.vector = {x: 1, y: 0};

        this.Snake = [{...start}];

        this.state.pause = false;

        this.newFruit();

        if (!frame) {
            this.state.frame = setInterval(this.animate, speed);
        }
    }


    stop() {
        const {frame} = this.state;
        if (frame) {
            clearInterval(frame);
            this.state.frame = false;
        }
    }

    lost() {
        this.stop();
        alert('You lose');
    }

    pause() {
        this.state.pause = !this.state.pause;
    }

    newFruit() {
        const {size} = this.state;
        const x = Math.floor(Math.random() * size.x);
        const y = Math.floor(Math.random() * size.y);
        this.Fruit = {x: x, y: y};
        this.Snake.forEach(pos => {
            if (pos.x === x && pos.y == y) this.newFruit();
        });
    }

    step() {
        const {vector, size} = this.state;
        vector.change = false;

        const dot = {
            x: this.Snake[0].x + vector.x,
            y: this.Snake[0].y + vector.y
        };
        if (dot.x < 0 || dot.x >= size.x || dot.y < 0 || dot.y >= size.y) {
            this.lost();
        }

        if (JSON.stringify(this.Snake[0]) !== JSON.stringify(this.Fruit)) {
            this.Snake.pop();
            this.Snake.forEach(pos => {
                if (pos.x === dot.x && pos.y == dot.y) this.lost()
            });
        }
        else {
            this.newFruit();
        }
        this.Snake.unshift(dot);
    }

    animate() {
        const {ctx, zoom, size, pause} = this.state;

        if (!pause) this.step();

        ctx.clearRect(0, 0, size.x * zoom, size.y * zoom);


        ctx.fillStyle = "red";
        ctx.fillRect(this.Fruit.x * zoom, this.Fruit.y * zoom, zoom, zoom);


        ctx.fillStyle = "green";
        this.Snake.forEach(body => {
            ctx.fillRect(body.x * zoom, body.y * zoom, zoom, zoom);
        });


    }
}

window.Snake = Snake;



