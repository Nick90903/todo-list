import { addNewProject, hideForm, showForm, toggleDrop } from "./project";


// Enables Project Dropdown and Hide

const projectDropdownDetection = () => {
    const projectsButton = document.querySelector('.project_button');
    
    projectsButton.addEventListener('click', function() {
        toggleDrop();
    })
    const arrow = document.querySelector('.arrow');
    arrow.setAttribute('transform', 'rotate(0)');
}

// Enables Add Project Button

const addProjectDetection = () => {
    const addButton = document.querySelector('.adder_Icon');

    addButton.addEventListener('click', () => {
        showForm();
    })
}

// Enables Form Buttons

const formButtonDetection = () => {
    const cancel = document.querySelector('#cancel');
    cancel.addEventListener('click', () => {
        hideForm();
    })

    const create = document.querySelector('#create');
    create.addEventListener('click', () => {
        console.log('click');
        addNewProject();
    })
}

export function addListeners() {
    projectDropdownDetection();
    addProjectDetection();
    formButtonDetection();
}
