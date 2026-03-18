let empresas = JSON.parse(localStorage.getItem("empresas")) || []

const form = document.getElementById("empresaForm")

if(form){

form.addEventListener("submit", function(e){

e.preventDefault()

let empresa = {

nome:document.getElementById("nome").value,
cidade:document.getElementById("cidade").value,
instagram:document.getElementById("instagram").value,
descricao:document.getElementById("descricao").value

}

empresas.push(empresa)

localStorage.setItem("empresas", JSON.stringify(empresas))

alert("Empresa cadastrada!")

})

}

const lista = document.getElementById("listaEmpresas")

if(lista){

empresas.forEach(e=>{

lista.innerHTML += `

<div class="empresa">

<h3>${e.nome}</h3>

<p>${e.cidade}</p>

<p>${e.instagram}</p>

<p>${e.descricao}</p>

</div>

`

})

}
