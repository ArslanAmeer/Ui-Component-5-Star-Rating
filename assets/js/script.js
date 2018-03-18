
document.addEventListener("DOMContentLoaded",() => {

    var star = document.getElementsByClassName("star-rating");

    for (let i = 0; i < star.length; i++) {
        
        const el = star[i];

        el.addEventListener("mouseover", () => {
            const attrVal = el.getAttributeNode("value").value;
            for (let j = 0; j < attrVal; j++) {
                const el2 = star[j];
                if (el2.style.backgroundColor !== "red") {
                    el2.style.backgroundColor = "yellow";                    
                }
            }
        });

        el.addEventListener("mouseout", () => {
            const attrVal = el.getAttributeNode("value").value;
            for (let j = 0; j < attrVal; j++) {
                const el2 = star[j];
                if (el2.style.backgroundColor !== "red") {
                    el2.style.backgroundColor = "white";                    
                }
            }
        });

        el.addEventListener("click",() => {
            const attrVal = el.getAttributeNode("value").value;
            for (let j = 0; j < attrVal; j++) {
                const el2 = star[j];
                if (el2.style.backgroundColor === "yellow") {
                    el2.style.backgroundColor = "red"; 
                }else{
                    for (let k = attrVal; k < star.length; k++) {
                        star[k].style.backgroundColor = "white";                 
                    }
                }
                
            }
        });
    }
    
});

