import React, { Component } from 'react'
import Header2 from '../commons/Header2';
import NavBar2 from '../commons/NavBar2';
import UserBio from '../commons/UserBio';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select'
import axios from 'axios';


export class UserJobs extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: false,
          job_title: '',
          employment_type: '',
          salary: '',
          //states: [],
          lgas: [],
          job_description: '',
          languages: null,
          skills: [],
		  states : [],
		  lgas : [],
		  selectedState : '',
		  selectedLGA : '',
          user_jobs: [],
          loading: true,

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.changeState = this.changeState.bind(this);
		this.changeLGA = this.changeLGA.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
  
    }


    changeState(event) {
		this.setState({selectedState: event.target.value});
		this.setState({lgas : this.state.states.find(state => state.name === event.target.value).lgas});
        console.log(event.target.value);
	}

	changeLGA(event) {
		this.setState({selectedLGA: event.target.value});
		// const stats = this.state.states.find(cntry => cntry.name === this.state.selectedState).lgas;
		// this.setState({lgas : stats.find(stats => stats.name === event.target.value).lgas});
        console.log(event.target.value);
	}


    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }


      handleImageChange(e) {
        this.setState({inputImageValue: e.target.value });
        this.setState({ file: e.target.files[0].name });
      }


      handleSelect(selectedOption){
        //let value = Array.from(e.target.selectedOptions, option => option.value);
        //this.setState({values: value});
        //console.log(e.target.selectedOptions);
       /// this.setState({ languages: value });
        console.log(`Option selected:`, selectedOption);
        console.log(this.state.languages);
      }

  

    

      async componentDidMount() {


        this.setState({
            states: [ {name: 'Abia', 
            lgas: [
                    {name: "Aba North"},
                    {name: "Aba South"},
                    {name: "Arochuckwu"},
                    {name: "Bende"},
                    {name: "Ikwuano"},
                    {name: "Isiala Ngwa North"},
                    {name: "Isiala Ngwa South"},
                    {name: "Isuikwuato"},
                    {name: "Obingwa"},
                    {name: "Ohafia"},
                    {name: "Osisioma"},                    
                    {name: "Ugwunagbo"},
                    {name: "Ukwa East"},
                    {name: "Ukwa West"},
                    {name: "Umuahia North"},
                    {name: "Umuahia South"},                    
                    {name: "Umu-Nneochi"},
      
                    
              ]}, {name: 'Adamawa', 
                    lgas: [
                              
                              {name: "Demsa"},
                              {name: "Fufore"},
                              {name: "Ganye"},
                              {name: "Girei"},
                              {name: "Gombi"},
                              {name: "Guyuk"},
                              {name: "Hong"},
                              {name: "Jada"},
                              {name: "Lamurde"},
                              {name: "Madagali"},
                              {name: "Maiha"},
                              {name: "Mayo-Belwa"},
                              {name: "Michika"},
                              {name: "Mubi North"},
                              {name: "Mubi South"},
                              {name: "Numan"},
                              {name: "Shelleng"},
                              {name: "Song"},
                              {name: "Toungo"},
                              {name: "Yola North"},
                              {name: "Yola South"}, 
  
  
              ]}, {name: 'Anambra', 
              lgas: [
                              {name: 'Aguata'},
                              {name: 'Anambra East'},
                              {name: "Anambra West"},
                              {name: "Anaocha"},
                              {name: "Akwa North"},
                              {name: "Akwa South"},
                              {name: "Ayamelum"},
                              {name: "Dunukofia"},
                              {name: "Ekwusigo"},
                              {name: "Idemili North"},
                              {name: "Idemili South"},
                              {name: "Ihiala"},
                              {name: "Njikoka"},
                              {name: "Nnewi North"},
                              {name: "Ogbaru"},
                              {name: "Onitsha North"},
                              {name: "Onitsha South"},
                              {name: "Orumba North"},
                              {name: "Orumba South"},
                              {name: "Oyi"},
  
                              
  
  
  
  
          ]}, {name: 'Akwa Ibom', 
              lgas: [
                              {name: 'Abak'},
                              {name: 'Eastern Obolo'},
                              {name: "Eket"},
                              {name: "Esit-Eket"},
                              {name: "Essien Udim"},
                              {name: "Etim-Ekpo"},
                              {name: "Etinan"},
                              {name: "Ibeno"},
                              {name: "Ibesikpo-Asutan"},
                              {name: "Ibiono-Ibom"},
                              {name: "Ika"},
                              {name: "Ikono"},
                              {name: "Ikot Abasi"},
                              {name: "Ikot Ekpene"},
                              {name: "Ini"},
                              {name: "Itu"},
                              {name: "Mbo"},
                              {name: "Mkpat-Enin"},
                              {name: "Nsit-Atai"},
                              {name: "Nsit-Ibom"},
                              {name: "Nsit-Ubium"},
                              {name: "Obot-Akara"},       
                              {name: "Okobo"},
                              {name: "Onna"}, 
                              {name: "Oron"},
                              {name: "Oruk Anam"}, 
                              {name: "Udung- Uko"},
                              {name: "Ukanafun"},
                              {name: "Uruan"},
                              {name: "Urue-Offong/Oruko"},
                              {name: "Uyo"},
                              
  
          ]}, {name: 'Bauchi', 
              lgas: [
                              {name: 'Alkaleri'},
                              {name: 'Bauchi'},
                              {name: 'Bogoro'},
                              {name: 'Damban'},
                              {name: "Darazo"},
                              {name: "Dass"},
                              {name: "Gamawa"},
                              {name: "Ganjuwa"}, 
                              {name: "Giade"},
                              {name: "Itas/Gadua"},
                              {name: "Jama’are"},
                              {name: "Katagum"},
                              {name: "Kirfi"},
                              {name: "Misau"},
                              {name: "Ningi"},
                              {name: "Shira"},
                              {name: "Tafawa-Balewa"},
                              {name: "Toro"},
                              {name: "Warji"},
                              {name: "Zaki"},
  
  
                              
          ]}, {name: 'Bayelsa', 
                  lgas: [
                              {name: 'Brass'},
                              {name: 'Ekeremor'},
                              {name: 'Kolokuma Opokuma'},
                              {name: 'Nembe'},
                              {name: 'Ogbia'},
                              {name: 'Sagbama'},
                              {name: 'Southern Ijaw'},
                              {name: 'Yenagoa'}
          ]}, {name: 'Benue', 
                  lgas: [
                              {name: 'Ado'},
                              {name: 'Agatu'},
                              {name: 'Apa'},
                              {name: 'Buruku'},
                              {name: "Gboko"},
                              {name: "Guma"},
                              {name: "Gwer East"},
                              {name: "Gwer West"},
                              {name: "Katsina-Ala"},
                              {name: "Konshisha"},                         
                              {name: "Kwande"},
                              {name: "Logo"},
                              {name: "Makurdi"},
                              {name: "Obi"},
                              {name: "Ogbadibo"},
                              {name: "Oju"},
                              {name: "Okpokwu"},
                              {name: "Ohimini"},
                              {name: "Oturkpo"},
                              {name: "Tarka"},
                              {name: "Ukum"},
                              {name: "Ushongo"},       
                              {name: "Vandeikya"},
  
  
                              
          ]}, {name: 'Borno', 
                  lgas: [
                              {name: 'Abadam'},
                              {name: 'Askira/Uba'},
                              {name: 'Bama'},
                              {name: 'Bayo'},
                              {name: "Biu"},
                              {name: "Chibok"},
                              {name: "Damboa"},
                              {name: "Dikwa"},
                              {name: "Gubio"},
                              {name: "Guzamala"},
                              {name: "Gwoza"},
                              {name: "Hawul"},
                              {name: "Jere"},
                              {name: "Kaga"},
                              {name: "Kala/Balge"},
                              {name: "Konduga"},
                              {name: "Kukawa"},
                              {name: "Kwaya Kusar"},
                              {name: "Mafa"},
                              {name: "Magumeri"},
                              {name: "Maiduguri"},
                              {name: "Marte"},
                              {name: "Mobbar"},       
                              {name: "Monguno"},
                              {name: "Ngala"}, 
                              {name: "Nganzai"},
                              {name: "Shani"},   
  
       ]}, {name: 'Cross River', 
                  lgas: [
                              {name: "Abi"}, 
                              {name: 'Akamkpa'},
                              {name: 'Akpabuyo'},
                              {name: 'Bekwarra'},                             
                              {name: "Bakassi"},
                              {name: 'Biase'},
                              {name: "Boki"},
                              {name: "Calabar Municipal"},                       
                              {name: "Calabar South"},
  
                              {name: "Etung"},
                              {name: "Ikom"},
                              {name: "Obaniku"},
                              {name: "Obubra"},                              
                              {name: "Obudu"},
                              {name: "Odukpani"},
                              {name: "Ogoja"},
                              {name: "Yakuur"},
                              {name: "Yala"},
                              
          ]}, {name: 'Delta', 
                  lgas: [
                              {name: 'Aniocha North'},
                              {name: 'Aniocha South'}, 
                              {name: "Bomadi"},
                              {name: "Burutu"}, 
                              {name: "Ethiope East"},
                              {name: "Ethiope West"},                             
                              {name: 'Ika North East'},
                              {name: "Ika South"},
                              {name: "Isoko North"},
                              {name: "Isoko South"},
                              {name: "Ndokwa East"},
                              {name: "Ndokwa West"},
                              {name: "Oshimili North"},
                              {name: "Oshimili South"},                          
                              {name: "Patani"},
                              {name: "Sapele"},
                              {name: "Udu"},
                              {name: "Ughelli North"},
                              {name: "Ughelli South"},
                              {name: "Ukwuani"},
                              {name: "Uvwie"},       
                              {name: "Warri North"},
                              {name: "Warri South"},      
                              {name: "Warri South West"},
  
     ]}, {name: 'Ebonyi', 
                  lgas: [
                              {name: "Abakaliki"},
                              {name: 'Afikpo North'},
                              {name: 'Afikpo South'},
                              {name: 'Ebonyi'},
                              {name: 'Ezza North'},
                              {name: "Ezza South"},
                              {name: "Ikwo"},
                              {name: "Isielu"},
                              {name: "Ivo"},
                              {name: "Izzi"},
                              {name: "Ohaozara"}, 
                              {name: "Ohaukwu"},
                              {name: "Onicha"},       
   ]}, {name: 'Enugu', 
                  lgas: [
                              {name: "Aninri"},
                              {name: "Awgu"},
                              {name: "Enugu East"},
                              {name: "Enugu North"},
                              {name: "Enugu South"},
                              {name: "Ezeagu"},
                              {name: "Igbo Etiti"},
                              {name: "Igbo Eze North"},
                              {name: "Igbo Eze South"},
                              {name: "Isi Uzo"},
                              {name: "Nkanu East"},     
                              {name: "Nkanu West"},
                              {name: "Nsukka"},
                              {name: "Oji River"},
                              {name: "Udenu"},
                              {name: "Udi"},
                              {name: "Uzo-Uwani"},
  
  ]}, {name: 'Edo', 
                  lgas: [
                             {name: "Akoko-Edo"},
                              {name: "Egor"},
                              {name: 'Esan Central '},                            
                               {name: 'Esan North-East'},
                              {name: 'Esan South East'},
                              {name: 'Esan West'},
                              {name: "Etsako Central"},                
                              {name: 'Etsako East'},
                              {name: "Etsako West"},
                              {name: "Igueben"},
                              {name: "Ikpoba-Okha"},
                              {name: "Oredo"}, 
                              {name: "Orhionmwon"},
  
  
                              {name: "Ovia Northeast"},
                              {name: "Ovia Southeast"},
                              {name: "Owan East"},
                              {name: "Owan West"},
                              {name: "Uhunmwonde"},
                              
                                  
      ]}, {name: 'Ekiti', 
                  lgas: [
                              {name: 'Ado-Ekiti'}, 
                              {name: "Efon"},
                              {name: 'Ekit East'},
                              {name: 'Ekiti Southwest'},
                              {name: "Ekiti West"},
                              {name: 'Emure'},
                              {name:  "Gbonyin"},
                              {name: "Ido-Osi"},
                              {name: "Ijero Ekiti"},
                              {name: "Ikere Ekiti"},
                              {name: "Ikole"},
                              {name: "Ilesemeje"},
                              {name: "Irepodun"},                      
                              {name: "Ise/Orun"},  
                             {name: "Moba"},
                              {name: "Oye Ekiti"},
  
  
   ]}, {name: 'FCT-Abuja', 
                  lgas: [
                              {name: 'Abaji'},
                              {name: 'Abuja Municipal'},
                              {name: 'Bwari'},
                              {name: 'Gwagwalada'},
                              {name: "Kuje"},
                              {name: "Kwali"},       
  
   ]}, {name: 'Gombe', 
                  lgas: [
                              {name: 'Akko'},
                              {name: 'Balanga'},
                              {name: 'Billiri'},
                              {name: 'Dukku'},  
                              {name: "Funakaye"},                         
                              {name: "Gombe"},    
                              {name: "Kaltungo"},  
                              {name: "Kumo"},
                              {name: "Kwami"},                   
                              {name: "Nafada"},
                              {name: "Shomgom"},                              
                              {name: "Yamaltu/Deba"},      
  
  
    ]}, {name: 'Imo', 
                  lgas: [
                              {name: 'Aboh-Mbaise'},
                              {name: 'Ahiazu-Mbaise'},                              
                              {name: 'Ehime-Mbano'},
                              {name: 'Ezinihitte Mbaise'},
                              {name: "Ideato North"},
                              {name: "Ideato South"},
                              {name: "Ihitte/Uboma"},
                              {name: "Ikeduru"},
                              {name: "Isiala Mbano"},
                              {name: "Isu"},                               
                              {name: "Mbaitoli"},  
                              {name: "Mgbidi"},
                              {name: "Ngor-Okpala"},
                              {name: "Njaba"},
                              {name: "Nkwerre"},
                              {name: "Nwangele"},
                              {name: "Obowo"},
                              {name: "Oguta"},
                              {name: "Ohaji/Egbema"},
                              {name: "Okigwe"}, 
                              {name: "Onuimo"},
                              {name: "Orlu"},
                              {name: "Orsu"},
                              {name: "Oru East"},
                              {name: "Oru West"},       
                              {name: "Owerri-Municipal"},
                              {name: "Owerri North"}, 
                              {name: "Owerri West"},
                              
  
  
        ]}, {name: 'Jigawa', 
                  lgas: [
                              {name: 'Auyo'},
                              {name: 'Babura'},
                              {name: 'Birinwa'},
                              {name: 'Birnin Kudu'},
                              {name: "Buji"},
                              {name: "Dutse"},
                              {name: "Gagarawa"},
                              {name: "Garki"},
                              {name: "Gumel"},
                              {name: "Guri"},
                              {name: "Gwaram"},
                              {name: "Gwiwa"},
                              {name: "Hadejia"},
                              {name: "Jahun"},
                              {name: "Kafin Hausa"},
                              {name: "Kaugama"},
                              {name: "Kazaure"},
                              {name: "Kiri Kasamma"},
                              {name: "Kiyawa"},
                              {name: "Maigatari"},
                              {name: "Malam Madori"},
                              {name: "Miga"},
                              {name: "Ringim"},
                              {name: "Roni"},       
                              {name: "Sule Tankarkar"},
                              {name: "Taura"}, 
                              {name: "Yankwashi"},
  
          ]}, {name: 'Kaduna', 
                  lgas: [
                              {name: 'Birni-Gwari'},
                              {name: 'Chikun'},
                              {name: 'Giwa'},
                              {name: 'Igabi'},                              
                              {name: "Jaba"},
                              {name: "Jema’a"},
                              {name: "Kachia"},
                              {name: "Kaduna North"},
                              {name: "Kaduna South"},
                              {name: "Kagarko"},
                              {name: "Kajuru"},
                              {name: "Kaura"},
                              {name: "Kauru"},
                              {name: "Kubau"},
                              {name: "Kudan"},
                              {name: "Lere"},
                              {name: "Makarf"},
                              {name: "Sabon-Gari"},
                              {name: "Sanga"},
                              {name: "Soba"},
                              {name: "Zangon Kataf"},
                              {name: "Zaria"},            
  
  
     ]}, {name: 'Kano', 
                  lgas: [
                              {name: 'Ajingi'},
                              {name: 'Albasu'},
                              {name: 'Bagwai'},
                              {name: 'Bebeji'},
                              {name:  "Bichi"},
                              {name: "Bunkure"},
                              {name: "Dala"},
                              {name: "Dambatta"},
                              {name: "Dawakin Kudu"},
                              {name: "Dawakin Tofa"},
                              {name: "Doguwa"},
                              {name: "Fagge"},
                              {name: "Gabasawa"},
                              {name: "Garko"},
                              {name: "Garun Mallam"},                              
                              {name: "Gaya"},
                              {name: "Gezawa"},
                              {name: "Gwale"},
                              {name: "Gwarzo"},
                              {name: "Kabo"},
                              {name: "Kano Municipal"},
                              {name: "Karaye"},       
                              {name: "Kibiya"},
                              {name: "Kiru"}, 
                              {name: "Kumbotso"},
                              {name: "Kunchi"},
                              {name: "Kura"},
                              {name: "Madobi"}, 
                              {name: "Makoda"},
                              {name: "Minjibir"},
                              {name: "Nasarawa"},
                              {name: "Rano"},
                              {name: "Rimin Gado"},
                              {name: "Rogo"},
                              {name: "Shanono"},
                              {name: "Sumaila"},
                              {name: "Takai"},
                              {name: "Tarauni"},
                              {name: "Tofa"},
                              {name: "Tsanyawa"},
                              {name: "Tudun Wada"},       
                              {name: "Ungogo"},
                              {name: "Warawa"}, 
                              {name: "Wudil"},     
     ]}, {name: 'Katsina', 
                  lgas: [
                              {name: 'Bakori'},
                              {name: 'Batagarawa'},
                              {name: 'Batsari'},
                              {name: 'Baure'},
                              {name: "Bindawa"},
                              {name: "Charanchi"},
                              {name: "Dan Musa"},
                              {name: "Dandume"},
                              {name: "Danja"},
                              {name: "Daura"},
                              {name: "Dutsi"},
                              {name: "Dutsin-Ma"},
                              {name: "Faskari"},
                              {name: "Funtua"},
                              {name: "Ingawa"},
                              {name: "Jibia"},
                              {name: "Kafur"},
                              {name: "Kaita"},
                              {name: "Kankara"},
                              {name: "Kankia"},
                              {name: "Katsina"},
                              {name: "Kurfi"},
                              {name: "Kusada"},       
                              {name: "Mai’Adua"},
                              {name: "Malumfashi"}, 
                              {name: "Mani"},
                              {name: "Mashi"},
                              {name: "Matazu"},
                              {name: "Musawa"},
                              {name: "Rimi"},
                              {name: "Sabuwa"},
                              {name: "Safana"},
                              {name: "Sandamu"},
                              {name: "Zango"},    
      ]}, {name: 'Kebbi', 
                  lgas: [
                              {name: 'Aleiro'},
                              {name: 'Arewa-Dandi'},
                              {name: 'Argungu'},
                              {name: 'Augie'},
                              {name: "Bagudo"},
                              {name: "Birnin Kebbi"},
                              {name: "Bunza"},
                              {name: "Dandi"},
                              {name: "Fakai"},
                              {name: "Gwandu"},
                              {name: "Jega"},
                              {name: "Kalgo"},
                              {name: "Koko/Besse"},
                              {name: "Maiyama"},
                              {name: "Ngaski"},
                              {name: "Sakaba"},
                              {name: "Shanga"},
                              {name: "Suru"},
                              {name: "Wasagu/Danko"},
                              {name: "Yauri"},
                              {name: "Zuru"},     
     ]}, {name: 'Kogi', 
                  lgas: [
                              {name: 'Adavi'},
                              {name: 'Ajaokuta'},
                              {name: 'Ankpa'},
                              {name: 'Bassa'},
                              {name: "Dekina"},
                              {name: "Ibaji"},
                              {name: "Idah"},
                              {name: "Igalamela-Odolu"},
                              {name: "Ijumu"},
                              {name: "Kabba/Bunu"},
                              {name: "Koton Karfe"},
                              {name: "Lokoja"},
                              {name: "Mopa-Muro"},
                              {name: "Ofu"},
                              {name: "0gori/Mangongo"},
                              {name: "Okehi"},
                              {name: "Okene"},
                              {name: "Olamabolo"},
                              {name: "Omala"},
                              {name: "Yagba East"},
                              {name: "Yagba West"},                              
          ]}, {name: 'Kwara', 
                  lgas: [
                              {name: 'Asa'},
                              {name: 'Baruten'},
                              {name: 'Edu'},
                              {name: 'Ekiti'},
                              {name: "Ifelodun"},
                              {name: "Ilorin East"},
                              {name: "Ilorin South"},
                              {name: "Ilorin West"},
                              {name: "Irepodun"},
                              {name: "Isin"},
                              {name: "Kaiama"},
                              {name: "Moro"},
                              {name: "Offa"},
                              {name: "Oke-Aro"},
                              {name: "Oyun"},
                              {name: "Pategi"},                              
          ]}, {name: 'Lagos', 
                  lgas: [
                              {name: 'Agege'},
                              {name: 'Ajeromi-Ifelodun'},
                              {name: 'Alimosho'},
                              {name: 'Amuwo-Odofin'},
                              {name: "Apapa"},
                              {name: "Badagry"},
                              {name: "Epe"},
                              {name: "Eti-Osa"},
                              {name: "Ibeju/Lekki"},
                              {name: "Ikeja"},
                              {name: "Ikorodu"},
                              {name: "Kosofe"},
                              {name: "Lagos Island"},
                              {name: "Lagos Mainland"},
                              {name: "Mushin"},
                              {name: "Ojo"},
                              {name: "Oshodi-Isolo"},
                              {name: "Shomolu"},
                              {name: "Surulere"},                              
          ]}, {name: 'Nasarawa', 
                  lgas: [
                              {name: 'Akwanga'},                              
                              {name: 'Doma'},
                              {name: 'Karu'},
                              {name: "Keana"},
                              {name: "Keffi"},
                              {name: "Kokona"},
                              {name: "Lafia"},
                              {name: "Nasarawa"},
                              {name: "Nasarawa-Eggon"},
                              {name: "Obi"},
                              {name: "Toto"},
                              {name: "Wamba"},      
    ]}, {name: 'Niger', 
                  lgas: [
                              {name: 'Agaie'},
                              {name: "Agwara"},
                              {name: "Bida"},
                              {name: "Borgu"},
                              {name: "Bosso"},
                              {name: "Chanchaga"},
                              {name: "Edati"},
                              {name: "Gbako"},
                              {name: "Katcha"},
                              {name: "Kontagora"},
                              {name: "Lapai"},       
                              {name: "Lavun"},
                              {name: "Magama"}, 
                              {name: "Mariga"},
                              {name: "Mashegu"},   
                              {name: "Mokwa"},
                              {name: "Munya"},
                              {name: "Paikoro"},       
                              {name: "Rafi"},
                              {name: "Rijau"}, 
                              {name: "Shiroro"},
                              {name: "Suleja"},   
                              {name: "Tafa"},
                              {name: "Wushishi"},      
    ]}, {name: 'Ogun', 
                  lgas: [
                              {name: 'Abeokuta North'},
                              {name: "Abeokuta South"},
                              {name: "Ado-Odo/Ota"},                              
                              {name: "Ewekoro"},
                              {name: "Ifo"},       
                              {name: "Ijebu East"},
                              {name: "Ijebu North"}, 
                              {name: "Ijebu North East"},
                              {name: "Ijebu Ode"},   
                              {name: "Ikenne"},
                              {name: "Imeko-Afon"},
                              {name: "Ipokia"},       
                              {name: "Obafemi Owode"},                              
                              {name: "Odeda"},
                              {name: "Odogbolu"},  
                              {name: "Ogun Waterside"},
                              {name: "Remo North"},
                              {name: "Shagamu"},     
                              {name: "Yewa North"},
                              {name: "Yewa South"},
  
  
          ]}, {name: 'Ondo', 
                  lgas: [
                              {name: 'Akoko North East'},
                              {name: "Akoko North West"},
                              {name: "Akoko South East"}, 
                              {name: "Akoko South West"},
                              {name: "Akure North"},   
                              {name: "Akure South"},
                              {name: "Ese- Odo"},
                              {name: "Idanre"},
                              {name: "Ifedore"},
                              {name: "Ilaje"},
                              {name: "Ile Oluji/Okeigbo"},
                              {name: "Irele"},                              
                              {name: "Okitipupa"},       
                              {name: "Ondo East"},
                              {name: "Ondo West"}, 
                              {name: "Ose"},
                              {name: "Owo"},             
  
              ]}, {name: 'Osun', 
                  lgas: [
                              {name: 'Aiyedade'},
                              {name: "Aiyedire"},
                              {name: "Atakumosa East"},
                              {name: "Atakumosa West"},
                              {name: "Boluwaduro"},
                              {name: "Boripe"},
                              {name: "Ede North"},       
                              {name: "Ede South"},
                              {name: "Egbedore"}, 
                              {name: "Ejigbo"},
                              {name: "Ife Central"},
                              {name: "Ife East"},
                              {name: "Ife North"},
                              {name: "Ife South"},
                              {name: "Ifedayo"},
                              {name: "Ifelodun"},
                              {name: "Ila"},
                              {name: "Ilesha East"},
                              {name: "Ilesha West"},
                              {name: "Irepodun"},       
                              {name: "Irewole"},
                              {name: "Isokan"}, 
                              {name: "Iwo"},
                              {name: "Obokun"},                     
                              {name: "Odo Otin"},
                              {name: "Ola Oluwa"},
                              {name: "Olorunda"},
                              {name: "Oriade"},
                              {name: "Orolu"},
                              {name: "Osogbo"},       
  
   ]}, {name: 'Oyo', 
                  lgas: [
                              {name: 'Afijio'},
                              {name: "Akinyele"},       
                              {name: "Atiba"},
                              {name: "Atigbo"}, 
                              {name: "Egbeda"},
                              {name: "Ibadan North"},                        
                              {name: "Ibadan North East"},
                              {name: "Ibadan North West"},
                              {name: "Ibadan South East"},
                              {name: "Ibadan South West"},
                              {name: "Ibarapa Central"},
                              {name: "Ibarapa East"},
                              {name: "Ibarapa North"},
                              {name: "Ido"},
                              {name: "Irepo"},
                              {name: "Iseyin"},       
                              {name: "Itesiwaju"},
                              {name: "Iwajowa"}, 
                              {name: "Kajola"},
                              {name: "Lagelu"},            
                              {name: "Ogbomosho North"},
                              {name: "Ogbomosho South"},
                              {name: "Ogo Oluwa"},
                              {name: "Olorunsogo"},
                              {name: "Oluyole"},       
                              {name: "Ona Ara"},
                              {name: "Orelepo"}, 
                              {name: "Ori Ile"},
                              {name: "Oyo East"},
                              {name: "Oyo West"},
                              {name: "Saki East"},       
                              {name: "Saki West"},
                              {name: "Surulere"}, 
  
  ]}, {name: 'Plateau', 
                  lgas: [
                              {name: 'Barakin Ladi'},
                              {name: 'Bassa'},
                              {name: 'Bokkos'},
                              {name: 'Jos East'},
                              {name: "Jos North"}, 
                              {name: "Jos South"},
                              {name: "Kanam"},
                              {name: "Kanke"},
                              {name: "Langtang North"},
                              {name: "Langtang South"},
                              {name: "Mangu"},
                              {name: "Mikang"},
                              {name: "Pankshin"},
                              {name: "Qua’an Pan"},
                              {name: "Riyom"},
                              {name: "Shendam"},
                              {name: "Wase"},
  ]}, {name: 'Rivers', 
                  lgas: [
                              {name: 'Abua/Odual'},
                              {name: 'Ahoada East'},
                              {name: 'Ahoada West'},
                              {name: 'Akuku Toru'},
                              {name: 'Andoni'},
                              {name: "Asari-Toru"},
                              {name: "Bonny"},
                              {name: "Degama"},
                              {name: "Eleme"},
                              {name: "Emohua"},
                              {name: "Etche"},
                              {name: "Gokana"},
                              {name: "Ikwerre"},
                              {name: "Khana"},
                              {name: "Obia/Akpor"},
                              {name: "Ogba/Egbema/Ndoni"},
                              {name: "Ogu/Bolo"},
                              {name: "Okrika"},
                              {name: "Omuma"},
                              {name: "Opobo/Nkoro"},
                              {name: "Oyigbo"},
                              {name: "Port Harcourt"},
                              {name: "Tai"},    
  
   ]}, {name: 'Sokoto', 
                  lgas: [
                              {name: 'Binji'},
                              {name: 'Bodinga'},
                              {name: 'Dange-Shunu'},
                              {name: 'Gada'},
                              {name: 'Goronyo'},
                              {name: "Gudu"},
                              {name: "Gwadabawa"},
                              {name: "Illela"},
                              {name: "Isa"},
                              {name: "Kebbe"},
                              {name: "Kware"},
                              {name: "Rabah"},
                              {name: "Sabon Birni"},
                              {name: "Shagari"},
                              {name: "Silame"},
                              {name: "Sokoto North"},
                              {name: "Sokoto South"},
                              {name: "Tambuwal"},
                              {name: "Tangaza"},
                              {name: "Tureta"},
                              {name: "Wamako"},
                              {name: "Wurno"},
                              {name: "Yabo"},    
  
    ]}, {name: 'Taraba', 
                  lgas: [
                              {name: 'Ardo- Kola'},    
                              {name: "Bali"},
                              {name: "Donga"}, 
                              {name: "Gashaka"},
                              {name: "Gassol"},
                              {name: "Ibi"},
                              {name: "Jalingo"}, 
                              {name: "Karim Lamido"},
                              {name: "Kurmi"},
                              {name: "Lau"},
                              {name: "Sardauna"},
                              {name: "Takum"},
                              {name: "Ussa"},
                              {name: "Wukari"},
                              {name: "Yorro"},
                              {name: "Zing"},
   
  ]}, {name: 'Yobe', 
                  lgas: [
                              {name: "Bade"},
                              {name: 'Bursari'},
                              {name: 'Damaturu'},
                              {name: 'Fika'},
                              {name: 'Fune'},
                              {name: 'Geidam'},
                              {name: "Gujba"},
                              {name: "Jakusko"},
                              {name: "Karasuwa"},                              
                              {name: "Machina"}, 
                              {name: "Nangere"},
                              {name: "Nguru"},
                              {name: "Potiskum"},
                              {name: "Tarmuwa"},
                              {name: "Yunusari"},   
                              {name: "Yusufari"},
  
        ]}, {name: 'Zamfara', 
                  lgas: [
                              {name: 'Anka'},
                              {name: "Bakura"},
                              {name: "Birnin Magaji/Kiyaw"},
                              {name: "Bukkuyum"},                              
                              {name: "Bugundu"},
                              {name: "Chafe"},
                              {name: "Gummi"}, 
                              {name: "Gusau"},
                              {name: "Kuara Namoda"},
                              {name: "Maradun"},
                              {name: "Maru"},
                              {name: "Shinkafi"},
                              {name: "Talata Mafara"},                                                              
                              {name: "Zurmi"}, 
  
                  ]}],
        });


        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

    
        try 
        {
            // fetch data from a url endpoint
            const response = await  axios.get(`https://sheltered-chamber-63274.herokuapp.com/api/userjobs`, {headers: headers});
            ///Users/godsonihemere/Desktop/KokorunsProject/KokorunsUI/src/nigeria-states-and-local-govts.js
            console.log(response.data.user_jobs);

            this.setState({ user_jobs: response.data.user_jobs, loading: false });

            // console.log(response.data.expe[0]);

        } 
        catch(error) 
        {
        console.log("error", error);
        // appropriately handle the error
        }

        
    
      }


      handleSubmit(e) {
        // Form submission logic
        e.preventDefault();

        this.setState({ isLoading: true });

        this.setState({ [e.target.name]: e.target.value });

        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }


        const data = { job_title:this.state.job_title, employment_type: this.state.employment_type, salary: this.state.salary, job_description: this.state.job_description, selectedState: this.state.selectedState, selectedLGA: this.state.selectedLGA, languages: this.state.languages, skills: this.state.skills };  

        //console.log(data);
       

       axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/createuserjob`, data, {headers: headers})
        .then((response) => {
           

           //this.setState({ experiences: response.data.experiences, loading: true, show: false});
         
           console.log(response);

           //window.location.href = "/user-dashboard-experience";

           this.setState({ show: false });

         })
         .catch( error => {
           console.log(error.response);
         });
    

      }



    render() {

        const options = [
            { value: 'English', label: 'English' },
            { value: 'Yoruba', label: 'Yoruba' },
            { value: 'Efik/Ibibio', label: 'Efik/Ibibio' }
          ];


          const options2 = [
            { value: 'Scrubbing', label: 'Scrubbing' },
            { value: 'Cleaning', label: 'Cleaning' },
            { value: 'Painting', label: 'Painting' }
          ]

      

        return (
            <>

            <Header2/>


            <NavBar2/>

          
                <div className="your-job-posts-header">
                    <div className="your-job-posts">Your Job Posts</div>
                    <div className="empty-space">h</div>
                    <a className="link cursor" onClick={this.showModal}><div className="create-job-posts">Create Job Post ✚</div></a></div> 
                <div className="your-job-posts-container">
                    <div className="left">
                    <div className="job-posts-list">
                        <div className="search-bar"><input placeholder="Search Job Posts" /><button><img className="search" src="assets/Images/Your%20Job%20Posts/search.png" /></button></div>    
                        
                        {this.state.loading || !this.state.user_jobs ? 

                        <div style={{background: '#f2f2f2'}}>Loading...</div> 
                        
                        :
                        
                        <div className="mb-5" style={{background: '#f2f2f2'}}>

                         {this.state.user_jobs.map(job => 

                            <div className="job-post job-post-list">
                                <img src="assets/Images/Your%20Job%20Posts/Job%20Icon.png" />{job.job_title}<br /> 
                                <span>{job.created_at}</span>    
                                <b>45 Applicants</b>    
                            </div>

                        )}
                       </div>
                       }
                    </div>    
                    </div>    
                    <div className="right">
                    <div align="center" id="blank">
                        <div align="center" className="blank-page">
                        Click on a Job Post 👈 and the details will appear here 👇
                        </div>    
                    </div>   
                    {/*CARPENTRY*/}
                    <div className="sub" id="show-job-details">   
                        <div className="job-posts-details">
                        <div className="job-title"><img src="assets/Images/Your%20Job%20Posts/Job%20Icon.png" /><span id="job_title" /></div>
                        <div className="employment-type">Employment type: <span id="employment_type" /> </div>   
                        <div className="salary">Salary: ₦ <span id="salary" /></div>
                        <div className="job-location">Location: <span id="location" /></div> 
                        <div className="job-description">
                            Job Description: <span id="job_description" />
                        </div>  
                        <div className="languages">
                            Languages    
                            <ul>
                            <li>Yoruba</li>
                            <li>Igbo</li>
                            <li>Hausa</li>
                            <li>Japanese</li>
                            <li>English</li>    
                            </ul></div>  
                        <div className="skills">
                            Skills
                            <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Project Management</li>
                            <li>Graphics Design</li>
                            <li>SQL</li>    
                            </ul></div>     
                        <div className="buttons">
                            <button><img className="icon" src="assets/Images/Your%20Job%20Posts/Edit%20icon.png" /></button> 
                            <button><img className="icon" src="assets/Images/Your%20Job%20Posts/Share.png" /></button>
                            <button><img className="icon" src="assets/Images/Your%20Job%20Posts/Delete%20icon.png" /></button>    
                        </div>
                        </div>
                        <div className="job-posts-applicants-container">
                        Applications<br />    
                        <div className="job-posts-applicants">
                            <div className="dp"><img src="assets/Images/Your%20Job%20Posts/User%20DP.png" /></div>
                            <div className="username">Ellen Temitope</div>    
                            <div className="professions">Carpenter at <a href>Love "K"</a></div>
                            <div className="reommendations">35 Recommendations</div>     
                            <div className="view-profile"><button>View Profile</button></div>
                            <div className="delete-application"><button>Delete</button></div>    
                        </div> 
                        <div className="job-posts-applicants">
                            <div className="dp"><img src="assets/Images/Your%20Job%20Posts/User%20DP.png" /></div>
                            <div className="username">Ellen Temitope</div>    
                            <div className="professions">Carpenter at <a href>Love "K"</a></div>
                            <div className="reommendations">35 Recommendations</div>     
                            <div className="view-profile"><button>View Profile</button></div>
                            <div className="delete-application"><button>Delete</button></div>    
                        </div>
                        <div className="job-posts-applicants">
                            <div className="dp"><img src="assets/Images/Your%20Job%20Posts/User%20DP.png" /></div>
                            <div className="username">Ellen Temitope</div>    
                            <div className="professions">Carpenter at <a href>Love "K"</a></div>
                            <div className="reommendations">35 Recommendations</div>     
                            <div className="view-profile"><button>View Profile</button></div>
                            <div className="delete-application"><button>Delete</button></div>    
                        </div>
                        <div className="job-posts-applicants">
                            <div className="dp"><img src="assets/Images/Your%20Job%20Posts/User%20DP.png" /></div>
                            <div className="username">Ellen Temitope</div>    
                            <div className="professions">Carpenter at <a href>Love "K"</a></div>
                            <div className="reommendations">35 Recommendations</div> 
                            <div className="view-profile"><button>View Profile</button></div>
                            <div className="delete-application"><button>Delete</button></div>    
                        </div>
                        <div className="job-posts-applicants">
                            <div className="dp"><img src="assets/Images/Your%20Job%20Posts/User%20DP.png" /></div>
                            <div className="username">Ellen Temitope</div>    
                            <div className="professions">Carpenter at <a href>Love "K"</a></div>
                            <div className="reommendations">35 Recommendations</div>     
                            <div className="view-profile"><button>View Profile</button></div>
                            <div className="delete-application"><button>Delete</button></div>    
                        </div>       
                        </div> 
                    </div>
                    {/*CARPENTRY*/}
                    </div>    
                </div>



                 {/* Add User Job Modal */}
        

            <Modal
               
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               scrollable={true}
               show={this.state.show} handleClose={this.hideModal}>
            
               <Modal.Body style={{ padding: '.5rem'}}>

                        <form onSubmit={this.handleSubmit}>
                        <div align="center" className="post-job-container w-100 m-0">
                            <div className="hire mt-0 mb-0 text-dark">Hire Fast!!! Hire Now!!!</div>
                            <h3 className="text-white mt-1 text-danger"> Hire Here!!!....No Regrets</h3>
                            <div align="left" className="post-job" style={{backfground: 'linear-gradient(180deg, #a92244, #c66a89)'}}>
                            <div className="post-job-children">
                                Job Title <b>*</b><br />
                                <input name="job_title" value={this.state.job_title} onChange={this.handleChange} required />      
                            </div>
                            <div className="post-job-children">
                                Employment Type <b>*</b><br />
                                <select name="employment_type" value={this.state.employment_type} onChange={this.handleChange} required>
                                <option value="">Select one</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time / Occasional">Part-Time / Occasional</option>
                                <option value="Daily Pay">Daily Pay</option>
                                <option value="Weekend Only">Weekend Only</option>
                                <option value="Temporary">Temporary</option>
                                <option value="Volunteer">Volunteer</option> 
                                <option value="Apprentice / Trainee">Apprentice / Trainee</option>  
                                </select>      
                            </div>
                            <div className="post-job-children">
                                Salary <b>*</b><br />
                                <input type="number" name="salary" value={this.state.salary} onChange={this.handleChange} required />
                            </div>  
                            <div className="post-job-location post-job-children">
                                Job Location <b>*</b><br />
                                <div className="radio">
                                <input id="onsite" name="location" defaultValue="onsite" type="radio" onchange="OnsiteFunction()" />
                                <label htmlFor="onsite">On Site</label>
                                &nbsp;&nbsp;&nbsp;
                                <input id="remote" name="location" defaultValue="remote" type="radio" onchange="RemoteFunction()" />
                                <label htmlFor="remote">Remote</label>  
                                </div><br /> 
                                <div id="locationdiv" className="location-div">  

                                    <div className="row">
                                        <div className="col">
                                            <select value={this.state.selectedState} onChange={this.changeState} className="form-control">
                                                <option>Select State</option>
                                                {this.state.states.map((e, key) => {
                                                    return <option key={key}>{e.name}</option>;
                                                })}
                                            </select>
                                        </div>
                                        <div className="col">
                                            <select value={this.state.selectedLGA} onChange={this.changeLGA} className="form-control">
                                                    <option>Select LGA</option>
                                                        {this.state.lgas.map((e, key) => {
                                                            return <option key={key}>{e.name}</option>;
                                                        })}
                                                </select>
                                        </div>
                                    </div>
                               
                                </div>   
                            </div>  
                            <div>

                            </div>
      
                            <div className="job-description post-job-children">
                                Description <br /> 
                                 
                                <textarea placeholder="Describe your job offer..." className="form-control" name="job_description" id cols={30} rows={5} required value={this.state.job_description} onChange={this.handleChange} required/> 
                            </div>  

                          

                            <div className="lang">
                                Languages <b>Max 5</b><br />   
                                {/* <select id="languages" name="languages[]" className="form-control" value={this.state.languages} onChange={this.handleChange} multiple>
                                <option value="Yoruba">Yoruba</option>
                                <option value="English">English</option>
                                </select> */}
                                  <Select
                           
                                    isMulti
                                    name="languages[]"
                                    options={options}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    value={options.name}
                                    onChange={this.handleSelect}
                               />
                             
                            </div> 
                            <div className="skills mt-3">
                                Skills <b>Max 5</b><br />    
                                {/* <select id="skills" name="skills[]" className="form-control" value={this.state.skills} onChange={this.handleChange} multiple>
                                <option value="a">A</option>
                                <option value="b">B</option>
                                </select>     */}

                                <Select
                                                        
                                    isMulti
                                    name="skills[]"
                                    options={options2}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={this.handleSelect}
                                />
                              
                            </div>

                            <div className="post-job-button mt-5">
                                <button type="submit">Create Job Posting</button>
                            </div>
                            </div>  
                        </div>
                    </form>


               </Modal.Body>
               
               </Modal>
           

        
            </>
        )
    }
}

export default UserJobs
