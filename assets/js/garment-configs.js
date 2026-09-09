/**
 * garment-configs.js
 * Central config for Threadgaff Custom Designer.
 * Add a new key to GARMENT_CONFIGS to support a new product.
 * Product pages link to: designer.html?category=<key>
 */
var GARMENT_CONFIGS = {
  tshirts: {
    title: 'T-Shirts', subtitle: 'Design your tee or polo. Every detail to your spec.',
    defaultGarment: 'tee', svgType: 'top', sizes: ['XS','S','M','L','XL','XXL'],
    sleeveOptions: ['short','long'], sleeveDefaultLocked: false,
    garmentTypes: [
      { id:'tee', label:'T-Shirt', icon:'shirt' },
      { id:'polo', label:'Polo Shirt', icon:'polo' }
    ],
    necklineOptions: {
      tee: [{id:'crew',label:'Crew Neck'},{id:'vneck',label:'V-Neck'}],
      polo: [{id:'polo-collar',label:'Classic Collar',disabled:true}]
    },
    sizeChart: {
      tee: { XS:{chest:35,length:26,sleeve:7.5}, S:{chest:37,length:27,sleeve:8}, M:{chest:39,length:28,sleeve:8.5}, L:{chest:41,length:29,sleeve:9}, XL:{chest:43,length:30,sleeve:9.5}, XXL:{chest:45,length:31,sleeve:10} },
      polo: { S:{chest:37,length:27,sleeve:8}, M:{chest:39,length:28,sleeve:8.5}, L:{chest:41,length:29,sleeve:9}, XL:{chest:43,length:30,sleeve:9.5}, XXL:{chest:45,length:31,sleeve:10} }
    }
  },
  hoodies: {
    title: 'Hoodies & Sweatshirts', subtitle: 'Configure your hoodie or crewneck sweatshirt.',
    defaultGarment: 'hoodie', svgType: 'top', sizes: ['S','M','L','XL','XXL'],
    sleeveOptions: ['long'], sleeveDefaultLocked: true,
    garmentTypes: [
      { id:'hoodie', label:'Hoodie', icon:'hoodie' },
      { id:'crewneck', label:'Crewneck', icon:'shirt' }
    ],
    necklineOptions: {
      hoodie: [{id:'pullover',label:'Pullover Hood'},{id:'zip',label:'Zip-Up Hood'}],
      crewneck: [{id:'crew',label:'Crew Neck',disabled:true}]
    },
    sizeChart: {
      hoodie: { S:{chest:39,length:26,sleeve:24}, M:{chest:41,length:27,sleeve:25}, L:{chest:43,length:28,sleeve:26}, XL:{chest:45,length:29,sleeve:27}, XXL:{chest:47,length:30,sleeve:28} },
      crewneck: { S:{chest:38,length:25,sleeve:24}, M:{chest:40,length:26,sleeve:25}, L:{chest:42,length:27,sleeve:26}, XL:{chest:44,length:28,sleeve:27}, XXL:{chest:46,length:29,sleeve:28} }
    }
  },
  sweatshirts: {
    title: 'Sweatshirts', subtitle: 'Classic crewneck or French terry - your brand, your spec.',
    defaultGarment: 'crewneck', svgType: 'top', sizes: ['S','M','L','XL','XXL'],
    sleeveOptions: ['long'], sleeveDefaultLocked: true,
    garmentTypes: [
      { id:'crewneck', label:'Crewneck', icon:'shirt' },
      { id:'quarter-zip', label:'Quarter-Zip', icon:'shirt' },
      { id:'oversized', label:'Oversized Fit', icon:'shirt' }
    ],
    necklineOptions: {
      crewneck: [{id:'crew',label:'Crew Neck',disabled:true}],
      'quarter-zip': [{id:'qzip',label:'Quarter-Zip',disabled:true}],
      oversized: [{id:'crew',label:'Crew Neck',disabled:true}]
    },
    sizeChart: {
      crewneck: { S:{chest:38,length:25,sleeve:24}, M:{chest:40,length:26,sleeve:25}, L:{chest:42,length:27,sleeve:26}, XL:{chest:44,length:28,sleeve:27}, XXL:{chest:46,length:29,sleeve:28} },
      'quarter-zip': { S:{chest:38,length:25,sleeve:24}, M:{chest:40,length:26,sleeve:25}, L:{chest:42,length:27,sleeve:26}, XL:{chest:44,length:28,sleeve:27}, XXL:{chest:46,length:29,sleeve:28} },
      oversized: { S:{chest:44,length:28,sleeve:26}, M:{chest:48,length:30,sleeve:27}, L:{chest:52,length:32,sleeve:28}, XL:{chest:56,length:34,sleeve:29}, XXL:{chest:60,length:36,sleeve:30} }
    }
  },
  joggers: {
    title: 'Joggers & Sweatpants', subtitle: 'Choose your cut, fabric and finish for your jogger range.',
    defaultGarment: 'jogger', svgType: 'bottoms', sizes: ['S','M','L','XL','XXL'],
    sleeveOptions: [], sleeveDefaultLocked: true,
    garmentTypes: [
      { id:'jogger', label:'Cuffed Jogger', icon:'bottoms' },
      { id:'open-hem', label:'Open-Hem Jogger', icon:'bottoms' },
      { id:'wide-leg', label:'Wide Leg', icon:'bottoms' }
    ],
    necklineOptions: {},
    sizeChart: {
      jogger: { S:{waist:'28-30',inseam:29}, M:{waist:'31-33',inseam:30}, L:{waist:'34-36',inseam:31}, XL:{waist:'37-40',inseam:32}, XXL:{waist:'41-44',inseam:32} },
      'open-hem': { S:{waist:'28-30',inseam:29}, M:{waist:'31-33',inseam:30}, L:{waist:'34-36',inseam:31}, XL:{waist:'37-40',inseam:32}, XXL:{waist:'41-44',inseam:32} },
      'wide-leg': { S:{waist:'28-30',inseam:30}, M:{waist:'31-33',inseam:31}, L:{waist:'34-36',inseam:32}, XL:{waist:'37-40',inseam:32}, XXL:{waist:'41-44',inseam:32} }
    }
  },
  trousers: {
    title: 'Trousers & Pants', subtitle: 'Build your trouser spec - waist, rise, fabric, pockets and more.',
    defaultGarment: 'cargo', svgType: 'bottoms', sizes: ['28','30','32','34','36','38','40'],
    sleeveOptions: [], sleeveDefaultLocked: true,
    garmentTypes: [
      { id:'cargo', label:'Cargo Pants', icon:'bottoms' },
      { id:'chino', label:'Chinos', icon:'bottoms' },
      { id:'formal', label:'Dress Pants', icon:'bottoms' }
    ],
    necklineOptions: {},
    sizeChart: {
      cargo: { '28':{waist:28,inseam:30}, '30':{waist:30,inseam:30}, '32':{waist:32,inseam:32}, '34':{waist:34,inseam:32}, '36':{waist:36,inseam:32}, '38':{waist:38,inseam:32}, '40':{waist:40,inseam:32} },
      chino: { '28':{waist:28,inseam:30}, '30':{waist:30,inseam:30}, '32':{waist:32,inseam:32}, '34':{waist:34,inseam:32}, '36':{waist:36,inseam:32}, '38':{waist:38,inseam:32}, '40':{waist:40,inseam:32} },
      formal: { '28':{waist:28,inseam:30}, '30':{waist:30,inseam:30}, '32':{waist:32,inseam:32}, '34':{waist:34,inseam:32}, '36':{waist:36,inseam:32}, '38':{waist:38,inseam:32}, '40':{waist:40,inseam:32} }
    }
  },
  sets: {
    title: 'Sets & Co-ords', subtitle: 'Design your matching tracksuit or loungewear set.',
    defaultGarment: 'tracksuit-top', svgType: 'mixed', sizes: ['S','M','L','XL','XXL'],
    sleeveOptions: ['long'], sleeveDefaultLocked: true,
    garmentTypes: [
      { id:'tracksuit-top', label:'Tracksuit Top', icon:'hoodie' },
      { id:'tracksuit-bottom', label:'Tracksuit Bottom', icon:'bottoms' }
    ],
    necklineOptions: {
      'tracksuit-top': [{id:'zip-collar',label:'Zip-Up'},{id:'crew-collar',label:'Crew Neck'}],
      'tracksuit-bottom': []
    },
    sizeChart: {
      'tracksuit-top': { S:{chest:40,length:27,sleeve:25}, M:{chest:42,length:28,sleeve:26}, L:{chest:44,length:29,sleeve:27}, XL:{chest:46,length:30,sleeve:28}, XXL:{chest:48,length:31,sleeve:29} },
      'tracksuit-bottom': { S:{waist:'28-30',inseam:29}, M:{waist:'31-33',inseam:30}, L:{waist:'34-36',inseam:31}, XL:{waist:'37-40',inseam:32}, XXL:{waist:'41-44',inseam:32} }
    }
  }
  // ADD NEW CATEGORIES HERE:
  // outerwear: { title: 'Outerwear', ... }
};
