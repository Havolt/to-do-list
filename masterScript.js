function creEl(type, cls, apnd, inHL, src, id){
    let newEl = document.createElement(type);
    if(typeof(cls) == 'object'){
        cls.forEach(function(element){newEl.classList.add(element);})
    }else{newEl.classList.add(cls);}
    if(inHL){newEl.innerHTML=inHL};
    if(src){newEl.src=src};
    if(id){newEl.id=id};
    apnd.appendChild(newEl);
};

let listObj = {
    itemData: [],
    newItem: function(item){this.itemData.push(item);}
};


(function initApp(){
    creEl('div', 'app', document.body, '', '', 'app');
    creEl('div', 'titleContain', document.getElementById('app'));
    creEl('h1', 'toDoTitle', document.getElementsByClassName('titleContain')[0], 'To Do List');
    creEl('div', 'newListContain', document.getElementById('app'));
    creEl('input', 'newListInput', document.getElementsByClassName('newListContain')[0]);
    creEl('button', 'newListButton', document.getElementsByClassName('newListContain')[0], 'Add Task')
})()