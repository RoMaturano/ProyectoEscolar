$(document).ready(function() {
    setTimeout(function() {
        $(".loader").fadeOut("slow");
    }, 100); 
});

document.addEventListener("DOMContentLoaded", function () {
    const URL_CP = "https://www.sistemaescolaripdf.somee.com/api/CpCordoba/",
    container = document.getElementById('container'),
    registerBtn = document.getElementById('btn-register'),
    loginBtn = document.getElementById('btn-login'),
    signup = document.querySelector('.sign-up'),
    signin = document.querySelector('.sign-in'),
    registerBtnSlidemenu = document.getElementById("btn-register-slidemenu"),
    loginBtnSlidemenu = document.getElementById("btn-login-slidemenu"),
    toggleSlideMenu = document.querySelector(".toggle-slidemenu"),
    btnSlideMenu = document.querySelector('.btn-open-slidemenu'),
    containerSlideMenu = document.querySelector('.container-slidemenu'),
    slideSigin = document.querySelector('.slide-sigin'),
    slideSigup = document.querySelector('.slide-sigup');
  
    function hiddenElement(...elements) {
        elements.forEach((element) => {
            element.classList.add("hiddenElement");
        });
    }

    function showElement(...elements) {
        elements.forEach((element) => {
            element.classList.remove("hiddenElement");
        });
    }

    function activeOrInactiveElement(element, state) {
        if (state === "active" || state === "ACTIVE") {
            element.classList.add("active");
        } else if (state === "inactive" || state === "INACTIVE") {
            element.classList.remove("active");
        }
    }

    function IsActiveElement(element, state) {
        if (state === "yes" || state === "YES") {
            element.classList.add("is-active");
        } else if (state === "no" || state === "NO") {
            element.classList.remove("is-active");
        }
    }

    registerBtn.addEventListener('click', () => {
        activeOrInactiveElement(container, "active");
        hiddenElement(signin);
        showElement(signup);
    });

    registerBtnSlidemenu.addEventListener('click', () => {
        activeOrInactiveElement(container, "active");
        toggleSlideMenu.style.backgroundColor = "transparent";
        IsActiveElement(btnSlideMenu, "no")
        hiddenElement(containerSlideMenu, signin, slideSigin);
        showElement(signup, slideSigup);
    });

    loginBtnSlidemenu.addEventListener('click', () => {
        activeOrInactiveElement(container, "active");
        toggleSlideMenu.style.backgroundColor = "transparent";
        IsActiveElement(btnSlideMenu, "no");
        hiddenElement(containerSlideMenu, signup, slideSigup);
        showElement(signin,slideSigin);
    });
    
    loginBtn.addEventListener('click', () => {
        activeOrInactiveElement(container, "active");
        hiddenElement(signup);
        showElement(signin);
    });

    function togglePasswordInput(inputId, buttonId) {
        const passInput = $(`#${inputId}`);
        const passType = passInput.attr("type");
        const button = $(`#${buttonId}`);

        passInput.attr("type", passType === "password" ? "text" : "password");
        button.html(
            passType === "password"
            ? '<i class="fa fa-eye" aria-hidden="true" style="color: #ae0e30;"></i>'
            : '<i class="fa fa-eye-slash" aria-hidden="true" style="color: #ae0e30;"></i>'
        );
    }

    $("#showPassBtn").click(() => togglePasswordInput("txtpass", "showPassBtn"));
    $("#showPassBtnRegister").click(() => togglePasswordInput("password", "showPassBtnRegister"));
    $("#showPassconfirmBtnRegister").click(() => togglePasswordInput("confirmpassword", "showPassconfirmBtnRegister"));

    const btnOpenTerms = document.querySelector('.btn-open-terms'),
    btnCloseTerms = document.querySelector('.btn-close-terms'),
    wrapTerms = document.querySelector(".wrap-terms"),
    btnAcceptTerms = document.querySelector(".btn-accept-terms");

    btnOpenTerms.addEventListener('click', () => {
        showElement(wrapTerms);
        MostrarBackgroundDesenfocado();
    });
    btnCloseTerms.addEventListener('click', () => {
        hiddenElement(wrapTerms);
        OcultarBackgroundDesenfocado();
    });
    btnAcceptTerms.addEventListener('click', () => {
        checkboxTc.checked = true;
        stateCheckboxTc = true;
        hiddenElement(wrapTerms);
        OcultarBackgroundDesenfocado();
        checkState6();
    });

    function MostrarBackgroundDesenfocado() {
        var BackgroundDesenfocado = document.createElement("div");
        BackgroundDesenfocado.classList.add("Background-Desenfocado");
        document.body.appendChild(BackgroundDesenfocado);
    }

    function OcultarBackgroundDesenfocado() {
        var BackgroundDesenfocado = document.querySelector(".Background-Desenfocado");
        if (BackgroundDesenfocado) {
            BackgroundDesenfocado.parentNode.removeChild(BackgroundDesenfocado);
        }
    }
    
    const inputDatetime = document.getElementById('datetime'),
    lblDatetimeElements = document.getElementsByClassName('lbl-datetime'),
    inputGender = document.getElementById('gender'),
    lblGenderElements = document.getElementsByClassName('lbl-gender'),
    inputRelationship = document.getElementById('relationship'),
    lblRelationshipElements = document.getElementsByClassName('lbl-relationship'),
    inputTypeuser = document.getElementById('typeuser'),
    lblTypeuserElements = document.getElementsByClassName('lbl-typeuser'),
    inputLocalidad = document.getElementById('localidad'),
    lblLocalidadElements = document.getElementsByClassName('lbl-localidad');

    function applyShadowAndTransition(inputElement, lblElements, isFocus) {
        const shadowValue = isFocus ? '-1.28pt 0 0.1pt 0.8pt #ae0e30' : 'none';
        const transitionValue = isFocus ? 'all 200ms ease-in' : 'none';
      
        for (let i = 0; i < lblElements.length; i++) {
          lblElements[i].style.boxShadow = shadowValue;
          lblElements[i].style.transition = transitionValue;
        }
      
        inputElement.style.boxShadow = shadowValue;
        inputElement.style.transition = transitionValue;
    }

    inputLocalidad.addEventListener('focus', () => {
        applyShadowAndTransition(inputLocalidad, lblLocalidadElements, true);
    });
    inputLocalidad.addEventListener('blur', () => {
        applyShadowAndTransition(inputLocalidad, lblLocalidadElements, false);
    });

    inputDatetime.addEventListener('focus', () => {
        applyShadowAndTransition(inputDatetime, lblDatetimeElements, true);
    });
    inputDatetime.addEventListener('blur', () => {
        applyShadowAndTransition(inputDatetime, lblDatetimeElements, false);
    });

    inputGender.addEventListener('focus', () => {
        applyShadowAndTransition(inputGender, lblGenderElements, true);
    });
    inputGender.addEventListener('blur', () => {
        applyShadowAndTransition(inputGender, lblGenderElements, false);
    });
      
    inputRelationship.addEventListener('focus', () => {
        applyShadowAndTransition(inputRelationship, lblRelationshipElements, true);
    });
    inputRelationship.addEventListener('blur', () => {
        applyShadowAndTransition(inputRelationship, lblRelationshipElements, false);
    });
      
    inputTypeuser.addEventListener('focus', () => {
        applyShadowAndTransition(inputTypeuser, lblTypeuserElements, true);
    });
      inputTypeuser.addEventListener('blur', () => {
        applyShadowAndTransition(inputTypeuser, lblTypeuserElements, false);
    });

    const inputName = document.getElementById('fname'),
    failedIconName = document.querySelector('.name-checkout-failed'),
    correctIconName = document.querySelector('.name-checkout-correct'),
    tooltipErrorName = document.querySelector('.tooltip-error-name');
    let stateName = false;

    const inputLastname = document.getElementById('lname'),
        failedIconLastname = document.querySelector('.lastname-checkout-failed'),
        correctIconLastname = document.querySelector('.lastname-checkout-correct'),
        tooltipErrorLastname = document.querySelector('.tooltip-error-lastname');
    let stateLastname = false;

    const inputDni = document.getElementById('dni'),
        failedIconDni = document.querySelector('.dni-checkout-failed'),
        correctIconDni = document.querySelector('.dni-checkout-correct'),
        tooltipErrorDni = document.querySelector('.tooltip-error-dni');
    let stateDni = false;

    const inputPhone = document.getElementById('phone'),
        failedIconPhone = document.querySelector('.phone-checkout-failed'),
        correctIconPhone = document.querySelector('.phone-checkout-correct'),
        tooltipErrorPhone = document.querySelector('.tooltip-error-phone');
    let statePhone = false;

    const inputDateTime = document.getElementById('datetime'),
        failedIconDatetime = document.querySelector('.datetime-checkout-failed'),
        correctIconDatetime = document.querySelector('.datetime-checkout-correct'),
        tooltipErrorDatetime = document.querySelector('.tooltip-error-datetime');
    let stateDatetime = false;

    const selectGender = document.getElementById('gender'),
        failedIconGender = document.querySelector('.gender-checkout-failed'),
        correctIconGender = document.querySelector('.gender-checkout-correct'),
        tooltipErrorGender = document.querySelector('.tooltip-error-gender');
    let stateGender = false;

    const inputPostalcode = document.getElementById('postalcode'),
        failedIconPostalcode = document.querySelector('.postalcode-checkout-failed'),
        correctIconPostalcode = document.querySelector('.postalcode-checkout-correct'),
        tooltipErrorPostalcode = document.querySelector('.tooltip-error-postalcode');
    let statePostalcode = false;

    const selectLocalidad = document.getElementById('localidad'),
        failedIconLocalidad = document.querySelector('.localidad-checkout-failed'),
        correctIconLocalidad = document.querySelector('.localidad-checkout-correct'),
        tooltipErrorLocalidad = document.querySelector('.tooltip-error-localidad'),
        selectElementLocalidad = document.getElementById("localidad");
    let stateLocalidad = false;

    const inputStreet = document.getElementById('street'),
        failedIconStreet = document.querySelector('.street-checkout-failed'),
        correctIconStreet = document.querySelector('.street-checkout-correct'),
        tooltipErrorStreet = document.querySelector('.tooltip-error-street');
    let stateStreet = false;

    const inputStreetnumber = document.getElementById('streetnumber'),
        failedIconStreetnumber = document.querySelector('.streetnumber-checkout-failed'),
        correctIconStreetnumber = document.querySelector('.streetnumber-checkout-correct'),
        tooltipErrorStreetnumber = document.querySelector('.tooltip-error-streetnumber');
    let stateStreetnumber = false;

    const inputEmail = document.getElementById('email'),
        failedIconEmail = document.querySelector('.email-checkout-failed'),
        correctIconEmail = document.querySelector('.email-checkout-correct'),
        tooltipErrorEmail = document.querySelector('.tooltip-error-email');
    let stateEmail = false;

    const inputConfirmemail = document.getElementById('confirmemail');
    let stateConfirmemail = false;

    const inputMatricula = document.getElementById('matricula'),
        failedIconMatricula = document.querySelector('.matricula-checkout-failed'),
        correctIconMatricula = document.querySelector('.matricula-checkout-correct'),
        tooltipErrorMatricula = document.querySelector('.tooltip-error-matricula');
    let stateMatricula = false;

    const selectTypeuser = document.getElementById('typeuser'),
        failedIconTypeuser = document.querySelector('.typeuser-checkout-failed'),
        correctIconTypeuser = document.querySelector('.typeuser-checkout-correct'),
        tooltipErrorTypeuser = document.querySelector('.tooltip-error-typeuser');
    let stateTypeuser = false;

    const inputPassword = document.getElementById('password'),
        failedIconPassword = document.querySelector('.password-checkout-failed'),
        correctIconPassword = document.querySelector('.password-checkout-correct'),
        tooltipErrorPassword = document.querySelector('.tooltip-error-password');
    let statePassword = false;

    const inputConfirmpassword = document.getElementById('confirmpassword'),
        failedIconConfirmpassword = document.querySelector('.confirmpassword-checkout-failed'),
        correctIconConfirmpassword = document.querySelector('.confirmpassword-checkout-correct'),
        tooltipErrorConfirmpassword = document.querySelector('.tooltip-error-confirmpassword');
    let stateConfirmpassword = false;

    const btnRegister = document.getElementsByClassName("btn-register");
    const checkboxTc = document.getElementById("tc");
    let stateCheckboxTc = false;

    const errorMessage = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorName.textContent = errorMessage;
    tooltipErrorLastname.textContent = errorMessage;
    tooltipErrorDni.textContent = errorMessage;
    tooltipErrorPhone.textContent = errorMessage;
    tooltipErrorDatetime.textContent = errorMessage;
    tooltipErrorGender.textContent = errorMessage;
    tooltipErrorPostalcode.textContent = errorMessage;
    tooltipErrorLocalidad.textContent = errorMessage;
    tooltipErrorStreet.textContent = errorMessage;
    tooltipErrorStreetnumber.textContent = errorMessage;
    tooltipErrorEmail.textContent = errorMessage;
    tooltipErrorMatricula.textContent = errorMessage;
    tooltipErrorTypeuser.textContent = errorMessage;
    tooltipErrorPassword.textContent = errorMessage;
    tooltipErrorConfirmpassword.textContent = errorMessage;
   
    inputName.addEventListener('focus', () => {
        if (!stateName) {
            showElement(failedIconName);
            hiddenElement(correctIconName);
        } else {
            hiddenElement(failedIconName);
            showElement(correctIconName);
        }
    });
    inputName.addEventListener('input', () => {
        const valueName = inputName.value.trim(); 
    
        if (valueName === '') {
            showElement(failedIconName);
            hiddenElement(correctIconName);
            tooltipErrorName.textContent = errorMessage;
            stateName = false;
        } else if (/^[A-Za-z\sáéíóúüñÁÉÍÓÚÜÑ]*$/.test(valueName)) {
            hiddenElement(failedIconName);
            showElement(correctIconName);
            stateName = true;
        } else {
            showElement(failedIconName);
            hiddenElement(correctIconName);
            tooltipErrorName.textContent = "Campo inválido. Ingrese solo letras.";
            stateName = false;
        }
        checkState1();
    });

    inputLastname.addEventListener('focus', () => {
        if (!stateLastname) {
            showElement(failedIconLastname);
            hiddenElement(correctIconLastname);
        } else {
            hiddenElement(failedIconLastname);
            showElement(correctIconLastname);
        }
    });
    inputLastname.addEventListener('input', () => {
        const valueLastname = inputLastname.value.trim();
    
        if (valueLastname === '') {
            showElement(failedIconLastname);
            hiddenElement(correctIconLastname);
            tooltipErrorLastname.textContent = errorMessage;
            stateLastname = false;
        } else if (/^[A-Za-z\sáéíóúüñÁÉÍÓÚÜÑ]*$/.test(valueLastname)) {
            hiddenElement(failedIconLastname);
            showElement(correctIconLastname);
            stateLastname = true;
        } else {
            showElement(failedIconLastname);
            hiddenElement(correctIconLastname);
            tooltipErrorLastname.textContent = "Campo inválido. Ingrese solo letras.";
            stateLastname = false;
        }
        checkState1();
    });
    
    inputDni.addEventListener('focus', () => {
        if (!stateDni) {
            showElement(failedIconDni);
            hiddenElement(correctIconDni);
        } else {
            showElement(correctIconDni);
            hiddenElement(failedIconDni);
        }
    });
    inputDni.addEventListener('input', () => {
        const valueDni = inputDni.value.trim();
        
        if (valueDni === '') {
            showElement(failedIconDni);
            hiddenElement(correctIconDni);
            tooltipErrorDni.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateDni = false;
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueDni)) && (/[A-Za-z]/.test(valueDni))) {
            hiddenElement(correctIconDni);
            showElement(failedIconDni);
            tooltipErrorDni.textContent = "Campo inválido. No debe contener símbolos ni letras.";
            stateDni = false;
        } else if (/[A-Za-z]/.test(valueDni)) {
            hiddenElement(correctIconDni);
            showElement(failedIconDni);
            tooltipErrorDni.textContent = "Campo inválido. No debe contener letras.";
            stateDni = false;
        } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueDni)) {
            hiddenElement(correctIconDni);
            showElement(failedIconDni);
            tooltipErrorDni.textContent = "Campo inválido. No puede contener símbolos.";
            stateDni = false;
        }  else if (/^[0-9]+$/.test(valueDni) && (valueDni.length === 7 || valueDni.length === 8)) {
            showElement(correctIconDni);
            hiddenElement(failedIconDni);
            tooltipErrorDni.textContent = ""; 
            stateDni = true;
        } else {
            hiddenElement(correctIconDni);
            showElement(failedIconDni);
            tooltipErrorDni.textContent = "Campo inválido. No pueden introducir más de 8 dígitos.";
            stateDni = false;
        }
        checkState1();
    });

    inputPhone.addEventListener('focus', () => {
        if (!statePhone) {
            showElement(failedIconPhone);
            hiddenElement(correctIconPhone);
        } else {
            hiddenElement(failedIconPhone);
            showElement(correctIconPhone);
        }
    });
    inputPhone.addEventListener('input', () => {
        const valuePhone = inputPhone.value.trim();
        
        if (valuePhone === '') {
            showElement(failedIconPhone);
            hiddenElement(correctIconPhone);
            tooltipErrorPhone.textContent = "Campo inválido. No puede dejar el campo vacío.";
            statePhone = false;
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valuePhone)) && (/[A-Za-z]/.test(valuePhone))) {
            hiddenElement(correctIconPhone);
            showElement(failedIconPhone);
            tooltipErrorPhone.textContent = "Campo inválido. No debe contener símbolos ni letras.";
            statePhone = false;
        } else if (/[A-Za-z]/.test(valuePhone)) {
            hiddenElement(correctIconPhone);
            showElement(failedIconPhone);
            tooltipErrorPhone.textContent = "Campo inválido. No debe contener letras.";
            statePhone = false;
        } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valuePhone)) {
            hiddenElement(correctIconPhone);
            showElement(failedIconPhone);
            tooltipErrorPhone.textContent = "Campo inválido. No puede contener símbolos.";
            statePhone = false;
        }  else if (/^[0-9]+$/.test(valuePhone) && (valuePhone.length >= 7 && valuePhone.length <= 10)) {
            showElement(correctIconPhone);
            hiddenElement(failedIconPhone);
            tooltipErrorPhone.textContent = ""; 
            statePhone = true;
        } else if (valuePhone.length <= 7) {
            hiddenElement(correctIconPhone);
            showElement(failedIconPhone);
            tooltipErrorPhone.textContent = "Campo inválido. Cantidad de dígitos insuficientes.";
            statePhone = false;
        } else {
            hiddenElement(correctIconPhone);
            showElement(failedIconPhone);
            tooltipErrorPhone.textContent = "Campo inválido. No pueden introducir más de 10 dígitos.";
            statePhone = false;
        }
        checkState1();
    });
    
    inputDateTime.addEventListener('focus', () => {
        if (!stateDatetime) {
            showElement(failedIconDatetime);
            hiddenElement(correctIconDatetime);
        } else {
            hiddenElement(failedIconDatetime);
            showElement(correctIconDatetime);
        }
    });
    inputDateTime.addEventListener('input', () => {
        const selectedDate = new Date(inputDateTime.value);
        const minDate = new Date('1930-01-01');
        const maxDate = new Date('2005-12-31');
    
        if (!isNaN(selectedDate.getTime()) && selectedDate >= minDate && selectedDate <= maxDate) {
            hiddenElement(failedIconDatetime);
            showElement(correctIconDatetime);
            tooltipErrorDatetime.textContent = "";
            stateDatetime = true;
        } else if (selectedDate <= minDate || selectedDate > maxDate) {
            showElement(failedIconDatetime);
            hiddenElement(correctIconDatetime);
            tooltipErrorDatetime.textContent = "Campo inválido. Debe seleccionar una fecha válida.";
            stateDatetime = false;
        }
        checkState1();
    });
    
    selectGender.addEventListener('focus', () => {
        if (!stateGender) {
            showElement(failedIconGender);
            hiddenElement(correctIconGender);
        } else {
            hiddenElement(failedIconGender);
            showElement(correctIconGender);
        }
    });
    selectGender.addEventListener('input', () => {
        const selectedValue = selectGender.value;
    
        if (selectedValue === '') {
            hiddenElement(correctIconGender);
            showElement(failedIconGender);
            tooltipErrorGender.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateGender = false;
        } else {
            hiddenElement(failedIconGender);
            showElement(correctIconGender);
            stateGender = true;
        }
        checkState1();
    });
    
    inputPostalcode.addEventListener('focus', () => {
        if (!statePostalcode) {
            showElement(failedIconPostalcode);
            hiddenElement(correctIconPostalcode);
        } else {
            hiddenElement(failedIconPostalcode);
            showElement(correctIconPostalcode);
        }
    });
    inputPostalcode.addEventListener('input', () => {
        const valuePostalcode = inputPostalcode.value.trim();
        
        if (valuePostalcode === '') {
            showElement(failedIconPostalcode);
            hiddenElement(correctIconPostalcode);
            tooltipErrorPostalcode.textContent = "Campo inválido. No puede dejar el campo vacío.";
            statePostalcode = false;
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valuePostalcode)) && (/[A-Za-z]/.test(valuePostalcode))) {
            showElement(failedIconPostalcode);
            hiddenElement(correctIconPostalcode);
            tooltipErrorPostalcode.textContent = "Campo inválido. No debe contener símbolos ni letras.";
            statePostalcode = false;

            hiddenElement(failedIconLocalidad, correctIconLocalidad);
            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
            selectElementLocalidad.innerHTML = '';
            const selectOption = document.createElement("option");
            selectOption.value = ""; 
            selectOption.textContent = "Seleccionar";
            selectOption.disabled = true;
            selectOption.selected = true;
            selectElementLocalidad.appendChild(selectOption);
            stateLocalidad = false;
        } else if (/[A-Za-z]/.test(valuePostalcode)) {
            showElement(failedIconPostalcode);
            hiddenElement(correctIconPostalcode);
            tooltipErrorPostalcode.textContent = "Campo inválido. No debe contener letras.";
            statePostalcode = false;

            hiddenElement(failedIconLocalidad, correctIconLocalidad);
            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
            selectElementLocalidad.innerHTML = '';
            const selectOption = document.createElement("option");
            selectOption.value = "";
            selectOption.textContent = "Seleccionar";
            selectOption.disabled = true;
            selectOption.selected = true;
            selectElementLocalidad.appendChild(selectOption);
            stateLocalidad = false;
        } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valuePostalcode)) {
            showElement(failedIconPostalcode);
            hiddenElement(correctIconPostalcode);
            tooltipErrorPostalcode.textContent = "Campo inválido. No puede contener símbolos.";
            statePostalcode = false;

            hiddenElement(failedIconLocalidad, correctIconLocalidad);
            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
            selectElementLocalidad.innerHTML = '';
            const selectOption = document.createElement("option");
            selectOption.value = ""; 
            selectOption.textContent = "Seleccionar";
            selectOption.disabled = true;
            selectOption.selected = true;
            selectElementLocalidad.appendChild(selectOption);
            stateLocalidad = false;
        }  else if (/^[0-9]+$/.test(valuePostalcode) && (valuePostalcode.length === 4)) {
            hiddenElement(failedIconPostalcode);
            showElement(correctIconPostalcode);
            tooltipErrorPostalcode.textContent = ""; 
            statePostalcode = true;
            LocalidadValue(valuePostalcode);
            validarCoordenadas();
        } else if (valuePostalcode.length < 4) {
            showElement(failedIconPostalcode);
            hiddenElement(correctIconPostalcode);
            tooltipErrorPostalcode.textContent = "Campo inválido. Cantidad de dígitos insuficientes.";
            statePostalcode = false;

            hiddenElement(failedIconLocalidad, correctIconLocalidad);
            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
            selectElementLocalidad.innerHTML = '';
            const selectOption = document.createElement("option");
            selectOption.value = ""; 
            selectOption.textContent = "Seleccionar";
            selectOption.disabled = true;
            selectOption.selected = true;
            selectElementLocalidad.appendChild(selectOption);
            stateLocalidad = false;
        } else {
            showElement(failedIconPostalcode);
            hiddenElement(correctIconPostalcode);
            correctIconPostalcode.classList.add('hiddenElement');
            tooltipErrorPostalcode.textContent = "Campo inválido. No pueden introducir más de 4 dígitos.";
            statePostalcode = false;

            hiddenElement(failedIconLocalidad, correctIconLocalidad);
            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
            selectElementLocalidad.innerHTML = '';
            const selectOption = document.createElement("option");
            selectOption.value = ""; 
            selectOption.textContent = "Seleccionar";
            selectOption.disabled = true;
            selectOption.selected = true;
            selectElementLocalidad.appendChild(selectOption);
            stateLocalidad = false;
        }
        checkState2();
    });

    selectLocalidad.addEventListener('focus', () => {
        if (!stateLocalidad) {
            showElement(failedIconLocalidad);
            hiddenElement(correctIconLocalidad);
        } else {
            hiddenElement(failedIconLocalidad);
            showElement(correctIconLocalidad);
        }
    });
    selectLocalidad.addEventListener('input', () => {
        const selectedValueLocalidad = selectLocalidad.value;
    
        if (selectedValueLocalidad === '') {
            hiddenElement(correctIconLocalidad);
            showElement(failedIconLocalidad);
            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateLocalidad = false;
        } else if (selectedValueLocalidad !== '') {
            showElement(correctIconLocalidad);
            hiddenElement(failedIconLocalidad);
            stateLocalidad = true;
            validarCoordenadas();
        }
        checkState2();
    });

    inputStreet.addEventListener('focus', () => {
        if (!stateStreet) {
            showElement(failedIconStreet);
            hiddenElement(correctIconStreet);
        } else {
            hiddenElement(failedIconStreet);
            showElement(correctIconStreet);
        }
    });
    inputStreet.addEventListener('input', () => {
        const valueStreet = inputStreet.value.trim(); 
        
        if (valueStreet === '') {
            hiddenElement(correctIconStreet);
            showElement(failedIconStreet);
            tooltipErrorStreet.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateStreet = false;
        } else if (/^[A-Za-z\sáéíóúüñÁÉÍÓÚÜÑ]*$/.test(valueStreet)) {
            hiddenElement(failedIconStreet);
            showElement(correctIconStreet);
            stateStreet = true;
            validarCoordenadas();
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueStreet)) && (/[0-9]/.test(valueStreet))) {
            hiddenElement(correctIconStreet);
            showElement(failedIconStreet);
            tooltipErrorStreet.textContent = "Campo inválido. No puede ingresar símbolos ni números.";
            stateStreet = false;
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueStreet))) {
            hiddenElement(correctIconStreet);
            showElement(failedIconStreet);
            tooltipErrorStreet.textContent = "Campo inválido. No puede ingresar símbolos.";
            stateStreet = false;
        } else {
            hiddenElement(correctIconStreet);
            showElement(failedIconStreet);
            tooltipErrorStreet.textContent = "Campo inválido. No puede ingresar números.";
            stateStreet = false;
        }
        checkState2();
    });

    inputStreetnumber.addEventListener('focus', () => {
        if (!stateStreetnumber) {
            showElement(failedIconStreetnumber);
            hiddenElement(correctIconStreetnumber);
        } else {
            hiddenElement(failedIconStreetnumber);
            showElement(correctIconStreetnumber);
        }
    });
    inputStreetnumber.addEventListener('input', () => {
        const valueStreetnumber = inputStreetnumber.value.trim();
        
        if (valueStreetnumber === '') {
            hiddenElement(correctIconStreetnumber);
            showElement(failedIconStreetnumber);
            tooltipErrorStreetnumber.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateStreetnumber = false;
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueStreetnumber)) && (/[A-Za-z]/.test(valueStreetnumber))) {
            hiddenElement(correctIconStreetnumber);
            showElement(failedIconStreetnumber);
            tooltipErrorStreetnumber.textContent = "Campo inválido. No debe contener símbolos ni letras.";
            stateStreetnumber = false;
        } else if (/[A-Za-z]/.test(valueStreetnumber)) {
            hiddenElement(correctIconStreetnumber);
            showElement(failedIconStreetnumber);
            tooltipErrorStreetnumber.textContent = "Campo inválido. No debe contener letras.";
            stateStreetnumber = false;
        } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueStreetnumber)) {
            hiddenElement(correctIconStreetnumber);
            showElement(failedIconStreetnumber);
            tooltipErrorStreetnumber.textContent = "Campo inválido. No puede contener símbolos.";
            stateStreetnumber = false;
        }  else if (/^[0-9]+$/.test(valueStreetnumber) && (valueStreetnumber.length === 3)) {
            showElement(correctIconStreetnumber);
            hiddenElement(failedIconStreetnumber);
            tooltipErrorStreetnumber.textContent = ""; 
            stateStreetnumber = true;
            validarCoordenadas();
        } else {
            hiddenElement(correctIconStreetnumber);
            showElement(failedIconStreetnumber);
            tooltipErrorStreetnumber.textContent = "Campo inválido. No pueden introducir más de 3 dígitos.";
            stateStreetnumber = false;
        }
        checkState2();
    });

    inputEmail.addEventListener('focus', () => {
        if (!stateEmail) {
            showElement(failedIconEmail);
            hiddenElement(correctIconEmail);
        } else {
            hiddenElement(failedIconEmail);
            showElement(correctIconEmail);
        }
    });
    inputEmail.addEventListener('input', () => {
        const valueEmail = inputEmail.value.trim();
        const emailRegex = /^[a-zA-Z0-9._\-!#&~\u00C0-\u017F]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        if (valueEmail === '') {
            hiddenElement(correctIconEmail);
            showElement(failedIconEmail);
            tooltipErrorEmail.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateEmail = false;
        } else if (emailRegex.test(valueEmail)) {
            showElement(correctIconEmail);
            hiddenElement(failedIconEmail);
            tooltipErrorEmail.textContent = ""; 
            stateEmail = true;
        } else {
            hiddenElement(correctIconEmail);
            showElement(failedIconEmail);
            tooltipErrorEmail.textContent = "Campo inválido. Dirección de correo electrónico inválida.";
            stateEmail = false;
        }
        checkState4();
    });
    
    function btnDisabled(...elements) {
        elements.forEach((element) => {
            element.classList.add("btnDisabled");
        });
    }
    
    function btnEnabled(...elements) {
        elements.forEach((element) => {
            element.classList.remove("btnDisabled");
        });
    }

    inputConfirmemail.addEventListener('focus', () => {
        if (stateEmail) {
            btnEnabled(inputConfirmemail);
        } else {
            btnDisabled(inputConfirmemail);
        }
    });
    
    inputConfirmemail.addEventListener('mouseenter', () => {
        if (stateEmail) {
            btnEnabled(inputConfirmemail);
        } else {
            btnDisabled(inputConfirmemail);
        }
    });

    var code = "";
    function generarCodigo() {
        var chars = "0123456789";
        var codeLength = 5;
        code = "";

        for (var i = 0; i < codeLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            code += chars.substring(randomNumber, randomNumber + 1);
        }
        console.log(code);
    }
    function enviarCodigoPorCorreo() {
        return new Promise((resolve, reject) => {
            if (!code) {
                // Si el cod no se ha generado, genera uno
                generarCodigo();
            }

            (function() {
                emailjs.init("ZMo33kR_cmvd-2_zv");
            })();
            
            var serviceID = "service_v1mglzi";
            var templateID = "template_t0rgu5p";

            var params = {
                sendername: "SISTEMA ESCOLAR DEL INSTITUTO PRIVADO DEAN FUNES",
                senderemail: document.querySelector("#email").value,
                subject: "Código de autenticación",
                message: code
            };

            emailjs.send(serviceID, templateID, params)
                .then(res => {
                    resolve(); // Resuelve la promesa una vez que se complete el envío
                })
                .catch(error => {
                    reject(error); // Rechaza la promesa en caso de error
                });
        });
    }

    inputConfirmemail.addEventListener('click', () => {
        if (stateEmail) {
            enviarCodigoPorCorreo()
                .then(res => {
                    var userEmail = document.querySelector("#email").value;
                    document.querySelector("#email-sender").textContent = userEmail;
                    showElement(document.querySelector(".contentModal"));
                })
                .catch();

                const modalPopupBtns = document.getElementsByClassName("modalPopupBtn");
                const resendBtn = document.querySelector(".resend-btn");
                const acceptBtns = document.getElementsByClassName("accept-btn");
                MostrarBackgroundDesenfocado();

                resendBtn.addEventListener('click', () => {
                    enviarCodigoPorCorreo();
                });

                for (const modalPopupBtn of modalPopupBtns) {
                    modalPopupBtn.addEventListener('click', () => {
                        const userInput = document.getElementById("inputCode").value;
                        const confirmEmailElement = document.querySelector(".confirmemail");

                        if (userInput === code) {
                            OcultarBackgroundDesenfocado();
                            hiddenElement(document.querySelector(".contentModal"));
                            document.querySelector(".confirmemail").style.backgroundColor = "#52ec61";
                            confirmEmailElement.addEventListener("mouseenter", function() {
                                this.style.cursor = "not-allowed";
                                this.style.borderColor = "#fff";
                                this.style.color = "#fff";
                            });
                            confirmEmailElement.addEventListener("mouseleave", function() {
                                this.style.cursor = "default";
                            });
                        } else {
                            OcultarBackgroundDesenfocado();
                            hiddenElement(document.querySelector(".contentModal"));
                        }
                    });
                }
                for (const acceptBtn of acceptBtns) {
                    acceptBtn.addEventListener('click', () => {
                        const userInput = document.getElementById("inputCode").value;
                        if (userInput === code) {
                            hiddenElement(document.querySelector(".email-confirm"));
                            showElement(document.querySelector(".email-checked"));
                            stateConfirmemail = true;
                        } else {
                            alert("El código ingresado no es válido. Inténtalo de nuevo.");
                            stateConfirmemail = false;
                        }
                    });
                }
            checkState4();
        } else {
            btnDisabled(inputConfirmemail);
            stateConfirmemail = false;
            checkState4();
        }
    });

    inputMatricula.addEventListener('focus', () => {
        if (!stateMatricula) {
            showElement(failedIconMatricula);
            hiddenElement(correctIconMatricula);
        } else {
            hiddenElement(failedIconMatricula);
            showElement(correctIconMatricula);
        }
    });
    inputMatricula.addEventListener('input', () => {
        const valueMatricula = inputMatricula.value.trim();
    
        if (valueMatricula === '') {
            showElement(failedIconMatricula);
            hiddenElement(correctIconMatricula);
            tooltipErrorMatricula.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateMatricula = false;
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueMatricula)) && (/[A-Za-z]/.test(valueMatricula))) {
            showElement(failedIconMatricula);
            hiddenElement(correctIconMatricula);
            tooltipErrorMatricula.textContent = "Campo inválido. No debe contener símbolos ni letras.";
            stateMatricula = false;
        } else if (/[A-Za-z]/.test(valueMatricula)) {
            showElement(failedIconMatricula);
            hiddenElement(correctIconMatricula);
            tooltipErrorMatricula.textContent = "Campo inválido. No debe contener letras.";
            stateMatricula = false;
        } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueMatricula)) {
            showElement(failedIconMatricula);
            hiddenElement(correctIconMatricula);
            tooltipErrorMatricula.textContent = "Campo inválido. No puede contener símbolos.";
            stateMatricula = false;
        } else if (/^[0-9]+$/.test(valueMatricula) && (valueMatricula.length === 4)) {
            hiddenElement(failedIconMatricula);
            showElement(correctIconMatricula);
            tooltipErrorMatricula.textContent = "";
            stateMatricula = true;
        } else if (/^[0-9]+$/.test(valueMatricula) && (valueMatricula.length < 4)) {
            showElement(failedIconMatricula);
            hiddenElement(correctIconMatricula);
            tooltipErrorMatricula.textContent = "Campo inválido. No pueden introducir menos de 4 dígitos.";
            stateMatricula = false;
        } else {
            showElement(failedIconMatricula);
            hiddenElement(correctIconMatricula);
            tooltipErrorMatricula.textContent = "Campo inválido. No pueden introducir más de 4 dígitos.";
            stateMatricula = false;
        }
        checkState4();
    });

    selectTypeuser.addEventListener('focus', () => {
        if (!stateTypeuser) {
            showElement(failedIconTypeuser);
            hiddenElement(correctIconTypeuser);
        } else {
            hiddenElement(failedIconTypeuser);
            showElement(correctIconTypeuser);
        }
    });
    selectTypeuser.addEventListener('input', () => {
        const selectedValueTypeuser = selectTypeuser.value;
    
        if (selectedValueTypeuser === '') {
            showElement(failedIconTypeuser);
            hiddenElement(correctIconTypeuser);
            tooltipErrorTypeuser.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateTypeuser = false;
        } else if (selectedValueTypeuser != '') {
            hiddenElement(failedIconTypeuser);
            showElement(correctIconTypeuser);
            stateTypeuser = true;
        }
        checkState4();
    });
    
    inputPassword.addEventListener('focus', () => {
        if (!statePassword) {
            showElement(failedIconPassword);
            hiddenElement(correctIconPassword);
        } else {
            hiddenElement(failedIconPassword);
            showElement(correctIconPassword);
        }
    });
    inputPassword.addEventListener('input', () => {
        const valuePassword = inputPassword.value.trim();
        
        if (valuePassword === '') {
            showElement(failedIconPassword);
            hiddenElement(correctIconPassword);
            tooltipErrorPassword.textContent = "Campo inválido. No puede dejar el campo vacío.";
            statePassword = false;
        } else if (/\s/.test(valuePassword)) {
            showElement(failedIconPassword);
            hiddenElement(correctIconPassword);
            tooltipErrorPassword.textContent = "Campo inválido. No puede contener espacios en blanco.";
            statePassword = false;
        } else if (valuePassword.length >= 8 && valuePassword.length <= 12) {
            hiddenElement(failedIconPassword);
            showElement(correctIconPassword);
            tooltipErrorPassword.textContent = ""; 
            statePassword = true;
        } else if (valuePassword.length < 8) {
            showElement(failedIconPassword);
            hiddenElement(correctIconPassword);
            tooltipErrorPassword.textContent = "Campo inválido. No pueden introducir menos de 8 dígitos.";
            statePassword = false;
        } else {
            showElement(failedIconPassword);
            hiddenElement(correctIconPassword);
            tooltipErrorPassword.textContent = "Campo inválido. No pueden introducir más de 12 dígitos.";
            statePassword = false;
        }
        checkState4();
    });
    
    inputConfirmpassword.addEventListener('focus', () => {
        if (!stateConfirmpassword) {
            showElement(failedIconConfirmpassword);
            hiddenElement(correctIconConfirmpassword);
        } else {
            hiddenElement(failedIconConfirmpassword);
            showElement(correctIconConfirmpassword);
        }
    });
    inputConfirmpassword.addEventListener('input', () => {
        const valueConfirmpassword = inputConfirmpassword.value.trim();
        
        if (valueConfirmpassword === '') {
            showElement(failedIconConfirmpassword);
            hiddenElement(correctIconConfirmpassword);
            tooltipErrorConfirmpassword.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateConfirmpassword = false;
        } else if (statePassword && inputPassword.value === valueConfirmpassword) {
            hiddenElement(failedIconConfirmpassword);
            showElement(correctIconConfirmpassword);
            tooltipErrorConfirmpassword.textContent = ""; 
            stateConfirmpassword = true;
        } else {
            showElement(failedIconConfirmpassword);
            hiddenElement(correctIconConfirmpassword);
            tooltipErrorConfirmpassword.textContent = "Campo inválido. Las contraseñas no coinciden.";
            stateConfirmpassword = false;
        }
        checkState4();
    });

    checkboxTc.addEventListener("change", function() {
        if (checkboxTc.checked) {
            stateCheckboxTc = true;
        } else {
            stateCheckboxTc = false;
        }
        checkState6();
    });

    document.getElementById('browse_button').addEventListener('click', function() {
        document.getElementById('browse_image').click();
    });

    var checkUserImage = false;

    document.getElementById('browse_image').addEventListener('change', function(e) {
        var files = e.target.files;

        var done = function(url) {
            $('#display_image_div').html('');
            $("#display_image_div").html('<img name="display_image_data" id="display_image_data" src="' + url + '" alt="Uploaded Picture">');
        };

        if (files && files.length > 0) {
        file = files[0];

        if (URL) {
            done(URL.createObjectURL(file));
        } else if (FileReader) {
            reader = new FileReader();
            reader.onload = function(e) {
                done(reader.result);
            };
            reader.readAsDataURL(file);
        }

        var image = document.getElementById('display_image_data');
        image.style.width = '288px'; 
        image.style.height = '200px'; 
        
        

        var button = document.getElementById('crop_button');
        var result = document.getElementById('cropped_image_result');
        var croppable = false;
        var cropper = new Cropper(image, {
            aspectRatio: 1,
            viewMode: 1,
            ready: function() {
                croppable = true;
            },
        });

        button.onclick = function() {
            var croppedCanvas;
            var roundedCanvas;
            var roundedImage;

            if (!croppable) {
                return;
            }

            // Crop
            croppedCanvas = cropper.getCroppedCanvas();

            // Round
            roundedCanvas = getRoundedCanvas(croppedCanvas);

            // Show
            roundedImage = document.createElement('img');
            roundedImage.classList.add("roundedImage");
            roundedImage.src = roundedCanvas.toDataURL();
            roundedImage.style.width = '150px'; 
            roundedImage.style.height = '150px'; 

            result.innerHTML = '';
            result.appendChild(roundedImage);

            if (document.querySelector('.roundedImage')) {
                checkUserImage = true;
                console.log('El usuario ha recortado una imagen.');
            } else {
                checkUserImage = false;
                console.log('El usuario no ha recortado una imagen aún.');
            }
            console.log(checkUserImage);
            checkState5();
            };
            function getRoundedCanvas(sourceCanvas) {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var width = sourceCanvas.width;
            var height = sourceCanvas.height;

            canvas.width = width;
            canvas.height = height;
            context.imageSmoothingEnabled = true;
            context.drawImage(sourceCanvas, 0, 0, width, height);
            context.globalCompositeOperation = 'destination-in';
            context.beginPath();
            context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
            context.fill();
            return canvas;
            
            }
    
            
        }

    });

    const signupContent = document.querySelector(".signup-form-container"),
    stagebtn1a = document.querySelector(".stagebtn1a"),
    stagebtn1b = document.querySelector(".stagebtn1b"),
    stagebtn2a = document.querySelector(".stagebtn2a"),
    stagebtn2b = document.querySelector(".stagebtn2b"),
    stagebtn3a = document.querySelector(".stagebtn3a"),
    stagebtn3b = document.querySelector(".stagebtn3b"),
    stagebtn4a = document.querySelector(".stagebtn4a"),
    stagebtn4b = document.querySelector(".stagebtn4b"),
    stagebtn5a = document.querySelector(".stagebtn5a"),
    stagebtn5b = document.querySelector(".stagebtn5b"),
    stagebtn6a = document.querySelector(".stagebtn6a"),
    stagebtn6b = document.querySelector(".stagebtn6b"),
    signupContent1 = document.querySelector(".stage1-content"),
    signupContent2 = document.querySelector(".stage2-content"),
    signupContent3 = document.querySelector(".stage3-content"),
    signupContent4 = document.querySelector(".stage4-content"),
    signupContent5 = document.querySelector(".stage5-content"),
    signupContent6 = document.querySelector(".stage6-content");
  
    function checkState1() {
        if (stateName === true && stateLastname === true && stateDni === true && statePhone === true && stateDatetime === true && stateGender === true) {
            btnEnabled(stagebtn1b, nextBtnStage1);
            return true;
        } else {
            btnDisabled(stagebtn1b, nextBtnStage1);
            return false;
        }
    }

    function checkState2() {
        if (statePostalcode === true && stateStreet === true && stateStreetnumber === true) {
            btnEnabled(stagebtn2b, nextBtnStage2);
            return true;
        } else {
            btnDisabled(stagebtn2b, nextBtnStage2);
            return false;
        }
    }

    function checkState4() {
        if (stateEmail === true && stateConfirmemail === true && stateMatricula === true && stateTypeuser === true && statePassword === true && stateConfirmpassword === true) {
            btnEnabled(stagebtn4b, nextBtnStage4);
            return true;
        } else {
            btnDisabled(stagebtn4b, nextBtnStage4);
            return false;
        }
    }

    function checkState5() {
        if (checkUserImage === true) {
            btnEnabled(stagebtn5b, nextBtnStage5);
            return true;
        } else {
            btnDisabled(stagebtn5b, nextBtnStage5);
            return false;
        }
    }

    function checkState6() {
        if (stateCheckboxTc) {
            btnEnabled(stagebtn6b, nextBtnStage6);
            return true;
        } else {
            btnDisabled(stagebtn6b, nextBtnStage6);
            return false;
        }
    }

    function animateNextStage(stageElement, nextStageElement, nthChildren , tooltipElement, visibleContent) {
        hiddenElement(signupContent1, signupContent2, signupContent3, signupContent4, signupContent5, signupContent6);
        showElement(visibleContent);

        setTimeout(() => {
            stageElement.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            stageElement.style.backgroundColor  = "#52ec61";
            stageElement.style.color = "#fff";
            stageElement.innerText = "✔";

            nextStageElement.style.color = "#ae0e30";
            nextStageElement.style.fontWeight = "bolder";
            tooltipElement.style.color = "#ae0e30";
        }, 100);

        if (!Array.isArray(nthChildren)) {
        nthChildren = [nthChildren];
        }

        nthChildren.forEach(nthChild => {
            nthChild.classList.add("green-background");
        });
    }

    function animatePrevStage(stageElement, prevStageElement, prevStageValue, nthChild , tooltipElement, visibleContent) {
        hiddenElement(signupContent1, signupContent2, signupContent3, signupContent4, signupContent5, signupContent6);
        showElement(visibleContent);

        setTimeout(() => {
            stageElement.style.color = "#6e6e6e";
            stageElement.style.fontWeight = "bolder";
            tooltipElement.style.color = "#6e6e6e";

            prevStageElement.innerText = prevStageValue;
            prevStageElement.style.backgroundColor = "#e2e2e7";
            prevStageElement.style.color = "#ae0e30";
        }, 100);
        nthChild.classList.remove("green-background");
    }
 
    stagebtn1b.addEventListener('click', () => {
        if (checkState1() === true) {
            animateNextStage(
            document.querySelector(".stageno-1"),
            document.querySelector(".stageno-2"),
            document.querySelector(".stage:nth-child(2)"),
            document.getElementById("tool-tip-2"),
            signupContent2
           )
        } else {
            stagebtn1b.classList.add("btnDisabled");
        }
    });
    
    stagebtn2a.addEventListener('click', () => {
        animatePrevStage(
            document.querySelector(".stageno-2"),
            document.querySelector(".stageno-1"),
            1,
            document.querySelector(".stage:nth-child(2)"),
            document.getElementById("tool-tip-2"),
            signupContent1
        )
    });

    stagebtn2b.addEventListener('click', () => {
        if (checkState2() === true) {
            const nthChild = [
                document.querySelector(".stage:nth-child(2)"),
            document.querySelector(".stage:nth-child(3)")
            ]
            animateNextStage(
                document.querySelector(".stageno-2"),
                document.querySelector(".stageno-3"),
                nthChild,
                document.getElementById("tool-tip-3"),
                signupContent3
            )
        } else {
            stagebtn2b.classList.add("btnDisabled");
        }
    });

    stagebtn3a.addEventListener('click', () => {
        animatePrevStage(
            document.querySelector(".stageno-3"),
            document.querySelector(".stageno-2"),
            2,
            document.querySelector(".stage:nth-child(3)"),
            document.getElementById("tool-tip-3"),
            signupContent2
        );
    });

    stagebtn3b.addEventListener('click', () => {
        // if (checkState3() === true) {
            animateNextStage(
                document.querySelector(".stageno-3"),
                document.querySelector(".stageno-4"),
                document.querySelector(".stage:nth-child(4)"),
                document.getElementById("tool-tip-4"),
                signupContent4
            );
        // } else {
        //     stagebtn3b.classList.add("btnDisabled");
        // }
    });

    stagebtn4a.addEventListener('click', () => {
        animatePrevStage(
            document.querySelector(".stageno-4"),
            document.querySelector(".stageno-3"),
            3,
            document.querySelector(".stage:nth-child(4)"),
            document.getElementById("tool-tip-4"),
            signupContent3
        );
    });

    stagebtn4b.addEventListener('click', () => {
        if (checkState4() === true) {
            const nthChild = [
                document.querySelector(".stage:nth-child(5)")
            ]
            animateNextStage(
                document.querySelector(".stageno-4"),
                document.querySelector(".stageno-5"),
                nthChild,
                document.getElementById("tool-tip-5"),
                signupContent5
            )
        } else {
            stagebtn4b.classList.add("btnDisabled");
        }
    });

    stagebtn5a.addEventListener('click', () => {
        animatePrevStage(
            document.querySelector(".stageno-5"),
            document.querySelector(".stageno-4"),
            4,
            document.querySelector(".stage:nth-child(5)"),
            document.getElementById("tool-tip-5"),
            signupContent4
        );
    });
    stagebtn5b.addEventListener('click', () => {
        if (checkState5() === true) {
            const nthChild = [
                document.querySelector(".stage:nth-child(6)")
            ]
            animateNextStage(
                document.querySelector(".stageno-5"),
                document.querySelector(".stageno-6"),
                nthChild,
                document.getElementById("tool-tip-6"),
                signupContent6
            )
        } else {
            stagebtn5b.classList.add("btnDisabled");
        }
    });


    stagebtn6a.addEventListener('click', () => {
        animatePrevStage(
            document.querySelector(".stageno-6"),
            document.querySelector(".stageno-5"),
            5,
            document.querySelector(".stage:nth-child(6)"),
            document.getElementById("tool-tip-6"),
            signupContent5
        );
    });
    stagebtn6b.addEventListener('click', () => {
        if (checkState6() === true) {
            const nthChild = [
               
            ]
            animateNextStage(
                document.querySelector(".stageno-6"),
                //document.querySelector(""),
                nthChild,
                document.getElementById(""),
                ""
            )

            // signupContent1.classList.add("hiddenElement");
            // signupContent3.classList.add("hiddenElement");
            // signupContent2.classList.add("hiddenElement");
            // signupContent4.classList.add("hiddenElement");
            // signupContent5.classList.add("hiddenElement");
            // signupContent6.classList.add("hiddenElement");

            // setTimeout(() => {
            //     const stageElement6 = document.querySelector(".stageno-6");
            //     stageElement6.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            //     stageElement6.style.backgroundColor = "#52ec61";
            //     stageElement6.style.color = "#fff";
            //     stageElement6.innerText = "✔";
            // }, 100);

            const popUpAnimationContent = document.getElementsByClassName("popupAnimation");

            if (popUpAnimationContent.length > 0) {
                const firstPopUpAnimation = popUpAnimationContent[0]; 

                const imgElement = firstPopUpAnimation.querySelector('img');
                imgElement.src = '/assets/Login/sucessPopup.png';

                const h2Element = firstPopUpAnimation.querySelector('h2');
                h2Element.textContent = 'Registro Completado';

                const pElement = firstPopUpAnimation.querySelector('p');
                pElement.textContent = 'Su cuenta ha sido registrada con éxito. Ahora su solicitud se encuentra en proceso de revisión para su habilitación. Le notificaremos una vez que su cuenta haya sido aprobada.';

                const btnElement = firstPopUpAnimation.querySelector('.btn-accept');

                MostrarBackgroundDesenfocado();
                firstPopUpAnimation.classList.remove("hiddenElement");

                btnElement.addEventListener('click', () => {
                    OcultarBackgroundDesenfocado();
                    firstPopUpAnimation.classList.add("hiddenElement");
                });
            }
        } else {
            stagebtn6b.classList.add("btnDisabled");
        }
    });

    function LocalidadValue(valueCP) {
        const elementInputLocalidad = document.getElementById("localidad");
        console.log(valueCP);
        console.log("si llamo a la funcion");
        fetch(URL_CP)
            .then((Response) => Response.json())
            .then((Data) => {
                elementInputLocalidad.innerHTML = ""; 
                const selectOption = document.createElement("option");
                selectOption.value = ""; 
                selectOption.textContent = "Seleccionar";
                selectOption.disabled = true;
                selectOption.selected = true;
                elementInputLocalidad.appendChild(selectOption);
                console.log("si respondio");
                if (Data.length === 0) {
                } else {
                    const filteredData = Data.filter((item) => item.CP === parseInt(valueCP));
                    console.log(filteredData);
                    if (filteredData.length === 0) {
                        console.log("filtreddata esta vacio");
                        showElement(failedIconPostalcode);
                        hiddenElement(correctIconPostalcode)
                        tooltipErrorPostalcode.textContent = "Campo inválido. No existe el código postal.";
                        statePostalcode = false;

                        showElement(failedIconLocalidad)
                        hiddenElement(correctIconLocalidad)
                        tooltipErrorLocalidad.textContent = "Campo inválido. No existe localidad para el código postal.";
                        stateLocalidad = false;
                    } else {
                        filteredData.forEach((item) => {
                            hiddenElement(failedIconLocalidad, correctIconLocalidad)

                            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
                            const option = document.createElement("option"); 
                            option.value = item.Localidad; 
                            option.textContent = item.Localidad; 
                            elementInputLocalidad.appendChild(option);
                            console.log(valueCP,"esto es valu cp");
                            console.log(filteredData,"esto filteredData");
                        });
                    }
                }
            })
            .catch((error) => {
                console.error("Error al obtener datos:", error);
            });
    }

    let map; 

    function validarCoordenadas() {
        if (stateLocalidad && statePostalcode && stateStreet && stateStreetnumber) {
            const valuePostalcode = inputPostalcode.value.trim();
            const selectedValueLocalidad = selectLocalidad.value;
            const valueStreet = inputStreet.value.trim();
            const valueStreetnumber = inputStreetnumber.value.trim();

            geocodificar(valuePostalcode, selectedValueLocalidad, valueStreet, valueStreetnumber);
        }
    }
    
    function geocodificar(codigoPostal, localidad, street, streetnumber) {
        const apiKey = "b7494b92162e4b1788e7b6a322981d01";
        const formattedAddress = `${street} ${streetnumber}, ${codigoPostal} ${localidad}`;
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            formattedAddress
        )}&key=${apiKey}`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const coordenadas = data.results[0].geometry; 
                console.log("Coordenadas: ", coordenadas);
    
                if (coordenadas) {
                    if (map) {
                        map.remove();
                    }
    
                    crearMapa(coordenadas);
                } else {
                    console.error("No se pudieron obtener las coordenadas.");
                }
            })
            .catch(error => {
                console.error("Error al geocodificar: ", error);
            });
    }
    
    function crearMapa(coordenadas) {
        map = L.map('map').setView([coordenadas.lat, coordenadas.lng], 16);
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Eze map\'s ©'
        }).addTo(map);
    
        const customIcon = L.divIcon({
            className: 'custom-icon',
            html: '<i class="fas fa-map-marker-alt location-icon"></i>',
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });
    
        L.marker([coordenadas.lat, coordenadas.lng], { icon: customIcon }).addTo(map).bindPopup("<span style='color: red;'>Su ubicación</span>");
    
        // map.on('click', onMapClick);
    
        // function onMapClick(e) {
        //     alert("Posición: " + e.latlng);
        // }
    }
   
    btnSlideMenu.addEventListener('click', () => {
        if (!btnSlideMenu.classList.contains("is-active")) {
            IsActiveElement(btnSlideMenu, "yes");
            toggleSlideMenu.style.backgroundColor = "rgba(174, 14, 48)";
            showElement(containerSlideMenu)
        } else {
            IsActiveElement(btnSlideMenu, "no");
            hiddenElement(containerSlideMenu)
            toggleSlideMenu.style.background = 'none';
            toggleSlideMenu.style.backdropFilter = 'none';
        }
    });
    
    const paginationBtnsMobile = document.querySelector(".pagination-btns-mobile"),
    cointanerStageMobile = document.querySelector(".cointaner-stage-mobile"),
    stageBtns1 = paginationBtnsMobile.querySelector(".stage-btns-1"),
    prevBtnStage1 = paginationBtnsMobile.querySelector(".stagebtn1a"),
    nextBtnStage1 = paginationBtnsMobile.querySelector(".stagebtn1b");

    const stageBtns2 = paginationBtnsMobile.querySelector(".stage-btns-2"),
    prevBtnStage2 = paginationBtnsMobile.querySelector(".stagebtn2a"),
    nextBtnStage2 = paginationBtnsMobile.querySelector(".stagebtn2b");
    
    const stageBtns3 = paginationBtnsMobile.querySelector(".stage-btns-3"),
    prevBtnStage3 = paginationBtnsMobile.querySelector(".stagebtn3a"),
    nextBtnStage3 = paginationBtnsMobile.querySelector(".stagebtn3b");

    const stageBtns4 = paginationBtnsMobile.querySelector(".stage-btns-4"),
    prevBtnStage4 = paginationBtnsMobile.querySelector(".stagebtn4a"),
    nextBtnStage4 = paginationBtnsMobile.querySelector(".stagebtn4b");

    const stageBtns5 = paginationBtnsMobile.querySelector(".stage-btns-5"),
    prevBtnStage5 = paginationBtnsMobile.querySelector(".stagebtn5a"),
    nextBtnStage5 = paginationBtnsMobile.querySelector(".stagebtn5b");

    const stageBtns6 = paginationBtnsMobile.querySelector(".stage-btns-6"),
    prevBtnStage6 = paginationBtnsMobile.querySelector(".stagebtn6a"),
    nextBtnStage6 = paginationBtnsMobile.querySelector(".stagebtn6b");

    const toolTip0 = document.getElementById("tool-tip-0"),
    toolTip1 = document.querySelector("#tool-tip-1-mobile"),
    toolTip2 = document.querySelector("#tool-tip-2-mobile"),
    toolTip3 = document.querySelector("#tool-tip-3-mobile"),
    toolTip4 = document.querySelector("#tool-tip-4-mobile"),
    toolTip5 = document.querySelector("#tool-tip-5-mobile"),
    toolTip6 = document.querySelector("#tool-tip-6-mobile");
    
    const stageno0 = document.querySelector(".stageno-0"),
    stageno1 = cointanerStageMobile.querySelector('.stageno-1'),
    stageno2 = cointanerStageMobile.querySelector('.stageno-2'),
    stageno3 = cointanerStageMobile.querySelector('.stageno-1'),
    stageno4 = cointanerStageMobile.querySelector('.stageno-2'),
    stageno5 = cointanerStageMobile.querySelector('.stageno-1'),
    stageno6 = cointanerStageMobile.querySelector('.stageno-2');

    const stage0Elements = document.querySelectorAll('.stage-0'),
    scrollContainer = document.querySelector('.scrollable-container');

    nextBtnStage1.addEventListener('click', () => {
        if (checkState1() === true) {
            signupContent1.classList.add("hiddenElement");
            signupContent3.classList.add("hiddenElement");
            signupContent2.classList.remove("hiddenElement");
            // signupContent4.classList.add("hiddenElement");

            stageBtns1.classList.add("hiddenElement");
            stageBtns2.classList.remove("hiddenElement");

            scrollContainer.scrollLeft = 0;

            setTimeout(() => {
                
                toolTip0.style.color = "#ae0e30";
                toolTip0.textContent = "Información personal";
              
                // stageno0.textContent = "1";
               
                stageno0.style.color = "#fff !important";
                stageno0.innerText = "✔";

                toolTip1.textContent = "Información dirección";
                stageno1.textContent = "2";

                toolTip2.textContent = "Contacto emergencia";
                stageno2.textContent = "3";

               
            }, 100);
            document.querySelector(".current-item-mobile").classList.add("green-background");
            stageno0.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            stageno0.style.backgroundColor = "#52ec61";
        } else {
            nextBtnStage1.classList.add("btnDisabled");
        }
    });

    prevBtnStage2.addEventListener('click', () => {
        signupContent1.classList.remove("hiddenElement");
        signupContent3.classList.add("hiddenElement");
        signupContent2.classList.add("hiddenElement");
        // signupContent4.classList.add("hiddenElement");

        stageBtns1.classList.remove("hiddenElement");
        stageBtns2.classList.add("hiddenElement");

        scrollContainer.scrollLeft = 0;

        // stageno0.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
        document.querySelector(".current-item-mobile").classList.remove("grey-background");
        document.querySelector(".current-item-mobile").classList.remove("green-background");
        document.querySelector(".current-item-mobile").classList.add("white-background");
        stageno0.style.backgroundColor = "#fff";
        toolTip0.style.color = "#ae0e30";
        toolTip0.textContent = "";
              
        // stageno0.textContent = "1";
        stageno0.innerText = "";
        stageno0.style.color = "#fff";

        toolTip1.textContent = "Información personal";
        stageno1.textContent = "1";

        toolTip2.textContent = "Información dirección";
        stageno2.textContent = "2";
    });

    nextBtnStage2.addEventListener('click', () => {
        if (checkState2() === true) {
            signupContent1.classList.add("hiddenElement");
            signupContent3.classList.remove("hiddenElement");
            signupContent2.classList.add("hiddenElement");
            signupContent4.classList.add("hiddenElement");

            stageBtns1.classList.add("hiddenElement");
            stageBtns2.classList.add("hiddenElement");
            stageBtns3.classList.remove("hiddenElement");

            scrollContainer.scrollLeft = 0;

            // stageBtns4.classList.add("hiddenElement");
            // stageBtns5.classList.add("hiddenElement");
            // stageBtns6.classList.add("hiddenElement");

            setTimeout(() => {
                
                toolTip0.style.color = "#ae0e30";
                toolTip0.textContent = "Información dirección";
              
                // stageno0.textContent = "1";
                stageno0.innerText = "✔";
                stageno0.style.color = "white !important";

                toolTip1.textContent = "Contacto emergencia";
                stageno1.textContent = "3";

                toolTip2.textContent = "Información cuenta";
                stageno2.textContent = "4";

               
            }, 100);
            document.querySelector(".current-item-mobile").classList.add("green-background");
            stageno0.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            stageno0.style.backgroundColor = "#52ec61";
        } else {
            nextBtnStage2.classList.add("btnDisabled");
        }
    });

    prevBtnStage3.addEventListener('click', () => {
        signupContent1.classList.add("hiddenElement");
        signupContent3.classList.add("hiddenElement");
        signupContent2.classList.remove("hiddenElement");
        // signupContent4.classList.add("hiddenElement");

        stageBtns1.classList.add("hiddenElement");
        stageBtns2.classList.remove("hiddenElement");
        stageBtns3.classList.add("hiddenElement");

        scrollContainer.scrollLeft = 0;

        setTimeout(() => {
            // stageno0.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            document.querySelector(".current-item-mobile").classList.remove("grey-background");
            document.querySelector(".current-item-mobile").classList.add("green-background");
            document.querySelector(".current-item-mobile").classList.remove("white-background");
            stageno0.style.backgroundColor = "#52EC61";
            toolTip0.style.color = "#ae0e30";
            toolTip0.textContent = "Información personal";
                
            // stageno0.textContent = "1";
            stageno0.innerText = "✔";
            stageno0.style.color = "#52EC61 !important";

            toolTip1.textContent = "Información dirección";
            stageno1.textContent = "2";

            toolTip2.textContent = "Contacto emergencia";
            stageno2.textContent = "3";
        }, 100);    
    });

    nextBtnStage3.addEventListener('click', () => {
        // if (checkState3() === true) {
            signupContent1.classList.add("hiddenElement");
            signupContent3.classList.add("hiddenElement");
            signupContent2.classList.add("hiddenElement");
            signupContent4.classList.remove("hiddenElement");
    
            stageBtns1.classList.add("hiddenElement");
            stageBtns2.classList.add("hiddenElement");
            stageBtns3.classList.add("hiddenElement");
            stageBtns4.classList.remove("hiddenElement");
            stageBtns5.classList.add("hiddenElement");
            stageBtns6.classList.add("hiddenElement");

            scrollContainer.scrollLeft = 0;

            setTimeout(() => {  
                toolTip0.style.color = "#ae0e30";
                toolTip0.textContent = "Contacto emergencia";
                
                // stageno0.textContent = "1";
                stageno0.innerText = "✔";
                stageno0.style.color = "white !important";

                toolTip1.textContent = "Información cuenta";
                stageno1.textContent = "4";

                toolTip2.textContent = "Imagen cuenta";
                stageno2.textContent = "5"; 
            }, 100);
            document.querySelector(".current-item-mobile").classList.add("green-background");
            stageno0.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            stageno0.style.backgroundColor = "#52ec61";
        // } else {
        //     nextBtnStage3.classList.add("btnDisabled");
        // }
    });

    prevBtnStage4.addEventListener('click', () => {
        signupContent1.classList.add("hiddenElement");
        signupContent3.classList.remove("hiddenElement");
        signupContent2.classList.add("hiddenElement");
        signupContent4.classList.add("hiddenElement");

        stageBtns1.classList.add("hiddenElement");
        stageBtns2.classList.add("hiddenElement");
        stageBtns3.classList.remove("hiddenElement");
        stageBtns4.classList.add("hiddenElement");

        scrollContainer.scrollLeft = 0;

        setTimeout(() => {
            // stageno0.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            document.querySelector(".current-item-mobile").classList.remove("grey-background");
            document.querySelector(".current-item-mobile").classList.add("green-background");
            document.querySelector(".current-item-mobile").classList.remove("white-background");
            stageno0.style.backgroundColor = "#52EC61";
            toolTip0.style.color = "#ae0e30";
            toolTip0.textContent = "Información personal";
                
            // stageno0.textContent = "1";
            stageno0.innerText = "✔";
            stageno0.style.color = "#52EC61 !important";

            toolTip1.textContent = "Contacto emergencia";
            stageno1.textContent = "3";

            toolTip2.textContent = "Información cuenta";
            stageno2.textContent = "4";
        }, 100);    
    });

    nextBtnStage4.addEventListener('click', () => {
        if (checkState4() === true) {
            signupContent1.classList.add("hiddenElement");
            signupContent3.classList.add("hiddenElement");
            signupContent2.classList.add("hiddenElement");
            signupContent4.classList.add("hiddenElement");
            signupContent5.classList.remove("hiddenElement");

            stageBtns1.classList.add("hiddenElement");
            stageBtns2.classList.add("hiddenElement");
            stageBtns3.classList.add("hiddenElement");
            stageBtns4.classList.add("hiddenElement");
            stageBtns5.classList.remove("hiddenElement");
            stageBtns6.classList.add("hiddenElement");

            scrollContainer.scrollLeft = 0;

            setTimeout(() => {  
                toolTip0.style.color = "#ae0e30";
                toolTip0.textContent = "Información cuenta";
                
                // stageno0.textContent = "1";
                stageno0.innerText = "✔";
                stageno0.style.color = "white !important";

                toolTip1.textContent = "Imagen cuenta";
                stageno1.textContent = "5";

                toolTip2.textContent = "Finalizar registro";
                stageno2.textContent = "6"; 
            }, 100);
            document.querySelector(".current-item-mobile").classList.add("green-background");
            stageno0.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            stageno0.style.backgroundColor = "#52ec61";
        } else {
            nextBtnStage4.classList.add("btnDisabled");
        }
    });


    prevBtnStage5.addEventListener('click', () => {
        signupContent1.classList.add("hiddenElement");
        signupContent3.classList.add("hiddenElement");
        signupContent2.classList.add("hiddenElement");
        signupContent4.classList.remove("hiddenElement");
        signupContent5.classList.add("hiddenElement");

        stageBtns1.classList.add("hiddenElement");
        stageBtns2.classList.add("hiddenElement");
        stageBtns3.classList.add("hiddenElement");
        stageBtns4.classList.remove("hiddenElement");
        stageBtns5.classList.add("hiddenElement");

        scrollContainer.scrollLeft = 0;

        setTimeout(() => {
            // stageno0.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            document.querySelector(".current-item-mobile").classList.remove("grey-background");
            document.querySelector(".current-item-mobile").classList.add("green-background");
            document.querySelector(".current-item-mobile").classList.remove("white-background");
            stageno0.style.backgroundColor = "#52EC61";
            toolTip0.style.color = "#ae0e30";
            toolTip0.textContent = "Contacto emergencia";
                
            // stageno0.textContent = "1";
            stageno0.innerText = "✔";
            stageno0.style.color = "#52EC61 !important";

            toolTip1.textContent = "Información cuenta";
            stageno1.textContent = "4";

            toolTip2.textContent = "Imagen cuenta";
            stageno2.textContent = "5";
        }, 100);    
    });

    nextBtnStage5.addEventListener('click', () => {
        if (checkState5() === true) {
            signupContent1.classList.add("hiddenElement");
            signupContent3.classList.add("hiddenElement");
            signupContent2.classList.add("hiddenElement");
            signupContent4.classList.add("hiddenElement");
            signupContent5.classList.add("hiddenElement");
            signupContent6.classList.remove("hiddenElement");

            stageBtns1.classList.add("hiddenElement");
            stageBtns2.classList.add("hiddenElement");
            stageBtns3.classList.add("hiddenElement");
            stageBtns4.classList.add("hiddenElement");
            stageBtns5.classList.add("hiddenElement");
            stageBtns6.classList.remove("hiddenElement");

            scrollContainer.scrollLeft = 0;

            setTimeout(() => {  
                toolTip0.style.color = "#ae0e30";
                toolTip0.textContent = "Imagen cuenta";
                
                // stageno0.textContent = "1";
                stageno0.innerText = "✔";
                stageno0.style.color = "white !important";

                toolTip1.textContent = "Finalizar registro";
                stageno1.textContent = "6";

                toolTip2.textContent = "";
                stageno2.textContent = ""; 
            }, 100);
            document.querySelector(".last-item-mobile").classList.add("white-background");
            document.querySelector(".current-item-mobile").classList.add("green-background");
            // stageno6.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            stageno6.style.backgroundColor = "#fff";
            stageno0.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            stageno0.style.backgroundColor = "#52ec61";
        } else {
            nextBtnStage5.classList.add("btnDisabled");
        }
    });

    prevBtnStage6.addEventListener('click', () => {
        signupContent1.classList.add("hiddenElement");
        signupContent3.classList.add("hiddenElement");
        signupContent2.classList.add("hiddenElement");
        signupContent4.classList.add("hiddenElement");
        signupContent5.classList.remove("hiddenElement");
        signupContent6.classList.add("hiddenElement");

        stageBtns1.classList.add("hiddenElement");
        stageBtns2.classList.add("hiddenElement");
        stageBtns3.classList.add("hiddenElement");
        stageBtns4.classList.add("hiddenElement");
        stageBtns5.classList.remove("hiddenElement");
        stageBtns6.classList.add("hiddenElement");

        scrollContainer.scrollLeft = 0;

        setTimeout(() => {
            // stageno0.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            document.querySelector(".current-item-mobile").classList.remove("grey-background");
            document.querySelector(".current-item-mobile").classList.add("green-background");
            document.querySelector(".current-item-mobile").classList.remove("white-background");
            stageno0.style.backgroundColor = "#52EC61";
            toolTip0.style.color = "#ae0e30";
            toolTip0.textContent = "Información cuenta";
                
            // stageno0.textContent = "1";
            stageno0.innerText = "✔";
            stageno0.style.color = "#52EC61 !important";

            toolTip1.textContent = "Imagen cuenta";
            stageno1.textContent = "5";

            toolTip2.textContent = "Finalizar registro";
            stageno2.textContent = "6";
        }, 100);    
    });

    nextBtnStage6.addEventListener('click', () => {
        if (checkState6() === true) {
            signupContent1.classList.add("hiddenElement");
            signupContent3.classList.add("hiddenElement");
            signupContent2.classList.add("hiddenElement");
            signupContent4.classList.add("hiddenElement");
            signupContent5.classList.add("hiddenElement");
            signupContent6.classList.add("hiddenElement");
            
            stageBtns1.classList.add("hiddenElement");
            stageBtns2.classList.add("hiddenElement");
            stageBtns3.classList.add("hiddenElement");
            stageBtns4.classList.add("hiddenElement");
            stageBtns5.classList.add("hiddenElement");
            stageBtns6.classList.add("hiddenElement");

            scrollContainer.scrollLeft = 0;

            setTimeout(() => {  
                toolTip0.style.color = "#ae0e30";
                toolTip0.textContent = "Imagen cuenta";
                
                // stageno0.textContent = "1";
                stageno0.innerText = "✔";
                stageno0.style.color = "white !important";

                toolTip1.textContent = "Finalizar registro";
                stageno1.textContent = "✔";
                stageno1.style.color = "white !important";

                toolTip2.textContent = "";
                stageno2.textContent = ""; 
            }, 100);
            document.querySelector(".last-item-mobile").classList.add("white-background");
            document.querySelector(".current-item-mobile").classList.add("green-background");
            // stageno6.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            stageno6.style.backgroundColor = "#fff";

            stageno1.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            stageno1.style.backgroundColor = "#52ec61";
            stageno0.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            stageno0.style.backgroundColor = "#52ec61";

            const popUpAnimationContent = document.getElementsByClassName("popupAnimation");

            if (popUpAnimationContent.length > 0) {
                const firstPopUpAnimation = popUpAnimationContent[0]; // Tomamos el primer elemento

                const imgElement = firstPopUpAnimation.querySelector('img');
                imgElement.src = '/assets/Login/sucessPopup.png';

                const h2Element = firstPopUpAnimation.querySelector('h2');
                h2Element.textContent = 'Registro Completado';

                const pElement = firstPopUpAnimation.querySelector('p');
                pElement.textContent = 'Su cuenta ha sido registrada con éxito. Ahora su solicitud se encuentra en proceso de revisión para su habilitación. Le notificaremos una vez que su cuenta haya sido aprobada.';

                const btnElement = firstPopUpAnimation.querySelector('.btn-accept');

                MostrarBackgroundDesenfocado();
                firstPopUpAnimation.classList.remove("hiddenElement");

                btnElement.addEventListener('click', () => {
                    OcultarBackgroundDesenfocado();
                    firstPopUpAnimation.classList.add("hiddenElement");
                });
            }
        } else {
            nextBtnStage6.classList.add("btnDisabled");
        }
    });
});
