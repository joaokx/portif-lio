let animationArea = document.querySelector('#anim');

let animationObject = bodymovin.loadAnimation({
    container: document.getElementById(animationArea),
    renderer:'svg',
    loop:'true',
    autoplay:'true',
    autoloadSegments:'false',
    path:'https://assets9.lottiefiles.com/private_files/lf30_wuuqhfmi.json'

});