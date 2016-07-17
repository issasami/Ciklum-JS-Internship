//= ../../bower_components/jquery/dist/jquery.js

$(document).ready(function(){
//header nav
        $('#show-store').on('click', function(e) {
                $('.microsoft-dropdown__subcategory').hide();
                $('#product').slideUp(200);
                $('#store').stop().slideToggle(200);
                e.preventDefault();
        });

        $('#show-product').on('click', function(e) {
                $('.microsoft-dropdown__subcategory').hide();
                $('#store').slideUp(200);
                $('#product').stop().slideToggle(200);
                e.preventDefault();
        });

//dropdown__subcategories

        $('.microsoft-dropdown__item:eq(0)').hover(function(){
                $('.microsoft-dropdown__subcategory').hide();
        });

        $('.microsoft-dropdown__item:eq(1)').hover(function(){
                $('.microsoft-dropdown__subcategory').show();
                $('.microsoft-dropdown__subcategory_item:eq(0)').text('Microsoft Surface').show();
                $('.microsoft-dropdown__subcategory_item:eq(1)').text('PCs & tablets').show();
                $('.microsoft-dropdown__subcategory_item:eq(2)').text('Xbox').show();
                $('.microsoft-dropdown__subcategory_item:eq(3)').text('Microsoft Band').show();
                $('.microsoft-dropdown__subcategory_item:eq(4)').text('Microsoft Lumia').show();
                $('.microsoft-dropdown__subcategory_item:eq(5)').text('Accessories').show();
        });

        $('.microsoft-dropdown__item:eq(2)').hover(function(){
                $('.microsoft-dropdown__subcategory').show();
                $('.microsoft-dropdown__subcategory_item:eq(0)').text('Office');
                $('.microsoft-dropdown__subcategory_item:eq(1)').text('Windows');
                $('.microsoft-dropdown__subcategory_item:eq(2)').text('Additional software');
                $('.microsoft-dropdown__subcategory_item:eq(3)').hide();
                $('.microsoft-dropdown__subcategory_item:eq(4)').hide();
                $('.microsoft-dropdown__subcategory_item:eq(5)').hide();
        });
        $('.microsoft-dropdown__item:eq(3)').hover(function(){
                $('.microsoft-dropdown__subcategory').show();
                $('.microsoft-dropdown__subcategory_item:eq(0)').text('All apps');
                $('.microsoft-dropdown__subcategory_item:eq(1)').text('Windows apps');
                $('.microsoft-dropdown__subcategory_item:eq(2)').text('Windows Phone apps');
                $('.microsoft-dropdown__subcategory_item:eq(3)').text('Xbox apps');
                $('.microsoft-dropdown__subcategory_item:eq(4)').hide();
                $('.microsoft-dropdown__subcategory_item:eq(5)').hide();
        });
        $('.microsoft-dropdown__item:eq(4)').hover(function(){
                $('.microsoft-dropdown__subcategory').show();
                $('.microsoft-dropdown__subcategory_item:eq(0)').text('All games');
                $('.microsoft-dropdown__subcategory_item:eq(1)').text('Xbox One games');
                $('.microsoft-dropdown__subcategory_item:eq(2)').text('Xbox 360 games');
                $('.microsoft-dropdown__subcategory_item:eq(3)').text('Windows games');
                $('.microsoft-dropdown__subcategory_item:eq(4)').text('Games for Windows Phone');
                $('.microsoft-dropdown__subcategory_item:eq(5)').hide();
        });
        $('.microsoft-dropdown__item:eq(5)').hover(function(){
                $('.microsoft-dropdown__subcategory').show();
                $('.microsoft-dropdown__subcategory_item:eq(0)').text('All entertainment');
                $('.microsoft-dropdown__subcategory_item:eq(1)').text('Films & TV');
                $('.microsoft-dropdown__subcategory_item:eq(2)').text('Music');
                $('.microsoft-dropdown__subcategory_item:eq(3)').hide();
                $('.microsoft-dropdown__subcategory_item:eq(4)').hide();
                $('.microsoft-dropdown__subcategory_item:eq(5)').hide();
        });
        $('.microsoft-dropdown__item:eq(6)').hover(function(){
                $('.microsoft-dropdown__subcategory').show();
                $('.microsoft-dropdown__subcategory_item:eq(0)').text('Business');
                $('.microsoft-dropdown__subcategory_item:eq(1)').text('Student store');
                $('.microsoft-dropdown__subcategory_item:eq(2)').hide();
                $('.microsoft-dropdown__subcategory_item:eq(3)').hide();
                $('.microsoft-dropdown__subcategory_item:eq(4)').hide();
                $('.microsoft-dropdown__subcategory_item:eq(5)').hide();
        });
        $('.microsoft-dropdown__item:eq(7)').hover(function(){
                $('.microsoft-dropdown__subcategory').show();
                $('.microsoft-dropdown__subcategory_item:eq(0)').text('Sales');
                $('.microsoft-dropdown__subcategory_item:eq(1)').text('Gift cards');
                $('.microsoft-dropdown__subcategory_item:eq(2)').hide();
                $('.microsoft-dropdown__subcategory_item:eq(3)').hide();
                $('.microsoft-dropdown__subcategory_item:eq(4)').hide();
                $('.microsoft-dropdown__subcategory_item:eq(5)').hide();
        });



        /*Show hide */

        $('#show-hide').click(function(){ 
                $('.microsoft-search__hide').animate({height:'toggle', width:'toggle', opacity: 'toggle'}, 800, "linear");
                $('.microsoft-search').animate({height:'toggle', width:'toggle', opacity: 'toggle'}, 800, "linear");
      });

        /*Sandwich*/

        $('#show-nav').click(function(){
            $('.microsoft-nav').slideToggle();    
        });

});