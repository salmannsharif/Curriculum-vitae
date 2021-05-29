console.log('In this project we will  see Cv Screener -- By Salman'); // Sample text to see js file working or not !..,


// Data is an array of objects which contains information about the candidates
const data=[
    {
        name:'Salman',
        age:22,
        city:'Dubai',
        language:'Python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/men/88.jpg'

    },

    {
        name:'Sanjay',
        age:21,
        city:'America',
        language:'Java Script',
        framework:'Angular',
        image:'https://randomuser.me/api/portraits/men/76.jpg'

    },

    {
        name:'Srinath',
        age:20,
        city:'',
        language:'Python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/men/77.jpg'

    },

    {
        name:'Suresh',
        age:22,
        city:'SwitzerLand',
        language:'Python',
        framework:'Flask',
        image:'https://randomuser.me/api/portraits/men/78.jpg'

    },

    {
        name:'Raj Kumar',
        age:22,
        city:'Africa',
        language:'Go',
        framework:'Go frameWorks',
        image:'https://randomuser.me/api/portraits/men/79.jpg'

    }
]



// Cv Iterator 

function cvIterator(Profiles)
{
    let nextIndex=0;
    return{
        next:function()
        {
            return nextIndex<Profiles.length ?
            {value:Profiles[nextIndex++], done:false}:
            {done:true}
        }
    }
}
candidates= cvIterator(data);

nextCv();

// Button  listener for next button

const btn=document.getElementById('btn');
btn.addEventListener('click' ,nextCv);


function nextCv(){


    const currentCandidate= candidates.next().value;
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');

    if(currentCandidate != undefined)
    {
    image.innerHTML=`<img src="${currentCandidate.image}">`;

    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} year old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item"> Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item"> Uses ${currentCandidate.framework} frameWork</li>
  </ul>`
    }
    else
    {
        alert('End of applications ');
        window.location.reload();
    }

}