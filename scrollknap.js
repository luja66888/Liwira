    const btn = document.getElementById("scrollUpBtn"), visningTærskel = 300, farver = ["#333","#555","#777","#999"];
    const scrollObj = {
      visKnap() { btn.style.display = window.scrollY > visningTærskel ? "block" : "none"; },
      scrollTilTop() {
        const a = Array.from({length: Math.ceil(window.scrollY/50)+1}, (_,i)=>window.scrollY - i*50).filter(v=>v>=0);
        let i = 0; const intv = setInterval(() => i < a.length ? window.scrollTo(0,a[i++]) : clearInterval(intv), 10);
      }
    };
    window.addEventListener("scroll", scrollObj.visKnap);
    btn.addEventListener("click", scrollObj.scrollTilTop);
    farver.forEach(f => console.log("Mulig knapfarve:", f));