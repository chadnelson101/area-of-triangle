document.getElementById('cal').addEventListener('click', 
function(){
    let heightInput = parseFloat(document.getElementById('height').value)
    let baseInput = parseFloat(document.getElementById('base').value)

    if(baseInput > 0 && heightInput > 0) {
        let area = 0.5 * baseInput * heightInput;

        document.getElementById('results').value = area;
        } else{
            alert('both base and hieght must be postive numbers');
        }

})
let area = triangleArea(baseInput, heightInput);