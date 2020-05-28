var currentIndex = 0;

document.addEventListener('DOMContentLoaded', function(){

 

  var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++)
  {
    var page = pages[i];
    page.style.zIndex = (pages.length - i);
  }

  for(var i = 0; i < pages.length; i++)
  {
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick=function(){
          var forward = true;
          if (forward == true){
            this.classList.add('flipped');
            this.nextElementSibling.classList.add('flipped');
          } else {
              this.classList.remove('flipped');
              this.previousElementSibling.classList.remove('flipped');
          }
      }
  }

    var prevPage = document.getElementsByClassName('prevPage');
    prevPage[0].onclick = function(){

      console.log('prev page button clicked. cur page index =',currentIndex)

      if (currentIndex <= 0){
        console.log("At the start")
      } else {
        currentIndex--;
      }
    }
    var nextPage = document.getElementsByClassName('nextPage');
    nextPage[0].onclick = function(){

      console.log('next page button clicked. cur page index =',currentIndex)

      if (currentIndex >= pages.length){
        console.log("At the end")
      } else {
        currentIndex++;
      }
    }
})
