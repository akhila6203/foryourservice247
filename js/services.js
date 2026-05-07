const services = [

  {
    title: "IT Services & Web Design",
    image: "images/hs1.png",
    desc: "We provide the most responsive and functional IT design for companies and businesses worldwide."
  },

  {
    title: "Networking, CC TV & Security System",
    image: "images/hs2.png",
    desc: "It’s possible to simultaneously manage and transform key information from one server to another."
  },

  {
    title: "Domestic and International Travels",
    image: "images/hs3.jpg",
    desc: "can both offer opportunities for adventure and discovery, but the ideal choice depends on your goals and preferences."
  },

  {
    title: "Printing Works & Brand Management",
    image: "images/hs4.jpg",
    desc: "We work with a team of designers, printers and print media contacts that allow us to meet all your marketing materials needs."
  },

  {
    title: "Solar Power System",
    image: "images/hs5.jpg",
    desc: "Power Solar, leading integrated solar player, offers solar rooftop panel for home at affordable price in India."
  },

  {
    title: "Visa Services",
    image: "images/hs6.jpg",
    desc: "Visa Experts has an experience in handling a wide range of clients who are highly satisfied with our visa services."
  },
  {
    title: "Event Management",
    image: "images/hs7.jpg",
    desc: "Event Management refers to the organization, planning, and coordination of events such as conferences, weddings, festivals, and meetings."
  },
  {
    title: "Brand Management",
    image: "images/hs8.png",
    desc: "Brand management is responsible for building a solid customer base and bringing out the brand's voice in public, resulting in more robust sales."
  },
  {
    title: "Architectural Works",
    image: "images/hs9.jpg",
    desc: "An architectural work is the design of a building as embodied in any tangible medium of expression, including a building, architectural plans, or drawings."
  },
  {
    title: "All type of Insurance",
    image: "images/hs10.jpg",
    desc: "Explore diverse insurance policies in India—life, health, motor, travel, and home. Learn about life, car, and domestic travel insurance with tax benefits."
  },
  {
    title: "Home/Office Cleaning",
    image: "images/hs11.jpg",
    desc: "Our professional cleaning restores the appearance of your office chairs, making them look fresh and welcoming."
  },
  {
    title: "CA Services",
    image: "images/hs12.jpg",
    desc: "Our skilled consultants provide crucial business advisory services and handle compliance management, ensuring your operations adhere to legal standards."
  },
  {
    title: "PC Hardware",
    image: "images/hs13.png",
    desc: "Our hardware service programs go beyond the included one-year warranty to help you save time and reduce long term, operational costs."
  },
  {
    title: "VoIP & Sip, Electrical",
    image: "images/hs14.png",
    desc: "VoIP services offer your business the most advanced options for using the internet to power your phones rather than standard phone lines."
  },
  {
    title: "EPABX",
    image: "images/hs15.png",
    desc: "Visa Experts has an experience in handling a wide range of clients who are highly satisfied with our visa services."
  },
  {
    title: "Cargo Services",
    image: "images/hs16.jpeg",
    desc: "Apart from delivering regular shipments, both Import & Export, Fastway Express offers a unique service to courier anything & send personal packages"
  },
  {
    title: "UPS",
    image: "images/hs17.jpg",
    desc: "VoIP services offer your business the most advanced options for using the internet to power your phones rather than standard phone lines."
  },
  {
    title: "Catering Services",
    image: "images/hs18.jpg",
    desc: "Catering services can range from formal events like weddings and corporate parties to casual gatherings like birthday bashes and picnics."
  },

];

const serviceGrid = document.getElementById("serviceGrid");

services.forEach((service) => {

  serviceGrid.innerHTML += `

    <div class="service-card">

      <img src="${service.image}" alt="${service.title}">

      <div class="service-content">

        <h3>${service.title}</h3>

        <p>${service.desc}</p>

        <div class="card-buttons">

          <a href="tel:+919493187178" class="contact-btn">
            Call Now
          </a>

          <a
            href="https://wa.me/919493187178"
            target="_blank"
            class="whatsapp-btn"
          >
            WhatsApp Now
          </a>

        </div>

      </div>

    </div>

  `;
});