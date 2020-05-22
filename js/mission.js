/* This code should be easier made */

/* Top milestone*/
const milestoneDetailTop = document.querySelector("#milestone-info-top");

const milestoneDetailBoxTop = document.querySelector("#milestone-detail-top");

const closeBtnTop = document.querySelector(".close-top");

milestoneDetailTop.addEventListener("click", showMilestoneDetailTop);

closeBtnTop.addEventListener("click", closePopupTop);
window.addEventListener("click", closePopupOutsideTop);

function showMilestoneDetailTop() {
  milestoneDetailBoxTop.style.display = "block";
}

function closePopupTop() {
  milestoneDetailBoxTop.style.display = "none";
}

function closePopupOutsideTop() {
  if (event.target == milestoneDetailBoxTop) {
    milestoneDetailBoxTop.style.display = "none";
  }
}

/* Middle milestone */
const milestoneDetailMiddle = document.querySelector("#milestone-info-middle");

const milestoneDetailBoxMiddle = document.querySelector(
  "#milestone-detail-middle"
);

const closeBtnMiddle = document.querySelector(".close-middle");

milestoneDetailMiddle.addEventListener("click", showMilestoneDetailMiddle);

closeBtnMiddle.addEventListener("click", closePopupMiddle);
window.addEventListener("click", closePopupOutsideMiddle);

function showMilestoneDetailMiddle() {
  milestoneDetailBoxMiddle.style.display = "block";
}

function closePopupMiddle() {
  milestoneDetailBoxMiddle.style.display = "none";
}

function closePopupOutsideMiddle() {
  if (event.target == milestoneDetailBoxMiddle) {
    milestoneDetailBoxMiddle.style.display = "none";
  }
}

/*third milestone*/
const milestoneDetailBottom = document.querySelector("#milestone-info-bottom");

const milestoneDetailBoxBottom = document.querySelector(
  "#milestone-detail-bottom"
);

const closeBtnBottom = document.querySelector(".close-bottom");

milestoneDetailBottom.addEventListener("click", showMilestoneDetailBottom);

closeBtnBottom.addEventListener("click", closePopupBottom);
window.addEventListener("click", closePopupOutsideBottom);

function showMilestoneDetailBottom() {
  milestoneDetailBoxBottom.style.display = "block";
}

function closePopupBottom() {
  milestoneDetailBoxBottom.style.display = "none";
}

function closePopupOutsideBottom() {
  if (event.target == milestoneDetailBoxBottom) {
    milestoneDetailBoxBottom.style.display = "none";
  }
}
