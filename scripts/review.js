/* -------------------------- */
/*     Variables     */
/* -------------------------- */
let num_reviews = Number(getReviewsCount()) || 0;
const num_reviews_el = document.querySelector("#num_reviews");

/* -------------------------- */
/*     Arrays     */
/* -------------------------- */

/* -------------------------- */
/*     Run on load     */
/* -------------------------- */
setReviewsCount();
num_reviews_el.textContent = num_reviews;


/* -------------------------- */
/*     Functions     */
/* -------------------------- */
function getReviewsCount(){
    return localStorage.getItem("reviews_count");
}

function setReviewsCount(){
    if(performance.getEntriesByType("navigation")[0].type === "navigate"){
        num_reviews++;
    }
    localStorage.setItem("reviews_count",num_reviews);
}


/* -------------------------- */
/*     Event Listeners     */
/* -------------------------- */




