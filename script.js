let bars = document.querySelector('.bars');
let ul = document.querySelector('.ul');
let close = document.querySelector('.close');
let lists = document.querySelectorAll('.list')
bars.addEventListener('click',function(){
ul.classList.toggle('displaytoggle')
});
close.addEventListener('click',function(){
ul.classList.toggle('displaytoggle')

});

lists.forEach((list)=>{
  list.addEventListener('click',()=>{
    ul.classList.toggle('displaytoggle');
    console.log('hello');
  })
})


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Get all elements with the class "scroll-text"
const scrollTextElements = document.querySelectorAll('.scroll-text');

// Attach the scroll event listener to each "scroll-text" element
scrollTextElements.forEach((scrollText) => {
  window.addEventListener('scroll', () => {
    if (isInViewport(scrollText)) {
      scrollText.classList.add('fadeInUp');
    } else {
      scrollText.classList.remove('fadeInUp');
    }
  });
});


// Sample array of job objects
const jobsArray = [
  // Your job objects here
  {
    jobtype: 'Part-time',
    title: 'Web Developer',
    place: 'Visakhapatnam,India',
    day: '5 days ago',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDoujsrlMnwhlHRqcIImjJW5uTx6zmjI5RuA&usqp=CAU'
  },
  {
    jobtype: 'Internship',
    title: 'Graphic Designer',
    place: 'Jodhpur,India',
    day: '3 days ago',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImsDOt8yhRQCqGFlzEhKIUmQ_hcete_eufg&usqp=CAU'
  },  {
    jobtype: 'Full-time',
    title: 'Front-End Engineer',
    place: 'New York',
    day: '5 days ago',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-KXkYRjHatymrKTgqBaDcWfszQwpEjEiEcmofuM-Z22Nxbkmdf6B_gWHQw2fjoH082Y&usqp=CAU'
  },
  {
    jobtype: 'Part-time',
    title: 'Content Marketing Specialist',
    place: 'San Francisco',
    day: '3 days ago',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAs-4OCh7qSe_gKUVxt3QFs9JS2h0VBs9qpg&usqp=CAU'
  },  {
    jobtype: 'Full-time',
    title: 'Senior Curtomer Service',
    place: 'New York',
    day: '5 days ago',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIpXMhq700vnq-4PcXq3HACblNMfFCwR_HHw&usqp=CAU'
  },
  {
    jobtype: 'Part-time',
    title: 'Human Resources Development',
    place: 'San Francisco',
    day: '3 days ago',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_FsZMFaC4zm4ZGB7JLsAHDYdEjSHPpry7Q&usqp=CAU'
  },  {
    jobtype: 'Full-time',
    title: 'Web Developer',
    place: 'New York',
    day: '5 days ago',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmdZLTaKHY63yQ86rN2uqK1aTNSTifO8_z42ayWVC480IazZkk_rWF5Ar29amAzCRwB0&usqp=CAU'
  },
  {
    jobtype: 'Internship',
    title: 'Graphic Designer',
    place: 'San Francisco',
    day: '3 days ago',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAs-4OCh7qSe_gKUVxt3QFs9JS2h0VBs9qpg&usqp=CAU'
  },  {
    jobtype: 'Full-time',
    title: 'Back-End Developer',
    place: 'New York',
    day: '5 days ago',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDoujsrlMnwhlHRqcIImjJW5uTx6zmjI5RuA&usqp=CAU'
  },
  {
    jobtype: 'Part-time',
    title: 'Graphic Designer',
    place: 'San Francisco',
    day: '3 days ago',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-KXkYRjHatymrKTgqBaDcWfszQwpEjEiEcmofuM-Z22Nxbkmdf6B_gWHQw2fjoH082Y&usqp=CAU'
  },
];

// Number of job cards to show initially and increment when clicking "View More"
// Sample array of job objects



const showIncrement = 5;
let visibleJobs = showIncrement;

const jobContainer = document.getElementById('job-div');
const viewMoreBtn = document.getElementById('view-more-btn');

function createJobCards(jobs) {
  jobs.forEach((job, index) => {
    const card = document.createElement('div');
    card.classList.add('job-card');

    // Job content
    const jobTypeElement = document.createElement('p');
    jobTypeElement.textContent =  job.jobtype;
    card.appendChild(jobTypeElement);
    jobTypeElement.classList.add('job-type')
    if(job.jobtype.toLowerCase()=='internship'){
      jobTypeElement.classList.add('intern')
    }else if(job.jobtype.toLowerCase()=='part-time'){
      jobTypeElement.classList.add('part-time')
    }else if(job.jobtype.toLowerCase()=='full-time'){
      jobTypeElement.classList.add('full-time')
    }

    const titleElement = document.createElement('h2');
    titleElement.textContent = job.title;
    card.appendChild(titleElement);
titleElement.classList.add('job-title');


    const placeElement = document.createElement('p');
    placeElement.textContent =  job.place;
    card.appendChild(placeElement);
    placeElement.classList.add('place-day'); 

    const locationIcon = document.createElement('i');
    locationIcon.classList.add('fas', 'fa-map-marker-alt'); // Font Awesome classes for the location icon
    placeElement.prepend(locationIcon); 

    const dayElement = document.createElement('p');
    dayElement.textContent =  job.day;
    card.appendChild(dayElement);
    dayElement.classList.add('place-day');
const clockIcon = document.createElement('i');
    clockIcon.classList.add('fas', 'fa-clock'); // Font Awesome classes for the clock icon
    dayElement.prepend(clockIcon);

    const companyLogoElement = document.createElement('img');
    companyLogoElement.src = job.companyLogo;
    card.appendChild(companyLogoElement);

    jobContainer.appendChild(card);

    // Show the first 5 job cards and hide the rest
    if (index < visibleJobs) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function onViewMoreClick() {
  // Toggle between showing all job cards and showing only the first 5 job cards
  if (visibleJobs === showIncrement) {
    visibleJobs = jobsArray.length;
    viewMoreBtn.textContent = 'View Less';
  } else {
    visibleJobs = showIncrement;
    viewMoreBtn.textContent = 'View More';
  }

  // Show or hide job cards based on the updated visibleJobs value
  const allJobCards = document.querySelectorAll('.job-card');
  allJobCards.forEach((card, index) => {
    if (index < visibleJobs) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

createJobCards(jobsArray);

// Attach click event listener to the "View More" button
viewMoreBtn.addEventListener('click', onViewMoreClick);
