document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector("#about");
    const h3 = document.getElementById("typed-h3");
    const p1 = document.getElementById("typed-p1");
    const p2 = document.getElementById("typed-p2");

    let typedH3 = null;
    let typedP1 = null;
    let typedP2 = null;
    let hasTyped = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                h3.classList.add("visible");
                p1.classList.add("visible");
                p2.classList.add("visible");
                h3.classList.remove("hidden");
                p1.classList.remove("hidden");
                p2.classList.remove("hidden");

                if (!hasTyped) {
                    typedH3 = new Typed("#typed-h3", {
                        strings: ["What makes Mynjko Bakery unique?"],
                        typeSpeed: 50,
                        showCursor: true,
                        cursorChar: "|",
                        loop: false,
                        onComplete: () => {
                            typedP1 = new Typed("#typed-p1", {
                                strings: ["Discover the best bakery in town, where tradition meets flavor. Our artisanal breads and pastries are crafted with love and care, using only the finest ingredients."],
                                typeSpeed: 25,
                                showCursor: false,
                                loop: false,
                                onComplete: () => {
                                    typedP2 = new Typed("#typed-p2", {
                                        strings: ["From our signature sourdough to our flaky croissants, every bite is a testament to our commitment to quality. Join us for a taste of excellence and experience the warmth of our bakery."],
                                        typeSpeed: 25,
                                        showCursor: false,
                                        loop: false
                                    });
                                }
                            });
                        }
                    });

                    hasTyped = true;
                }
            } else {
                h3.classList.remove("visible");
                p1.classList.remove("visible");
                p2.classList.remove("visible");
                h3.classList.add("hidden");
                p1.classList.add("hidden");
                p2.classList.add("hidden");

                if (typedH3) typedH3.destroy();
                if (typedP1) typedP1.destroy();
                if (typedP2) typedP2.destroy();

                h3.textContent = "";
                p1.textContent = "";
                p2.textContent = "";

                typedH3 = null;
                typedP1 = null;
                typedP2 = null;
                hasTyped = false;
            }
        });
    }, {
        threshold: 0.6
    });

    observer.observe(section);
});