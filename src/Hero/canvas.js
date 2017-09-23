
import Sketch from 'sketch-js'

function animateCanvas(canvasElement) {

    function random(min = 0, max) {
        return Math.random() * (max - min) + min;
    }
    function sin(deg) {
        return Math.sin(deg);
    }
    function cos(deg) {
        return Math.cos(deg);
    }
    var TWO_PI = 3.14*2;
    
    function Particle( x, y, radius ) {
        this.alive = true;
        this.radius = radius || 10;
        this.wander = 0.15;
        this.theta = random( TWO_PI );
        this.drag = 0.92;
        this.color = '#fff';

        this.x = x || 0.0;
        this.y = y || 0.0;

        this.vx = 0.0;
        this.vy = 0.0;
        this.move = () => {
            
                        this.x += this.vx;
                        this.y += this.vy;
            
                        this.vx *= this.drag;
                        this.vy *= this.drag;
            
                        this.theta += random( -0.5, 0.5 ) * this.wander;
                        this.vx += sin( this.theta ) * 0.1;
                        this.vy += cos( this.theta ) * 0.1;
            
                        this.radius *= 0.96;
                        this.alive = this.radius > 0.5;
        },
        this.draw = ( ctx ) => {
                        ctx.beginPath();
                        ctx.arc( this.x, this.y, this.radius, 0, TWO_PI );
                        ctx.fillStyle = 'fff';
                        ctx.fill();
                    }
    }
    
    var MAX_PARTICLES = 280;
    var COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];

    var particles = [];
    var pool = [];

    var demo = Sketch.create({
        container: canvasElement
    });
    demo.setup = function() {

        // Set off some initial particles.
        var i, x, y;

        for ( i = 0; i < 20; i++ ) {
            x = ( demo.width * 0.5 ) + random( -100, 100 );
            y = ( demo.height * 0.5 ) + random( -100, 100 );
            demo.spawn( x, y );
        }
    
    };

    demo.spawn = function( x, y ) {

        if ( particles.length >= MAX_PARTICLES )
            pool.push( particles.shift() );

        var particle = pool.length ? pool.pop() : new Particle(x, y, random( 5, 40 ));

        particle.wander = random( 0.5, 2.0 );
        particle.color = random( COLOURS );
        particle.drag = random( 0.9, 0.99 );

        var theta = random( TWO_PI );
        var force = random( 2, 8 );

        particle.vx = sin( theta ) * force;
        particle.vy = cos( theta ) * force;

        particles.push( particle );        
    }

    demo.update = function() {

        var i, particle;

        for ( i = particles.length - 1; i >= 0; i-- ) {

            particle = particles[i];

            if ( particle.alive ) particle.move();
            else pool.push( particles.splice( i, 1 )[0] );
        }
    };

    demo.draw = function() {

        demo.globalCompositeOperation  = 'lighter';
        
        for ( var i = particles.length - 1; i >= 0; i-- ) {
            particles[i].draw( demo );
        }
        console.log("Draw!")
    };

    demo.mousemove = function() {

        var particle, theta, force, touch, max, i, j, n;

        for ( i = 0, n = demo.touches.length; i < n; i++ ) {

            touch = demo.touches[i], max = random( 1, 4 );
            for ( j = 0; j < max; j++ ) demo.spawn( touch.x, touch.y );
        }
        console.log("Im running")                
    };
}
export default animateCanvas;