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