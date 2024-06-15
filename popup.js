document.addEventListener('DOMContentLoaded', () => {
  const deckSelect = document.getElementById('deck');
  const frontInput = document.getElementById('front');

  fetch('http://127.0.0.1:8765', {
    method: 'POST',
    body: JSON.stringify({
      action: 'deckNames',
      version: 6
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.result) {
      data.result.forEach(deck => {
        const option = document.createElement('option');
        option.value = deck;
        option.textContent = deck;
        deckSelect.appendChild(option);
      });

      chrome.storage.sync.get('lastSelectedDeck', ({ lastSelectedDeck }) => {
        if (lastSelectedDeck) {
          deckSelect.value = lastSelectedDeck;
        }
      });
    }
  })
  .catch(error => console.error('Erro ao buscar decks do Anki:', error));

  chrome.storage.sync.get('selectedText', ({ selectedText }) => {
    if (selectedText) {
      frontInput.value = selectedText;
    }
  });

  document.getElementById('ankiForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const deck = deckSelect.value;
    const front = frontInput.value;
    const back = document.getElementById('back').value;

    const note = {
      deckName: deck,
      modelName: 'Basic',
      fields: {
        Front: front,
        Back: back
      },
      options: {
        allowDuplicate: false
      },
      tags: []
    };

    fetch('http://127.0.0.1:8765', {
      method: 'POST',
      body: JSON.stringify({
        action: 'addNote',
        version: 6,
        params: {
          note: note
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        console.error('Erro ao adicionar nota ao Anki:', data.error);
      } else {
        console.log('Nota adicionada ao Anki!');
        chrome.storage.sync.remove('selectedText');
        chrome.storage.sync.set({ lastSelectedDeck: deck });
        window.close(); 
      }
    })
    .catch(error => {
      console.error('Erro no AnkiConnect:', error);
    });
  });
});
