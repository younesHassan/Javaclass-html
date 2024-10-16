
// get the button element

const javaclass=document.getElementById('colorButton');

// add event listener for the button click

javaclass.addEventListener('click',()=>{
    // change the color of the button

    javaclass.style.backgroundColor=javaclass.style.backgroundColor==='red' ? '#4CAF50':'red';
});

