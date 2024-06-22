let participants = [];
let winners = [];

function addParticipant() {
    const participantNameInput = document.getElementById('participant-name');
    const participantName = participantNameInput.value.trim();

    if (participantName && !participants.includes(participantName)) {
        participants.push(participantName);
        updateParticipantList();
        participantNameInput.value = '';
    } else {
        alert('Participant name is either empty or already in the list.');
    }
}

function updateParticipantList() {
    const participantList = document.getElementById('participant-list');
    participantList.innerHTML = '';

    participants.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        participantList.appendChild(li);
    });
}

function drawWinner() {
    if (participants.length === 0) {
        alert('No participants left to draw.');
        return;
    }

    const winnerIndex = Math.floor(Math.random() * participants.length);
    const winnerName = participants[winnerIndex];
    
    winners.push(winnerName);
    participants.splice(winnerIndex, 1);
    
    updateParticipantList();
    updateWinnerList();
}

function updateWinnerList() {
    const winnerList = document.getElementById('winner-list');
    winnerList.innerHTML = '';

    winners.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        winnerList.appendChild(li);
    });
}
