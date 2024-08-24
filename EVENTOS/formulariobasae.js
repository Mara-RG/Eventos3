document.getElementById('formularioEvento').addEventListener('submit', function(event) {
    //Evitar que el formulario se envíe automáticamente
    event.preventDefault();
    //obtener valores de los campos
    const nombre = document.getElementById('nombre').value;
    const inputDate = document.getElementById('inputDate').value;
    const inputCity = document.getElementById('inputCity').value;
    const inputState = document.getElementById('inputState').value;
    const inputCategory = document.getElementById('inputCategory').value;
    const inputMode = document.getElementById('inputMode').value;
    const descripción = document.getElementById('descripción').value;

    //Obtener referencias a los elementos error
    const nombreError = document.getElementById('nombre');
    const inputDateError = document.getElementById('inputDate');
    const inputCityError = document.getElementById('inputCity');
    const inputStateError = document.getElementById('inputState');
    const inputCategoryError= document.getElementById('inputCategory');
    const inputModeError = document.getElementById('inputMode');
    const descripciónError = document.getElementById('descripción');


    // Guardar los valores en el almacenamiento local (localStorage)
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('fecha', inputDate);
    localStorage.setItem('ciudad', inputCity);
    localStorage.setItem('estado', inputState);
    localStorage.setItem('categoria', inputCategory);
    localStorage.setItem('modo', inputMode);
    localStorage.setItem('descripción', descripción);

    window.location.href = 'eventos.html'; //REdirigir la página a resultados


    //limpiar los mensajes de error previos
    nombreError.textContent ='';
    inputDateError.textContent ='';
    inputCityError.textContent ='';
    inputStateError.textContent ='';
    inputCategoryError.textContent ='';
    inputModeError.textContent ='';
    descripciónError.textContent ='';

    //Variable para verificar si hay errores
    let isValid = true;

    //validar el nombre
    if (nombre.tirim() === '') {
        //alert('El nombre del evento es requerido');
        isValid = false;
    }
    //validar la fecha
    if (inputDate.trim() === '') {
        //alert ('La fecha es requerida. ');
        isValid = false;
    }
    //validar la ciudad
    if (inputCity.length < 6) {
        //alert ('La ciudad es requerida');
        isValid = false;
    }
    //validar el estado
    if (inputState.trim() === '') {
        // alert ('El estado es requerido');
        isValid = false;
    }
    //validar la categoria
    if (inputCategory.trim() === '') {
        //alert ('La categoría es requerida');
        isValid = false;
    }
    //validar la modalidad
    if (inputMode.trim() === '') {
        //alert ('La categoria es requerida');
        isValid = false;
    }
    //validar la descripción
    if (descripción.length < 5) {
        // alert ('La descripción es requerida');
        isValid = false;
    }
    //Enviar formulario si es válido
        if(isValid) {
        //ingresarshowAlert;
    }

}); //Función basada en el formulario de contacto



/*
//Envio de formulario
const btn = document.getElementById('btn-enviar');
document.getElementById('formularioEvento')
.addEventListener('submit', function(event) {
event.preventDefault();
const serviceID = 'default_service';
const templateID = 'template_we94yl3';
emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Send Email';
    }, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
    });
    this.reset();
});
*/