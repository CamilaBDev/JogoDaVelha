botao1.querySelector('#botao1');
botao2.querySelector('#botao2');

bloco1.querySelector('#bloco1');
bloco2.querySelector('#bloco2');
bloco3.querySelector('#bloco3');
bloco4.querySelector('#bloco4');
bloco5.querySelector('#bloco5');
bloco6.querySelector('#bloco6');
bloco7.querySelector('#bloco7');
bloco8.querySelector('#bloco8');
bloco9.querySelector('#bloco9');

p1.querySelector('#p1');
p2.querySelector('#p2');
p3.querySelector('#p3');
p4.querySelector('#p4');
p5.querySelector('#p5');
p6.querySelector('#p6');
p7.querySelector('#p7');
p8.querySelector('#p8');
p9.querySelector('#p9');

/*
let player = 'X'


botao1.addEventListener('click', function() {
    botao1.parentNode.removeChild(botao1);
    botao2.parentNode.removeChild(botao2);
});


*/


var player = 1;
var conteudo = [0, 3, 0, 3, 0, 3, 3, 0, 3]
var soma = 0;


// verificando se tem ganhador atravez do array.

function conferir() {
    if( (conteudo[0] ==  conteudo[1])  &&  (conteudo[1] == conteudo[2])) {
        console.log('venceu pois o 0, 1 e 2 sao iguais');
    } else if ( (conteudo[3] == conteudo[4]) && ( conteudo[4] == conteudo[5])) {
        console.log('venceu pois o 3, 4, e 5 sao iguais');
    } else if ( (conteudo[6] == conteudo[7]) && (conteudo[7] == conteudo[8])) {
        console.log('venceu pois o 6, 7, e 8 sao iguais');
    } else if ( (conteudo[0] == conteudo[3]) && ( conteudo[3] == conteudo[6])) {
        console.log('venceu pois o 0, 3, e 6 sao iguais');
    } else if ( (conteudo[1] == conteudo[4]) && ( conteudo[4] == conteudo[7])) {
        console.log('venceu pois o 1, 4, e 7 sao iguais');
    } else if ( (conteudo[2] == conteudo[5]) && ( conteudo[5] == conteudo[8])) {
        console.log('venceu pois o 2, 5, e 8 sao iguais');
    } else if ( (conteudo[0] == conteudo[4]) && ( conteudo[4] == conteudo[8])) {
        console.log('venceu pois o 0, 4, e 8 sao iguais');
    } else if ( (conteudo[2] == conteudo[4]) && ( conteudo[4] == conteudo[6])) {
        console.log('venceu pois o 0, 4, e 8 sao iguais');
    }else {
        console.log('o jogo ainda nao acabou');
    }   
}

// eventos dos blocos

bloco1.addEventListener("click", function jogada() {
    if ( conteudo[0] == 0 ) {
        if ( player == 1) {
            p1.textContent = 'X';
            player = 2;
            conteudo.splice(0, 1, 1);
            conferir();
        } else {
            p1.textContent = 'O';
            player = 1;
            conteudo.splice(0, 1, 2);
            conferir();
        }
    }
});

bloco2.addEventListener("click", function jogada() {
    if ( conteudo[1] == 3 ) {
        if ( player == 1) {
            p2.textContent = 'X';
            player = 2;
            conteudo.splice(1, 1, 1);
            conferir();
        } else {
            p2.textContent = 'O';
            player = 1;
            conteudo.splice(1, 1, 2);
            conferir();
        }
    }
});

bloco3.addEventListener("click", function jogada() {
    if ( conteudo[2] == 0) {
        if ( player == 1) {
            p3.textContent = 'X';
            player = 2;
            conteudo.splice(2, 1, 1);
            conferir();
        } else {
            p3.textContent = 'O';
            player = 1;
            conteudo.splice(2, 1, 2);
            conferir();
        }
    }
});

bloco4.addEventListener("click", function jogada() {
    if ( conteudo[3] == 3) {
        if ( player == 1) {
            p4.textContent = 'X';
            player = 2;
            conteudo.splice(3, 1, 1);
            conferir();
        } else {
            p4.textContent = 'O';
            player = 1;
            conteudo.splice(3, 1, 2);
            conferir();
        }
    }
});

bloco5.addEventListener("click", function jogada() {
    if ( conteudo[4] == 0 ) {
        if ( player == 1) {
            p5.textContent = 'X';
            player = 2;
            conteudo.splice(4, 1, 1);
            conferir();
        } else {
            p5.textContent = 'O';
            player = 1;
            conteudo.splice(4, 1, 2);
            conferir();
        }
    }
});

bloco6.addEventListener("click", function jogada() {
    if ( conteudo[5] == 3) {
        if ( player == 1) {
            p6.textContent = 'X';
            player = 2;
            conteudo.splice(5, 1, 1);
            conferir();
        } else {
            p6.textContent = 'O';
            player = 1;
            conteudo.splice(5, 1, 2);
            conferir();
        }
    }
});

bloco7.addEventListener("click", function jogada() {
    if ( conteudo[6] == 3) {
        if ( player == 1) {
            p7.textContent = 'X';
            player = 2;
            conteudo.splice(6, 1, 1);
            conferir();
        } else {
            p7.textContent = 'O';
            player = 1;
            conteudo.splice(6, 1, 2);
            conferir();
        }
    }
});

bloco8.addEventListener("click", function jogada() {
    if ( conteudo[7] == 0) {
        if ( player == 1) {
            p8.textContent = 'X';
            player = 2;
            conteudo.splice(7, 1, 1);
            conferir();
        } else {
            p8.textContent = 'O';
            player = 1;
            conteudo.splice(7, 1, 2);
            conferir();
        }
    }
});

bloco9.addEventListener("click", function jogada() {
    if ( conteudo[8] == 3) {
        if ( player == 1) {
            p9.textContent = 'X';
            player = 2;
            conteudo.splice(8, 1, 1);
            conferir();
        } else {
            p9.textContent = 'O';
            player = 1;
            conteudo.splice(8, 1, 2);
            conferir();
        }
    }
});



