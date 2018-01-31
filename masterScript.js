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
            let newObj = {};
            newObj.text = document.getElementsByClassName('newListInput')[0].value;
            newObj.complete = false;
            listObj.itemData.push(newObj);
        }
        document.getElementsByClassName('newListInput')[0].value = '';
        },
    clearList: function(){
        document.getElementsByClassName('listContain')[0].innerHTML='';
    },
    createList: function(){
        let listRunner = 0;
        for(let i = listObj.itemData.length-1; i >= 0; i--){
            listObj.itemData[i].number = listRunner;
            
            creEl('div', 'listItem', document.getElementsByClassName('listContain')[0]);
            creEl('div', 'listItemCheck', document.getElementsByClassName('listItem')[listRunner]);
            document.getElementsByClassName('listItemCheck')[listRunner].addEventListener('click', function(){
                const myCheckNum = listRunner;
                if(!listObj.itemData[i].complete){
                    console.log(listObj.itemData[i].number);
                    document.getElementsByClassName('listItemCheck')[listObj.itemData[i].number].innerHTML = '<i class="fa fa-check"></i>';
                    listObj.itemData[i].complete = true;
                }
            })
            creEl('div', 'listItemText', document.getElementsByClassName('listItem')[listRunner], listObj.itemData[i].text);
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