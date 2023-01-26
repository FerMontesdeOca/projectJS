const text = document.querySelector('#postText')

const btnBold =() =>{
    const bold = document.querySelector('.btnBold')
    bold.addEventListener('click',(event) =>{
        event.preventDefault()
        text.value= `**${text.value}**`;
    })
}

const btnCursiva =() =>{
    const cursiva = document.querySelector('.btnCursiva')
    cursiva.addEventListener('click',(event)=>{
        event.preventDefault()
        text.value = `_${text.value}_`;
    })
}
const btnEnlazar =() =>{
    const enlazar = document.querySelector('.btnEnlazar')
    enlazar.addEventListener('click',(event)=>{
        event.preventDefault()
        text.value = `${text.value} [](Url)`;
    })
}
const btnListaNum =() =>{
    const listaNum = document.querySelector('.btnListaNum')
    listaNum.addEventListener('click',(event)=>{
        event.preventDefault()
        text.value = `1. ${text.value}`;
    })
}
const btnListaPunto =() =>{
    const listaPunto = document.querySelector('.btnListaPunto')
    listaPunto.addEventListener('click',(event)=>{
        event.preventDefault()
        text.value = `- ${text.value}`;
    })
}
const btnHeading =() =>{
    const heading = document.querySelector('.btnHeading')
    heading.addEventListener('click',(event)=>{
        event.preventDefault()
        text.value = `## ${text.value}`;
    })
}
const btnQuotes =() =>{
    const quotes = document.querySelector('.btnQuotes')
    quotes.addEventListener('click',(event)=>{
        event.preventDefault()
        text.value = `> ${text.value}`;
    })
}
 const btnEquis =()=>{
    const equis = document.querySelector('.btnEquis')
    equis.addEventListener('click',(event)=>{
        event.preventDefault()
        window.location.href="/index.html"
    })
 }
btnBold()
btnCursiva()
btnEnlazar()
btnHeading()
btnListaNum()
btnListaPunto()
btnQuotes()
btnEquis()
