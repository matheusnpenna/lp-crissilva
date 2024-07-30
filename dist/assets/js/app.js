const accordionWrapper = document.getElementById('accordion-collapse')
const FAQs = [
  { title: "Qual público você atende?", text: "Lorem ipsum dolor sit amet consectetur. Neque feugiat pharetra sit commodo a ullamcorper elementum. Integer odio augue facilisis velit. Nunc sed eget tellus sit. Sed lacus odio dui cum fringilla. Pretium posuere vehicula imperdiet sit volutpat nunc. Volutpat vulputate volutpat suspendisse aliquet tincidunt enim turpis." },
  { title: "Qual público você atende?", text: "Lorem ipsum dolor sit amet consectetur. Neque feugiat pharetra sit commodo a ullamcorper elementum. Integer odio augue facilisis velit. Nunc sed eget tellus sit. Sed lacus odio dui cum fringilla. Pretium posuere vehicula imperdiet sit volutpat nunc. Volutpat vulputate volutpat suspendisse aliquet tincidunt enim turpis." },
  { title: "Qual público você atende?", text: "Lorem ipsum dolor sit amet consectetur. Neque feugiat pharetra sit commodo a ullamcorper elementum. Integer odio augue facilisis velit. Nunc sed eget tellus sit. Sed lacus odio dui cum fringilla. Pretium posuere vehicula imperdiet sit volutpat nunc. Volutpat vulputate volutpat suspendisse aliquet tincidunt enim turpis." },
  { title: "Qual público você atende?", text: "Lorem ipsum dolor sit amet consectetur. Neque feugiat pharetra sit commodo a ullamcorper elementum. Integer odio augue facilisis velit. Nunc sed eget tellus sit. Sed lacus odio dui cum fringilla. Pretium posuere vehicula imperdiet sit volutpat nunc. Volutpat vulputate volutpat suspendisse aliquet tincidunt enim turpis." },
  { title: "Qual público você atende?", text: "Lorem ipsum dolor sit amet consectetur. Neque feugiat pharetra sit commodo a ullamcorper elementum. Integer odio augue facilisis velit. Nunc sed eget tellus sit. Sed lacus odio dui cum fringilla. Pretium posuere vehicula imperdiet sit volutpat nunc. Volutpat vulputate volutpat suspendisse aliquet tincidunt enim turpis." },
]

