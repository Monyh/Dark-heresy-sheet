let Head = document.getElementById("Head");
let Body = document.getElementById("Body");
let rightArm = document.getElementById("RightArm");
let leftArm = document.getElementById("LeftArm");
let rightLeg = document.getElementById("RightLeg");
let leftLeg = document.getElementById("LeftLeg");
let damage;
let accum = 0;

function applyDamage()
{
    if (Head.checked) 
    {
        damage =
        document.getElementById("damage").value - document.getElementsByClassName("HitZone")[0].value;
    } else if (Body.checked)
    {
        damage =
        document.getElementById("damage").value - document.getElementsByClassName("HitZone")[1].value;
    } else if (rightArm.checked)
    {
        damage =
        document.getElementById("damage").value - document.getElementsByClassName("HitZone")[2].value;
    } else if (leftArm.checked)
    {
        damage =
        document.getElementById("damage").value - document.getElementsByClassName("HitZone")[3].value;
    } else if (rightLeg.checked)
    {
        damage =
        document.getElementById("damage").value - document.getElementsByClassName("HitZone")[4].value;
    } else if (leftLeg.checked)
    {
        damage =
        document.getElementById("damage").value - document.getElementsByClassName("HitZone")[5].value;
    }
    
    document.getElementById("Status").value = accum += damage;
    
    document.getElementById("wounds").value -= damage;
};

function changeLanguage(languageCode) {
    Array.from(document.getElementsByClassName('lang')).forEach(function (elem) {
        if (elem.classList.contains('lang-' + languageCode)) {
             elem.style.display = 'initial';
        }
        else {
             elem.style.display = 'none';
        }
    });
};


const selector = document.getElementById('langSelector');
selector.addEventListener('change', function (evt) {
    changeLanguage(this.value);
});

const lang = navigator.userLanguage || navigator.language || 'en-EN';
const startLang = Array.from(selector.options).map(opt => opt.value).find(val => lang.includes(val)) || 'en';
changeLanguage(startLang);

selector.selectedIndex = Array.from(selector.options).map(opt => opt.value).indexOf(startLang);



const inputAll = document.querySelectorAll('input');
const textAreaAll = document.querySelectorAll('textarea');
const inputs = document.querySelectorAll("input[type='checkbox']");
let arrData = [];

function save() {
    inputAll.forEach(input => localStorage.setItem(input.id, input.value));
    textAreaAll.forEach(textarea => localStorage.setItem(textarea.id, textarea.value));

   inputs.forEach(function(input){
    arrData.push({ id: input.id, checked: input.checked });
  });

  localStorage.setItem('inputs', JSON.stringify(arrData));
};


function load() {
    inputAll.forEach(input => input.value = localStorage.getItem(input.id));
    textAreaAll.forEach(textarea => textarea.value = localStorage.getItem(textarea.id));

    var inputs = JSON.parse(localStorage.getItem('inputs'));
    inputs.forEach(function(input) {
        document.getElementById(input.id).checked = input.checked;
    });
};