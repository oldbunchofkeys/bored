const newActivityButton = document.querySelector('#js-activity');
newActivityButton.addEventListener('click', getActivity);


const endpoint = 'https://www.boredapi.com/api/activity/';

async function getActivity() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText)
        }

    const json =  await response.json();
    console.log(json.activity)
    displayActivity(json.activity);
    }   
    catch (err) {
        console.log(err);
        alert('Boring! Failed to fetch activity.');
    }
};

function displayActivity(dog) {
    const dogUrl = document.querySelector('#js-activity-url');
    dogUrl.textContent = dog;
};