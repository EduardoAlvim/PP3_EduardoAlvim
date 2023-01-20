let validar = document.getElementById('val');
const enviar = document.getElementById('sub');
enviar.disabled = true;
$("#sub").slideToggle(500);

validar.addEventListener('click', (e) => {
    Validacao(e);
});

function Validacao(e) {
    let valueradio;
    const CPF = document.getElementById('cpf');
    const Nome = document.getElementById('nome');
    const Email = document.getElementById('email');
    const cb1 = document.getElementById('rec');
    const cb2 = document.getElementById('duv');
    const cb3 = document.getElementById('outro');
    const r1 = document.getElementById('masc');
    const r2 = document.getElementById('fem');
    const text = document.getElementById('com');

    const spanCPF = document.getElementById('cpfSpan');
    const spanNome = document.getElementById('nomeSpan');
    const spanEmail = document.getElementById('emailSpan');
    const spanCb = document.getElementById('checkSpan');
    const spanR = document.getElementById('radioSpan');

    const mCPF = document.getElementById('modCpf');
    const mNome = document.getElementById('modNome');
    const mEmail = document.getElementById('modEmail');
    const mSexo = document.getElementById('modSexo');
    const mMot = document.getElementById('modMotivo');
    const mCom = document.getElementById('modComentario');

    if (CPF.value === "") {
        spanCPF.textContent = 'O campo de CPF não pode estar vazio';
        CPF.style.borderColor = 'red';
        enviar.disabled = true;
    }

    else if (Nome.value === "") {
        spanNome.textContent = 'O campo de nome não pode estar vazio';
        Nome.style.borderColor = 'red';
        enviar.disabled = true;
    }

    else if (Email.value === "") {
        spanEmail.textContent = 'O campo de nome não pode estar vazio';
        Email.style.borderColor = 'red';
        enviar.disabled = true;
    }

    else if (r1.checked === false && r2.checked == false) {
        spanR.textContent = 'Você deve escolher pelo menos uma opção';
        enviar.disabled = true;
    }

    else if (cb1.checked === false && cb2.checked == false && cb3.checked == false) {
        spanCb.textContent = 'Você deve escolher pelo menos uma opção';
        enviar.disabled = true;
    }

    else {
        spanCPF.textContent = ' ';
        mCPF.textContent = "CPF: "+CPF.value;
        spanNome.textContent = ' ';
        mNome.textContent = "Nome: "+Nome.value;
        spanEmail.textContent = ' ';
        mEmail.textContent = "E-mail: "+Email.value;
        if(r1.checked === true){
            mSexo.textContent = "Sexo: Masculino";
        }
        else{
            mSexo.textContent = "Sexo: Feminino";
        }
        if(cb1.checked === true && cb2.checked === true && cb3.checked === true){
            mMot.textContent = "Motivo: Reclamação, Dúvida e Outro";
        }
        else if(cb1.checked === true && cb2.checked === true){
            mMot.textContent = "Motivo: Reclamação e Dúvida";
        }
        else if(cb1.checked === true && cb3.checked === true){
            mMot.textContent = "Motivo: Reclamação e Outro";
        }
        else if(cb2.checked === true && cb3.checked === true){
            mMot.textContent = "Motivo: Dúvida e Outro";
        }
        else if(cb3.checked === true){
            mMot.textContent = "Motivo: Outro";
        }
        else if(cb2.checked === true){
            mMot.textContent = "Motivo: Dúvida";
        }
        else if(cb1.checked === true){
            mMot.textContent = "Motivo: Reclamação";
        }
        mCom.textContent = "Comentario: "+text.value;
        spanCb.textContent = ' ';
        spanR.textContent = ' ';
        CPF.style.borderColor = 'black';
        Nome.style.borderColor = 'black';
        Email.style.borderColor = 'black';
        enviar.disabled = false;
        $("#sub").slideToggle(500);
    }
    
}
$(document).ready(function () {
    $("#editar").click(function () {
        $("#sub").slideToggle(500);
        enviar.disabled = true;
    });
});
