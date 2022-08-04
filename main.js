const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.homeImg, .homeDsc`, {
    origin: 'top',
    intreval: 200
})

sr.reveal(`.shareImg`, {
   origin: 'left'
})

sr.reveal(`.shareDsc`, {
   origin: 'right'
})