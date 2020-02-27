const usuarios= [
    {
        nome:"Carlos",
        tecnologias: ["HTML, CCS"]
    },
    {
        nome:"Jasmine",
        tecnologias: ["JavaScript, CCS"]
    },
    {
        nome:"Tuane",
        tecnologias: ["HTML, NodeJS"]
    }
]


for (let i= 0; i< usuarios.length; i++) {
    
    console.log ( usuarios[i].nome + " trabalha com " + usuarios[i].tecnologias)
}