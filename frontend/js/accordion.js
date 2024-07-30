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