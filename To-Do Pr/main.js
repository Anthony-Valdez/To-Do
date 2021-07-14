 //Creación de objetos.
 let input = document.querySelector('#todo');
 let btn = document.querySelector('#btn');
 let list = document.querySelector('#list');
 
 //Función para el boton
 btn.addEventListener('click',() =>{
     let txt = input.value;
 
     if( txt === ""){
         alert('No hay nada escrito');
     }
     else{
         let li = document.createElement('li');
         li.innerHTML = txt;
         list.insertBefore(li, list.childNodes[0]);
         input.value = '';
         li.appendChild(addDeleteBtn());
     }
 });
 
//Funcion para verificar
 list.addEventListener('click', e =>{
     if(e.target.tagName == 'LI'){
          e.target.classList.toggle('checked');
        }
    
 });  

 //Funcion para eliminar
 function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
  
    deleteBtn.textContent = "X";
  
    deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    list.removeChild(item);
  
    const items = document.querySelectorAll("li");
  
    if (items.length === 0) {
    empty.style.display = "block";
    }
});
  
    return deleteBtn;
  }
