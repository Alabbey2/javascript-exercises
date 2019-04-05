$(document).ready(function(){
    $('.addTask').click(function(){
        var inputText = $('#inputField').val();
        $('.addedTasks .taskList').append('<li>' + inputText + 
        '<button class="markAsDone btn btn-success">Done</button></li>');
        $('#inputField').val('');
    });


    $(document).on('click', '.markAsDone', function(){
        var inputText = this.parentNode.innerText;
        $('.doneTasks .taskList').append('<li>' +
        inputText + '<button class="removeTask btn btn-danger">Remove task</button><li>');
        this.parentNode.remove();
    });

    $(document).on('click', '.removeTask', function(){
        this.parentNode.remove();
    })
      
});

/*
console.log('This is the line of code that is ran first when the page loads');
console.log('This is the second line of code that is ran when the page loads');

function sampleFunction() {
    console.log('This line will only be ran once sampleFunction is invoked');
    console.log('And then it would be this line turn');
    console.log('Now we are going to call the next function');
    nextFunction();
}

console.log('This line will be call right before we start invoking the sampleFunction');
sampleFunction(); // we are invoking the function right here

function nextFunction() {
    var i = 10;
    console.log('This is the value of i right before the while line below');
    console.log('This is the value of i right before the while line below');

    while (i--) {
        console.log('When you see this line, the value of i has just been subtracted by 1');       
        console.log('The value of i is currently: ' + i);
    }
    console.log('One this line is reached, the value of i is: ' + 0)
}
/*

