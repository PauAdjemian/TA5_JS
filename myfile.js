function leapYears(año){
    if (año % 4 === 0) {
        console.log(true);
        return true;
    }
    else{
        if (año % 100 === 0 && año % 400 === 0) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    }
};

leapYears(2003);

const a = document.getElementById('a');
const boton = document.querySelector("button");
const resultado = document.getElementById('resultado');
boton.addEventListener("click", () => {
    const valorA = parseInt(a.value, 10);
    const result = leapYears(valorA);
    resultado.textContent = result;    
});