import '../../../styles/index.scss';

let dogUpdate = 0;

(function () {
    const picArr = ['11.png', '10.png','9.png','8.png','7.png','6.png','5.png','4.png','3.png','2.png','1.png'];
    const container = document.getElementById('hero-pic__id');

    let i = 0;

    function showPic(){
        container.setAttribute('src', `img/newSlider/${picArr[i]}`);
        i++;
        if (i >= 11) {
            i = 0;
        }
    };

    setInterval(showPic, 2000);
})();

(function () {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';

    const footerModal = document.getElementById('footer-social-link_id');

    modal.addEventListener('click', (event)=>{
        modal.style.display = 'none';
    });

    document.getElementById('contacts_id').addEventListener('click', (event)=>{
        modal.style.display = 'block';
    });

    footerModal.addEventListener('click', (event)=>{
        modal.style.display = 'block';
    });
})();

(function () {
    const quantity = document.getElementById('dogQuantity_id');
    

    if (new Date().getDay() === 1 && dogUpdate != 1){
        document.getElementById('dogQuantity_id').innerHTML = +document.getElementById('dogQuantity_id').innerHTML + (Math.floor(Math.random() * 5)) + 1;
        dogUpdate = 1;
    }

    if (new Date().getDay() != 1 && dogUpdate == 1){
        dogUpdate = 0;
    }


})();