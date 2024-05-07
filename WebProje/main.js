const scrollRevealOption = {
  distance: "50px" /*belirli mesafede */,
  origin: "bottom" /*belirli bir yönde */,
  duration: 1000 /*belirli bir sürede ekrana gelmesi */,
};
/*animasyon kütüphanesi veya kaydırma etkisi uygulayan bir JavaScript kütüphanesi tarafından kullanılan bir konfigürasyon nesnesi */
/* distance özelliği, animasyonun başlamadan önce öğenin belirli bir mesafeye kadar ekranın içinde olmasını gerektirir.  */
/*origin özelliği, animasyonun nereden başlayacağını belirler (örneğin, "bottom" alttan gelecek demektir) */
/*duration özelliği, animasyonun tam süresini belirler. */

//header container

new ScrollReveal().reveal(".nav-links ", scrollRevealOption);

new ScrollReveal().reveal(".text-box h1 ", {
  /*gecikmeli animasyon içn delay özelliğini kullanıyoruz. */
  ...scrollRevealOption,
  delay: 500,
});
new ScrollReveal().reveal(".text-box .hero-btn", {
  ...scrollRevealOption,
  delay: 1000,
});

//about container

new ScrollReveal().reveal(".kesif h1", scrollRevealOption);
new ScrollReveal().reveal(".row h3", {
  ...scrollRevealOption,
  delay: 500,
});
new ScrollReveal().reveal(".kesif-col h3", {
  ...scrollRevealOption,
  delay: 1000,
});
new ScrollReveal().reveal(".about__container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});
