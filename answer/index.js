function mainF(){
    let btnY = document.querySelector('.btnY');
    let btnN = document.querySelector('.btnN');
    let username = document.querySelector('.username');
    let mainText = document.querySelector('.maintext');
    let buttons = document.querySelector('.buttons');

    let question = [
        ['5 < 3?'],
        ['10 > 3?'],
        ['10 === 10?'],
        ['30 > 15?'],
        ['15 > 15?'],
        ['30 > 10?'],
    ];
    let answers = [
        ['no'],
        ['yes'],
        ['yes'],
        ['yes'],
        ['no'],
        ['yes'],
    ];
    

    function nameuser(){
        let a  = prompt('What\'s your name?', '');
        if (a){
            username.innerHTML = `Nice to meet you ${a}`;
        } if (username === '' || typeof username === null){
            username.innerHTML = 'please enter your name';
        }
    };
    nameuser();
    if (nameuser != undefined){
        let changeStatus = function(){
            mainText.innerHTML = `are you ready?`;
            username.innerHTML = '';
            buttons.classList.remove('noactive');
            buttons.classList.add('active');
        };
        setTimeout(changeStatus, 5000);
    }
    btnY.addEventListener('click', (e)=>{
        let sec = 10 + 1;
        let t;
        function tick(){
            sec -= 1;
        }
        function add(){
            tick();
            mainText.innerHTML = '';
            username.innerHTML = `The test will start in ${sec}`;
            timer();
        }
        function timer(){
            t = setTimeout(add, 1000);
            if (sec === 0){
                clearTimeout(t);
                ques();
            }
        }
        add();
    });
    
    function ques(){
        mainText.innerHTML = 'Answer under questions pls';
        username.innerHTML = `${question[0]}`;
    }

}

mainF();