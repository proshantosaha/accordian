
(function(){

    var tabs =document.querySelector('.tabs')
    var h4s = document.querySelectorAll('h4')
    
    
    
    for(var i=0;i<h4s.length;i++){
        h4s[i].addEventListener('click',myFunction)
    }
    
    function myFunction(e){
        for(var i=0;i<h4s.length;i++){
        h4s[i].classList.remove('active')
        }
      
        

        this.classList.add('active')

    }
    
 


})()


