// List of Indian Railway Stations
const stations = [
    'Mumbai Central', 'Delhi', 'Kolkata', 'Chennai Central', 'Bangalore', 
    'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 
    'Patna', 'Bhubaneswar', 'Guwahati', 'Trivandrum', 'Chandigarh',
    'Amritsar', 'Indore', 'Bhopal', 'Nagpur', 'Surat'
];

// Sample Train Data
const trainData = [
    {
        name: 'Rajdhani Express',
        number: '12001',
        departure: '06:00 AM',
        arrival: '02:30 PM',
        duration: '8h 30m',
        classes: ['first', 'second-ac', 'third-ac']
    },
    {
        name: 'Duronto Express',
        number: '12259',
        departure: '09:15 AM',
        arrival: '05:45 PM',
        duration: '8h 30m',
        classes: ['second-ac', 'third-ac']
    },
    // Add more train details...
];

function showStationSuggestions(input, suggestionsContainer) {
    const searchTerm = input.value.toLowerCase();
    const filteredStations = stations.filter(station => 
        station.toLowerCase().includes(searchTerm)
    );

    suggestionsContainer.innerHTML = '';
    suggestionsContainer.style.display = filteredStations.length ? 'block' : 'none';

    filteredStations.slice(0, 10).forEach(station => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.textContent = station;
        suggestionItem.addEventListener('click', () => {
            input.value = station;
            suggestionsContainer.style.display = 'none';
        });
        suggestionsContainer.appendChild(suggestionItem);
    });
}

function displayTrainResults(fromStation, toStation, travelClass) {
    const trainResultsContainer = document.getElementById('train-results');
    trainResultsContainer.innerHTML = ''; // Clear previous results

    // Simulate filtering trains based on stations and class
    const filteredTrains = trainData.filter(train => 
        train.classes.includes(travelClass)
    );

    filteredTrains.forEach(train => {
        const trainCard = document.createElement('div');
        trainCard.classList.add('train-card');
        trainCard.innerHTML = `
            <h3>${train.name} (${train.number})</h3>
            <div class="train-details">
                <p>From: ${fromStation}</p>
                <p>To: ${toStation}</p>
                <p>Departure: ${train.departure}</p>
                <p>Arrival: ${train.arrival}</p>
                <p>Duration: ${train.duration}</p>
                <button class="book-train-btn">Book Now</button>
            </div>
        `;
        trainResultsContainer.appendChild(trainCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const fromStationInput = document.getElementById('from-station');
    const toStationInput = document.getElementById('to-station');
    const fromSuggestions = document.getElementById('from-suggestions');
    const toSuggestions = document.getElementById('to-suggestions');
    const trainBookingForm = document.getElementById('train-booking-form');

    fromStationInput.addEventListener('input', () => showStationSuggestions(fromStationInput, fromSuggestions));
    toStationInput.addEventListener('input', () => showStationSuggestions(toStationInput, toSuggestions));

    // Close suggestions when clicking outside
    document.addEventListener('click', (event) => {
        if (!fromStationInput.contains(event.target)) {
            fromSuggestions.style.display = 'none';
        }
        if (!toStationInput.contains(event.target)) {
            toSuggestions.style.display = 'none';
        }
    });

    trainBookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const fromStation = fromStationInput.value;
        const toStation = toStationInput.value;
        const travelClass = document.getElementById('passenger-class').value;

        if (fromStation && toStation && travelClass) {
            displayTrainResults(fromStation, toStation, travelClass);
        } else {
            alert('Please fill in all details');
        }
    });
});
const cloud = document.querySelector('.cloud');
        const link = document.querySelector('.cloud-link');

        
        cloud.addEventListener('mouseenter', () => {
            cloud.style.transform = 'scale(1.05)';
        });

        cloud.addEventListener('mouseleave', () => {
            cloud.style.transform = 'scale(1)';
        });