var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++)
    {
      var page = pages[i];
      if (i % 2 === 0)
        {
          page.style.zIndex = (pages.length - i);
        }
    }

  document.addEventListener('DOMContentLoaded', function(){
    for(var i = 0; i < pages.length; i++)
      {
        //Or var page = pages[i];
        pages[i].pageNum = i + 1;
        pages[i].onclick=function()
          {
            if (this.pageNum % 2 === 0)
              {
                this.classList.remove('flipped');
                var currentVideo = this.getElementsByClassName('sliderVideo')[0];
                currentVideo.pause();

                this.previousElementSibling.classList.remove('flipped');
                var prevVideo = this.previousElementSibling.getElementsByClassName('sliderVideo')[0];
                prevVideo.play();
                
                if (this.previousElementSibling.previousElementSibling){
                  var prevPrevVideo = this.previousElementSibling.previousElementSibling.getElementsByClassName('sliderVideo')[0];
                  prevPrevVideo.play();
                }
                
                if (this.nextElementSibling){
                  var nextVideo = this.nextElementSibling.getElementsByClassName('sliderVideo')[0];
                  nextVideo.pause();
                }
              }
            else
              {
                this.classList.add('flipped');
                var currentVideo = this.getElementsByClassName('sliderVideo')[0];
                currentVideo.pause();

                this.nextElementSibling.classList.add('flipped');
                var nextVideo = this.nextElementSibling.getElementsByClassName('sliderVideo')[0];
                nextVideo.play();
                
                if (this.nextElementSibling.nextElementSibling){
                  var nextNextVideo = this.nextElementSibling.nextElementSibling.getElementsByClassName('sliderVideo')[0];
                  nextNextVideo.play();
                }
              }
           }
        }
        var firstVideo = pages[0].getElementsByClassName('sliderVideo')[0];
        firstVideo.play();
  })
