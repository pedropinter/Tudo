let imgPK = document.querySelector("#fotoPK");
let formPK = document.querySelector("#formPK");
let inputPK = document.querySelector("#inputPK");

let idPK = document.querySelector("#idPK");
let nomePK = document.querySelector("#nomePK");

let tipo1 = document.querySelector("#tipo1PK");
let tipo2 = document.querySelector("#tipo2PK");

let habiPK = document.querySelector("#habiPK");
let pesoPK = document.querySelector("#pesoPK");
let alturaPK = document.querySelector("#alturaPK");

let btnVoltar = document.querySelector("#btnVoltar");
let btnProximo = document.querySelector("#btnProximo");

let audio = document.querySelector("#musica");
let btnPlay = document.querySelector("#btnPlay");

let numeroPokedex = 1;

const fetchPokemon = async(pokemon)=>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data
}
const showPokemon = async(pokemon) =>{
    const dataPokemon = await fetchPokemon(pokemon);
    imgPK.src = dataPokemon.sprites.front_default;
    idPK.innerHTML = `ID: ${dataPokemon.id}`;
    nomePK.innerHTML = `Nome: ${dataPokemon.name}`;
    tipo1.innerHTML = `Tipo: ${dataPokemon.types[0].type.name}`;
    if(
        dataPokemon.types[1] != undefined
    ){
    tipo2.innerHTML = dataPokemon.types[1].type.name;}
    else{
        tipo2.innerHTML = ""
    }
    habiPK.innerHTML = `Habilidade: ${dataPokemon.abilities[0].ability.name}`;
    pesoPK.innerHTML = `Peso: ${dataPokemon.weight/10}KG`;
    alturaPK.innerHTML = `Altura: ${dataPokemon.height/10}m`;
    const audio = new Audio(dataPokemon.cries.latest);
    audio.play();
}
formPK.addEventListener("submit",(event)=>{
    event.preventDefault();
    showPokemon(inputPK.value.toLowerCase());
})
btnVoltar.addEventListener("click",(event)=>{
    if(numeroPokedex>1){
        numeroPokedex = numeroPokedex-1
    }
    showPokemon(numeroPokedex);
})
btnProximo.addEventListener("click",(event)=>{
    if(numeroPokedex<1025){
        numeroPokedex = numeroPokedex+1
    }
    showPokemon(numeroPokedex);
})

btnPlay.addEventListener('click',(event)=>{
    if (audio.paused){
        audio.play();
        btnPlay.textContent = "Pause"
    }
    else{
        audio.pause()
        btnPlay.textContent = "Play"
    }
});

showPokemon(numeroPokedex);