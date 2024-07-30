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
    <h2 id="accordion-collapse-heading-${i}">
      <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
        <span>${faq.title}</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-${i}" class="hidden" aria-labelledby="accordion-collapse-heading-1">
      <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p class="mb-2 text-gray-500 dark:text-gray-400">${faq.text}</p>
      </div>
    </div>
  `)
  document.getElementById(`accordion-collapse-heading-${i}`)
  .addEventListener('click', function() {
    FAQs.forEach((_, index) => { 
      document.getElementById(`accordion-collapse-body-${index}`)
      .classList.add('hidden')
    })

    const aBody = document.getElementById(`accordion-collapse-body-${i}`)
    if (aBody.classList.contains('hidden')) {
      aBody.classList.remove('hidden');
    } else {
      aBody.classList.add('hidden');
    }
  })
})