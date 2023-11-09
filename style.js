

// step

// step1--create unload handler
window.onload = () => {
    main();
}

function main () {
    const root = document.getElementById("root")
    const btn = document.getElementById("btn")
    const output = document.getElementById("output")

    btn.addEventListener('click',function(){
        const rgb = generateHexcolor()
        root.style.backgroundColor = rgb;
        output.value = rgb;
    })
}

// step2--random color generator
// rgb(0,0,0), 
function generateHexcolor ( ){
    // #000000, #ffffff
    //255,255,255 => #ffffff
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// step3--collect all reference


// step4--handle the click even