//Funciones que pasan al html
var locatorproducto = new locator();
async function insert(){
 
    let nmcliente= document.getElementById('nmcliente').value;
    let documento = document.getElementById('documento').value;
    let dsnombres = document.getElementById('dsnombres').value;
    let desapellidos = document.getElementById('desapellidos').value;
    let dsdireccion = document.getElementById('dsdireccion').value;

    let Cliente = new cliente(nmcliente,documento,dsnombres,desapellidos,dsdireccion);
    console.log(Cliente)
    let result=await locatorproducto.save(Cliente)
    console.log(result)
    getAll()
}

async function update(){
 
    let sku= document.getElementById('sku').value;
    let dsproducto = document.getElementById('dsproducto').value;
    let Producto = new producto(sku,dsproducto);
    console.log(Producto)
    let result=await locatorproducto.update(Producto)
    console.log(result)
    
}   

async function delet(){
 
    let sku= document.getElementById('sku').value;   
    let Producto = new producto(sku);
    console.log(Producto)
    let result=await locatorproducto.delet(Producto)
    console.log(result)
}

async function getAll(){
    // let producto = new Producto(sku,dsproducto);
     let ressult= await locatorproducto.getAll();
     let data = ressult.data
     console.log(data)
     addTable(data);
 
 }

function addTable(listaDatos){

    let body = document.getElementById('lista_cliente_body');
    //Limpia el body lo pone en blanco
    body.innerHTML=null;
    let size = listaDatos.length;
    for (let id =0;id < size;id++){
        
        let tr = document.createElement('tr');
        let tdnmcliente = document.createElement('td');
        let trdocumento = document.createElement('td');

        tdnmcliente.innerText=listaDatos[id].nmcliente;
        trdocumento.innerText=listaDatos[id].documento;
 
        tr.appendChild(tdsku);
        tr.appendChild(trdsproducto);
        body.appendChild(tr);

    }

}

