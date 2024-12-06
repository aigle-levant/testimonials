const oneHTML = `
<div id="test-one" class="col">
    <div id="bubble-one" class="bg-dark text-white p-4 m-4">
        <!--Code by aigle-levant-->
        <p class="text text-break">{insert text here}</p>
        <p class="text lead">{text to be emphasized}</p>
    </div>
    <div id="person-one" class="d-flex flex-row ms-auto">
        <img id="person-one-img" class="img-round rounded-circle ml-3" src="{image link}">
        <div id="person-one-info">
            <h4 class="text">{name} | <small>Title</small></h4>
        </div>
    </div>
</div>
`;

document.getElementById('one-code-html').textContent = oneHTML;

const oneCSS = `
#person-one-img
 {
    width: 100px;
    height: 100px;
    margin-right: 20px;
}
`;

document.getElementById('one-code-css').textContent = oneCSS;

const twoHTML = `
<div class="card p-4 m-4">
    <div class="card-body">
        <div id="test-two-text">
        <!--Code by aigle-levant-->
            <p class="text text-break">
                {text}
            </p>
            <p class="fw-bold">{bold text}</p>
        </div>
        <div id="person-two" class="d-flex flex-row ms-auto">
                <img id="person-two-img" class="img-round rounded-circle ml-3" src="{image link}">
                <div id="person-two-info" class="mt-3">
                    <h4 class="text">{name}</h4>
                    <h5 class="text">{title}</h5>
                </div>
            </div>
        </div>
    </div>
</div>
`;

document.getElementById('two-code-html').textContent = twoHTML;

const twoCSS = `
#person-two-img
{
    width: 100px;
    height: 100px;
    margin-right: 20px;
}
`

document.getElementById('two-code-css').textContent = twoCSS;

const threeHTML = `
<div id="test-grp-two" class="container-fluid mt-4 mb-4 p-3 d-flex flex-row border">
    <div id="test-three-img my-4" class="mr-3">
        <img id="person-three-img" class="rounded" src="{image link}">
    </div>
    <!--code by aigle-levant-->
    <div id="test-three-text d-flex flex-column">
        <!--https://www.flaticon.com/authors/roundicons-premium-->
        <img id="rating" src="star.png">
        <div class="test-three-content">
            <p class="text">{text}</p>
            <h6 class="display-6">{name}</h6>
            <h6 class="text">{title}</h6>
        </div>
    </div>
</div>
`;

document.getElementById('three-code-html').textContent = threeHTML;

const threeCSS = `
#person-three-img
{
    width: 250px;
    height: 300px;
}
#rating
{
    width: 100px;
    height: 100px;
}
.test-three-content, #rating
{
    margin-left: 50px;
}
`;

document.getElementById('three-code-css').textContent = threeCSS;

const fourHTML = `
<div id="test-grp-three" class="container-fluid my-3 d-flex flex-column">
    <div id="test-four" class="border p-4 m-4 text-center">
        <div id="test-four-text">
            <!--code by aigle-levant-->
            <p class="content-1 text-break four-text">{text}</p>
            <p class="hide content-2 text-break four-text">{text}</p>
            <p class="hide content-3 text-break four-text">{text}</p>
        </div>
        <div id="test-four-img" class="mb-3">
            <img class="img-four rounded-circle content-1" src="{image link}">
            <img class="hide img-four rounded-circle content-2" src="{image link}">
            <img class="hide img-four rounded-circle content-3" src="{image link}">
        </div>
        <div id="test-four-person">
            <h6 class="fw-bold content-1">{name}</h6>
            <h6 class="hide fw-bold content-2">{name}</h6>
            <h6 class="hide fw-bold content-3">{name}</h6>
        </div>  
    </div>
</div>
`;

document.getElementById('four-code-html').textContent = fourHTML;

const fourCSS = `
.img-four
{
    width: 50px;
    height: 50px;
}
.hide
{
    display: none;
}
`;

document.getElementById('four-code-css').textContent = fourCSS;

const fourJS = `
let texts = document.querySelectorAll('.four-text');
let images = document.querySelectorAll('.img-four');
let names = document.querySelectorAll('#test-four-person h6');
let i = 0;

setInterval(() =>
{
    texts[i].classList.add('hide');
    images[i].classList.add('hide');
    names[i].classList.add('hide');

    i = (i+1)%texts.length;

    texts[i].classList.remove('hide');
    images[i].classList.remove('hide');
    names[i].classList.remove('hide');
}, 3000);
`;

document.getElementById('four-code-js').textContent = fourJS;
