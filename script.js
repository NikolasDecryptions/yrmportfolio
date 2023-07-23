// ASSIGNING THE VARIABLES

const firstText = document.querySelector(".first-text")
const notification = document.querySelector(".notification")
const loadingBar = document.querySelector(".loading-bar")
const progress = document.querySelector(".progress")
const basePoint = document.querySelector(".basepoint")
const text = document.querySelector(".text")
const progressInLang = document.querySelector(".info-card")
const lastText = document.querySelector(".last-text-div")

// THE ANIMATIONS FOR THE FIRST TEXT AND LOADING BAR

function disappear() {
    firstText.style.animation = "fade-out 2s";
    setTimeout(disappearText, 1900);
}

function disappearText() {
    firstText.style.display = "none";
    notificationRecieve()
}

function notificationRecieve() {
    notification.style.animation = "slide-in-from-left 2s"
    notification.style.left = "0"
    setTimeout(notificationLeave, 3500)
}

function notificationLeave() {
    notification.style.animation = "slide-out-to-left 2s"
    notification.style.left = "-350px"
    loadingBarFadeIn()
}

function loadingBarFadeIn() {
    loadingBar.style.animation = "fade-in 1s"
    loadingBar.style.display = "block"
    setTimeout(LoadingBarStrech, 1100)
}

function LoadingBarStrech() {
    loadingBar.style.animation = "loadingBarStrech 1.5s"
    loadingBar.style.width = "85%"
    setTimeout(ProgressIncrease, 1600)
}

function ProgressIncrease() {
    progress.style.display = "block"
    progress.style.animation = "progress 18.5s"
    progress.style.width = "99.4%"
    BasePointAppear()
}

// ANIMATIONS FOR BASE POINT

function BasePointAppear() {
    basePoint.style.animation = "fade-in 0.5s"
    basePoint.style.display = "block"
    setTimeout(BasePointStrech, 500)
}

function BasePointStrech() {
    basePoint.style.animation = "basepointStrech 1.5s"
    basePoint.style.width = "70%"
    setTimeout(BasePointHeightIncrease, 1600)
}

function BasePointHeightIncrease() {
    basePoint.style.animation = "basepointTall 1s"
    basePoint.style.height = "200px"
    setTimeout(BasePointHeightDecrease, 1500)
}

function BasePointHeightDecrease() {
    basePoint.style.animation = "basepointShrink 1s"
    basePoint.style.height = "20px"
    setTimeout(BasePointSqueeze, 1000)
}

function BasePointSqueeze() {
    basePoint.style.animation = "basepointSqueeze 1.5s"
    basePoint.style.width = "20px"
    setTimeout(BasePointSpin, 1500)
}

function BasePointSpin() {
    basePoint.style.animation = "basepointSpin 0.5s"
    basePoint.style.transform = "rotate(-45deg)"
    text.innerText = "A Student of class 10"
    text.style.fontSize = "100px"
    setTimeout(BasePointStrech1, 500)
}

function BasePointStrech1() {
    basePoint.style.animation = "basepointStrechSmall 1.5s"
    basePoint.style.width = "50%"
    setTimeout(BasePointHeightIncrease1, 1600)
}

function BasePointHeightIncrease1() {
    basePoint.style.animation = "basepointLessTall 1s"
    basePoint.style.height = "120px"
    setTimeout(BasePointHeightDecrease1, 1500)
}

function BasePointHeightDecrease1() {
    basePoint.style.animation = "basepointLessShrink 1s"
    basePoint.style.height = "20px"
    setTimeout(BasePointSqueeze1, 1000)
}

function BasePointSqueeze1() {
    basePoint.style.animation = "basepointLessSqueeze 1.5s"
    basePoint.style.width = "20px"
    setTimeout(BasePointDisappearA, 1600)
}

function BasePointDisappearA() {
    basePoint.style.animation = "fade-out 1.5s"
    setTimeout(BasePointDisappear, 1200)
}

function BasePointDisappear() {
    basePoint.style.display = "none"
    ProgressCardAppearA()
}

// ANIMATIONS FOR PROGRESS CARD

function ProgressCardAppearA() {
    progressInLang.style.animation = "fade-in 1s"
    setTimeout(ProgressCardAppear, 2000)
}

function ProgressCardAppear() {
    progressInLang.style.display = "flex"
    setTimeout(ProgressCardDisappearA, 3000)
}

function ProgressCardDisappearA() {
    progressInLang.style.animation = "fade-out 1s"
    setTimeout(ProgressCardDisappear, 800)
}

function ProgressCardDisappear() {
    progressInLang.style.display = "none"
    LoadingBarFadeOut()
}

function LoadingBarFadeOut() {
    loadingBar.style.animation = "fade-out 2s"
    setTimeout(LoadingBarDisappear, 1800)
}

function LoadingBarDisappear() {
    loadingBar.style.display = "none"
    LastTextFadeIn()
}

function LastTextFadeIn() {
    lastText.style.animation = "fade-in 2s"
    setTimeout(LastTextAppear, 1800)
}

function LastTextAppear() {
    lastText.style.display = "block"
}

// ANIMATIONS FOR DISAPPEARING LOADING BAR AND LAST TEXT