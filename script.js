document.addEventListener('DOMContentLoaded',function(){
    var dropDownMenu = document.getElementById("drop-down-list");
    var dropDownSpan = document.getElementById("drop-down_span");

    dropDownSpan.addEventListener('mouseover', function () {
        dropDownMenu.style.display = 'block';
    });

    dropDownMenu.addEventListener('mouseover', function () {
        dropDownMenu.style.display = 'block';
    });

    dropDownMenu.addEventListener('mouseout', function () {
        dropDownMenu.style.display = 'none';
    });
    
    dropDownSpan.addEventListener('mouseout', function () {
        dropDownMenu.style.display = 'none';
    });

    

});

function smoothscroll(sectionid) {
    var section = document.getElementById(sectionid);
    if(section){
        section.scrollIntoView({ behavior: 'smooth' });
    }
};