let cnopka = document.querySelectorAll('button')
let img = document.querySelector('.img')
let salon = {
    Bejivi: "img/bejivi.png",
    Black: "img/salon.png",
    White: "img/safet.png",

}


let summa = document.querySelector('#sum')
let narx = document.querySelectorAll('.box_button button')
let org_ptice = 89990


cnopka.forEach((item, index) => {
    item.onclick = () => {
        let color = item.innerText
        img.style.backgroundImage = `url(${salon[color]})`
        let bolohsba = +narx[index].getAttribute('price')
        summa.innerHTML = addCommas(org_ptice + bolohsba)

    }


})



function addCommas(nStr) {

    nStr += '';

    var x = nStr.split('.');

    var x1 = x[0];

    var x2 = x.length > 1 ? '.' + x[1] : '';

    var rgx = /(\d+)(\d{3})/;
    console.log(rgx);

    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}