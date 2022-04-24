function projectLoad() {
    const projectsButton = document.querySelector('.project_button');
    
    projectsButton.addEventListener('click', function() {
        toggleDrop();
    })

    const arrow = document.querySelector('.arrow');
    arrow.setAttribute('transform', 'rotate(0)');

}

function toggleDrop() {
    const arrow = document.querySelector('.arrow');

    if(arrow.getAttribute('transform') == 'rotate(-90)') {
        console.log('test');
        arrow.setAttribute("transform", "rotate(0)");
    } else {
        arrow.setAttribute("transform", "rotate(-90)");
    }
}

export {toggleDrop, projectLoad};