FAQs.forEach((faq, i) => {
  accordionWrapper.insertAdjacentHTML('beforeend',`
    <div class="accordion-item mb-6">
      <button 
        id="accordion-collapse-heading-${i}"
        type="button" 
        class="accordion-header collapsed flex items-center w-full p-5 font-medium gap-3" 
        data-accordion-target="#accordion-collapse-body-${i}" 
        aria-expanded="true" 
        aria-controls="accordion-collapse-body-${i}"
      >
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
        <span>${faq.title}</span>
      </button>
      <div 
        id="accordion-collapse-body-${i}" 
        class="accordion-body hidden p-5" 
        aria-labelledby="accordion-collapse-heading-${i}">
          <p class="mb-2 text-gray-500 dark:text-gray-400">${faq.text}</p>
      </div>
    </div>
  `)
  document.getElementById(`accordion-collapse-heading-${i}`)
  .addEventListener('click', function() {
    const aBody = document.getElementById(`accordion-collapse-body-${i}`)
    const aHeading = document.getElementById(`accordion-collapse-heading-${i}`)

    const isCollapsed = aBody.classList.contains('hidden') && aHeading.classList.contains('collapsed')

    if (isCollapsed) {
      aBody.classList.remove('hidden')
      aHeading.classList.remove('collapsed')
    } else {
      aBody.classList.add('hidden');
      aHeading.classList.add('collapsed')
    }

    FAQs.forEach((_, index) => { 
      if (index != i) {
        document.getElementById(`accordion-collapse-body-${index}`)
        .classList.add('hidden')
        document.getElementById(`accordion-collapse-heading-${index}`)
        .classList.add('collapsed')
      }
    })
  })
})
new Glider(document.querySelector('.carousel-testimony'), {
  slidesToShow: 4,
  slidesToScroll: 4,
  draggable: true,
  gap: 20,
  responsive: [
    { breakpoint: 991, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    { breakpoint: 560, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 280, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
}); 
// var typed = new Typed('#typed', {
//   strings: [
//     'Seguro',
//     'Confiavel',
//     'Prático'
//   ],
//   typeSpeed: 100,
//   loop: true
// });

// particlesJS.load('particles', '/assets/js/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });
// var phoneInput = document.querySelector("input[name='phone'")

// phoneInput.addEventListener('keydown', function(event) {
//    if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
//     var mask = '(11) 1 1111-1111';
 
//     if (/[0-9\+\ \-\(\)]/.test(event.key)) {
//         var currentString = this.value;
//         var currentLength = currentString.length;
//         if (/[0-9]/.test(event.key)) {
//             if (mask[currentLength] == '1') {
//                 this.value = currentString + event.key;
//             } else {
//                 for (var i=currentLength; i<mask.length; i++) {
//                 if (mask[i] == '1') {
//                     this.value = currentString + event.key;
//                     break;
//                 }
//                 currentString += mask[i];
//                 }
//             }
//         }
//     } 
// });

// var form = document.querySelector("form");

// function removeMask(value) {
//   return String(value).replace(/\s/g, "")
//   .replace(/-/g, "")
//   .replace(/\(/g, "")
//   .replace(/\)/g, "")
//   .replace(/\D/g, "")
//   .trim()
// }

// function preparePhone(value) {
//   var phone = removeMask(value);

//   var first_digits = phone[0] + phone[1];
//   if (first_digits != "55")
//     phone = "55" + phone;

//   return phone;
// }

// form.addEventListener("submit", function(e) {
//   e.preventDefault();
//   var name = form.querySelector("input[name='name']").value;
//   var phone = preparePhone(form.querySelector("input[name='phone']").value);
//   var message = form.querySelector("textarea").value;

//   var url = "https://api.whatsapp.com/send?phone=5575982545482"+"&text="+"Nome: "+ name + " | Whatsapp: "+phone+" | Mensagem:" + message;

//   window.open(url, "_blank");
// })
var gtm_ref, analytics_ref, fb_ref = "";

function startGTMWebVitals() {
  if (window.gtmDidInit) {
    return false
  }

  window.gtmDidInit = true

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = false
  script.onload = () => {
    dataLayer.push({
      event: 'gtm.js',
      'gtm.start': new Date().getTime(),
      'gtm.uniqueEventId': 0,
    })
  }

  script.src = 'https://www.googletagmanager.com/gtm.js?id=' + gtm_ref

  document.head.appendChild(script)

  var noscript = document.createElement('div')

  noscript.innerHTML = `
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=${gtm_ref}"
            height="0"
            width="0"
            style="display: none; visibility: hidden"
          ></iframe>
        </noscript>
      `
  document.body.insertBefore(noscript, document.body.childNodes[0])
}

function startFBWebVitals() {
    if (window.fbDidInit) {
      return false
    }

    window.fbDidInit = true

    !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      
    fbq('init', fb_ref);
    fbq('track', 'PageView');

    var noscript = document.createElement('div')

    noscript.innerHTML = `
      <noscript>
        <img 
          height="1" 
          width="1" 
          style="display:none"
          src="https://www.facebook.com/tr?id=${fb_ref}&ev=PageView&noscript=1"
        />
      </noscript>
    `
    document.body.insertBefore(noscript, document.body.childNodes[0])
}

function startAnalyticsWebVitals() {
  if (window.analyticsDidInit) {
    return false
  }

  window.analyticsDidInit = true

  const pure_script = document.createElement('script')
  pure_script.type = 'text/javascript'
  pure_script.async = false
  pure_script.src = "https://www.googletagmanager.com/gtag/js?id="+analytics_ref;
  document.head.appendChild(pure_script)

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = false
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', analytics_ref);
  }

  document.head.appendChild(script)
}

function startAll() {
  if (analytics_ref) startAnalyticsWebVitals();
  if (gtm_ref) startGTMWebVitals();
  if (fb_ref) startFBWebVitals();
}

function startOnEvent(event) {
  startAll();
  event.currentTarget.removeEventListener(event.type, startOnEvent) // remove the event listener that got triggered
}

function startScripts(fb, gtm, analytics_r) {
  gtm_ref = gtm;
  fb_ref = fb;
  analytics_ref = analytics_r;

  setTimeout(startAll, 3500)
  document.addEventListener('scroll', startOnEvent)
  document.addEventListener('mousemove', startOnEvent)
  document.addEventListener('touchstart', startOnEvent)
}

/*
- HOW TO:
  - Add on page the following code below:
    <div class="embed-responsive embed-responsive-16by9 h-100">
      <div id="iframe-video"></div>
    </div>
  - isteand of
    <div class="embed-responsive embed-responsive-16by9 h-100">
      <iframe
        class="embed-responsive-item"
        src="link_to_embed_video"
        frameborder="0"
        allow="fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  - them, call this function passing the link of embed video, on end of 
  file inside of DOMContentLoaded event.
  - for example: startVideoEmbedWebVitals('https://youtube.com/embed/O4a8DJayUh8');

  Obs: if exists two iframes in page for desktop and for mobile, use the following id: iframe-video-mobile
*/
function startVideoEmbedWebVitals(link) {
  setTimeout(() => {
    var video = document.getElementById('iframe-video');
    var videoMobile = document.getElementById('iframe-video-mobile');
    var iframe = `
      <iframe
        class="embed-responsive-item"
        src="${link}"
        frameborder="0"
        allow="autoplay;fullscreen"
        allowfullscreen
      ></iframe>
    `;
    video.innerHTML = iframe;
    if (videoMobile) videoMobile.innerHTML = iframe;
  }, 2500);
}

function startBatchVideoEmbedWebVitals(link_list) {
  if (!Array.isArray(link_list)) {
    console.error("startBatchVideoEmbedWebVitals => Passed param isn't an array")
    return;
  }

  setTimeout(() => {
    for(var i = 0; i < link_list.length; i++) {
      var video = document.getElementById('iframe-video-'+i);
      var videoMobile = document.getElementById('iframe-video-mobile-'+i);
      var iframe = `
        <iframe
          class="embed-responsive-item"
          src="${link_list[i]}"
          frameborder="0"
          allow="autoplay;fullscreen"
          allowfullscreen
        ></iframe>
      `;
      video.innerHTML = iframe;
      if (videoMobile) videoMobile.innerHTML = iframe;
    }
  }, 3500);
}
let watchClickOutside = false;

function onClickOutside(event) {
  if (watchClickOutside) {
    const el = document.querySelector("aside")
    if (el.style.width == '70%' && el && !(el === event.target || el.contains(event.target))) {
      document.querySelector("aside").style.width = '0px';
    }
    document.removeEventListener('click', onClickOutside);
    watchClickOutside = false
  } else {
    watchClickOutside = true
  }
}

document.querySelector(".btn-menu").addEventListener("click", function() {
  document.querySelector("aside").style.width = '70%';
  document.addEventListener('click', onClickOutside);
}, { passive: true });

document.querySelector(".btn-close").addEventListener("click", function() {
  document.querySelector("aside").style.width = '0px';
}, { passive: true })

document.querySelectorAll(".mobile-menu-item").forEach(item =>{
  item.addEventListener("click", function() {
    document.querySelector("aside").style.width = '0px';
  }, { passive: true });
});

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
var headerPosition = document.querySelector("header").offsetTop;

document.addEventListener("scroll", (e) => {
  var scrolled = document.scrollingElement.scrollTop;
  var navbar = document.querySelector("nav");
  
  if (window.innerWidth <= 991) {
    if (scrolled < headerPosition || scrolled > lastScrollTop) {
      navbar.style.position = "relative";
      } else if (scrolled < lastScrollTop) {
      navbar.style.position = "absolute";
      navbar.style["z-index"] = "98";
      navbar.style.position = "fixed";
      navbar.style.top = "0px";
      navbar.style.left = "0px";
      navbar.style.right = "0px";
    }
    lastScrollTop =
      scrolled <= 0 ? 0 : scrolled;
  }
}, { passive: true });