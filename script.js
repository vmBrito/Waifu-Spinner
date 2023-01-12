function clicar(){

    //definir um numero aleatorio
    const random = (num) => Math.floor(Math.random()*num);

    //atribuir o sexo ou o tipo através das marcações
    var sexo = document.getElementsByName("radsex")
    var tipo = document.getElementsByName("radt")

    //criou um elemento img dentro do JS
    var img = document.createElement("img")
    //essa imagem recebe o atributo "foto" em seu "id"
    img.setAttribute('id', 'foto')
    //pegou o texto com id "dados" e colocou seu estilo no meio(nao tinha feito isso antes)
    document.getElementById("dados").style.textAlign = 'center'

    //caso o sexo esteja marcado na primeira e na primeira caixa de baixo a variavel "a" recebe um numero aleatorio de 1 a 5
    if(sexo[0].checked && tipo[0].checked){
        var a =(random(5))
        
        if(a==0){
            document.getElementById("dados").innerHTML = "Afinal, eu sou o mais forte que existe."
            img.setAttribute('src', './img/gojou.png')

        }else if(a==1){
            document.getElementById("dados").innerHTML = "Ho ho, mukatte kuru no ka... kono Dio ni chikadzuite kuru no ka?"
            img.setAttribute('src', './img/dio.png')

        }else if(a==2){
            document.getElementById("dados").innerHTML = "você é o maior gostoso dos ultimos tempos"
            img.setAttribute('src', './img/mao.png')

        }else if (a==3){
            document.getElementById("dados").innerHTML = "traz a copa pra nós adulto ney"
            img.setAttribute('src', './img/neymar.png')

        }else if(a==4){
            document.getElementById("dados").innerHTML = "dar pra baixar a porra da musica?"
            img.setAttribute('src', './img/bean.png')
        }

    }else if (sexo[1].checked && tipo[1].checked){
        var a =(random(3))

        if(a==0){
            document.getElementById("dados").innerHTML = "as suas ordens madame🌹😳"    
            img.setAttribute('src', './img/beefpatty.png')

        }else if (a==1){
            document.getElementById("dados").innerHTML = "karaio hellokit! que porra é essa?"    
            img.setAttribute('src', './img/hellokit.png')

        }else if (a==2){
            document.getElementById("dados").innerHTML = "por favor, me quebre na porrada😳"    
            img.setAttribute('src', './img/mirko.png')
    }

    }else if (sexo[0].checked && tipo[1].checked){
        var a =(random(5))

        if(a==0){
            document.getElementById("dados").innerHTML = "nem fodendo!! Mestre Kame reall life"    
            img.setAttribute('src', './img/mestrekamereallife.png')

        }else if (a==1){
            document.getElementById("dados").innerHTML = "Somente a morte derrota um verdadeiro guerreiro"
            img.setAttribute('src', './img/baki.png')

        }else if (a==2){
            document.getElementById("dados").innerHTML = "e a sua proxima frase será!"    
            img.setAttribute('src', './img/joseph.png')

        }else if (a==3){
            document.getElementById("dados").innerHTML = "nosso futuro presidente🤩"    
            img.setAttribute('src', './img/lula.png')

        }else if (a==4){
            document.getElementById("dados").innerHTML = "seloco, o veio é  muito brabo"    
            img.setAttribute('src', './img/silverFang.png')

        }
    }else if (sexo[1].checked && tipo[0].checked){
        var a =(random(4))

        if(a==0){
            document.getElementById("dados").innerHTML = "algo de errado não está certo😳"    
            img.setAttribute('src', './img/astolfo2.png')

        }else if (a==1){
            document.getElementById("dados").innerHTML = "karaio mulek! que porra é essa?"    
            img.setAttribute('src', './img/reksai.png')

        }else if (a==2){
            document.getElementById("dados").innerHTML = "você é a maior gostosa dos ultimos tempos"    
            img.setAttribute('src', './img/mao.png') 

        }else if (a==3){
            document.getElementById("dados").innerHTML = "é dessas japonesinhas que eu gosto"    
            img.setAttribute('src', './img/M3000.png')
            
        }
    }
    document.getElementById("dados").appendChild(img)
}