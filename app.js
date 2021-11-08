//task 1

function startTime()
{
  let today=new Date();
  let h=today.getHours();
  let m=today.getMinutes();
  let s=today.getSeconds();
  m=checkTime(m);
  s=checkTime(s);
 document.getElementById('txt').innerHTML=h+":"+m+":"+s+' '+"PM";
 t=setTimeout(function() {startTime()},500);
}
function  checkTime(i)
{
  if(i>12)
  {
  if(i>12)
i="0"+i;
  }
return i;
}
setTimeout (()=>){
  console.log("stop interval");
  clearInterval(intervalId);
}
//task 2

const slides = document.querySelectorAll('.slide-item');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

function renderSlider() {
  slides.forEach((element, index) => {
    element.style.transform = `translateX(${100 * (index - activeIndex % slidesLength)}%)`;
  })
}

renderSlider();

//task 4

const students = [-1, -3, 4, 2];
let a=3;
let k=0;
for (i=0; i<=4; i++)
{
if (students[i]<=0)
{
  a=k+1;
  console.log(studentcount);
  
}
}
if (studentcount - minstudents>=0)
{
  console.log('yes');
}
else
{
  console.log('no');
}
