const openButton = document.getElementById("openButton");

const openingScreen = document.querySelector(".opening-screen");

const diaryScreen = document.getElementById("diaryScreen");

const diaryOpenButton = document.getElementById("diaryOpenButton");

const closedDiary = document.getElementById("closedDiary");

const openDiary = document.getElementById("openDiary");

const nextPageButton = document.getElementById("nextPageButton");

const memoryBoxScreen =
    document.getElementById("memoryBoxScreen");

const openMemoryBoxButton =
    document.getElementById("openMemoryBoxButton");

const memoryChapter =
    document.getElementById("memoryChapter");

const finalChapter =
    document.getElementById("finalChapter");


/* =========================================
   OPEN THE SECRET DIARY SCREEN
========================================= */

openButton.addEventListener("click", () => {

    openingScreen.classList.add("hide");

    setTimeout(() => {

        diaryScreen.classList.add("show");

    }, 500);

});


/* =========================================
   OPEN THE DIARY
========================================= */

diaryOpenButton.addEventListener("click", () => {

    closedDiary.classList.add("hide");

    setTimeout(() => {

        openDiary.classList.add("show");

    }, 500);

});


/* =========================================
   CHAPTER 1 → CHAPTER 2
========================================= */

nextPageButton.addEventListener("click", () => {

    const currentPage =
        openDiary.querySelector(".diary-page");

    currentPage.classList.add("page-exit");

    setTimeout(() => {

        openDiary.innerHTML = `

            <div class="diary-page chapter-two-page">

                <p class="chapter-label">
                    CHAPTER TWO
                </p>

                <h2>
                    And then there<br>
                    was you... 💗
                </h2>

                <div class="page-divider">
                    ♡
                </div>

                <div class="memory-card">

                    <div class="memory-card-title">
                        That Bench
                    </div>

                    <div class="bench-doodle">
                        🪑 &nbsp; Me + You &nbsp; 🪑
                    </div>

                    <p>
                        Who knew this bench would
                        become such a beautiful memory?
                    </p>

                </div>

                <p class="story-text chapter-two-text">

                    One ordinary classroom gave me
                    a lot of memories.

                    <br><br>

                    But somehow, one of the best ones
                    was sitting right beside me.

                    <br><br>

                    You weren't just the girl sitting
                    next to me on that bench.

                    <br><br>

                    You slowly became the person I could
                    tell things to without worrying about
                    being judged.

                    <br><br>

                    The person who somehow knows
                    exactly how to deal with me. 😭

                    <br><br>

                    And honestly...

                </p>

                <p class="doraemon-line">

                    I don't know how you do it.

                    <br>

                    Myyy Doraemon. 💗

                </p>

                <button
                    class="next-page-button"
                    id="chapterThreeButton">

                    Wait... there's more →

                </button>

            </div>

        `;


        /* Connect Chapter 2 → Chapter 3 */

        const chapterThreeButton =
            document.getElementById("chapterThreeButton");

        chapterThreeButton.addEventListener("click", () => {

            showChapterThree();

        });

    }, 600);

});


/* =========================================
   CHAPTER 3 — MY DORAEMON
========================================= */

function showChapterThree() {

    const currentPage =
        openDiary.querySelector(".diary-page");

    currentPage.classList.add("page-exit");

    setTimeout(() => {

        openDiary.innerHTML = `

            <div class="diary-page chapter-three">

                <p class="chapter-label">
                    CHAPTER THREE
                </p>

                <h2>
                    Myyy Doraemon 🩷
                </h2>

                <div class="page-divider">
                    ♡ ✦ ♡
                </div>

                <p class="doraemon-intro">

                    Some people have Doraemon...

                    <br>

                    I somehow got mine in 7th standard.

                </p>


                <div class="gadget-grid">

                    <div class="gadget-card">

                        <span class="gadget-icon">
                            🧠
                        </span>

                        <h3>
                            The Advice Gadget
                        </h3>

                        <p>
                            Somehow you always have an
                            idea when I have absolutely
                            no idea what to do.
                        </p>

                    </div>


                    <div class="gadget-card">

                        <span class="gadget-icon">
                            🫂
                        </span>

                        <h3>
                            The Comfort Gadget
                        </h3>

                        <p>
                            For the days when I don't need
                            solutions... I just need you.
                        </p>

                    </div>


                    <div class="gadget-card">

                        <span class="gadget-icon">
                            🚫
                        </span>

                        <h3>
                            The No-Judgement Gadget
                        </h3>

                        <p>
                            I can tell you things without
                            worrying about being judged.
                        </p>

                    </div>


                    <div class="gadget-card">

                        <span class="gadget-icon">
                            🍫
                        </span>

                        <h3>
                            The Chocolate Gadget
                        </h3>

                        <p>
                            You love chocolates.
                            I absolutely hate them.

                            <br>

                            Somehow, this friendship
                            still works. 😭
                        </p>

                    </div>

                </div>


                <div class="doraemon-note">

                    And the funniest part?

                    <br><br>

                    You don't actually need gadgets.

                    <br>

                    You just somehow know exactly
                    how to deal with me. 😭

                    <br><br>

                    <strong>
                        That's why you're myyy Doraemon. 🩷
                    </strong>

                </div>


                <button
                    class="next-page-button"
                    id="memoryBoxButton">

                    Open the memory box →

                </button>

            </div>

        `;

    }, 600);

}


/* =========================================
   CHAPTER 3 → MEMORY BOX
========================================= */

openDiary.addEventListener("click", (event) => {

    if (event.target.id !== "memoryBoxButton") {
        return;
    }

    const currentPage =
        openDiary.querySelector(".diary-page");

    currentPage.classList.add("page-exit");

    setTimeout(() => {

        openDiary.classList.remove("show");

        memoryBoxScreen.classList.add("show");

    }, 600);

});


/* =========================================
   MEMORY BOX → CHAPTER 4
========================================= */

if (openMemoryBoxButton) {

    openMemoryBoxButton.addEventListener("click", () => {

        memoryBoxScreen.classList.add("box-opening");

        setTimeout(() => {

            memoryBoxScreen.classList.remove("show");

            memoryBoxScreen.classList.remove("box-opening");

            memoryChapter.classList.add("show");

        }, 800);

    });

}


/* =========================================
   CHAPTER 4 → CHAPTER 5
========================================= */

const chapterFiveButton =
    document.getElementById("chapterFiveButton");


if (chapterFiveButton) {

    chapterFiveButton.addEventListener("click", () => {

        /* Fade Chapter 4 out */

        memoryChapter.classList.remove("show");


        /* Wait for Chapter 4 transition */

        setTimeout(() => {

            /* Show final chapter */

            finalChapter.classList.add("show");

        }, 700);

    });

}
