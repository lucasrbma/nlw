// create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map);
});

// add photo field
function addPhotoField() {
    // pegar container de fotos
    const container = document.querySelector('#images');

    // pegar container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // realizar clone da ultima imagem
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // verificação está limpo
    const input = newFieldContainer.children[0];

    if(input.value == "") {
        return 
    }

    // limpar campo
    input.value = "";

    // adicionar clone ao container de #images
    container.appendChild(newFieldContainer);
};

// limpar/deletar campo
function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1) {
        // limpar o valor do campo
        span.parentNode.children[0].value = "";
        return
    }
    
    // deletar o campo
    span.parentNode.remove();
};

// seleção sim/não
function toggleSelect(event) {
    // retirar class .active
    document.querySelectorAll('.button-select button').forEach(function(button) {
        button.classList.remove('active')
    });
    
    // adicionar class .active
    const button = event.currentTarget;
    button.classList.add('active');
    
    // atualizar input hidden
    const input = document.querySelector('[name="open-on-weekends"');
    
    // verificar sim/não
    input.value = button.dataset.value;
}