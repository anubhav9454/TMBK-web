export const state = () =>({
    menu: [
        {
          name: 'Welcome',
          link: '/',
        },
        {
          name: 'About Us',
          link: '/about',
        },
        {
          name: 'Services',
          link: '/services',
        },
        {
          name: 'Gallery',
          link: '/gallery',
        },
        {
          name : 'Contact us',
          link : '/contact'
        },
    ],
    
    current_page: 'Welcome',
    current_language:'en',
    list_of_language:['en','fr'],

    data : {
      about_us_content : {
        en : 
          `TMBK BUSINESS Sarl is a company under Congolese law based in the city of Lubumbashi, in the province of Haut-Katanga in the Democratic Republic of Congo since 2017. 
          This company (TMBK BUSINESS) offers services (divided into branches) in several areas including: travel facilitation, construction, rental of construction equipment, drilling of filter wells, supply of goods and equipment and sales of services, placement service. 
          Our experience in these areas produces quality work with great satisfaction.`,
          
        fr : 
          `
          L’Entreprise TMBK BUSINESS Sarl est une société de droit Congolais basée dans la ville de Lubumbashi, dans la province du Haut-Katanga en République Démocratique du Congo depuis 2017.
          Cette Entreprise (TMBK BUSINESS) offre des services (Repartis en branches) dans plusieurs domaines notamment : la facilitation de voyage, Construction, location des équipements de construction, forage des puits filtrants, fourniture des biens et équipements et ventes des services ainsi que le service de placement.
          Notre expérience dans ces domaines vous  produit  un travail de qualité avec une grande satisfaction.        
          `
      },
      journey : {
        en: 
          `
          TMBK BUSINESS SARL, offers you a facilitation service for obtaining a Congolese passport, visit visa, study visa and others depending on your destination. TMBK BUSINESS Sarl sells plane tickets (CAA, Congo Airways and other aviation companies).
          `,

        fr:
          `
          TMBK BUSINESS SARL, vous offre un service de facilitation d’obtention de passeport congolais, visa visite, visa étude et autres selon votre destination. TMBK BUSINESS Sarl vend des billets d’avion (CAA, Congo Airways et autres compagnies d’aviation).
          `
      },
      services : 
      {
        construction : {
          en: 
          `
          From design to completion, TMBK BUSINESS guarantees you buildings according to architectural standards, a dream home with longevity, according to your budget and your preferences.      
          `,          
          fr: 
          `
          De la conception à la réalisation, TMBK BUSINESS Sarl vous garantit des bâtisses selon les normes architectural modernes, des demeure de rêve d’une longévité maximale, selon votre budget et vos préférences.
          `
        },
        hemm_rental : {
          en : 
          `
          TMBK BUSINESS SARL, provides you with the following Machines for rental and learning: Excavator, loader, grader, backhoe, Crane, DOZER, Compactor, Truck and OTHERS.
          `,
          fr : 
          `          
          TMBK BUSINESS SARL, met à votre disposition les Engins ci-après pour la location et l’apprentissage : Pelle excavatrice, chargeuse, niveleuse, tractopelle, Grue, DOZER, Compacteur, Camion  et AUTRES.
          `
        },
        good_services : {
          en : 
          `
          The Company TMBK BUSINESS SARL accompanies you in the purchase and delivery of everything you need according to your needs without limit in quantity.
          `,
          fr : 
          `
          L’Entreprise TMBK BUSINESS SARL vous accompagne dans l’achat et livraison de tout ce dont vous avez besoin selon vos besoins sans limite en quantité.
          `
        },
      },
    },
    box_data :[
      {image:'/images/a01.png',
      content:"Facilitation de l'obtention d'un passeport congolais",},
      {image:'/images/flight.jpg',
      content:"La vente des billets d'avion vers toutes les destinations",},
      {image:'/images/hot.png',
      content:"Réservation hotel dans le monde",},
      {image:'/images/im.jpg',
      content:"Facilitation de l'obtention de visa touristique, étude, de travail, de maladie etc.",},
      {image:'/images/port.jpg',
      content:"Réservation hotel dans le monde",},
      {image:'/images/study.jpg',
      content:"Facilitation de l'obtention d'une inscription a l'étranger.",},
      {image:'/images/traduction.jpg',
      content:'Traduction des documents scolaires et administratifs en Anglais, en français, en russe etc.',},
      {image:'/images/x1.jpg',
      content:"Réservation hotel dans le monde",},
    ],
    gallery: [
      '/images/gallery/x.jpg',
      '/images/gallery/x0.jpg',
      '/images/gallery/x1.jpg',
      '/images/gallery/x2.jpg',
      '/images/gallery/x3.jpg',
      '/images/gallery/x4.jpg',
      '/images/gallery/x5.jpg',
      '/images/gallery/x6.jpg',
      '/images/gallery/x7.jpg',
      '/images/gallery/x8.jpg',
      '/images/gallery/x9.jpg',
      '/images/gallery/x10.jpg',
      '/images/gallery/x11.jpg',

    ],
    services:[
      {name: 'Electricité', img:'/images/services/electr.jpg'},
      {name: 'Maçonnerie', img:'/images/services/maconnerie.jpg'},
      {name: 'Maçonnerie', img:'/images/services/menui.png'},
      {name: 'Nettoyage professionnelles', img:'/images/services/nett.png'},

    ]
  
})

export const mutations = {
  set_current_page(state, element){
    console.log('Changing page-->')
    state.current_page = element
    console.log('Current Page -->', element)
  },
  set_current_lang(state,element){
    console.log('Changing Language')
    state.current_language = element
    console.log('Current Language -->', element)
  }
}