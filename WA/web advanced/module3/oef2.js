const maakBestelling = (drank = "cola", snack = "chips") =>{
    return{
        drank, 
        snack,
        tijd: new Date().toLocaleTimeString()
    };
};

    const output = document.getElementById('bestellingen');

    const bestelling1 = maakBestelling();
    const bestelling2 = maakBestelling("fanta");
    const bestelling3 = maakBestelling("sprite", "nootjes");

    output.innerHTML += `
    <div class="bestelling">
    bestelling 1: ${bestelling1.drank} en ${bestelling2.snack}
    </div>
    <div class="bestelling">
    bestelling 2: ${bestelling1.drank} en ${bestelling2.snack}
    </div>
    <div class="bestelling">
    bestelling 3: ${bestelling1.drank} en ${bestelling2.snack}
    </div>
    `;