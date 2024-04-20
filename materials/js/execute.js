let step1Btn = document.querySelector("#step1");
let step2Btn = document.querySelector("#step2");
let step3Btn = document.querySelector("#step3");
step1Btn.addEventListener("click", function() {
    if (this.checked) {
        document.querySelector("div.container").style.position = "relative";
        document.querySelector("div.container").style.border = "2px dashed coral";
        document.querySelector("div.container").classList.add("pulse");
    } else {
        document.querySelector("div.container").style.position = "static";
        document.querySelector("div.container").classList.remove("pulse");
    }
});
step2Btn.addEventListener("click", function() {
    let imgs = document.querySelectorAll("div.container img");
    if (this.checked) {
        imgs.forEach(img => {
            img.style.position = "absolute";
            // img.style.filter = "drop-shadow(2px 4px 6px black)";
            img.style.transition = "0.2s";
        })
    } else {
        imgs.forEach(img => {
            img.style.position = "static";
            img.style.filter = "unset";
        })
    }
});
step3Btn.addEventListener("click", function() {
    if (this.checked) {
        document.querySelector(".container").classList.add("hasAfter");
    } else {
        document.querySelector(".container").classList.remove("hasAfter");
    }
});

let step4Slider = document.querySelector("#step4");
let step4Value = document.querySelector(".step4val");
let paddingValue = document.querySelector(".padding-value");
step4Slider.addEventListener("input", function() {
    // html要素の取得
    let root = document.documentElement;
    // カスタムプロパティ--pryValueをレンジスライダーのvalueで更新
    root.style.setProperty("--pryValue", this.value + "%");
    step4Value.innerText = this.value + "%";
    paddingValue.innerText = this.value;
    if (this.value != 0) {
        document.querySelector(".container").classList.add("isPryOpen");
    } else {
        document.querySelector(".container").classList.remove("isPryOpen");
    }
});
let step5Btn = document.querySelector("#step5");
step5Btn.addEventListener("click", () => {
    document.querySelector(".img-base").classList.toggle("expand");
    document.querySelector(".container").classList.toggle("hasRemoveComment");
});
let step6Slider = document.querySelector("#step6");
step6Slider.addEventListener("input", function() {
    document.querySelector(".img-red").style.width = this.value + "%";
    document.querySelector(".img-blue").style.width = this.value + "%";
    document.querySelector(".step6val").innerText = this.value + "%";
    document.querySelector(".width-value").innerText = this.value;
});
let step7Slider = document.querySelector("#step7");
let step8Slider = document.querySelector("#step8");
step7Slider.addEventListener("input", function() {
    document.querySelector(".img-red").style.top = this.value + "%";
    document.querySelector(".step7val").innerText = this.value + "%";
    document.querySelector(".red-top-value").innerText = this.value;
})
step8Slider.addEventListener("input", function() {
    document.querySelector(".img-red").style.left = this.value + "%";
    document.querySelector(".step8val").innerText = this.value + "%";
    document.querySelector(".red-left-value").innerText = this.value;
})

let step9Slider = document.querySelector("#step9");
let step10Slider = document.querySelector("#step10");
step9Slider.addEventListener("input", function() {
    document.querySelector(".img-blue").style.top = this.value + "%";
    document.querySelector(".step9val").innerText = this.value + "%";
    document.querySelector(".blue-top-value").innerText = this.value;
})
step10Slider.addEventListener("input", function() {
    document.querySelector(".img-blue").style.left = this.value + "%";
    document.querySelector(".step10val").innerText = this.value + "%";
    document.querySelector(".blue-left-value").innerText = this.value;
})