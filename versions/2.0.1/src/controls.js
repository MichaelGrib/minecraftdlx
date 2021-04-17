const motionarea = document.querySelector('.wrap'),
    player = field.querySelector('.pl');
let moveTimeOut,
lastEvent,
x,
y,
speed = 40;

speed = 1000/speed;

function playerMoveRight() {
    moveRightTimeOut = setInterval(() => {
        x = player.offsetLeft;
        x += 1;
        player.style.left = x + 'px';
    }, speed);
}
function playerMoveLeft() {
    moveLeftTimeOut = setInterval(() => {
        x = player.offsetLeft;
        x -= 1;
        player.style.left = x + 'px';
    }, speed);
}
function playerMoveUp() {
    moveUpTimeOut = setInterval(() => {
        y = player.offsetTop;
        y -= 1;
        player.style.top = y + 'px';
    }, speed);
}
function playerMoveDown() {
    moveDownTimeOut = setInterval(() => {
        y = player.offsetTop;
        y += 1;
        player.style.top = y + 'px';
    }, speed);
}

function playerRightStop() {
    clearInterval(moveRightTimeOut);
}

function playerLeftStop() {
    clearInterval(moveLeftTimeOut);
}

function playerUpStop() {
    clearInterval(moveUpTimeOut);
}

function playerDownStop() {
    clearInterval(moveDownTimeOut);
}

document.addEventListener('keydown', e => {
    e.preventDefault();

    if (lastEvent && lastEvent.code == e.code) return;
    lastEvent = e;

    switch (e.code) {
        case 'KeyD':
            playerMoveRight();
            break;
        case 'KeyW':
            playerMoveUp();
            break;
        case 'KeyA':
            playerMoveLeft();
            break;
        case 'KeyS':
            playerMoveDown();
            break;
    }
    console.log(e.code);

});

document.addEventListener('keyup', e => {
    e.preventDefault();

    lastEvent = null;

    switch (e.code) {
        case 'KeyD':
            playerRightStop();
            break;
        case 'KeyW':
            playerUpStop();
            break;
        case 'KeyA':
            playerLeftStop();
            break;
        case 'KeyS':
            playerDownStop();
            break;
    }
    console.log(e.code);

});