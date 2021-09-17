let input = '';
const todos = [];
while(true){
    input = prompt('what would you like to do?')
    if(input==='list'){
        console.log('***********************')
        for(let i=0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***********************')
    }
    else if(input==='new'){
        const newTodo = prompt('what is new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }
    else if(input==='delete'){
        const index = parseInt(prompt('enter index to delete:'));
        if(Number.isNaN(index)){
            console.log('Unknown index');
        }
        else{
            const deleted = todos.splice(index,1);
            console.log(`ok deleted ${deleted[0]}`);
        }
    }
    else if(input==='quit'){
        break;
    }
    else{
        console.log('enter valid input');
    }
}
console.log("OK QUIT THE APP")