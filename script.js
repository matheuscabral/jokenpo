var j=0;
var x;
var pontoM=0;
var pontoJ=0;

function mudaImagem(i){
	j=j+i;
	var imgjog=document.getElementById("jogada");
	if(j<=-1 || j>=3){
		if(j<0){
			j=2;
		}
		if(j>2){
			j=0;
		}
	}
	if(j==0) {
        imgjog.src="pedra.png";
    }
	if(j==1) {
        imgjog.src="papel.png";
    } 
	if(j==2) {
        imgjog.src="tesoura.png";
    } 
}

function start(){
	var aux;
	x=Math.floor(Math.random() * 3);
	if(x==0) {
        document.getElementById("jogadamaquina").src="pedra.png";
	}
	if(x==1) {
        document.getElementById("jogadamaquina").src="papel.png";
	} 
	if(x==2) {
        document.getElementById("jogadamaquina").src="tesoura.png";
	}
	if(x!=j){
		if((x==0 && j==1) || (x==1 && j==2) || (x==2 && j==0)){
			pontoJ=pontoJ+1;
			document.getElementById("resposta").innerHTML="Jogador Ganhou";
			if((pontoJ%10)==1){
				document.getElementById("ju").src="1.png";
			}
			if((pontoJ%10)==2){
				document.getElementById("ju").src="2.png";
			}
			if((pontoJ%10)==3){
				document.getElementById("ju").src="3.png";
			}
			if((pontoJ%10)==4){
				document.getElementById("ju").src="4.png";
			}
			if((pontoJ%10)==5){
				document.getElementById("ju").src="5.png";
			}
			if((pontoJ%10)==6){
				document.getElementById("ju").src="6.png";
			}
			if((pontoJ%10)==7){
				document.getElementById("ju").src="7.png";
			}
			if((pontoJ%10)==8){
				document.getElementById("ju").src="8.png";
			}
			if((pontoJ%10)==9){
				document.getElementById("ju").src="9.png";
			}
			if(pontoJ>9){
				if((pontoJ%100)/10==0){
					document.getElementById("jd").src="0.png";
				}
				if((pontoJ%100)/10==1){
					document.getElementById("jd").src="1.png";
				}
				if((pontoJ%100)/10==2){
					document.getElementById("jd").src="2.png";
				}
				if((pontoJ%100)/10==3){
					document.getElementById("jd").src="3.png";
				}
				if((pontoJ%100)/10==4){
					document.getElementById("jd").src="4.png";
				}
				if((pontoJ%100)/10==5){
					document.getElementById("jd").src="5.png";
				}
				if((pontoJ%100)/10==6){
					document.getElementById("jd").src="6.png";
				}
				if((pontoJ%100)/10==7){
					document.getElementById("jd").src="7.png";
				}
				if((pontoJ%100)/10==8){
					document.getElementById("jd").src="8.png";
				}
				if((pontoJ%100)/10==9){
					document.getElementById("jd").src="9.png";
				}
				if((pontoJ%10)==0){
					document.getElementById("ju").src="0.png";
				}
				if((pontoJ%10)==1){
					document.getElementById("ju").src="1.png";
				}
				if((pontoJ%10)==2){
					document.getElementById("ju").src="2.png";
				}
				if((pontoJ%10)==3){
					document.getElementById("ju").src="3.png";
				}
				if((pontoJ%10)==4){
					document.getElementById("ju").src="4.png";
				}
				if((pontoJ%10)==5){
					document.getElementById("ju").src="5.png";
				}
				if((pontoJ%10)==6){
					document.getElementById("ju").src="6.png";
				}
				if((pontoJ%10)==7){
					document.getElementById("ju").src="7.png";
				}
				if((pontoJ%10)==8){
					document.getElementById("ju").src="8.png";
				}
				if((pontoJ%10)==9){
					document.getElementById("ju").src="9.png";
				}
			}
		}else{
			pontoM=pontoM+1;
			document.getElementById("resposta").innerHTML = "Maquina Ganhou";
			if(pontoM>99){
				alert("Voce e uma vergonha para a humanidade");
			}
			if((pontoM%10)==1){
				document.getElementById("mu").src="1.png";
			}
			if((pontoM%10)==2){
				document.getElementById("mu").src="2.png";
			}
			if((pontoM%10)==3){
				document.getElementById("mu").src="3.png";
			}
			if((pontoM%10)==4){
				document.getElementById("mu").src="4.png";
			}
			if((pontoM%10)==5){
				document.getElementById("mu").src="5.png";
			}
			if((pontoM%10)==6){
				document.getElementById("mu").src="6.png";
			}
			if((pontoM%10)==7){
				document.getElementById("mu").src="7.png";
			}
			if((pontoM%10)==8){
				document.getElementById("mu").src="8.png";
			}
			if((pontoM%10)==9){
				document.getElementById("mu").src="9.png";
			}
			if(pontoM>9){
				if((pontoM%100)/10==0){
					document.getElementById("md").src="0.png";
				}
				if((pontoM%100)/10==1){
					document.getElementById("md").src="1.png";
				}
				if((pontoM%100)/10==2){
					document.getElementById("md").src="2.png";
				}
				if((pontoM%100)/10==3){
					document.getElementById("md").src="3.png";
				}
				if((pontoM%100)/10==4){
					document.getElementById("md").src="4.png";
				}
				if((pontoM%100)/10==5){
					document.getElementById("md").src="5.png";
				}
				if((pontoM%100)/10==6){
					document.getElementById("md").src="6.png";
				}
				if((pontoM%100)/10==7){
					document.getElementById("md").src="7.png";
				}
				if((pontoM%100)/10==8){
					document.getElementById("md").src="8.png";
				}
				if((pontoM%100)/10==9){
					document.getElementById("md").src="9.png";
				}
				if(pontoM%10==0){
					document.getElementById("mu").src="0.png";
				}
				if(pontoM%10==1){
					document.getElementById("mu").src="1.png";
				}
				if(pontoM%10==2){
					document.getElementById("mu").src="2.png";
				}
				if(pontoM%10==3){
					document.getElementById("mu").src="3.png";
				}
				if(pontoM%10==4){
					document.getElementById("mu").src="4.png";
				}
				if(pontoM%10==5){
					document.getElementById("mu").src="5.png";
				}
				if(pontoM%10==6){
					document.getElementById("mu").src="6.png";
				}
				if(pontoM%10==7){
					document.getElementById("mu").src="7.png";
				}
				if(pontoM%10==8){
					document.getElementById("mu").src="8.png";
				}
				if(pontoM%10==9){
					document.getElementById("mu").src="9.png";
				}
			}
		}
	}else{
		document.getElementById("resposta").innerHTML = "Empate";
	}
}

	

