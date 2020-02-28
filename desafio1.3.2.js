const usuarios= [
    {
        nome:'Carlos',
        tecnologias: ['HTML', 'CSS']
    },
    {
        nome:'Jasmine',
        tecnologias: ['JavaScript', 'CSS']
    },
    {
        nome:'Tuane',
        tecnologias: ['HTML', 'NodeJS']
    }
]

//for (let usuario of usuarios) {
//    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
//}

function verificaSeUsuarioUsaCSS(usuario){
  for (let tecnologia of usuario.tecnologias) {
  
      if (tecnologia == 'CSS')
          return true
                 
          } 
      return false
  }



for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = verificaSeUsuarioUsaCSS(usuarios[i])

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuario ${usuarios[i].nome} trabalha com CSS`)
    }
}