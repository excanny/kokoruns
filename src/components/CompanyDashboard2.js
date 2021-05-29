import React, { Component } from 'react'
import CHeader from '../commons/CHeader';
import NavBar3 from '../commons/NavBar3';
import Footer from '../commons/Footer';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router';
import axios from 'axios';

export class CompanyDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
          show2: false,
          show3: false,
          show4: false,
          company_id: '',
          company_name: '',
          company_number: '',
          company_email: '',
          cac: '',
          company_type:'',
          company_size:'',
          company_about: '',
          company_director: '',
          website:'',
          company_address:'',
          company_state:'',
          company_lga:'',
          founded_month: '',
          founded_year: '',
          field: '',
          states : [],
          lgas : [],
          selectedState : '',
          selectedLGA : '',
          states2 : [],
          lgas2 : [],
          selectedState2 : '',
          selectedLGA2 : '',
          sub_admin_id: '',
          branch_name: '',
          branch_manager: '',
          branch_address:'',
          branch_phone: '',
          companybranches: [],
          loading: true,

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.showModal2 = this.showModal2.bind(this);
        this.hideModal2 = this.hideModal2.bind(this);
        this.showModal3 = this.showModal3.bind(this);
        this.hideModal3 = this.hideModal3.bind(this);
        this.showModal4 = this.showModal4.bind(this);
        this.hideModal4 = this.hideModal4.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeLGA = this.changeLGA.bind(this);
        this.changeState2 = this.changeState2.bind(this);
        this.changeLGA2 = this.changeLGA2.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);
      
      }


      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

      onHide = () => {
        this.setState({ show: false });
      }

      showModal2 = () => {
        this.setState({ show2: true });
      };
    
      hideModal2 = () => {
        this.setState({ show2: false });
      };

      onHide2 = () => {
        this.setState({ show2: false });
      }


      showModal3 = () => {
        this.setState({ show3: true });
      };
    
      hideModal3 = () => {
        this.setState({ show3: false });
      };

      showModal4 = () => {
        this.setState({ show4: true });
        ///alert("hugxywsgxsyw");
      };
    
      hideModal4 = () => {
        this.setState({ show4: false });
      };

      onHide3 = () => {
        this.setState({ show3: false });
      }

      changeState(e) {
        this.setState({selectedState: e.target.value});
        this.setState({lgas : this.state.states.find(state => state.name === e.target.value).lgas});
            console.log(e.target.value);
      }
    
      changeLGA(e) {
        this.setState({selectedLGA: e.target.value});
        // const stats = this.state.states.find(cntry => cntry.name === this.state.selectedState).lgas;
        // this.setState({lgas : stats.find(stats => stats.name === event.target.value).lgas});
            console.log(e.target.value);
      }


      changeState2(e) {
        this.setState({selectedState2: e.target.value});
        this.setState({lgas2 : this.state.states2.find(state => state.name === e.target.value).lgas2});
            console.log(this.state.lgas2);
      }
    
      changeLGA2(e) {
        this.setState({selectedLGA2: e.target.value});
        // const stats = this.state.states.find(cntry => cntry.name === this.state.selectedState).lgas;
        // this.setState({lgas : stats.find(stats => stats.name === event.target.value).lgas});
            console.log(e.target.value);
      }

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.sub_admin_id)
      }


      jsUcfirst(string) 
      {
          return string.charAt(0).toUpperCase() + string.slice(1);
      }



      async componentDidMount()
      {



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
  
                  ]}]
      
        });



        this.setState({
      
            states2: [ {name: 'Abia', 
            lgas2: [
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
                    lgas2: [
                              
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
              lgas2: [
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
              lgas2: [
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
              lgas2: [
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
                  lgas2: [
                              {name: 'Brass'},
                              {name: 'Ekeremor'},
                              {name: 'Kolokuma Opokuma'},
                              {name: 'Nembe'},
                              {name: 'Ogbia'},
                              {name: 'Sagbama'},
                              {name: 'Southern Ijaw'},
                              {name: 'Yenagoa'}
          ]}, {name: 'Benue', 
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
                              {name: 'Abaji'},
                              {name: 'Abuja Municipal'},
                              {name: 'Bwari'},
                              {name: 'Gwagwalada'},
                              {name: "Kuje"},
                              {name: "Kwali"},       
  
   ]}, {name: 'Gombe', 
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
                  lgas2: [
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
  
                  ]}]
        
        });

 
        var id = this.props.match.params.id;    

        if(localStorage.getItem('access_token'))
        {
        this.setState({ isLogged : true });
        }

    //console.log(localStorage.getItem('access_token'));

    const headers = {

      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 

    }


    let one = `https://sheltered-chamber-63274.herokuapp.com/api/company/${id}`
    let two = `https://sheltered-chamber-63274.herokuapp.com/api/companybranches/${id}`;
    // let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
     
    const requestOne = axios.get(one, {headers: headers});
    const requestTwo = axios.get(two, {headers: headers});
    // const requestThree = axios.get(three, {headers: headers});
     
    axios.all([
      requestOne, 
      requestTwo, 
      //requestThree
    ]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]
      // const responesThree = responses[2]
      // use/access the results 

      this.setState({  company_id : responseOne.data.companydetails.company_id, company_name : responseOne.data.companydetails.company_name, founded_month : responseOne.data.companydetails.founded_month, founded_year : responseOne.data.companydetails.founded_year, field : responseOne.data.companydetails.field,
        company_about : responseOne.data.companydetails.about, company_number : responseOne.data.companydetails.phone,
        cac : responseOne.data.companydetails.cac, company_director : responseOne.data.companydetails.company_director, 
        website : responseOne.data.companydetails.website, company_address : responseOne.data.companydetails.company_address,
        selectedState : responseOne.data.companydetails.main_office_location_state, selectedLGA : responseOne.data.companydetails.main_office_location_lga,
         });

      this.setState({ companybranches : responseTwo.data.companybranches});

    })).catch(errors => {
      // react on errors.
      console.log(errors);
    })


  }


      handleSubmit(e) {
        // Form submission logic
        e.preventDefault();

        var id = this.props.match.params.id;   

        this.setState({ isLoading: true, show : false });


        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

        const data = { founded_month: this.state.founded_month, founded_year : this.state.founded_year, field: this.state.field};  

        //console.log(data);

       axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/updatecompanyinfo/${id}`, data, {headers: headers})
        .then((response) => {
           

           this.setState({ loading: true, show: false});
         
           console.log(response);

           //window.location.href = "/user-dashboard-experience";

         })
         .catch( error => {
           console.log(error.response);
         });
    

      }


      handleSubmit2(e) {
        // Form submission logic
        e.preventDefault();

       // var id = this.props.match.params.id;   

        //this.setState({ isLoading: true, show : false });


        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

        const data = { sub_admin_id: this.state.sub_admin_id};  

        //console.log(id);

       axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/makecompanyadmin/${this.state.company_id}`, data, {headers: headers})
        .then((response) => {
           

           //this.setState({ loading: true, show: false});
         
           console.log(response);

           //window.location.href = "/user-dashboard-experience";

         })
         .catch( error => {
           console.log(error.response);
        });
    

      }


      async handleSubmit3(e) {
        // Form submission logic
        e.preventDefault();


        console.log(localStorage.getItem('access_token'));

        this.setState({ show3: false });

      

        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

        const data = { branch_name: this.state.branch_name, branch_manager: this.state.branch_manager, branch_address: this.state.branch_address, branch_state: this.state.selectedState2, branch_lga: this.state.selectedLGA2, branch_phone: this.state.branch_phone}; 
        //console.log(data);

    

        //Display the key/value pairs
        //   for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        //   }

    

          try 
          {
              // fetch data from a url endpoint
              const response = await  axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/createcompanybranch/${this.state.company_id}`, data, {headers: headers});
              //const response = await  axios.post(`https://lit-ridge-07527.herokuapp.com/api/addeducation`, data, {headers: headers});
              
              console.log(response);

              //this.setState({ educations: response.data.educations, loading: false, show: false });

              //window.location.href = "/user-dashboard-portfolio";

              //this.props.history.push("/user-dashboard-portfolio");

              // console.log(response.data.expe[0]);

          } 
          catch(error) 
          {
            // console.log("error", error);
            // appropriately handle the error
            console.log(error.response);
          }

      
    }


    render() {

        let minOffset = 0, maxOffset = 100;
        let thisYear = (new Date()).getFullYear();
        let allYears = [];
        for(let x = 0; x <= maxOffset; x++) {
            allYears.push(thisYear - x)
        }
  
        const yearList = allYears.map((x) => {return(<option key={x}>{x}</option>)});


        return (

    <div style={{background:'#f5f5dc'}}>

       <CHeader/>


        <div className="company-dashboard-body mb-5">

        <NavBar3/>
    
        <div className="company-info">
        <div className="border p-3 bg-white rounded-bottom">
            <div id="info_sections">
            <h2 style={{fontWeight: 'normal'}}>Employees on Kokoruns</h2>
            <a href style={{color: '#0991ff', fontSize: 18}}>554</a> 
            <div className="row">
                <div className="col">
                <h2 style={{fontWeight: 'normal'}}> Founded </h2>
                <span style={{color: '#606060', fontSize: 18}}>{/*?php echo $company_details['ffounded']; ?*/} July 1998</span>
                <h2 style={{fontWeight: 'normal'}}> Field </h2>
                <span style={{color: '#606060', fontSize: 18}}>{/*?php echo $company_details['ffield']; ?*/} Banking &amp; Finance</span>
                <h2 style={{fontWeight: 'normal'}}> No. of followers </h2>
                <span style={{color: '#606060', fontSize: 18}}>3300</span>
                </div>
                <div className="col">
                <div id="user-bio-dp-container" className="user-bio-dp-container" style={{display: 'none'}}>
                    <div align="center" className="bio-dp-div">  
                    <img className="dp" src="<?php echo site_url('public/companygalleries/logos/'. $company_details['flogo']); ?>" style={{border: '1px solid #000'}} width="100px;" height="100px" /> 
                    </div>
                    <div align="center" className="bio-user-name">  {/*?php echo ucwords(strtolower($applicant_details['fcompany_name'])); ?*/} {/*?php echo ucwords(strtolower($applicant_details['flast_name'])); ?*/} <img src className="verification" /> </div>
                </div>
                </div>
            </div>
            </div>
            <br />
            <button className="company-info-edit" id="info-btn" data-recno="<?php echo $company_details['frecno']; ?>" data-founded="<?php echo $company_details['ffounded']; ?>" data-field="<?php echo $company_details['ffield']; ?>"> Edit </button>
            <button className="company-info-follow"> + Follow </button> 
        </div>
        <br />
        <div className="sub-admin">
            <div id="info_section">
            <h2 style={{fontWeight: 'normal'}} data-toggle="popover" data-trigger="hover" data-content="Some content">Add a sub-admin to this page</h2>
            <form action="<?php echo site_url(); ?>company/makeadmin" method="post">
                <div className="input-group mb-3" style={{display: 'flex', alignContent: 'flex-start', justifyContent: 'flex-start'}}>
                <input type="hidden" name="company_id" defaultValue="<?php echo $company_details['fcompany_id']; ?>" />
                <input className="sub-admin-input" type="text" name="user_id" placeholder="Enter User's Kokoruns' ID e.g john.smith" />
                <div className="input-group-append">
                    <button className="add" type="submit">Add</button>
                </div>
                </div>
            </form>
            </div>
            <br />
            <div>
            {/* <p>Sub-Admins List</p> */}
            <ol>
                {/*?php foreach ($company_admins as $admin) { ?*/}
                <li>{/*?php echo $admin['fsubadmin_name']; ?*/} <a href="<?php echo site_url('company/removeadmin/'. $admin['frecno']); ?>">remove</a></li>
                {/*?php } ?*/}
            </ol>
            </div>
        </div>
        </div>


        
        <div id="profile-box" className="company-profile">
            <div className="about-edit mt-4">
            <h4 className="company-about-title"> About 
                <button className="company-profile-edit-button" onClick={this.showModal2}>Edit</button>
            </h4>
            {/*span id="about_section" class="text-details more"><?php echo $company_details['fabout']; ?></span*/}
            <span className="profile-about">
               {this.state.company_about}
            </span>
            </div>
            <p id="see-all" style={{borderTop: '1px solid #ccc', paddingTop: 10}}><a href="javascript:void" className="see-all-details">See All Details</a> </p>
            <div className="pt-5 pb-3 rounded-bottom" id="see-all-details" style={{display: 'none', background: '#8cbed6'}}>
            <div className="row">
                <table width="100%" className="see-all-content">
                <tbody>
                    <tr>
                    <td className="text-right pr-3" width="50%"><strong> Company Phone No.</strong></td>
                    <td className="text-left" width="50%"><span className="text-white">{/*?php echo $company_details['fphone']; ?*/}</span></td>
                    </tr>
                    <tr>
                    <td className="text-right pr-3" width="50%"><strong> CAC Reg. No.</strong></td>
                    <td className="text-left" width="50%"><span className="text-white">{/*?php echo $company_details['fcac']; ?*/}</span></td>
                    </tr>
                    <tr>
                    <td className="text-right pr-3" width="50%"><strong> Website</strong></td>
                    <td className="text-left" width="50%"><span className="text-white">{/*?php echo $company_details['fwebsite']; ?*/}</span></td>
                    </tr>
                    <tr>
                    <td className="text-right pr-3" width="50%"><strong> Company Director</strong></td>
                    <td className="text-left" width="50%"><span className="text-white">{/*?php echo $company_details['fcompany_director']; ?*/}</span></td>
                    </tr>
                    <tr>
                    <td className="text-right pr-3" width="50%"><strong>Main Office Address</strong></td>
                    <td className="text-left" width="50%"><span className="text-white">
                        {/*?php echo $company_details['fcompany_address']; ?>  
                            <?php echo $company_details['fmain_office_location_state']; ?>  
                            <?php echo $company_details['fmain_office_location_lga']; ?*/}
                        </span></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            <br />
            <div className="row border mt-2 mb-3 p-3 bg-white card">
            <div className="branches-title"> Branches </div>
            <button className="add-new-branches-button" id="add-event-btn" onClick={this.showModal3}>Add New +</button>
            <br /><br />
            <div className="branch-content">
                <div className="row">
                {this.state.companybranches.map(branch => 
                <div className="col-lg-4">
                    <fieldset className="shadow-sm p-2 rounded mb-2 bg-light">
                    <div className="branch-details-title">Branch Details</div>
                    <p className="m-0 "> <span className="branch-box"> Name: </span> {branch.branch_name}</p>
                    <p className="m-0"> <span className="branch-box">Address: </span> {branch.branch_address} <br />
                        {/*?php echo $branch['fbranch_state']; ?*/} {/*?php echo $branch['fbranch_lga']; ?*/}
                    </p>
                    <p className="m-0"> <span className="branch-box"> Manager Name: </span> {branch.branch_manager}</p>
                    <p className="m-0"> <span className="branch-box">Phone No.: </span>  {branch.branch_phone}</p>
                    <div className="text-right pt-0">
                        <i className="far fa-edit text-warning  branch_edit_btn cursor edit-btn" data-recno="<?php echo $branch['frecno']; ?>" data-branch_name="<?php echo $branch['fbranch_name']; ?>" data-branch_address="<?php echo $branch['fbranch_address']; ?>" data-branch_manager="<?php echo $branch['fbranch_manager']; ?>" data-branch_phone="<?php echo $branch['fbranch_phone']; ?>" data-branch_email="<?php echo $branch['fbranch_email']; ?>" data-toggle="tooltip" title="Edit" />
                        <i className="far fa-trash-alt text-danger deletebranch cursor" data-recno="<?php echo $branch['frecno']; ?>" data-toggle="tooltip" title="Delete" />
                    </div>
                    </fieldset>
                </div>
                )
             }
                
                </div>
            </div>
            </div>
            <div className="company-socials">
            <h4 className="socials-title"> Socials <button className="socials-button" onClick={this.showModal4}>Edit</button></h4>
            <p><i className="fab fa-linkedin fa-lg" style={{color: '#0A66C2'}} /> LinkedIn : {/*?php echo $company_details['flinkedin']; ?*/}</p>
            <p><i className="fab fa-facebook-square fa-lg" style={{color: '#0C88EF'}} /> Facebook : {/*?php echo $company_details['ffacebook']; ?*/}</p>
            <p><i className="fab fa-instagram fa-lg" style={{background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)', backgroundClip: 'text'}} /> Instagram : {/*?php echo $company_details['finstagram']; ?*/}</p>
            <hr />
            <h4 className="tags-title">Tags</h4>
            </div>
        </div>
        </div>


        <Footer/>

        <Modal
               
               size="md"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               scrollable={true}
               show={this.state.show} handleClose={this.hideModal}>
               <Modal.Header className="modal-header rounded-0 py-2 text-white" style={{background: '#70a1B9'}}>
                   <Modal.Title id="contained-modal-title-vcenter">
                   <strong> Info Details</strong>
                   </Modal.Title>
                   <span onClick={this.onHide} className="close-modal-btn cursor">x</span>
               </Modal.Header>
               <Modal.Body className="px-4">
                   <form onSubmit={this.handleSubmit}>

                        <div>
                            <label htmlFor="email" className="mt-2 mb-0">Field</label>
                            <select name="field" id="field" className="form-control form-control-sm rounded-0" style={{border: '2px solid lightgray'}} value={this.state.field} onChange={this.handleChange} required>
                                <option value>Select one</option>
                                <option value="Entertainment">Entertainment</option>
                            </select>
                            <label htmlFor="email" className="mt-2 mb-0">Founded</label>
                            <div className="row">
                                <div className="col">
                                    <select name="founded_month" id="field" className="form-control form-control-sm rounded-0" style={{border: '2px solid lightgray'}} value={this.state.founded_month} onChange={this.handleChange} required>
                                        <option value>Month</option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                </div>
                                <div className="col">
                                  <select name="founded_year" id="field" className="form-control form-control-sm rounded-0" style={{border: '2px solid lightgray'}} value={this.state.founded_year} onChange={this.handleChange} required>
                                     <option value>Select Year</option>
                                         {yearList}
                                    </select>       
                                </div>
                            </div>
                           
                        </div>

                      
                       {/* Modal footer */}
                       <div className="py-1 mt-2 text-right">
                           <button type="submit" className="btn btn-success btn-sm">Update</button>
                       </div>
                    </form>

               </Modal.Body>
               
               </Modal>



               <Modal
               
               size="md"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               scrollable={true}
               show={this.state.show2} handleClose={this.hideModal}>
               <Modal.Header className="modal-header rounded-0 py-2 text-white" style={{background: '#70a1B9'}}>
                   <Modal.Title id="contained-modal-title-vcenter">
                   <strong> About Details</strong>
                   </Modal.Title>
                   <span onClick={this.onHide} className="close-modal-btn cursor">x</span>
               </Modal.Header>
               <Modal.Body className="px-4">
                   <form onSubmit={this.handleSubmit3}>

                 <div>
                      
                        {/* Modal body */}
                        <div className="modals-body">
                            <div className="row">
                            <div className="col">
                                <label className="modals-label">About Us</label>
                                <input type="hidden" name="id" />
                                <textarea className="modals-textarea" name="company_about" cols={30} rows={3} value={this.state.company_about} onChange={this.handleChange} />
                            </div>
                            </div>
                            <div className="row">
                            <div className="col">
                                <label htmlFor className="mt-2 mb-0">Company Phone No.</label>
                                <input className="modals-input" type="number" name="company_number" value={this.state.company_number} onChange={this.handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor className="mt-2 mb-0">CAC  No.</label>
                                <input type="text" className="modals-input" name="cac" value={this.state.cac} onChange={this.handleChange}/>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col">
                                <label htmlFor className="mt-2 mb-0">Company Director</label>
                                <input type="text" name="company_director" className="modals-input" value={this.state.company_director} onChange={this.handleChange}/>
                            </div>
                            <div className="col">
                                <label htmlFor className="mt-2 mb-0">Website</label>
                                <input type="text" name="website" className="modals-input" value={this.state.website} onChange={this.handleChange} />
                            </div>
                            </div>
                            <div className="mt-1 mb-0 border rounded px-2">
                            <p className="text-center mt-1 mb-0 text-primary"><strong className="text-center">Main Office Location</strong></p>
                            <label htmlFor="email" className="mt-0 mb-0">Address</label>
                            <input type="text" className="modals-input" id="company_address" name="company_address" value={this.state.company_address} onChange={this.handleChange}/>
                            {/* <label for="email" class="mt-2 mb-0">State & LGA : <?php echo $company_details['fmain_office_location_state']; ?>, <?php echo $company_details['fmain_office_location_lga']; ?> </span></label>
                                            <p class="mb-1"><button>Change</button></p> */}
                            <div className="row mb-2">
                                <div className="col">
                                <label htmlFor="email" className="mt-2 mb-0">State</label>
                                {/* <textarea name="branch_address" class="form-control form-control-sm rounded-0"  cols="30" rows="3" required></textarea> */}
                                
                                <select name="about_state" value={this.state.selectedState} onChange={this.changeState} className="modals-select">
                                    <option>Select State</option>
                                    {this.state.states.map((e, key) => {
                                        return <option key={key}>{e.name}</option>;
                                    })}
                                </select>
                                </div>
                                <div className="col">
                                <label htmlFor="email" className="mt-2 mb-0">LGA</label>
                                {/* <textarea name="branch_address" class="form-control form-control-sm rounded-0"  cols="30" rows="3" required></textarea> */}
                               
                                <select name="about_lga" value={this.state.selectedLGA} onChange={this.changeLGA} className="modals-select">
                                    <option>Select LGA</option>
                                        {this.state.lgas.map((e, key) => {
                                            return <option key={key}>{e.name}</option>;
                                        })}
                                </select> 
                                </div>
                            </div>
                            </div>
                           <div className="row mt-3">
                            <div className="col text-center">
                                <input type="file" className="input-id" id="company_logo" name="company_logo" data-browse-on-zone-click="true" />
                            </div>
                            </div>

                        </div></div>


                      
                       {/* Modal footer */}
                       <div className="py-1 mt-2 text-right">
                           <button type="submit" className="btn btn-success btn-sm">Update</button>
                       </div>
                    </form>

               </Modal.Body>
               
               </Modal>


            
               <Modal
               
               size="md"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               scrollable={true}
               show={this.state.show3} handleClose={this.hideModal}>
               <Modal.Header className="modal-header rounded-0 py-2 text-white" style={{background: '#70a1B9'}}>
                   <Modal.Title id="contained-modal-title-vcenter">
                   <strong> Branch Details</strong>
                   </Modal.Title>
                   <span onClick={this.onHide} className="close-modal-btn cursor">x</span>
               </Modal.Header>
               <Modal.Body className="px-4">
                   <form onSubmit={this.handleSubmit3}>

                    {/* Modal body */}
                    <div className="modals-body">
                        <div className="row">
                        <div className="col">
                            <label htmlFor="email" className="mt-2 mb-0">Branch Name</label>
                            <input type="text" className="modals-input" id="branch_name" name="branch_name" value={this.state.branch_name} onChange={this.handleChange} required />
                        </div>
                        <div className="col">
                            <label htmlFor="email" className="mt-2 mb-0">Branch Manager</label>
                            <input type="text" className="modals-input" id="branch_manager" name="branch_manager" value={this.state.branch_manager} onChange={this.handleChange} required />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col">
                            <label htmlFor="email" className="mt-2 mb-0">Branch Address</label>
                            <input name="branch_address" className="modals-input" cols={30} rows={3}  value={this.state.branch_address} onChange={this.handleChange} required />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col">
                            <label htmlFor="email" className="mt-2 mb-0">State</label>
                            {/* <textarea name="branch_address" class="form-control form-control-sm rounded-0"  cols="30" rows="3" required></textarea> */}
                            
                            <select name="branch_state" value={this.state.selectedState2} onChange={this.changeState2} className="modals-select">
                                    <option>Select State</option>
                                    {this.state.states2.map((e, key) => {
                                        return <option key={key}>{e.name}</option>;
                                    })}
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="email" className="mt-2 mb-0">LGA</label>
                          
                            <select name="branch_lga" value={this.state.selectedLGA2} onChange={this.changeLGA2} className="modals-select">
                                    <option>Select LGA</option>
                                        {this.state.lgas2.map((e, key) => {
                                            return <option key={key}>{e.name}</option>;
                                        })}
                                </select> 
                        </div>
                        </div>
                        <div className="row">
                        <div className="col">
                            <label htmlFor="email" className="mt-2 mb-0">Branch Phone:</label>
                            <input type="number" className="modals-input" id="branch_phone" name="branch_phone"  value={this.state.branch_phone} onChange={this.handleChange} required />
                        </div>
                        </div>
                    </div>
            


                      
                       {/* Modal footer */}
                       <div className="py-1 mt-2 text-right">
                           <button type="submit" className="btn btn-success btn-sm">Create</button>
                       </div>
                    </form>

               </Modal.Body>
               
               </Modal>


               <Modal
               
               size="md"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               scrollable={true}
               show={this.state.show4} handleClose={this.hideModal}>
               <Modal.Header className="modal-header rounded-0 py-2 text-white" style={{background: '#70a1B9'}}>
                   <Modal.Title id="contained-modal-title-vcenter">
                   <strong> Edit Socials Details</strong>
                   </Modal.Title>
                   <span onClick={this.onHide} className="close-modal-btn cursor">x</span>
               </Modal.Header>
               <Modal.Body className="px-4">
                   <form onSubmit={this.handleSubmit4}>

                    {/* Modal body */}
                    <div className="modals-body">
                      
                    <div class="modal-header rounded-0 py-2" style="background: #70a1B9">
                     <p class="modal-title text-white"><strong> Social Media Details</strong></p>
                     <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
               
                    <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="email" className="mt-2 mb-0">LinkedIn</label>
                        <input type="hidden" name="id" defaultValue="<?php echo $company_details['frecno']; ?>" />
                        <input type="text" className="form-control form-control-sm rounded-0" name="linkedin" defaultValue="<?php echo $company_details['flinkedin']; ?>" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="mt-2 mb-0">Facebook</label>
                        <input type="text" className="form-control form-control-sm rounded-0" name="facebook" defaultValue="<?php echo $company_details['ffacebook']; ?>" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="mt-2 mb-0">Instagram</label>
                        <input type="text" className="form-control form-control-sm rounded-0" name="instagram" defaultValue="<?php echo $company_details['finstagram']; ?>" />
                    </div>
                    </div>

                    </div>
                       {/* Modal footer */}
                       <div className="py-1 mt-2 text-right">
                           <button type="submit" className="btn btn-success btn-sm">Create</button>
                       </div>
                    </form>

               </Modal.Body>
               
               </Modal>




      </div>

      
       
        )
    }
}

export default CompanyDashboard
