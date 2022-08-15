//variable
const collapseButton = document.querySelector('.collapsible__button');
const collapseAction = document.querySelectorAll('.collapsible__action');
const collapseVisible = document.querySelector('.collapsible__action--visible');
const collapseHidden = document.querySelector('.collapsible__action--hidden');
const collapseContent = document.querySelector('.collapsible__content');

const GREEN = '#7CFC00';

let isOpen = false;

collapseVisible.style.display = 'none';

//function
function statusButton(){
  if(isOpen){
    console.log('показать');
    collapseHidden.style.display = 'none';
    collapseVisible.style.display = 'block';
    isOpen = false;
  } else {
    isOpen = true;
    collapseHidden.style.display = 'block';
    collapseVisible.style.display = 'none';
    console.log('скрыть');
  }
}
statusButton();

//animation
const animationContent = collapseContent.animate(
  { opacity: [0, 1],
    color: [GREEN]
  },
  { 
    duration: 300, 
    fill: 'both', 
    easing: 'linear' 
  }
);
animationContent.pause();

//events
collapseButton.addEventListener('click', ()=>{
  statusButton();
  animationContent.playState == 'paused' ? 
    (animationContent.play()) :
    (animationContent.reverse());
});
