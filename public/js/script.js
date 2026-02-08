const answers_no = [
    "לא",
    "את בטוחה?",
    "את ממש בטוחה??",
    "את ממש ממש בטוחה???",
    "תחשבי שוב?",
    "לא מאמינה בהזדמנות שנייה?",
    "למה את כזו קרה?",
    "אולי נדבר על זה?",
    "אני לא מתכוון לשאול שוב!",
    "אוקיי זה כבר פוגע ברגשות שלי!",
    "עכשיו את סתם רעה!",
    "למה את עושה לי את זה?",
    "בבקשה תני לי צ'אנס!",
    "אני מתחנן שתפסיקי!",
    "טוב, בואי נתחיל מהתחלה.."
];

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[i]);
        i = 1;
        no_button.innerHTML = answers_no[0];
        yes_button.innerHTML = "כן";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}
