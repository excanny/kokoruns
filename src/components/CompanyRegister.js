import React, { Component } from 'react'
import axios from 'axios';

export class CompanyRegister extends Component {


    constructor(props) {
        super(props);
        
        this.state = {
        
            company_name: '',
            company_number: '',
            company_email: '',
            cac: '',
            company_type:'',
            company_size:'',
            website:'',
            company_address:'',
            states: [],
            lgas: [],
            selectedState : '',
            selectedLGA : '',
            company_logo:'',
            isLoading: false,
            category1 : [],
            category2 : [],
            category3 : [],
            selectedCat1 : '',
            selectedCat2 : '',
            selectedCat3 : '',

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeLGA = this.changeLGA.bind(this);
        this.changeCat1 = this.changeCat1.bind(this);
        this.changeCat2 = this.changeCat2.bind(this);
        this.changeCat3 = this.changeCat3.bind(this);
      
      }


      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      changeCat1(e) {
        this.setState({selectedCat1: e.target.value});
        this.setState({category2 : this.state.category1.find(cat => cat.name === e.target.value).category2});
            //console.log(e.target.value);
      }
    
      changeCat2(e) {
        this.setState({selectedCat2: e.target.value});
        const cat2 = this.state.category1.find(cat => cat.name === this.state.selectedCat1).category2;
		this.setState({category3 : cat2.find(cat2 => cat2.name === e.target.value).category3});
        //console.log(cat2);
      }

      changeCat3(e) 
      {
        this.setState({selectedCat3: e.target.value});
        console.log(e.target.value);
      }

      changeState(e) {
        this.setState({selectedState: e.target.value});
        this.setState({lgas : this.state.states.find(state => state.name === e.target.value).lgas});
            console.log(e.target.value);
      }
    
      changeLGA(e) {
        this.setState({selectedLGA: e.target.value});
            //console.log(e.target.value);
      }


      async componentDidMount()
        {

            this.setState({
                category1: [ 
                    {name: 'Agriculture',  
                        category2: [ 
                            {name: 'Animal Production',  
                                category3: [
                                    {name: "Cattle Ranching & Farming"},
                                    {name: "Hog & Pig Farming"}, 
                            ]}, 
                            {name: 'Crop Production', 
                                category3: [
                                            {name: 'Demsa'},
                                            {name: 'Fufure'},
                            ]}, 
                            {name: 'Forestry and Logging', 
                                category3: [
                                            {name: 'Abak'},
                                            {name: 'Eastern Obolo'},
                            ]}, 
                            {name: 'Fishing, Hunting and Trapping', 
                                category3: [
                                            {name: 'Aguata'},
                                            {name: 'Anambra East'},
                                            {name: 'Anambra West'},
                            ]}, 
                            {name: 'Support Activities For Agriculture', 
                                category3: [
                                            {name: 'Alkaleri'},
                                            {name: 'Bauchi'},
                                            
                            ]}, 
                        
                        ]},

                        {name: 'Mining, Quarrying and Oil& Gas Industry',  
                        category2: [ 
                            {name: 'Oil and Gas Extraction',  
                                category3: [
                                    {name: "Aba North"},
                                    {name: "Aba South"}, 
                            ]}, 
                            {name: 'Mining', 
                                    category3: [
                                            {name: 'Demsa'},
                                            {name: 'Fufure'},
                            ]}, 
                        ]},

                    ] //countries block

             });




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
             

        
            if(localStorage.getItem('access_token'))
            {
            this.setState({ isLogged : true });
            }

            //console.log(localStorage.getItem('access_token'));

            const headers = {

            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 

            }


            let one = "https://sheltered-chamber-63274.herokuapp.com/api/userdetails"
            // let two = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";
            // let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
            
            const requestOne = axios.get(one, {headers: headers});
            // const requestTwo = axios.get(two);
            // const requestThree = axios.get(three);
            
            axios.all([
            requestOne, 
            //requestTwo, 
            //requestThree
            ]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            // const responseTwo = responses[1]
            // const responesThree = responses[2]
            // use/access the results 

            this.setState({ first_name : responseOne.data.user_details.first_name, last_name : responseOne.data.user_details.last_name, gender : responseOne.data.user_details.gender, profession: responseOne.data.user_details.profession, marital_status : responseOne.data.user_details.marital_status, disabled : responseOne.data.user_details.disabled, current_employer : responseOne.data.user_details.current_employer, other_professions1 :  responseOne.data.user_details.other_professions1,
                other_professions2 :  responseOne.data.user_details.other_professions2, other_professions3 :  responseOne.data.user_details.other_professions3, employment_type: responseOne.data.user_details.employment_type, preferred_job: responseOne.data.user_details.preferred_job,
                other_professions4 :  responseOne.data.user_details.other_professions4, educational_qualification :  responseOne.data.user_details.educational_qualification, languages1 : responseOne.data.user_details.languages1, 
               email: responseOne.data.user_details.email, current_employer: responseOne.data.user_details.current_employer, employment_status: responseOne.data.user_details.employment_status,
                languages2 : responseOne.data.user_details.languages2, languages3 : responseOne.data.user_details.languages3, languages4 : responseOne.data.user_details.languages4, languages5 : responseOne.data.user_details.languages5, about : responseOne.data.user_details.about,
                });

            console.log(this.state);

            })).catch(errors => {
            // react on errors.
            console.log(errors);
            })


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


