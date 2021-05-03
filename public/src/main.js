window.onload = () => {
    var rellax = new Rellax('.rellax', {
        breakpoints:[576, 768, 1201],
    });
    var hrellax = new Rellax('.hrellax', {
        horizontal:true,
        vertical: true
        //Disable vertical Parallax Scrolling     vertical:false
    });
}
