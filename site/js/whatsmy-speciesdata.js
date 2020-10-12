var speciesData = [
    {
        commonName : "Fluffy Treefern 1",
        scientificName : "Bigios fluffyious",
        aka : ["Fluffy Tree"],
        attributes : [
            { key: "plantType" , values : ["tree"] },
            { key: "texture", values : ["fluffy"] },
            { key: "colour", values : ["green"]}
        ],
        details : [
            { text: "Some details here 1."},
            { text: "Some <b>details</b> here 2."},
            { text: "Some details here 3.", references: [1]}
        ],
        similarTo: [
            { key: "Brownios fluffyious", label: "Brown Fluffy 2" }
        ],
        images : [
            { url : "images/ferns/fluffyTreefern01.jpg" },
            { url : "images/ferns/fluffyTreefern02.jpg" },
            { url : "images/ferns/fluffyTreefern03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/???",
        references : [
            { id: 1, detail : "Person, A. (1973) The Important Plant Book (pp88). Collins, London 1973" }
        ]
    },
    {
        commonName : "Brown Fluffy 2",
        scientificName : "Brownios fluffyious",
        aka : ["Brown Fluffy Tree"],
        attributes : [
            { key: "plantType" , values : ["tree"] },
            { key: "texture", values : ["fluffy"] },
            { key: "colour", values : ["brown"]}
        ],
        details : [
            { text: "Some details here 1."},
            { text: "Some <b>details</b> here 2."},
            { text: "Some details here 3.", references: [1]}
        ],
        similarTo: [
            { key: "Bigios fluffyious", label: "Fluffy Treefern 1" }
        ],
        images : [
            { url : "images/ferns/brownFluffy01.jpg" },
            { url : "images/ferns/brownFluffy02.jpg" },
            { url : "images/ferns/brownFluffy03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/???",
        references : [
            { id: 1, detail : "Person, A. (1973) The Important Plant Book (pp88). Collins, London 1973" }
        ]
    },
    {
        commonName : "Little Bob 3",
        scientificName : "Bobium spikerty",
        attributes : [
            { key: "plantType" , values : ["shrub"] },
            { key: "texture", values : ["spikey"] },
            { key: "colour", values : ["brown"]}
        ],
        details : [
            { text: "Some details here 1."},
            { text: "Some <b>details</b> here 2."},
            { text: "Some details here 3.", references: [1]}
        ],
        images : [
            { url : "images/ferns/littleBob01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/???",
        references : [
            { id: 1, detail : "Person, A. (1973) The Important Plant Book (pp88). Collins, London 1973" }
        ]
    },
    {
        commonName : "Little Green Bob 4",
        scientificName : "Bobium greenlly",
        attributes : [
            { key: "plantType" , values : ["shrub"] },
            { key: "texture", values : ["spikey"] },
            { key: "colour", values : ["green"]}
        ],
        details : [
            { text: "Some details here 1."},
            { text: "Some <b>details</b> here 2."},
            { text: "Some details here 3.", references: [1]}
        ],
        images : [
            { url : "images/ferns/littleGreenBob01.jpg" },
            { url : "images/ferns/littleGreenBob02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/???",
        references : [
            { id: 1, detail : "Person, A. (1973) The Important Plant Book (pp88). Collins, London 1973" }
        ]
    },
    {
        commonName : "Golden Fern 5",
        scientificName : "Costly goldous",
        attributes : [
            { key: "plantType" , values : ["shrub"] },
            { key: "texture", values : ["smooth", "fluffy"] },
            { key: "colour", values : ["yellow"]}
        ],
        details : [
            { text: "Some details here 1."},
            { text: "Some <b>details</b> here 2."},
            { text: "Some details here 3.", references: [1]}
        ],
        images : [
            { url : "images/ferns/goldenFern01.jpg" },
            { url : "images/ferns/goldenFern02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/???",
        references : [
            { id: 1, detail : "Person, A. (1973) The Important Plant Book (pp88). Collins, London 1973" }
        ]
    },
    {
        commonName : "Samson's Fern 6",
        scientificName : "Costly goldous",
        attributes : [
            { key: "plantType" , values : ["shrub"] },
            { key: "texture", values : ["fluffy", "smooth"] },
            { key: "colour", values : ["green"]}
        ],
        details : [
            { text: "Some details here 1."},
            { text: "Some <b>details</b> here 2."},
            { text: "Some details here 3.", references: [1]}
        ],
        images : [
            { url : "images/ferns/sampsonsFern01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/???",
        references : [
            { id: 1, detail : "Person, A. (1973) The Important Plant Book (pp88). Collins, London 1973" }
        ]
    }
]