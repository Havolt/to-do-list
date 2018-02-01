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
    currOption: [{num : 0, name: 'all', selected: true}, {num: 1, name: 'incomplete', selected: false}, {num: 2, name: 'finished', selected: false}],
    addOptionButtonFunction: function(divs){
        for(let i = 0; i < divs.length; i++){
            divs[i].addEventListener('click', function(){
                for(let j = 0; j < listObj.currOption.length; j++){
                    if(i != j){listObj.currOption[j].selected = false;}else{listObj.currOption[j].selected = true;}
                }
                for(let j = 0; j < listObj.currOption.length; j++){
                    if(listObj.currOption[j].selected){
                        let classCheck = false;
                        for(let k = 0; k < divs[j].classList.length; k++){if(divs[j].classList[k] == 'optionsSelect'){classCheck = true}}
                        if(!classCheck){divs[j].classList.add('optionsSelect')}
                    }else{
                        for(let k = 0; k < divs[j].classList.length; k++){if(divs[j].classList[k] == 'optionsSelect'){divs[j].classList.remove('optionsSelect')}}
                    }
                }
                console.log(listObj.currOption);
            })
        }
    },
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
    creEl('div', 'optionsContain', document.getElementById('app'));
    creEl('div', ['optionsButton', 'optionsSelect'], document.getElementsByClassName('optionsContain')[0], 'Show All');
    creEl('div', 'optionsButton', document.getElementsByClassName('optionsContain')[0], 'Incomplete');
    creEl('div', 'optionsButton', document.getElementsByClassName('optionsContain')[0], 'Finished');
    listObj.addOptionButtonFunction(document.getElementsByClassName('optionsButton'));
})()