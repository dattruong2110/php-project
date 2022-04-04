const courseContainer = document.querySelectorAll('.course-content-container-header');
const courseDetails = document.querySelectorAll('.course-content-detail');

for (let i = 0; i < courseContainer.length; i++) {
  let hidden = courseContainer[i];
  let grammarDetail = courseDetails[i];

  hidden.onclick = () => {
    if (grammarDetail) {
      grammarDetail.classList.toggle('display');
    }
  }
}