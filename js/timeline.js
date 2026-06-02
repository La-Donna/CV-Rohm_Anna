let chapters = [];
let currentIndex = 0;

function renderChapter() {
    
    const chapter = chapters[currentIndex];

  document.getElementById("chapter").innerHTML = `
    <h2>${chapter.year}</h2>
    <h3>${chapter.city}</h3>
    <h4>${chapter.title}</h4>
    <p>${chapter.summary}</p>
  `;
}

fetch("data/career.json")
  .then(response => response.json())
  .then(data => {
    chapters = data;

    renderChapter();

    document.getElementById("nextBtn").addEventListener("click", () => {

        if(currentIndex < chapters.length - 1) {
  
          currentIndex++;
  
          renderChapter();
        }
      });
  
      document.getElementById("prevBtn").addEventListener("click", () => {
  
        if(currentIndex > 0) {
  
          currentIndex--;
  
          renderChapter();
        }
      });
  });