$(function(){
		$('form#login').submit(function(){	
			var xmlhttp;  
			var entrou = 0;

			var nome = document.getElementById('nome').value;
			var senha = document.getElementById('senha').value;

			if(nome == '' || senha == ''){
			  alert("Preencha todos os campos");
			  return false;
			}

			xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function(){
			  
			  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			    {
			    	
					var reposta_servidor = xmlhttp.responseText;
					
					if(!reposta_servidor){
				      alert("Usuário não encontrado, Tente novamente");
					}
					
					else{

					  console.log(reposta_servidor);

					  var resposta = JSON.parse(reposta_servidor);

					  localStorage.setItem('nome', resposta.nome);
					  localStorage.setItem('endereco', resposta.endereco);
					  localStorage.setItem('telefone', resposta.telefone);
					  window.location = "menu.html";
					}
					
					document.getElementById('carrega_login').style.display = "none";
					
				}
			   else{
			   	if(entrou == 0)
			   		document.getElementById('carrega_login').style.display = "block";
			   }
				
		    }
			var p = "nome="+nome+"&senha="+senha;
				
			xmlhttp.open("POST","php/login.php",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send(p);

		return false;
		});
	});
