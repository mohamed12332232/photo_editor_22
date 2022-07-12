// ================= start filters===============
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hue_rotate = document.getElementById("hue-rotate")
// ================= end filters===============

let download = document.getElementById("download")
let rest = document.getElementById("rest")
let upload = document.getElementById("upload_input");

let img_box = document.querySelector(".img_box");
let img = document.getElementById("img")



let canvas = document.getElementById("canvas")

let ctx = canvas.getContext("2d");






function restValue() {
    ctx.filter = "none"
    saturate.value = '100'
    contrast.value = '100'
    brightness.value ='100'
    sepia.value = '0'
    grayscale.value = '0';
    blur.value = '0';
    hue_rotate.value = '0';

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);


    

}


window.onload = function () {
    download.style.display = "none";
    rest.style.display = "none";
    img_box.style.display = "none ";
}




upload.onchange = function () {
    restValue()
    download.style.display = "block";
    rest.style.display = "block";
    img_box.style.display = "block";
    
    let file = new FileReader()
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        
        img.src = file.result;

    }
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display ="none"
    }
}


let filters = document.querySelectorAll("ul li input")


filters.forEach(filter => {
    filter.addEventListener("input", function () {
        ctx.filter = `
            saturate(${saturate.value}%) 
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hue_rotate.value}deg)

            
            
            `;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    })
})





download.onclick = function () {
    download.href = canvas.toDataURL('image/jbeg');
}

