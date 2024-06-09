//--------------- QUOTE MODAL-----------------//
let quotemodalbtns = document.querySelectorAll(".quotemodalbtn");
let quotemodal = document.querySelector("#quotemodal");
let quoteclosebtn = document.querySelector("#quoteclosebtn");

quotemodalbtns.forEach((quotemodalbtn) => {
    quotemodalbtn.addEventListener('click', () => {
        quotemodal.showModal();
    })
})

quoteclosebtn.addEventListener('click', () => {
    quotemodal.close();
})
//--------------- QUOTE MODAL-----------------//

//--------------- REBATE MODAL-----------------//
let rebatemodalbtns = document.querySelectorAll(".rebatemodalbtn");
let rebatemodal = document.querySelector("#rebatemodal");
let rebateclosebtn = document.querySelector("#rebateclosebtn");

rebatemodalbtns.forEach((rebatemodalbtn) => {
    rebatemodalbtn.addEventListener('click', () => {
        rebatemodal.showModal();
    })
})

rebateclosebtn.addEventListener('click', () => {
    rebatemodal.close();
})
//--------------- REBATE MODAL-----------------//