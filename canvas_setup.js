function setup(){
    //Create a container object called the `stage`
    stage = new PIXI.Container();

    // create a renderer instance.
    renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
    renderer.backgroundColor = 0xFFFFFF;
    renderer.view.style.position = "absolute"

    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view);

    requestAnimationFrame( animate );

    setup_game();
};

function animate() {

    requestAnimationFrame( animate );

    // render the stage   
    renderer.render(stage);
}

$(setup);

