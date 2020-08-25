function shadowizard(options) {
  let images = document.querySelectorAll('.shadowizard')

  if (options.shadowType === 'hard')
    options.shadowType = '0px'
  else
    options.shadowType = '15px'

  images.forEach(image => {
    image.style.boxShadow = `10x 10x ${options.shadowType} 1px rgba(0,0,0,0.12)`
    
    if (options.padding) images.style.padding = '1em'
  })
}

module.exports.shadowizard = shadowizard