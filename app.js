// Loader robusto: gráficos e estatísticas sem dependência externa obrigatória.
(function(){
  const css=document.createElement('link');
  css.rel='stylesheet'; css.href='native.css?v=3';
  document.head.appendChild(css);
  const s=document.createElement('script');
  s.src='app-native.js?v=3';
  s.onload=function(){
    if(document.readyState!=='loading' && typeof window.init==='function' && !window.__baraoInit){
      window.__baraoInit=true; window.init();
    }
  };
  document.head.appendChild(s);
})();
