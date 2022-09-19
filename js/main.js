// event pada saat di klik

$('.page-scroll').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');
	//tangkap elemen yang bersangkutan

	var elemenTujuan = $(tujuan);

	//pindahkan scrol

	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 90
	});

	e.preventDefault();

});

// paralax 
// berita 

$(window).scroll( function (){
    var wScroll = $(this).scrollTop()

    //berita
	if(wScroll > $('.berita').offset().top - 300){
		$('.berita .card-berita').each(function(i) {
			setTimeout(function() {

				$('.berita .card-berita').eq(i).addClass('muncul');
			}, 400 * (i + 1));
		});

        $('.berita .main-tulisan-berita').each(function(i){
            setTimeout(function(){
                $('.berita .main-tulisan-berita').eq(i).addClass('bMuncul');
            }, 400 * (i + 1));
        });
	}

    // about img
    if(wScroll > $('.about').offset().top - 300){
        $('.about .about-img').each(function(i) {
            setTimeout(function(){
                $('.about .about-img').eq(i).addClass('about-muncul');
            });
        });
    }

    // about desc
    if(wScroll > $('.about').offset().top - 300){
        $('.about .about-desc').each(function(i) {
            setTimeout(function(){
                $('.about .about-desc').eq(i).addClass('about-muncul');
            });
        });
    }

    // about main tulisan
    if(wScroll > $('.about').offset().top - 300){
        $('.about .main-tulisan-about').each(function(i) {
            setTimeout(function(){
                $('.about .main-tulisan-about').eq(i).addClass('main-tulisan-muncul');
            });
        });
    }

    // head vision
    if(wScroll > $('.vision').offset().top - 300){
        $('.vision .vision-main-judul').each(function(i) {
            setTimeout(function(){
                $('.vision .vision-main-judul').eq(i).addClass('vision-judul-muncul');
            });
        });
    }

    // isi vision
    if(wScroll > $('.vision').offset().top - 300){
        $('.vision .isi-vision').each(function(i) {
            setTimeout(function(){
                $('.vision .isi-vision').eq(i).addClass('isi-vision-muncul');
            });
        });
    }

    // head mision
    if(wScroll > $('.vision').offset().top - 300){
        $('.vision .mision-main-judul').each(function(i) {
            setTimeout(function(){
                $('.vision .mision-main-judul').eq(i).addClass('mision-main-muncul');
            });
        });
    }

    // isi misi
    if(wScroll > $('.vision').offset().top - 300){
        $('.vision .isi-misi').each(function(i) {
            setTimeout(function(){
                $('.vision .isi-misi').eq(i).addClass('isi-misi-muncul');
            });
        });
    }
});

