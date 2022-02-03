import '../../../styles/index.scss';


(function () {
    const picArr = ['11.png', '10.png','9.png','8.png','7.png','6.png','5.png','4.png','3.png','2.png','1.png'];
    const container = document.getElementById('hero-pic__id');

    let i = 0;

    function showPic(){
        container.setAttribute('src', `img/heroSlider/${picArr[i]}`);
        i++;
        if (i >= 11) {
            i = 0;
        }
    };

    setInterval(showPic, 2000);
})();

(function () {
    document.getElementById('modal').style.display = 'none';
    
    document.getElementById('close-btn_id').addEventListener('click', (event)=>{
        document.getElementById('modal').style.display = 'none';
    });

    document.getElementById('contacts_id').addEventListener('click', (event)=>{
        document.getElementById('modal').style.display = 'block';
    });
})();