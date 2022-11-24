function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var anod = document.querySelector('input#txtano')
    var res = document.querySelector('div#res');
    

        if (anod.value < 1930 || anod.value > ano) {
            window.alert(`[ERRO] Verifique os dados e tente novamente!`);
        } else {
            var fsex = document.getElementsByName('radsex'); 
            var idade = ano - Number(anod.value);
            var genero = '';
            var img = document.createElement('img');
                if (fsex[0].checked) {
                    genero = 'Homem'
                        if(idade >= 0 && idade <= 15 ) {
                            img.setAttribute('src', 'img/foto-bebe-m.png')
                        } else if ( idade < 25) {
                            img.setAttribute('src', 'img/foto-jovem-m.png')
                        } else if (idade < 50) {
                            img.setAttribute('src', 'img/foto-adulto-m.png')
                        } else {
                            img.setAttribute('src', 'img/foto-idoso-m.png')
                        }
                } else if (fsex[1].checked) {
                    genero = 'Mulher'
                        if(idade >= 0 && idade <= 15 ) {
                            img.setAttribute('src', 'img/foto-bebe-f.png')
                        } else if ( idade < 25) {
                            img.setAttribute('src', 'img/foto-jovem-f.png')
                        } else if (idade < 50) {
                            img.setAttribute('src', 'img/foto-adulto-f.png')
                        } else {
                            img.setAttribute('src', 'img/foto-idoso-f.png')
                        }
                }

                res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade!`;
                res.appendChild(img);
        }
}