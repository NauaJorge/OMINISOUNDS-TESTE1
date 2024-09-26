function filterProfiles() {
    const selectedLocation = document.getElementById('locationSelect').value;
    const profiles = document.querySelectorAll('.profile-card');
    
    profiles.forEach(profile => {
        const profileLocation = profile.getAttribute('data-location');
        
        // Exibe todos se "all" for selecionado ou apenas aqueles que correspondem à localização
        if (selectedLocation === 'all' || selectedLocation === profileLocation) {
            profile.style.display = 'block'; // Mostra o perfil
        } else {
            profile.style.display = 'none'; // Esconde o perfil
        }
    });
}
