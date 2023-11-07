document.addEventListener("DOMContentLoaded", function() {
    const profesiElement = document.getElementById("profesi-ticker");
    const profesiArray = ["Web Developer", "React learner", "cyber Security engginer"]; // Ganti dengan daftar profesi Anda
    let index = 0;
    let isDeleting = false;
    let typingIndex = 0;
    let currentProfesi = "";

    function updateProfesi() {
        if (!isDeleting) {
            currentProfesi = "I am " + profesiArray[index].slice(0, typingIndex);
            profesiElement.innerHTML = currentProfesi + "|";
            typingIndex++;

            if (typingIndex === profesiArray[index].length) {
                isDeleting = true;
                setTimeout(updateProfesi, 1000);
            } else {
                setTimeout(updateProfesi, 100);
            }
        } else {
            currentProfesi = "I am " + profesiArray[index].slice(0, typingIndex);
            profesiElement.innerHTML = currentProfesi + "|";
            typingIndex--;

            if (typingIndex === 0) {
                isDeleting = false;
                index = (index + 1) % profesiArray.length;
            }

            setTimeout(updateProfesi, 50);
        }
    }

  
    updateProfesi();
});
