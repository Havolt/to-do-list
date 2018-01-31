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
    newItem: function(){
        if(document.getElementsByClassName('newListInput')[0].value){
            listObj.itemData.push(document.getElementsByClassName('newListInput')[0].value);
        }
        document.getElementsByClassName('newListInput')[0].value = '';
        },
    clearList: function(){
        document.getElementsByClassName('listContain')[0].innerHTML='';
    },
    createList: function(){
        let listRunner = 0;
        for(let i = listObj.itemData.length-1; i >= 0; i--){
            creEl('div', 'listItem', document.getElementsByClassName('listContain')[0]);
            creEl('div', 'listItemText', document.getElementsByClassName('listItem')[listRunner], listObj.itemData[i]);

            listRunner++;
        }
    },
    getTask: function(button){button.addEventListener('click', function(){
        listObj.newItem();
        listObj.clearList();
        listObj.createList();    
    })}
};


(function initApp(){
    creEl('div', 'app', document.body, '', '', 'app');
    creEl('div', 'titleContain', document.getElementById('app'));
    creEl('h1', 'toDoTitle', document.getElementsByClassName('titleContain')[0], 'To Do List');
    creEl('div', 'newListContain', document.getElementById('app'));
    creEl('input', 'newListInput', document.getElementsByClassName('newListContain')[0]);
    creEl('button', 'newListButton', document.getElementsByClassName('newListContain')[0], 'Add Task');
    listObj.getTask(document.getElementsByClassName('newListButton')[0]);
    creEl('div', 'listContain', document.getElementById('app'));
})()