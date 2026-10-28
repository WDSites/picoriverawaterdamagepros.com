(function(){
  var d=document, root=d.documentElement;
  root.className+=' js';
  var btn=d.getElementById('menubtn'), menu=d.getElementById('mobilemenu');
  if(btn&&menu){
    btn.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
      root.style.overflow=open?'hidden':'';
    });
  }
  var qs=d.querySelectorAll('.faqq');
  for(var i=0;i<qs.length;i++){
    qs[i].addEventListener('click',function(){
      var item=this.parentNode.parentNode;
      var open=item.classList.toggle('open');
      this.setAttribute('aria-expanded',open?'true':'false');
    });
  }
})();
