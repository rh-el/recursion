const dossierPrincipal = [{
    nom: 'Ada',
    contenu: [{
        nom: 'Projets collectifs',
        contenu: [{
            nom: 'Pico8',
            contenu: [{
              nom: 'mariokart.p8'
            }]
          },
          {
            nom: 'Dataviz',
            contenu: [{
                nom: 'index.html'
              },
              {
                nom: 'script.js'
              }
            ]
          }
        ]
      },
      {
        nom: 'CV.pdf'},
      {
        nom: 'Projets persos',
        contenu: [{
          nom: 'Portfolio',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }]
      },
    ],
}
]

const afficherDossier = (folderName) => {
    return folderName.nom
}

// console.log(afficherDossier(dossierPrincipal))

const afficherDossierIteratif = (folderName) => {
    // afficherDossier(folderName)
    console.log(afficherDossier(folderName))
    for (folder in folderName) {
        if (folder == 'contenu')
            for (childrenFolder in folderName[folder]) {
                // return folderName[folder][childrenFolder].nom
                console.log(folderName[folder][childrenFolder].nom)
            }
    }
}

// console.log(afficherDossierIteratif(dossierPrincipal))
// afficherDossierIteratif(dossierPrincipal)


let count = 0


function afficherDossierRecursif(folderName, index) {
  if (index >= folderName.length) {
    return
  }
  if (folderName[index].nom) {
    console.log(folderName[index].nom)
  } 
  if (folderName[index].contenu) {
    afficherDossierRecursif(folderName[index].contenu, 0)
  }
  index++
  afficherDossierRecursif(folderName, index)
}


afficherDossierRecursif(dossierPrincipal, 0)

