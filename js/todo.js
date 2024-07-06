const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')


function addTask(){
    if(inputBox.value === ''){
        alert('empty')
    }else{
        let li= document.createElement('li',)
        
        let spanTask = document.createElement('span');
        spanTask.className = 'task-list-text';
        spanTask.textContent = inputBox.value;
        li.appendChild(spanTask);
        listContainer.appendChild(li)


        let spanClose = document.createElement('span')    
        spanClose.className = "task-list-close"
        spanClose.innerHTML = "\u00d7"
        li.appendChild(spanClose)
    }
    inputBox.value = ""
    saveData()
}


listContainer.addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }else if(e.target.className === 'task-list-close'){
        e.target.parentElement.remove();
        saveData()
    }
},false)


function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}


function showTask(){
    listContainer.innerHTML =  localStorage.getItem('data')
}

showTask();