        this.setState({ isLoading: true });
        
        let formData = new FormData();
        //formData.append('file', e.target.uploaded_id_card.files[0]);
        //formData.append('uploadIDPath', this.state.file);
        formData.append('company_name', e.target.company_name.value);
        formData.append('company_number', e.target.company_number.value);
        formData.append('company_email', e.target.company_email.value);
        formData.append('cac', e.target.cac.value);
        formData.append('company_type', e.target.company_type.value);
        formData.append('company_size', e.target.company_size.value);
        formData.append('website', e.target.website.value);
        formData.append('company_industry', e.target.selectedCat1.value);
        formData.append('company_industry2', e.target.selectedCat2.value);
        formData.append('company_industry3', e.target.selectedCat3.value);
        formData.append('company_address', e.target.company_address.value);
        formData.append('state', this.state.selectedState);
        formData.append('lga', this.state.selectedLGA);
        formData.append('company_logo', e.target.company_logo.value);


       // Display the key/value pairs
        for (var pair of formData.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
        }

        //const data = { email: this.state.user_email_or_phone_number, password: this.state.password };  

        //console.log(data);

       axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/cregister`, formData, {headers: headers})
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

          this.props.history.push(`/company-dashboard/${response.data.company.company_id}`);
         
           //console.log(response.data.company.company_id);

         })
         .catch( error => {
           console.log(error.response);
         });
    

      }



    render() {
        return (
   <div className="container mx-auto" style={{margin: '4rem'}}>
                <div className="row bg-white mx-auto">
                    <div className="col-md-8">
                    <div className="pt-4 pl-4 pr-4">
                        <h3 className="mb-4">Create A Company Account</h3>
                        <p><span className="text-danger">*</span> Required Information</p>
                     
                        <form encType="multipart/form-data" onSubmit={this.handleSubmit} className="needs-validation">
                        <div className="row">
                            <div className="col">
                            <div className="form-group p-floating-container">
                                <label className="text-primary">Enter Company Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control rounded-0" id="company_name" name="company_name" placeholder="Enter Company Name*" aria-label="Company Name" maxLength={45} autoComplete="off" value={this.state.company_name} onChange={this.handleChange} required />
                               
                                <input type="hidden" name="company_id" id="company_id" />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="form-group p-floating-container">
                                <label className="text-primary">Enter Company Phone No. <span className="text-danger">*</span></label>
                                <input type="number" min={0} name="company_number" id="company_number" className="form-control rounded-0" placeholder="Enter Company Phone No.*" value={this.state.company_number} onChange={this.handleChange} required />
                               
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-group p-floating-container">
                            <label className="text-primary">Enter CAC Reg. No </label>
                                <input type="text" name="cac" id="cac" value={this.state.cac} onChange={this.handleChange} className="form-control rounded-0" placeholder="Enter CAC Reg. No." />
                                
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="form-group p-floating-container">
                                <label className="text-primary">Select Company Type* </label>
                                <select name="company_type" className="form-control rounded-0" value={this.state.company_type} onChange={this.handleChange} required>
                                <option value> Select Company Type*</option>
                                <option value="Not Registered">Not Registered</option>
                                <option value="Sole Proprietorship (Enterprise)">Sole Proprietorship (Enterprise)</option>
                                <option value="Limited Liability Company (LTD)">Limited Liability Company (LTD)</option>
                                <option value="Public Company (PLC)">Public Company (PLC)</option>
                                <option value="Unlimited Company (Unltd)">Unlimited Company (Unltd)</option>
                                <option value="Partnership Business ">Partnership Business </option>
                                <option value="Non-Government Organization (NGO)">Non-Government Organization (NGO)</option>
                                <option value="Cooperative Business">Cooperative Business</option>
                                <option value="Corporation">Corporation</option>
                                <option value="International Company">International Company</option>
                                <option value="State Government Company">State Government Company</option>
                                <option value="Federal Government Company">Federal Government Company</option>
                                </select>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-group">
                                <label className="text-primary">Select Company Size* </label>
                                <select name="company_size" value={this.state.company_size} onChange={this.handleChange} className="form-control rounded-0" required>
                                <option value>Select Company Size*</option>
                                <option value="1-10">1-10</option>
                                <option value="11-50">11-50</option>
                                <option value="51-200">51-200</option>
                                <option value="201-500">201-500</option>
                                <option value="501-1000">501-1000</option>
                                <option value="501-1000">501-1000</option>
                                <option value="5001-10000">5001-10000</option>
                                <option value="10000+">Above 10000</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="form-group p-floating-container">
                                <label className="text-primary">Enter Website </label>
                                <input type="text" className="form-control rounded-0" placeholder="Enter Website" name="website" value={this.state.website} onChange={this.handleChange} autoComplete="off" />
                                
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-group p-floating-container">
                                <label className="text-primary">Enter Email </label>
                                <input type="email" className="form-control rounded-0" placeholder="Enter Email" name="company_email" value={this.state.company_email} onChange={this.handleChange} autoComplete="off" />
                               
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center text-primary">
                            <h6>Industry Type</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <div className="form-gfroup">
                                  <select value={this.state.selectedCat1} name="selectedCat1" onChange={this.changeCat1} className="form-control" required>
                                    <option>Select one</option>
                                    {this.state.category1.map((e, key) => {
                                        return <option key={key}>{e.name}</option>;
                                    })}
                                </select>
                            </div>
                            </div>
                            <div className="col-md-4">
                            <div className="form-group">
            
                                <select value={this.state.selectedCat2} name="selectedCat2" onChange={this.changeCat2} className="form-control" required>
                                    <option>Select one</option>
                                        {this.state.category2.map((e, key) => {
                                            return <option key={key}>{e.name}</option>;
                                        })}
                                </select> 
                            </div>
                            </div>
                            <div className="col-md-4">
                            <div className="form-group">
                                <select value={this.state.selectedCat3} name="selectedCat3" onChange={this.changeCat3} className="form-control" required>
                                    <option>Select one</option>
                                        {this.state.category3.map((e, key) => {
                                            return <option key={key}>{e.name}</option>;
                                        })}
                                </select> 
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center text-primary">
                            <h6>Main Office Location</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="form-group p-floating-container">
                                <label className="text-primary">Enter Main Office Address </label>
                                <input type="text" className="form-control rounded-0" placeholder="Enter Main Office Address" id="company_address" name="company_address" value={this.state.company_address} onChange={this.handleChange} autoComplete="off" />
                                
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="form-group">
                                <select name="selectedState" value={this.state.selectedState} onChange={this.changeState} className="form-control">
                                    <option >Select State</option>
                                    {this.state.states.map((e, key) => {
                                        return <option key={key}>{e.name}</option>;
                                    })}
                                </select>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-group">
                                <select name="selectedLGA" value={this.state.selectedLGA} onChange={this.changeLGA} className="form-control">
                                    <option>Select LGA</option>
                                    {this.state.lgas.map((e, key) => {
                                        return <option key={key}>{e.name}</option>;
                                    })}
                                </select>
                            </div>
                            </div>
                           
                        </div>
                        <div className="row mt-2">
                            <div className="col text-center text-primary">
                            <h6>Upload Logo</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                            <div className="mx-auto">
                                {/* <i class="fa fa-upload fa-5x text-white"></i> */}
                                <input type="file" className="input-id" id="company_logo" name="company_logo" value={this.state.company_logo} onChange={this.handleChange} data-browse-on-zone-click="true" accept="image/*" />
                            </div>
                            </div>
                        </div>
                        <p className="text-center mt-2"> <input type="checkbox" name="agree" required /> I agree to the <a href>Terms &amp; Conditions</a>*</p>
                        <div className="form-group mt-3 mb-4">
                            <button type="submit" className="btn btn-block rounded-0 text-white w-50 mx-auto" style={{background: 'red'}} id="submit">Register</button>
                        </div>
                        </form>
                    </div>
                    </div>
                    <div className="col-md-4" style={{backgroundImage: 'url("assets/Images/Login%20and%20Sign%20up/illustration_register.jpg")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 958}}>
                    <div className="text-white " style={{marginTop: '9rem', paddingRight: '4rem'}}>
                        <h4 className="mb-3"> - Create Gallery</h4>
                        <h4 className="mb-3">  - Find Talents</h4>
                        <h4 className="mb-3">- Create Events</h4>
                        <h4 className="mb-3"> - Post Jobs</h4>
                    </div>
                    </div>
                </div>
                </div>

        )
    }
}

export default CompanyRegister
