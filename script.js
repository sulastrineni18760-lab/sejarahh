/* =========================
   QUIZ SULTAN BAABULLAH
========================= */

const jawabanBenar = {

    q1: "true",

    q2: "true",

    q3: "true",

    q4: "true",

    q5: "true",

    q6: "false",

    q7: "true",

    q8: "false",

    q9: "true",

    q10: "false"

};


function cekQuiz() {

    let skor = 0;

    let semuaTerisi = true;


    /* Cek semua soal */

    for (let i = 1; i <= 10; i++) {

        const jawaban = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        if (!jawaban) {

            semuaTerisi = false;

        }

    }


    /* Jika belum lengkap */

    if (!semuaTerisi) {

        alert(
            "Silakan jawab semua 10 pertanyaan terlebih dahulu."
        );

        return;

    }


    /* Hitung skor */

    for (let i = 1; i <= 10; i++) {

        const jawaban = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        if (
            jawaban.value ===
            jawabanBenar[`q${i}`]
        ) {

            skor++;

        }

    }


    /* Tampilkan skor */

    document.getElementById("score").textContent = skor;


    const resultTitle =
        document.getElementById("resultTitle");

    const resultText =
        document.getElementById("resultText");


    /* Pesan berdasarkan skor */

    if (skor === 10) {

        resultTitle.textContent =
            "LUAR BIASA!";

        resultText.textContent =
            "Kamu menguasai fakta-fakta utama tentang Sultan Baabullah dan perjuangan Ternate.";

    }

    else if (skor >= 8) {

        resultTitle.textContent =
            "SANGAT BAIK!";

        resultText.textContent =
            "Pengetahuanmu tentang sejarah Sultan Baabullah sudah sangat baik.";

    }

    else if (skor >= 6) {

        resultTitle.textContent =
            "CUKUP BAIK!";

        resultText.textContent =
            "Kamu sudah mengetahui banyak hal, tetapi masih ada beberapa fakta yang perlu dipelajari kembali.";

    }

    else if (skor >= 4) {

        resultTitle.textContent =
            "TERUS BELAJAR!";

        resultText.textContent =
            "Coba baca kembali materi tentang perjuangan Sultan Baabullah.";

    }

    else {

        resultTitle.textContent =
            "AYO PELAJARI LAGI!";

        resultText.textContent =
            "Jangan menyerah. Pelajari kembali sejarah Kesultanan Ternate kemudian coba quiz lagi.";

    }


    /* Sembunyikan form */

    document.getElementById("quizForm").style.display =
        "none";


    /* Tampilkan hasil */

    document.getElementById("result")
        .classList.add("show");


    /* Scroll ke hasil */

    document.getElementById("result")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

}


/* =========================
   ULANGI QUIZ
========================= */

function ulangQuiz() {

    document.getElementById("quizForm").reset();


    document.getElementById("quizForm").style.display =
        "block";


    document.getElementById("result")
        .classList.remove("show");


    document.getElementById("quiz")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".navbar");


    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(5,4,3,.95)";

    }

    else {

        navbar.style.background =
            "rgba(8,6,5,.75)";

    }

});