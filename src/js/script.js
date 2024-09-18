const characters = document.querySelectorAll('.character')

characters.forEach(character => {
    character.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        const selectedCharacter = document.querySelector('.selected')
        selectedCharacter.classList.remove('selected')

        character.classList.add('selected')


        const characterId = character.attributes.id.value
        
        const selectedCharacterImage = document.querySelector('.big-character')
        selectedCharacterImage.src = `./src/images/card-${characterId}.png`

        const characterName = document.getElementById('character-name')
        characterName.innerText = character.getAttribute('data-name')
        
        const characterDescription = document.getElementById('description')
        characterDescription.innerText = character.getAttribute('data-description')
    })
});

