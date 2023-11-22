function triangleArea(){
    if(base > 0 && height > 0) {
        let area = 0.5 * base * height;
        return area;
    }
}
let base = 5;
let height = 8;
let area = triangleArea(base, height);

console.log(`Traingle Area ${area}`);