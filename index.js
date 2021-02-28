const btn = document.querySelector("#quote")

btn.addEventListener("click", () => {
    let imgDir = "Pictures_/"
    let imgArray = ["AS1.jpg", "AS2.jpg", "AS3.jpg", "AS4.png", "DG1.jpg", "DG2.jpg", "DG3.jpg", "DG4.jpg", "DG5.jpg", "DG6.jpg", "DG7.png", "DG8.jpg", "DG9.jpg", "DG10.jpg", "DG11.jpg", "DG12.jpg", "DG13.jpg", "DG14.jpg", "DG15.jpg", "DG16.jpg", "DG17.jpg", "DG18.jpg", "DG19.png", "DG20.jpg","DG21.jpg", "DG22.jpg", "DG23.jpg", "DG24.jpg", "DG25.jpg", "DG26.jpg", "DG27.png", "DG28.jpg", "DG29.jpg", "DG30.jpg", "DG31.jpg", "DG32.jpg", "DG33.jpg", "DG34.jpg", "DG35.jpg", "EM1.png", "EM2.jpg", "EM3.jpg", "EM4.jpg", "EM5.png", "EM6.jpg", "EM7.jpg", "EM8.png", "EM9.jpg", "EM10.jpg", "EM11.jpg", "EM12.jpg", "EM13.jpg", "EM14.jpg", "EM15.jpg", "EM16.jpg"]
    if(imgArray.length > 1) {
        imgIndex = Math.floor(Math.random() * imgArray.length);
        document.body.background = `${imgDir}${imgArray[imgIndex]}`  
}})
