import $ from 'jquery'
import './style.scss'


$(document).on('mouseover', '.container .column', function(){
  $(this).addClass('active').siblings().removeClass('active');
});
