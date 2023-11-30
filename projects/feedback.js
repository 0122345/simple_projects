const ratings =  document.querySelectorAll('.rating');
const sendBtn =  document.querySelector('#send');
const ratingsContainer = document.querySelector('rating-container')
const  panel =  document.querySelector('#panel');

let selectedRating = 'Satisfied'

 panel.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
      removeActiveClass();
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerHtml
   }

});

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `<img src="img/red-heart-icon.png" alt="heart" width="80px" height="75px">
  <strong>Thank You</strong>
  <br>
  <strong>FeedBack: ${selectedRating}</strong>
  <p>we will be in touch and thank you for your reply ,it will help in futher service provided</p>`
})

function removeActiveClass() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
  }
}
