const maindiv = document.querySelector('#mainnav');
const cafeList = document.querySelector('#cafe-list');
// create element & render cafe

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('service worker registered', reg))
      .catch(err => console.log('service worker not registered', err));
  }
  
function renderCafe(doc){
    
// let li = document.createElement('div');
// li.textContent ="hello";
// li.classList ='mdl-cell mdl-cell--4-col';

// cafeList.appendChild(li);
    let li = document.createElement('div');
    li.classList ='mdl-cell mdl-cell--4-col';
    let vname = document.createElement('h4');
    
    let line = document.createElement('hr');

    let link = document.createElement('img');
    let mycontainer = document.createElement('div');
    mycontainer.className='mycontainer';
    mycontainer.id ='videodis';
    link.classList='demo-card-square mdl-card mdl-shadow--2dp';
    link.alt='image';
    li.setAttribute('data-id', doc.id);
    vname.textContent = doc.data().name;
    link.src = doc.data().link;
    maindiv.appendChild(cafeList);
    cafeList.appendChild(li);
    //li.appendChild(vname);
    //vname.appendChild(line);
    li.appendChild(mycontainer);
    mycontainer.appendChild(link);
    }

    // getting data
db.collection('data').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.imagelink);
        renderCafe(doc);

    });
});

// const cafeList = document.querySelector('#cafe-list');
// // create element & render cafe
// function renderCafe(doc){
//     let li = document.createElement('div');
//     li.classList ='row card';
//     let vname = document.createElement('h4');
    
//     let line = document.createElement('hr');

//     let link = document.createElement('img');
//     let mycontainer = document.createElement('div');
//     mycontainer.className='mycontainer';
//     mycontainer.id ='videodis';
    
//     li.setAttribute('data-id', doc.id);
//     vname.textContent = doc.data().name;
//    link.src = doc.data().imagelink;
    
//     cafeList.appendChild(li);
//     li.appendChild(vname);
//     vname.appendChild(line);
//     li.appendChild(mycontainer);
//     mycontainer.appendChild(link);
//     }

//     // getting data
// db.collection('data').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         console.log(doc.name ,doc.imagelink);
//         renderCafe(doc);
//     });
// });