const playGame = canvas => {
    var ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    var globaltimer = 0;
    var cooldownsuperstate = 5000;
    var cooldown_superstategainer = 4000;
    var balls = [];
    var i = 0;
    var num_powerup = 0;
    var count_superstate_charge = 3;
    var raf;
    var running = false;
    //variables containing intervals id
    var interval;
    var interval_superstate_ball_charge;
    var interval_superstate;
    var interval_supercharge_gain;
    var interval_globaltimer;
    //
    var slowmo = false;
    var gameover = false;
    var count = 0;
    var temp = 0;
    var original_speedx = [];
    var original_speedy = [];
    var powerup_ball = [];
    var explosion_switch = false;
    var x = canvas.width / 2 + 200;
    //
    var distance_special_vs_normal = [];
    for (
        var j = 0;
        j < 50;
        j++ //initiate this 2-D array
    ) {
        distance_special_vs_normal[j] = [];
        for (var k = 0; k < 100; k++) {
            distance_special_vs_normal[j][k] = 0;
        }
    }
    //color storage
    var color1_gradient = randomize_color();
    var color2_gradient = randomize_color();
    //our main character
    var main_character = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        color: null, // updated at the end of loading
        size: 25,
        isconnected: false, //this property is used to check if the ball is in connection with powerup_ball
        draw: function() {
            if (!gameover) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            for (var z = 1; z < 3; z++) {
                ctx.beginPath();
                ctx.lineWidth = 2;
                if (gameover) {
                    this.size += 10;
                    ctx.arc(this.x, this.y, this.size + z * 10, 0, Math.PI * 2, true);
                } else ctx.arc(this.x, this.y, this.size + z * 5, 0, Math.PI * 2, true);
                ctx.closePath();
                if (!this.isconnected) ctx.strokeStyle = color1_gradient;
                else ctx.strokeStyle = '#FFB75E';
                ctx.stroke();
            }
        },
    };
    var scoretext = {
        //this object is the hovering indicator of how many connection the player have at that instance of time
        x: main_character.x,
        y: main_character.y,
        draw_score: function() {
            ctx.font = '20px game_power';
            if (!main_character.isconnected) ctx.fillStyle = color1_gradient;
            else ctx.fillStyle = main_character.color = '#FFB75E';
            ctx.fillText(count, this.x - 4, this.y - main_character.size - 20);
        },
    };
    function calculatescore() {
        // function showing current scores and passed time
        if (count > temp) temp = count;
        ctx.font = '15px game_power';
        ctx.fillStyle = color1_gradient;
        ctx.fillText('Max connections: ' + temp, 10, 30);
        ctx.fillText('Current supercharge: ' + count_superstate_charge, 10, 50);
        ctx.fillText('Survived time :  ' + globaltimer + ' s', canvas.width - 200, 30);
    }
    function randomize_coordinate() {
        return Math.floor(Math.random() * canvas.height + 1);
    }
    function randomize_color() {
        return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    }
    //function generate gradient for filling balls
    function generate_gradient(x1, y1, r, color1, color2) {
        var grd = ctx.createRadialGradient(x1, y1, r, x1, y1, 1);
        grd.addColorStop(0, color1);
        grd.addColorStop(1, color2);
        return grd;
    }
    //Constructor for ball objects
    function ball_constructor() {
        this.x = randomize_coordinate();
        this.y = randomize_coordinate();
        this.vx = Math.floor(Math.random() * 5 + 1);
        this.vy = Math.floor(Math.random() * 5 + 1);
        this.distance = 1;
        this.color = 'white'; //also updated in animate() beacuse filling with gradient requires coordinates, which change with frame
        this.size = 10 + Math.floor(Math.random() * 10 + 1);
        this.isexpiry = false; //for controlling ball destruction
        this.draw_ball = function() {
            if (this.size < 3) this.isexpiry = true;
            if (this.isexpiry == true) {
                this.x = -5;
                this.y = -5;
                this.vx = 0;
                this.vy = 0;
                this.size = 0;
            } else {
                // also skip the drawing of them
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            //prevent any further interation or motion if the ball is 'expired'
        };
    }
    //Construct special power-up balls
    function ball_constructor_superstate_ball() {
        this.x = randomize_coordinate();
        this.y = randomize_coordinate();
        this.vx = Math.floor(Math.random() * 5 + 1);
        this.vy = Math.floor(Math.random() * 5 + 1);
        this.distance = 1;
        this.color = 'white'; //will update in animate()
        this.size = 20 + Math.floor(Math.random() * 10 + 1);
        this.isexpiry = false;
        this.draw_ball = function() {
            if (this.size < 3) this.isexpiry = true;
            if (this.isexpiry == true) {
                this.x = -5;
                this.y = -5;
                this.vx = 0;
                this.vy = 0;
                this.size = 0;
            } else {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size + 4, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.strokeStyle = this.color;
                ctx.stroke();
            }
        };
    }
    function createball_normal() {
        if (gameover) {
            clearInterval(interval);
            clearInterval(interval_superstate_ball_charge);
            return;
        } // if game is over there is no need to generate more balls
        if (slowmo || !running) return; // we dont want any more balls with 'normal time' velocity to be constructed
        balls[i] = new ball_constructor(true);
        i++;
    }
    function createball_special() {
        if (gameover) {
            clearInterval(interval);
            clearInterval(interval_superstate_ball_charge);
            return;
        }
        if (slowmo || !running) return;
        powerup_ball[num_powerup] = new ball_constructor_superstate_ball();
        num_powerup++;
    }
    function distance_calculator(object1, object2) {
        return (
            Math.sqrt(Math.pow(object1.x - object2.x, 2) + Math.pow(object1.y - object2.y, 2)) -
            object1.size -
            object2.size
        );
    }
    function color_changer(counter, type) {
        //exclusive for normal balls
        if (!slowmo)
            balls[counter].color = generate_gradient(
                balls[counter].x,
                balls[counter].y,
                balls[counter].size,
                color1_gradient,
                color2_gradient
            ); //same color as main_character
        else
            balls[counter].color = generate_gradient(
                balls[counter].x,
                balls[counter].y,
                balls[counter].size,
                randomize_color(),
                randomize_color()
            ); //constantly switching color for fancy eye-poping effect
        ctx.beginPath(); //draw 'active state' for receiver balls in connecting state
        ctx.arc(balls[counter].x, balls[counter].y, balls[counter].size + 5, 0, Math.PI * 2, true);
        ctx.closePath();
        if (type == true) ctx.strokeStyle = main_character.color;
        else ctx.strokeStyle = '#FFB75E';
        ctx.stroke();
    }
    //fancy funtion for distance representation
    function line_connector_normal(object1, object2, counter2, color) {
        //object 1 should be our main character, and object 2 is normal balls.
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        ctx.moveTo(object1.x, object1.y);
        ctx.lineTo(object2.x, object2.y);
        ctx.stroke();
    }
    function line_connector_special(counter1, counter2) {
        //object 1 should be special powerups, and object 2 definately are normal balls
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = powerup_ball[counter1].color;
        ctx.moveTo(powerup_ball[counter1].x, powerup_ball[counter1].y);
        ctx.lineTo(balls[counter2].x, balls[counter2].y);
        ctx.stroke();
    }
    //function incrementing position and velocity of ball objects
    function kinematics(isnormal, counter) {
        //work with global variables
        if (isnormal) {
            balls[counter].x += balls[counter].vx;
            balls[counter].y += balls[counter].vy;
            if (!slowmo) {
                balls[counter].vx += 0.0009;
                balls[counter].vy += 0.0009;
            }
        } else {
            powerup_ball[counter].x += powerup_ball[counter].vx;
            powerup_ball[counter].y += powerup_ball[counter].vy;
        }
    }
    //function detects collision with canvas edge!
    function collision_edge(object) {
        //only accept object arguments
        if (object.y + object.vy + object.size > canvas.height || object.y + object.vy < 0) {
            object.vy = -object.vy;
        }
        if (object.x + object.vx + object.size > canvas.width || object.x + object.vx < 0) {
            object.vx = -object.vx;
        }
    }
    //function to calculate distance from powerup orb to normal orb
    //using 2D arrays, each special ball will have had their distance relative to other normal balls calculated
    function distance_special_to_normal() {
        for (var counter1 = 0; counter1 < num_powerup; counter1++) {
            for (var counter2 = 0; counter2 < i; counter2++) {
                distance_special_vs_normal[counter1][counter2] = distance_calculator(
                    powerup_ball[counter1],
                    balls[counter2]
                );
                if (
                    distance_special_vs_normal[counter1][counter2] < (canvas.height + canvas.width) * 0.5 * 0.33 &&
                    powerup_ball[counter1].distance < (canvas.height + canvas.width) * 0.5 * 0.17 &&
                    !powerup_ball[counter1].isexpiry &&
                    !balls[counter2].isexpiry
                ) {
                    line_connector_special(counter1, counter2);
                    color_changer(counter2, false); // also draw lines from special balls to normal balls
                    count++;
                    balls[counter2].size *= 0.95;
                }
            }
        }
    }
    //animation for gameover
    function endgame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        main_character.draw();
        if (explosion_switch) {
            explosion_switch = false;
            for (var shower = i; shower < i + temp; shower++) {
                balls[shower] = new ball_constructor();
                balls[shower].color = randomize_color();
                balls[shower].x = main_character.x;
                balls[shower].y = main_character.y;
                balls[shower].vy = -(Math.random() * 30 + 1);
                balls[shower].vx = Math.random() * 20 + 1;
            }
        }
        ctx.font = canvas.width * 0.1 + 'px PAC-FONT';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('YOU LOST', canvas.width / 2, canvas.height / 2);
        ctx.font = canvas.width * 0.03 + 'px game_power';
        ctx.fillStyle = randomize_color();
        ctx.fillText('Highscore! :  ' + temp, canvas.width / 2, canvas.height / 2 + 100);
        ctx.fillText('Survived time :  ' + globaltimer, canvas.width / 2, canvas.height / 2 + 150);
        ctx.fillText('Click to play again!', canvas.width / 2, canvas.height * 0.8);
        for (var counter = 0; counter < i + temp; counter++) {
            balls[counter].draw_ball();
            balls[counter].x += balls[counter].vx;
            balls[counter].y += balls[counter].vy;
            collision_edge(balls[counter]);
            balls[counter].vx *= 0.999;
            balls[counter].vy += 2;
        }
        raf = window.requestAnimationFrame(endgame);
    }
    //animation!
    function animate() {
        // all animations, and color filling requires updated coordinate are done here
        main_character.color = generate_gradient(
            main_character.x,
            main_character.y,
            main_character.size,
            color1_gradient,
            color2_gradient
        );
        if (slowmo) {
            // special blurring effect for this slow motion mode
            ctx.fillStyle = 'rgba(0,0,0,0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            //main_character.color = generate_gradient(main_character.x, main_character.y, main_character.size, randomize_color(), randomize_color());
            color1_gradient = randomize_color();
            color2_gradient = randomize_color();
        } else ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var counter = 0; counter < i; counter++) {
            // visualize balls and their change in state is updated here
            kinematics(true, counter);
            collision_edge(balls[counter]);
            if (slowmo) {
                balls[counter].vx *= 0.99;
                balls[counter].vy *= 0.99;
            }
            balls[counter].distance = distance_calculator(balls[counter], main_character);
            if (balls[counter].distance < 0) {
                gameover = true;
                explosion_switch = true;
                endgame();
            } else if (
                balls[counter].distance < (canvas.height + canvas.width) * 0.5 * 0.27 &&
                !balls[counter].isexpiry
            ) {
                line_connector_normal(main_character, balls[counter], counter, main_character.color);
                count++;
                if (cooldown_superstategainer == 4 && count > 10) {
                    interval_supercharge_gain = setInterval(function a() {
                        if (cooldownsuperstate != 0) cooldown_superstategainer--;
                        else {
                            clearInterval(interval_supercharge_gain);
                            cooldown_superstategainer = 4;
                            return;
                        }
                    }, 1000);
                    count_superstate_charge++;
                }
                color_changer(counter, true);
            } else {
                balls[counter].color = balls[counter].color = generate_gradient(
                    balls[counter].x,
                    balls[counter].y,
                    balls[counter].size,
                    '#eef2f3',
                    '#8e9eab'
                );
                balls[counter].size += 0.02;
            }
            balls[counter].draw_ball();
        }
        main_character.isconnected = false;
        for (var counter = 0; counter < num_powerup; counter++) {
            //same with special balls
            kinematics(false, counter);
            collision_edge(powerup_ball[counter]);
            powerup_ball[counter].distance = distance_calculator(powerup_ball[counter], main_character);
            powerup_ball[counter].color = generate_gradient(
                powerup_ball[counter].x,
                powerup_ball[counter].y,
                powerup_ball[counter].size,
                '#ED8F03',
                '#FFB75E'
            );
            powerup_ball[counter].draw_ball();
            if (
                powerup_ball[counter].distance < (canvas.height + canvas.width) * 0.5 * 0.17 &&
                powerup_ball[counter].isexpiry == false
            ) {
                main_character.isconnected = true;
                line_connector_normal(main_character, powerup_ball[counter], counter, powerup_ball[counter].color);
                powerup_ball[counter].size -= 0.3;
                count += 2;
            }
            if (cooldown_superstategainer == 4000 && count > 10) {
                // only increment number of slow motion charge after 4s cooldown
                interval_supercharge_gain = setInterval(function a() {
                    if (cooldown_superstategainer != 0) cooldown_superstategainer--;
                    else {
                        clearInterval(interval_supercharge_gain);
                        cooldown_superstategainer = 4000;
                        return;
                    }
                }, 1);
                count_superstate_charge++;
            }
        }
        distance_special_to_normal(); // calculate the distance
        calculatescore();
        main_character.draw();
        scoretext.draw_score();
        count = 0;
        if (!gameover) raf = window.requestAnimationFrame(animate); //if gameover raf animates endgame()
    }
    //event listeners
    canvas.addEventListener('mousemove', function mo(e) {
        //main_character moves with mouse, also the connection indicator above it
        if (!gameover) {
            main_character.x = e.clientX;
            scoretext.x = main_character.x;
            main_character.y = e.clientY;
            scoretext.y = main_character.y;
        }
    });
    canvas.addEventListener('click', function(e) {
        // multifunctional event handler, depending on the state of the game it can be newgame, restart, or slow motion activator trigger
        if (running && !slowmo && cooldownsuperstate == 5000 && count_superstate_charge != 0) {
            interval_superstate = setInterval(function() {
                if (cooldownsuperstate != 0) cooldownsuperstate--;
                else {
                    clearInterval(interval_superstate);
                    cooldownsuperstate = 5000;
                    return;
                }
            }, 1);
            count_superstate_charge--;
            for (var counter = 0; counter < i; counter++) {
                original_speedx[counter] = balls[counter].vx;
                original_speedy[counter] = balls[counter].vy;
            }
            slowmo = true;
            setTimeout(function() {
                slowmo = false;
                for (var counter = 0; counter < i; counter++) {
                    if (balls[counter].vx * original_speedx[counter] < 0)
                        balls[counter].vx = -original_speedx[counter] / 2;
                    else balls[counter].vx = original_speedx[counter] / 2;
                    if (balls[counter].vy * original_speedy[counter] < 0)
                        balls[counter].vy = -original_speedy[counter] / 2;
                    else balls[counter].vy = original_speedy[counter] / 2;
                }
            }, 5000);
        }
        if (!running && !gameover) {
            animate();
            interval_globaltimer = setInterval(function() {
                globaltimer++;
                if (gameover) clearInterval(interval_globaltimer);
                return;
            }, 1000);
            running = true;
        }
        if (gameover) {
            window.location.reload(true);
        }
    });
    window.onresize = function(event) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    //run functions
    main_character.color = generate_gradient(
        main_character.x,
        main_character.y,
        main_character.size,
        color1_gradient,
        color2_gradient
    );
    main_character.draw();
    for (var ini = 0; ini < Math.floor(Math.random() * 5 + 1); ini++) {
        createball_normal();
    } // player starts with 3 balls
    interval = setInterval(createball_normal, 1000);
    interval_superstate_ball_charge = setInterval(createball_special, 10000 + Math.random() * 5000 + 1);
};

export default playGame;
