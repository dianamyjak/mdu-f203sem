console.log("Child Theme JS is running!");

document.addEventListener("DOMContentLoaded", function () {
    initScrollToTop();
    initTypedJs();
});

// ---------- smooth scroll ---------- //

function initScrollToTop() {
    document.querySelector("body").innerHTML += /*html*/ `
        <a id="scrollTop" onclick="scrollToTheTop()" title="Go to top">^</a>
    `;
    window.onscroll = function () {
        scrollFunction();
    };
}

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}

function scrollToTheTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ---------- typed.js ---------- //

function initTypedJs() {
    new Typed(".typed", {
        strings: ["Rasmus Cederdorff.", "a Freelancer.", "a Lecturer.", "a Web Developer.", "an App Developer.", "a Web Architect.", "a Teacher."],
        typeSpeed: 75,
        loop: true,
    });
};

// ---------- fetch wp posts ---------- //
const url = "/wp-json/wp/v2/posts?_embed&categories=6";

function fetchPosts() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            console.log(posts);
            appendPosts(posts);
        });
}

// append wp posts to the DOM
function appendPosts(posts) {
    let htmlTemplate = "";
    for (let post of posts) {
        console.log(post);
        htmlTemplate += /*html*/ `
      <article>
      <a href="${post.link}">
            <div class="img-container">
                <img src="${getFeaturedImageUrl(post)}">
            </div>
            <div class="content-container">
                <div class="content">
                <h3>${post.title.rendered}</h3>
                <p>${post.content.rendered}</p>
                </div>
            </div>
        </a>
      </article>
    `;
    }
    document.querySelector('#posts').innerHTML = htmlTemplate;
}

// get the featured image url
function getFeaturedImageUrl(post) {
    let imageUrl = "";
    if (post._embedded['wp:featuredmedia']) {
        imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
    }
    return imageUrl;
}