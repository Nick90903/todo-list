let projects = [];

//Adds button functionality to dropdown
function projectLoad() {

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

// Create a project

function addNewProject() {
    const form = document.querySelector('#form');
    projects.push(createProject(form.name.value , form.color.value, form.favorite.value));
    console.log(projects[0].getTitle());
    hideForm();
}

function showForm () {
    // Shows Form
    const form = document.querySelector('.focusLock');
    form.style.display = ('block');
}

function hideForm () {
        // Hides Form
        const form = document.querySelector('#form');
        const Form = document.querySelector('.focusLock');
        Form.style.display = ('none');
        form.reset();
}

const createProject = (_title, _color, _favorite) => {
    let title = '';
    let color = '';
    let isFavorite = false;

    title = _title;
    color = _color;
    isFavorite = _favorite;
    
    const getTitle = () => title;
    const getColor = () => color;
    const getFavorite = () => isFavorite;


    return {getTitle, getColor, getFavorite}
}




export {toggleDrop, projectLoad, addNewProject, showForm, hideForm};