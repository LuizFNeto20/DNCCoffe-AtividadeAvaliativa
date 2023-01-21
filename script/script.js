(function () {
    //modal sobre
    const btnModal = document.querySelector("nav ul li:nth-child(2) a");
    const modal = document.querySelector("#modal")

    btnModal.addEventListener("click", function () {
        modal.classList.remove("d-none");
        modal.classList.add("d-flex");
    });

    const exitModal = modal.querySelector("#modal div a");

    exitModal.addEventListener("click", function () {
        modal.classList.remove("d-flex");
        modal.classList.add("d-none");
    });

    //modal atendimento
    const btnTreatment = document.querySelector("nav ul li:nth-child(3) a");
    const modalTreatment = document.querySelector("#modal-Treatment");

    btnTreatment.addEventListener("click", function () {
        modalTreatment.classList.remove("d-none");
        modalTreatment.classList.add("d-flex");
    });

    const exitModalTreatment = modalTreatment.querySelector("#modal-Treatment div a");

    exitModalTreatment.addEventListener("click", function () {
        modalTreatment.classList.remove("d-flex");
        modalTreatment.classList.add("d-none");
    });

    //hover cards
    const cards = document.querySelector("#cards");

    cards.addEventListener("mouseover", function (event) {
        if (event.target.parentElement.id === "cards" || event.target.parentElement.parentElement.id === "cards") {
            let card = event.target.parentElement.id === "cards" ? event.target : event.target.parentElement;

            appearDisappearButton(card);
        }
    })

    cards.addEventListener("mouseout", function (event) {
        if (event.target.parentElement.id === "cards" || event.target.parentElement.parentElement.id === "cards") {
            let card = event.target.parentElement.id === "cards" ? event.target : event.target.parentElement;

            appearDisappearButton(card);
        }
    })

    function appearDisappearButton(card) {
        const btn = card.querySelector("button");

        btn.classList.toggle("opacity-0");
    }
})()