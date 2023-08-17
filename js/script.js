// Sample service data, you can replace it with your own data
const servicesData = [
    { name: "Manicure", price: "$20" },
    { name: "Pedicure", price: "$30" },
    { name: "Nail Art", price: "$15+" },
    { name: "Gel Nails", price: "$35" },
    // Add more services as needed
];

// Function to dynamically create service cards
function createServiceCard(service) {
    const serviceCard = document.createElement("div");
    serviceCard.classList.add("service-card");

    const serviceName = document.createElement("h3");
    serviceName.textContent = service.name;

    const servicePrice = document.createElement("p");
    servicePrice.textContent = `Price: ${service.price}`;

    serviceCard.appendChild(serviceName);
    serviceCard.appendChild(servicePrice);

    return serviceCard;
}

// Function to display services on the page
function displayServices() {
    const servicesContainer = document.querySelector(".services-container");

    servicesData.forEach((service) => {
        const serviceCard = createServiceCard(service);
        servicesContainer.appendChild(serviceCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayServices();
});
