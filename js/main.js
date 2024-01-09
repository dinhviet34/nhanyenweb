
window.onload = async function () {
    var textintro = await downloadIntro();
    var ismobile = isMobile();
    var textproduces = await downloadProduces();
    var textaddress = await downloadAddress();
    if (textintro !== null) {
        var img = textintro[0];
        var text = textintro[1];
        var image = document.getElementById('imgintro');
        if (isUrlValid(img) === true) {

            image.src = img;
        }
        else {
            image.src = "https://static-00.iconduck.com/assets.00/no-image-icon-512x512-lfoanl0w.png";
        }


        document.getElementById("divtextintro").innerHTML += text.trim();
    }
    /*if (ismobile === true) {

        var introducef = document.getElementById("introduce");
        introducef.style.display = 'flex';
        introducef.style.flexDirection = "column";
        var textprod = document.getElementsByClassName('textprod');
        for (var i = 0; i < textprod.length; i++) {
            var eachtext = textprod[i];
            eachtext.style.textAlign = 'justify';

        }

    }*/
    /*if (ismobile === true) {
        var producesf = document.getElementById("produces");
        producesf.style.flexDirection = 'column';
        producesf.style.textAlign = 'left';
        var allproduces = document.getElementsByClassName('divbouderprod');
        for (var i = 0; i < allproduces.length; i++) {
            var prod = allproduces[i];
            prod.style.display = 'flex';
        }
    }*/

    if (ismobile === true) {

        document.getElementById("contain").style.fontSize = "xx-large";
        document.getElementById("footer").style.fontSize = "xx-large";


    }
    var imgdathangf = document.getElementById("imagedathang");
    var sanphamf = document.getElementById("txtsanpham");
    var dongiaf = document.getElementById('txtdongia')
    if (textproduces !== null) {

        textproduces.forEach(element => {
            var tachelement = element.split('^');
            document.getElementById('produces').innerHTML +=
                "<div class ='col-sm divbouderprod'>" +
                "<div class = 'divimgprod'>" +
                "<img class='imgprod' data-toggle='modal' data-target='#anhModal' src='" + tachelement[0] + "' alt='imgprod'/>" +
                "<div>" +
                "<div class = 'textprod'>" +
                "<div class = 'divnameprod'>" + tachelement[1] + "<div>" +
                "<div class = 'divpriceprod'>" + tachelement[2] + "</div>" +
                "</div>" +
                "<div>" +
                "<button class='btndathang btn btn-dark' data-toggle='modal' data-target='#dathangModal'>" +
                "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-cart4' viewBox='0 0 16 16'>" +
                "<path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0' />" +
                "</svg> Đặt hàng" +
                "<div class='secret' style='display:none'>" + element + "</div>"
            "</button>" +
                "</div>"

            "</div>";




        });
    }
    var btndathang = document.getElementsByClassName('btndathang');
    for (var i = 0; i < btndathang.length; i++) {
        btndathang[i].addEventListener('click', function () {
            var allelement = this.getElementsByClassName('secret')[0].innerHTML;
            var tachelement = allelement.split('^');
            imgdathangf.src = tachelement[0];
            sanphamf.value = tachelement[1];
            dongiaf.value = tachelement[2];

        })
    }

    var imgclick = document.getElementsByClassName('imgprod');
    for (var i = 0; i < imgclick.length; i++) {
        imgclick[i].addEventListener('click', function () {
            // Lấy giá trị của thuộc tính "alt" khi phần tử được click
            var srcValue = this.src;

            // In giá trị "alt" ra console hoặc làm bất kỳ điều gì bạn muốn với giá trị này
            var imagefull = document.getElementById('fullimage');
            imagefull.src = srcValue;
            //alert(srcValue + imagefull)
        });
    }

    var size = await downloadSize();
    var listsize = document.getElementById('txtdonvi');
    size.forEach(element => {
        var option = document.createElement('option');
        option.text = element;
        option.value = element;
        listsize.add(option);
    });


    var soluongf = document.getElementById('txtsoluong');

    var plusprodf = document.getElementById('plusprod');
    var subprodf = document.getElementById('subprod');
    var tongtienf = document.getElementById('tongtien');

    plusprodf.addEventListener('click', function () {
        soluongf.value = parseInt(soluongf.value) + 1;
        var thanhtien = parseInt(soluongf.value) * parseInt(dongiaf.value.replace('.', ''));
        tongtienf.innerHTML = thanhtien.toLocaleString();
    })
    subprodf.addEventListener('click', function () {
        if (soluongf.value !== "0") {
            soluongf.value = parseInt(soluongf.value) - 1;
            var thanhtien = parseInt(soluongf.value) * parseInt(dongiaf.value.replace('.', ''));
            tongtienf.innerHTML = thanhtien.toLocaleString();
        }
    })

    var imageaddressf = document.getElementById('imageaddress');
    imageaddressf.src = textaddress[0];
    var realtextaddf = document.getElementById('realtextadd');
    realtextaddf.innerHTML += textaddress[1];

}

function addRowtoGoogleSheet() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}/${month}/${year}`;
    var sanpham = document.getElementById('txtsanpham').value;
    var anhsanpham = document.getElementById('imagedathang').src;
    var donvi = document.getElementById('txtdonvi').value;
    var soluong = document.getElementById('txtsoluong').value;
    var hovaten = document.getElementById('txthoten').value;
    var sodienthoai = document.getElementById('txtsodienthoai').value;
    var diachinhanhang = document.getElementById('txtdiachinhanhang').value;
    var ngaydathang = currentDate;
    var formdata = new FormData();
    formdata.append("Sanpham", sanpham);
    formdata.append("Anhsanpham", anhsanpham)
    formdata.append("Donvi", donvi);
    formdata.append("Soluong", soluong);
    formdata.append("Hovaten", hovaten);
    formdata.append("Sodienthoai", sodienthoai);
    formdata.append("Diachinhanhhang", diachinhanhang);
    formdata.append("Ngaydathang", ngaydathang);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://script.google.com/macros/s/AKfycbwlpUwIx60YBzzoetcQAU4ytD86JN4pJzrNBSM5Tw4i478loJQBP4mRCw1J1Akov1TteQ/exec", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            alert("Cảm ơn bạn đã đặt hàng, đơn hàng của bạn sẽ được xử lý trong thời gian sớm nhất");

        })
        .catch(error => console.log('error', error));
}

function isMobile() {
    var match = window.matchMedia || window.msMatchMedia;
    if (match) {
        var mq = match("(pointer:coarse)");
        return mq.matches;
    }
    return false;
}

function isUrlValid(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}


async function getlocation() {
    var textaddress = await downloadAddress();
    var location = textaddress[2];
    var latden = location.split(',')[0];
    var londen = location.split(',')[1];

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {

            var lattu = position.coords.latitude;
            var lontu = position.coords.longitude;
            var url = 'https://www.google.com/maps/dir/?api=1&origin=' + lattu + ',' + lontu + '&destination=' + latden + ',' + londen;
            //console.log(url);
            window.open(url, '_blank');

        });
    } else {
        console.log("Geolocation is not available in your browser.");
    }
}