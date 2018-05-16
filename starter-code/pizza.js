// Write your Pizza Builder JavaScript in this file.

  
  $(function() {
    // Button
  var $pepBtn = $('.btn-pepperonni');
  var $mushBtn = $('.btn-mushrooms');
  var $greenPepBtn = $('.btn-green-peppers');
  
    // Toppings
  var $pepperonni = $('.pep');
  var $mushroom = $('.mushroom');
  var $greenPeppers = $('.green-pepper');


  $pepBtn.removeClass('active');
  $pepBtn.on('click', function(){
    $pepperonni.toggle();
    $pepBtn.toggleClass('active');
  });

  $mushBtn.removeClass('active');
  $mushBtn.on('click', function(){
    $mushroom.toggle();
    $mushBtn.toggleClass('active');
  });

  $greenPepBtn.removeClass('active');
  $greenPepBtn.on('click', function(){
    $greenPeppers.toggle();
    $greenPepBtn.toggleClass('active');
  });

// White Sauce & Gluten Free Crust

var $sauce = $('.sauce');
var $sauceBtn = $('.btn-sauce');

  $sauce.removeClass('sauce-white');
  $sauceBtn.removeClass('active');

  $sauceBtn.on('click', function() {
  $sauce.toggleClass('sauce-white');
  $sauceBtn.toggleClass('active');
})

var $crust = $('.crust');
var $crustBtn = $('.btn-crust');

  $crust.removeClass('crust-gluten-free');
  $crustBtn.removeClass('active');

  $crustBtn.on('click', function(){
    $crust.toggleClass('crust-gluten-free');
    $crustBtn.toggleClass('active');
  })




});
