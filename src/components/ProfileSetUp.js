import React, { Component } from 'react';
import Header from '../commons/Header';
import NavBar from '../commons/NavBar';
import Footer from '../commons/Footer';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export class ProfileSetUp extends Component {

    constructor() {
        super();
        this.state = {
          show: false,
          first_name: '',
          last_name: '',
          age_range: '',
          user_phonenum: '',
          user_email: '',
          educational_qualification: '',
          profession_or_craft: '',
          employment_type: '',
          employment_status: '',
          current_employer:'',
          states : [],
          lgas : [],
          selectedState : '',
          selectedLGA : '',
          states2 : [],
          lgas2 : [],
          selectedState2 : '',
          selectedLGA2 : '',
          marital_status: '',
          disabled: '',
          gender: '',
          other_professions1: '',
          other_professions2: '',
          other_professions3: '',
          other_professions4: '', 
          other_professions2_show: false,
          other_professions3_show: false,
          other_professions4_show: false, 
          languages1: '',
          languages2: '',
          languages3: '',
          languages4: '',
          languages5: '',
          languages2_show: false,
          languages3_show: false,
          languages4_show: false,
          languages5_show: false,
          lang2_btn_show: true,
          lang2_btn_text: 'Add Language 2 +',
          lang3_btn_show: false,
          lang4_btn_show: false,
          lang5_btn_show: false,
          about: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleRoleChange = this.handleRoleChange.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeLGA = this.changeLGA.bind(this);
        this.changeState2 = this.changeState2.bind(this);
        this.changeLGA2 = this.changeLGA2.bind(this);
        this.setLang2 = this.setLang2.bind(this);
        this.setLang3 = this.setLang3.bind(this);
        this.setLang4 = this.setLang4.bind(this);
        this.setLang5 = this.setLang5.bind(this);
        this.setOtherProf2 = this.setOtherProf2.bind(this);
        this.setOtherProf3 = this.setOtherProf3.bind(this);
        this.setOtherProf4 = this.setOtherProf4.bind(this);
  
      }

   

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      handleKeyUp(e){
        console.log(e.target.value)
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


      setGender(e) {
        this.setState({gender: e.target.value });
        //console.log(e.target.value);
      }
    
      setMaritalStatus(e) {
        this.setState({marital_status: e.target.value });
        //console.log(e.target.value);
      }
    
    
      setDisabled(e) {
        this.setState({disabled: e.target.value });
        //console.log(e.target.value);
      }

      setLang2() {
       
        this.setState(prevState => ({
          languages2_show: !prevState.languages2_show
        }));
      }


      setLang3() {
        this.setState(prevState => ({
          languages3_show: !prevState.languages3_show
        }));
      }

      setLang4() {
        this.setState(prevState => ({
          languages4_show: !prevState.languages4_show
        }));
      }

      setLang5() {
        this.setState(prevState => ({
          languages5_show: !prevState.languages5_show
        }));
      }


      setOtherProf2() {
       
        this.setState(prevState => ({
          other_professions2_show: !prevState.other_professions2_show
        }));

        console.log(this.state.other_professions2_show)

      }


      setOtherProf3() {
       
        this.setState(prevState => ({
          other_professions3_show: !prevState.other_professions3_show
        }));
      }


      setOtherProf4() {
       
        this.setState(prevState => ({
          other_professions4_show: !prevState.other_professions4_show
        }));
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

        const data = { first_name: this.state.first_name, last_name: this.state.last_name, phone: this.state.user_phonenum, user_email: this.state.user_email, 
          educational_qualification: this.state.educational_qualification, profession: this.state.profession_or_craft, employment_type:  this.state.employment_type, 
          employment_status: this.state.employment_status, gender:  this.state.gender, disabled:  this.state.disabled, current_employer: this.state.current_employer, 
          languages1: this.state.languages1, languages2: this.state.languages2, languages3: this.state.languages3, languages4: this.state.languages4, languages5: this.state.languages5, 
          other_professions1: this.state.other_professions1, other_professions2: this.state.other_professions2, other_professions3: this.state.other_professions3,
          other_professions4: this.state.other_professions4, selectedState: this.state.selectedState, selectedLGA: this.state.selectedLGA, marital_status: this.state.marital_status,
          selectedState2: this.state.selectedState2, selectedLGA2: this.state.selectedLGA2, about: this.state.about};  

        //console.log(data);

       axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/profilesetup`, data, {headers: headers})
        .then((response) => {
           
          //  if (response.data.success === true) 
          //  {
          //     this.setState({
          //       isVerifyComplete: 1,
          //     });
             
          //     this.props.history.push("/get-started");
          //  }  
          //  else 
          //  {
          //     this.props.history.push('/signup'); 
          //  }  

           this.props.history.push("/user-dashboard");

          //  this.setState({ show: false });
         
           console.log(response);

         })
         .catch( error => {
           console.log(error.response);
         });
    

      }



    render() {


        return (
            <>
                    <Header/>



                  <div align="center" className="profile-setup-form-container">
                    <form onSubmit={this.handleSubmit}>
                      <div id="rounded-corner" align="center" className="form-table">
                        <div align="left" className="form-header">Profile Setup</div>
                      <p className="mt-4 px-5">You are required to set up your profile. This is a one-time initial set up and you can always change them later in future from your dashboard. All fields marked * are mandatory</p>
                        <div className="profile-setup-body" align="center">
                          <div className="duo">
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 5}}>
                                First Name<b>*</b></div>
                              <input className="form-input" type="text" id="first_name" name="first_name" value={this.state.first_name} onChange={this.handleChange} required />  
                            </div>  
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 5}}>
                                Last Name (Surname)<b>*</b></div>
                              <input className="form-input" type="text" id="last_name" name="last_name" value={this.state.last_name} onChange={this.handleChange} required />    
                            </div>
                          </div> 
                          <div className="duo">
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 10}}>
                                Current Location<b>*</b></div>
                                      <select value={this.state.selectedState} onChange={this.changeState} className="form-select" required>
                                            <option>Select State</option>
                                            {this.state.states.map((e, key) => {
                                                return <option key={key}>{e.name}</option>;
                                            })}
                                        </select>
                            </div>
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 10}}>
                                &nbsp;&nbsp;</div>            
                                <select value={this.state.selectedLGA} onChange={this.changeLGA} className="form-select" required>
                                    <option>Select LGA</option>
                                        {this.state.lgas.map((e, key) => {
                                            return <option key={key}>{e.name}</option>;
                                        })}
                                </select>
                            </div>    
                          </div>
                          <div className="duo">
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 5}}>
                                Email</div>
                              <input className="form-input" type="email" id="user_email" name="user_email" value={this.state.user_email} onChange={this.handleChange} />
                            </div>
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 5}}>
                                Phone Number<b>*</b></div>
                              <input className="form-input" type="number" id="user_phonenum" name="user_phonenum" value={this.state.user_phonenum} onChange={this.handleChange} required />      
                            </div>
                          </div>
                        
                          <div className="duo">
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 5}}>
                                Profession<b>*</b></div>
                             
                              <input type="text" className="form-select" name="profession_or_craft" id="profession_or_craft" value={this.state.profession_or_craft} onChange={this.handleChange} autoComplete="off" required/> 
                            </div>
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 5}}>
                                Academic Level<b>*</b></div>
                                <select name="educational_qualification" id className="form-select" value={this.state.educational_qualification} onChange={this.handleChange} required>
                                  <option value>Select one</option>
                                  <option value="None">None</option>
                                  <option value="First School Leaving Certificate">First School Leaving Certificate</option>
                                  <option value="Junior Secondary School Certificate">Junior Secondary School Certificate</option>
                                  <option value="Senior Secondary School Certificate">Senior Secondary School Certificate</option>
                                  <option value="National Certificate of Education">National Certificate of Education</option>
                                  <option value="Ordinary National Diploma">Ordinary National Diploma</option>
                                  <option value="Higher National Diploma">Higher National Diploma</option>
                                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                                  <option value="Master's Degree">Master's Degree</option>
                                  <option value="Doctorate's Degree">Doctorate's Degree</option>
                                </select>     
                            </div> 
                          </div>   
                          <div className="duo">
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 5}}>
                                Gender<b>*</b></div>
                              <select className="form-select" id="gender" name="gender" value={this.state.gender} onChange={this.handleChange} required>
                                <option value="">Select:</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>    
                            </div>
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 5}}>
                                Marital Status<b>*</b></div>
                              <select className="form-select" id="marital_status" name="marital_status" value={this.state.marital_status} onChange={this.handleChange} required>
                                <option value="">Select:</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Other">Other</option>
                              </select>    
                            </div> 
                          </div>   
                          <div align="left" className="h3-label">
                            <div style={{paddingBottom: 5}}>
                              Current Employer</div>
                            <input className="form-input" type="text" id="current_employer" name="current_employer" value={this.state.current_employer} onChange={this.handleChange} />    
                          </div>
                          <div align="left" className="h3-label-radio">
                            <div style={{paddingBottom: 5}}>
                              Disabled<b>*</b></div>
                            <div style={{columnCount: 2, columnWidth: '50%'}} onChange={e => this.setDisabled(e)}>
                              <div>
                                <input type="radio" name="disabled" value="Yes" checked={this.state.disabled === "Yes"} required /><label>&nbsp;&nbsp;Yes</label>
                              </div>
                              <div>
                                <input type="radio" name="disabled" value="No" checked={this.state.disabled === "No"}  /><label>&nbsp;&nbsp;No</label>
                              </div> 
                            </div>
                          </div>
                          <div align="left" className="h3-label">
                            <div style={{paddingBottom: 5}}>
                              I Speak <b>(max 5)</b></div>
                            <select className="form-select" id="language" name="languages1" value={this.state.languages1} onChange={this.handleChange} >
                              <option value="">Select Language 1:</option>
                              <option value="English">English</option>
                              <option value="Yoruba">Yoruba</option>
                              <option value="Igbo">Igbo</option>
                              <option value="Hausa">Hausa</option>
                              <option value="Pidgin English">Pidgin English</option>
                              <option value="French">French</option>
                              <option value="Tiv">Tiv</option>
                              <option value="Kanuri">Kanuri</option>
                              <option value="Fulfulde">Fulfulde</option>
                              <option value="Efik-Ibibio">Efik-Ibibio</option>
                              <option value="Ijaw">Ijaw</option>
                              <option value="Urhobo">Urhobo</option>
                              <option value="Sign Language (English)">Sign Language (English)</option>
                              <option value="Sign Language (Hausa)">Sign Language (Hausa)</option>
                              <option value="Edo">Edo</option>
                              <option value="Igala">Igala</option>
                              <option value="Nupe-Ebira">Nupe-Ebira</option>
                              <option value="Izon">Izon</option>
                              <option value="Birom">Birom</option>
                              <option value="Idoma">Idoma</option>
                              <option value="Itsekiri">Itsekiri</option>
                              <option value="British English">British English</option>
                              <option value="Spanish">Spanish</option>
                              <option value="Mandarin">Mandarin</option>
                            </select>


                          <button type="button" className="add-professions-button mt-3" onClick={this.setLang2}>
                          {this.state.lang2_btn_text}    
                        </button>
                            

                          {this.state.languages2_show ? 
                            <select id="prof1x" className="form-select mt-2 mb-2" name="languages2" value={this.state.languages2} onChange={this.handleChange}>
                            <option value="">Select Language 2:</option>
                              <option value="English">English</option>
                              <option value="Yoruba">Yoruba</option>
                              <option value="Igbo">Igbo</option>
                              <option value="Pidgin English">Pidgin English</option>
                              <option value="French">French</option>
                              <option value="Tiv">Tiv</option>
                              <option value="Kanuri">Kanuri</option>
                              <option value="Fulfulde">Fulfulde</option>
                              <option value="Efik-Ibibio">Efik-Ibibio</option>
                              <option value="Ijaw">Ijaw</option>
                              <option value="Urhobo">Urhobo</option>
                              <option value="Sign Language (English)">Sign Language (English)</option>
                              <option value="Sign Language (Hausa)">Sign Language (Hausa)</option>
                              <option value="Edo">Edo</option>
                              <option value="Igala">Igala</option>
                              <option value="Nupe-Ebira">Nupe-Ebira</option>
                              <option value="Izon">Izon</option>
                              <option value="Birom">Birom</option>
                              <option value="Idoma">Idoma</option>
                              <option value="Itsekiri">Itsekiri</option>
                              <option value="British English">British English</option>
                              <option value="Spanish">Spanish</option>
                              <option value="Mandarin">Mandarin</option>
                            </select>
                            :
                            null
                            }

                  <button type="button" align="left" className="add-professions-button mt-2 mb-2" onClick={this.setLang3}>      
                              Add Language 3+    
                            </button>
                            {this.state.languages3_show ? 
                            <select id="prof2x" className="form-select" name="languages3" value={this.state.languages3} onChange={this.handleChange}>
                            <option value="">Select Language 3:</option>
                              <option value="English">English</option>
                              <option value="Yoruba">Yoruba</option>
                              <option value="Igbo">Igbo</option>
                              <option value="Pidgin English">Pidgin English</option>
                              <option value="French">French</option>
                              <option value="Tiv">Tiv</option>
                              <option value="Kanuri">Kanuri</option>
                              <option value="Fulfulde">Fulfulde</option>
                              <option value="Efik-Ibibio">Efik-Ibibio</option>
                              <option value="Ijaw">Ijaw</option>
                              <option value="Urhobo">Urhobo</option>
                              <option value="Sign Language (English)">Sign Language (English)</option>
                              <option value="Sign Language (Hausa)">Sign Language (Hausa)</option>
                              <option value="Edo">Edo</option>
                              <option value="Igala">Igala</option>
                              <option value="Nupe-Ebira">Nupe-Ebira</option>
                              <option value="Izon">Izon</option>
                              <option value="Birom">Birom</option>
                              <option value="Idoma">Idoma</option>
                              <option value="Itsekiri">Itsekiri</option>
                              <option value="British English">British English</option>
                              <option value="Spanish">Spanish</option>
                              <option value="Mandarin">Mandarin</option>
                            </select>
                              :
                              null
                            }

                            <button type="button" align="left" className="add-professions-button mt-2 mb-2" onClick={this.setLang4}>
                              Add Language 4+    
                            </button>
                            {this.state.languages4_show ?
                            <select id="prof3x" className="form-select" name="languages4" value={this.state.languages4} onChange={this.handleChange}>
                            <option value="">Select Language 4:</option>
                              <option value="English">English</option>
                              <option value="Yoruba">Yoruba</option>
                              <option value="Igbo">Igbo</option>
                              <option value="Pidgin English">Pidgin English</option>
                              <option value="French">French</option>
                              <option value="Tiv">Tiv</option>
                              <option value="Kanuri">Kanuri</option>
                              <option value="Fulfulde">Fulfulde</option>
                              <option value="Efik-Ibibio">Efik-Ibibio</option>
                              <option value="Ijaw">Ijaw</option>
                              <option value="Urhobo">Urhobo</option>
                              <option value="Sign Language (English)">Sign Language (English)</option>
                              <option value="Sign Language (Hausa)">Sign Language (Hausa)</option>
                              <option value="Edo">Edo</option>
                              <option value="Igala">Igala</option>
                              <option value="Nupe-Ebira">Nupe-Ebira</option>
                              <option value="Izon">Izon</option>
                              <option value="Birom">Birom</option>
                              <option value="Idoma">Idoma</option>
                              <option value="Itsekiri">Itsekiri</option>
                              <option value="British English">British English</option>
                              <option value="Spanish">Spanish</option>
                              <option value="Mandarin">Mandarin</option>
                            </select>
                            :
                            null
                          }

                            <button type="button" align="left" className="add-professions-button my-2" onClick={this.setLang5}>
                              Add Language 5+    
                            </button>

                            {this.state.languages5_show ?
                            <select id="prof4x" className="form-select my-2" name="languages5" value={this.state.languages5} onChange={this.handleChange}>
                            <option value="">Select language 5:</option>
                              <option value="English">English</option>
                              <option value="Yoruba">Yoruba</option>
                              <option value="Igbo">Igbo</option>
                              <option value="Pidgin English">Pidgin English</option>
                              <option value="French">French</option>
                              <option value="Tiv">Tiv</option>
                              <option value="Kanuri">Kanuri</option>
                              <option value="Fulfulde">Fulfulde</option>
                              <option value="Efik-Ibibio">Efik-Ibibio</option>
                              <option value="Ijaw">Ijaw</option>
                              <option value="Urhobo">Urhobo</option>
                              <option value="Sign Language (English)">Sign Language (English)</option>
                              <option value="Sign Language (Hausa)">Sign Language (Hausa)</option>
                              <option value="Edo">Edo</option>
                              <option value="Igala">Igala</option>
                              <option value="Nupe-Ebira">Nupe-Ebira</option>
                              <option value="Izon">Izon</option>
                              <option value="Birom">Birom</option>
                              <option value="Idoma">Idoma</option>
                              <option value="Itsekiri">Itsekiri</option>
                              <option value="British English">British English</option>
                              <option value="Spanish">Spanish</option>
                              <option value="Mandarin">Mandarin</option>
                            </select>
                              :
                              null
                              }
                          
                          </div>
                          <div align="left" className="h3-label">
                            <div style={{paddingBottom: 5}}>
                              Other Professions </div>
                              <input className="form-input" type="text" name="other_professions1" onKeyPress={this.handleKeyPress}/>      
                            
                            <button id="profbutton1x" type="button" align="left" className="add-professions-button" onClick={this.setOtherProf2}>
                              Add Other Profession 2+    
                            </button>
                            {this.state.other_professions2_show ? 
                                <input className="form-input" type="text" name="other_professions2" value={this.state.other_professions2} onChange={this.handleChange}  /> 
                              :
                              null
                              }
                            <button id="profbutton2x" type="button" align="left" className="add-professions-button" onClick={this.setOtherProf3}>
                              Add Other Profession 3+    
                            </button>

                            {this.state.other_professions3_show ? 
                              <input className="form-input" type="text" name="other_professions3" value={this.state.other_professions3} onChange={this.handleChange} /> 
                            : null
                            }
                            <button id="profbutton3x" type="button" align="left" className="add-professions-button" onClick={this.setOtherProf4}>
                              Add Profession  4+    
                            </button>

                            {this.state.other_professions4_show ? 
                            <input className="form-input" type="text" name="other_professions4" value={this.state.other_professions4} onChange={this.handleChange} /> 
                            :
                            null
                            }
                          </div>
                          <div className="duo">
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 10}}>
                                Employment Type <b>*</b></div>
                              <select className="form-select" name="employment_type" value={this.state.employment_type} onChange={this.handleChange} required>
                                <option value="">Select one</option>   
                                <option value="Full Time" >Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Contract">Contract</option>
                                <option value="Volunteer">Volunteer</option>
                                <option value="Internship">Internship</option>
                                <option value="Apprentice/Trainee">Apprentice/Trainee</option>
                              </select>
                            </div>
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 10}}>
                                Present Employment Status<b>*</b></div>
                              <select className="form-select" name="employment_status" value={this.state.employment_status} onChange={this.handleChange} required>
                                <option value="">Select:</option>
                                <option value="None">None</option>
                                <option value="Available for Employment">Available for Employment</option>
                                <option value="Unavailable for Employment">Unavailable for Employment</option>
                                <option value="Business Owner">Business Owner</option>
                              </select>    
                            </div>
                          </div>
                        
                                    
                          <br />
                          <div className="duo">
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 10}}>
                                Prefered Job Location</div>
                                <select value={this.state.selectedState2} onChange={this.changeState2} className="form-select">
                                      <option>Select State</option>
                                      {this.state.states2.map((e, key) => {
                                          return <option key={key}>{e.name}</option>;
                                      })}
                                  </select>
                            </div>
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 10}}>
                                &nbsp;&nbsp;</div>            
                                <select value={this.state.selectedLGA2} onChange={this.changeLGA2} className="bio-form-select">
                                      <option>Select LGA</option>
                                          {this.state.lgas2.map((e, key) => {
                                              return <option key={key}>{e.name}</option>;
                                          })}
                                  </select> 
                            </div>    
                          </div>

                          <div align="left" className="h3-label">
                            <div style={{paddingBottom: 10}}>
                              About <b>*</b></div>
                            <textarea className="form-textarea" name="about"  value={this.state.about} onChange={this.handleChange} required/>
                          </div>
                      
                        </div> 
                        <div colSpan={2} align="center">
                          <br />
                          <button type className="profile-setup-proceed-button" id>Proceed</button>
                          <br />
                        
                        </div>
                      </div>
                    </form>
                  </div>



        <Footer/>  

           
        </>

        )
    }
}

export default ProfileSetUp
