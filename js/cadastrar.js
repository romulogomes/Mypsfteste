$(function(){
		$('form#cadastro').submit(function(){	
			var xmlhttp;  
            var entrou = 0;

			var nome = document.getElementById('nome_cadastro').value;
			var senha1 = document.getElementById('senha_cadastro').value;
			var senha2 = document.getElementById('senha_cadastro2').value;

			if(senha1 != senha2){
			  alert('Senhas não Iguais');
			  return false;
			}

			var sus = document.getElementById('sus').value;
			var endereco = document.getElementById('ende').value;
			var telefone = document.getElementById('telefone').value;


			if(nome == '' || senha == '' || sus == '' || endereco == '' || telefone == ''){
				alert("Preencha todos os campos");
				return false;
			}
			
			xmlhttp=new XMLHttpRequest();
			xmlhttp.onreadystatechange=function(){
			  
		       if (xmlhttp.readyState==4 && xmlhttp.status==200)
			     {
			    	var reposta_servidor = xmlhttp.responseText;
					alert(reposta_servidor);
					document.getElementById('carrega_cad').style.display = "none";
			   	    
			   }
			   else{
			   	if(entrou == 0)
			   		document.getElementById('carrega_cad').style.display = "block";
			   	    entrou = 1;
			   }
				
			}
						  
			var p = "nome="+nome+"&senha="+senha1+"&sus="+sus+"&endereco="+endereco+"&telefone="+telefone;
				
			xmlhttp.open("POST","http://projetofilipe.com/meupsf/php/cadastrar.php",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send(p);
			
		return false;
		});
	});
