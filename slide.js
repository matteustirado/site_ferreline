document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0; // O slide atual começa no primeiro
    const slides = document.querySelectorAll('.slide'); // Seleciona todos os slides
    const totalSlides = slides.length; // Conta quantos slides existem
    const sliderContainer = document.querySelector('.slider-container'); // Container que contém os slides
    const indicators = document.querySelectorAll('.indicator'); // Seleciona os indicadores de navegação
    const closeBtn = document.querySelector('.close-btn'); // Seleciona o botão de fechar do WhatsApp
    const itemFixed = document.querySelector('.item_fixed'); // Seleciona o item fixo (o container do WhatsApp)

    // Função para mudar o slide
    function changeSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Avança para o próximo slide, volta ao início quando chegar no final
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Move o container para o próximo slide
        updateIndicators(); // Atualiza os indicadores de navegação
    }

    // Atualiza os indicadores de slide
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Navegação automática a cada 5 segundos
    setInterval(changeSlide, 5000);

    // Evento de clique nos indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateIndicators();
        });
    });

    // Função para fechar o WhatsApp
    function closeWhatsApp() {
        itemFixed.classList.add('closed'); // Adiciona a classe 'closed' para esconder o item fixo
    }

    // Adiciona o evento de clique no botão de fechar
    if (closeBtn) {
        closeBtn.addEventListener('click', closeWhatsApp);
    }
});
