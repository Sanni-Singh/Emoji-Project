const container = document.querySelector('#box');
let inputText = document.querySelector('#search');
let itemOne = document.querySelector('#lists1');
let itemTwo = document.querySelector('#lists2');
let itemThree = document.querySelector('#lists3');
let itemFour= document.querySelector('#lists4');
let itemFive = document.querySelector('#lists5');

function displayEmoji(itemList){
    
    console.log(itemList);
    let arr = emojiList.filter((emoji)=>{
        if(itemList === undefined){
            return true;
        }
        if(emoji.description.indexOf(itemList)!== -1){
            return true;
        }
        if(emoji.aliases.includes(itemList) === true){
            return true;
        }
        if(emoji.tags.includes(itemList) === true){
            return true;
        }
    })
    container.innerText = "";
    
    printEmoji(arr);
}

function printEmoji(para){
    para.forEach(ele => {
        let div = document.createElement('div');
        div.className = "emoji";
        let p = document.createElement('p');
        p.className = "para1"
        let p1 = document.createElement('p');
        p1.className = "para2"
        p.innerText = ele.emoji;
        p1.innerText = "Copy";
        div.appendChild(p)
        div.appendChild(p1)
        container.appendChild(div)
        p1.addEventListener('click',()=>{
            div.animate([
                {transform: 'translateX(4px)'},
                {transform: 'translateX(0)'},
                {transform: 'translateX(4px)'},
                {transform: 'translateX(0)'}
            ], {
                duration: 200,
                easing: 'ease-in-out',
                iterations: 4
            });
            navigator.clipboard.writeText(ele.emoji);
            p1.innerText = "Copied";
            setTimeout(function() {
                p1.innerText = "Copy";
            },2000)
            
        })
    });
}
window.addEventListener('load',()=>{
    printEmoji(emojiList)
})
itemOne.addEventListener('click', ()=>{
    printEmoji(emojiList);
})
itemTwo.addEventListener('click', ()=>{
    displayEmoji(itemTwo.innerText.toLowerCase())
})
itemThree.addEventListener('click', ()=>{
    displayEmoji(itemThree.innerText.toLowerCase())
})
itemFour.addEventListener('click', ()=>{
    displayEmoji(itemFour.innerText.toLowerCase())
})
itemFive.addEventListener('click', ()=>{
    displayEmoji(itemFive.innerText.toLowerCase())
})
inputText.addEventListener('keyup',()=>{
    let inputVal = inputText.value.toLowerCase();
    displayEmoji(inputVal)
})

