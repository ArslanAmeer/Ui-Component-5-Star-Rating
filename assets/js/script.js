
document.addEventListener("DOMContentLoaded", () => {

    var star = document.getElementsByClassName("star-rating");
    var starCount;
    
    for (let i = 0; i < star.length; i++) {
        
        const el = star[i];
        
        el.addEventListener("mouseover", () => {
            const attrVal = el.getAttributeNode("value").value;
            for (let j = 0; j < attrVal; j++) {
                const el2 = star[j];
                el2.classList.add("hoverimg");
            }
        });
        
        el.addEventListener("mouseout", () => {
            const attrVal = el.getAttributeNode("value").value;
            for (let j = 0; j < attrVal; j++) {
                const el2 = star[j];
                el2.classList.remove("hoverimg");
            }
        });
        
        el.addEventListener("click", () => {
            const attrVal = el.getAttributeNode("value").value;
            starCount = 0;
            for (let j = 0; j < attrVal; j++) {
                const el2 = star[j];
                if (el2.classList.contains("hoverimg")) {
                    el2.classList.add("starON");
                    starCount++;
                }
                for (let k = attrVal; k < star.length; k++) {
                    star[k].classList.remove("starON");
                }
            }
        });
    }

    document.getElementById("starCount").addEventListener('click', () => {
        alert(starCount);
    });

});

