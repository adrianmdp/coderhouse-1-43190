

const makeButton = (text, id, className) => {
    const button = document.createElement('button');
    const txt = document.createTextNode(text);
    button.appendChild(txt);
    button.classList.add(className);
    button.id = id;
    document.body.appendChild(button);
}

makeButton('Enviar', 'btn-default', 'btn-default');
makeButton('Registrarse', 'btn-signup', 'btn-primary');
makeButton('Iniciar sesión', 'btn-login', 'btn-secondary');
makeButton('Iniciar sesión', 'btn-login', 'btn-secondary');
makeButton('Iniciar sesión', 'btn-login', 'btn-secondary');
makeButton('Iniciar sesión', 'btn-login', 'btn-secondary');
