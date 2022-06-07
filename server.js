const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const drivers = {
    'lewis hamilton': {
        'name': 'Lewis Hamilton',
        'age': 37,
        'country': 'Great Britain',
        'number': 44,
        'team': 'Mercedes',
        'engine': 'Mercedes',
        'car': 'W13',
        'debut': 'Australia 2007',
        'wins': 103,
        'poles': 103,
        'titles': 7,
        'principal': 'Toto Wolff'
    },

    'george russell': {
        'name': 'George Russell',
        'age': 24,
        'country': 'Great Britain',
        'number': 63,
        'team': 'Mercedes',
        'engine': 'Mercedes',
        'car': 'W13',
        'debut': 'Australia 2019',
        'wins': 0,
        'poles': 0,
        'titles': 0,
        'principal': 'Toto Wolff'
    },

    'max verstappen': {
        'name': 'Max Verstappen',
        'age': 24,
        'country': 'Netherlands',
        'number': 1,
        'team': 'Red Bull',
        'engine': 'Red Bull',
        'car': 'RB18',
        'debut': 'Australia 2015',
        'wins': 20,
        'poles': 13,
        'titles': 1,
        'principal': 'Christian Horner'
    },

    'sergio perez': {
        'name': 'Sergio Perez',
        'age': 32,
        'country': 'Mexico',
        'number': 11,
        'team': 'Red Bull',
        'engine': 'Red Bull',
        'car': 'RB18',
        'debut': 'Australia 2011',
        'wins': 2,
        'poles': 0,
        'titles': 1,
        'principal': 'Christian Horner'
    },

    'charles leclerc': {
        'name': 'Charles Leclerc',
        'age': 24,
        'country': 'Monaco',
        'number': 16,
        'team': 'Ferrari',
        'engine': 'Ferrari',
        'car': 'F1-75',
        'debut': 'Australia 2018',
        'wins': 2,
        'poles': 9,
        'titles': 0,
        'principal': 'Mattia Binotto'
    },

    'carlos sainz': {
        'name': 'Carlos Sainz',
        'age': 27,
        'country': 'Spain',
        'number': 55,
        'team': 'Ferrari',
        'engine': 'Ferrari',
        'car': 'F1-75',
        'debut': 'Australia 2015',
        'wins': 0,
        'poles': 0,
        'titles': 0,
        'principal': 'Mattia Binotto'
    },

    'lando norris': {
        'name': 'Lando Norris',
        'age': 22,
        'country': 'Great Britain',
        'number': 4,
        'team': 'McLaren',
        'engine': 'Mercedes',
        'car': 'MCL36',
        'debut': 'Australia 2019',
        'wins': 0,
        'poles': 1,
        'titles': 0,
        'principal': 'Andreas Seidl'
    },

    'daniel ricciardo': {
        'name': 'Daniel Ricciardo',
        'age': 32,
        'country': 'Australia',
        'number': 3,
        'team': 'McLaren',
        'engine': 'Mercedes',
        'car': 'MCL36',
        'debut': 'Great Britain 2011',
        'wins': 0,
        'poles': 1,
        'titles': 0,
        'principal': 'Andreas Seidl'
    },

    'fernando alonso': {
        'name': 'Fernando Alonso',
        'age': 40,
        'country': 'Spain',
        'number': 14,
        'team': 'Alpine',
        'engine': 'Renault',
        'car': 'A522',
        'debut': 'Australia 2001',
        'wins': 32,
        'poles': 22,
        'titles': 2,
        'principal': 'Otmar Szafnauer'
    },

    'esteban ocon': {
        'name': 'Esteban Ocon',
        'age': 25,
        'country': 'France',
        'number': 31,
        'team': 'Alpine',
        'engine': 'Renault',
        'car': 'A522',
        'debut': 'Belgium 2016',
        'wins': 1,
        'poles': 0,
        'titles': 0,
        'principal': 'Otmar Szafnauer'
    },

    'pierre gasly': {
        'name': 'Pierre Gasly',
        'age': 26,
        'country': 'France',
        'number': 10,
        'team': 'AlphaTauri',
        'engine': 'Red Bull',
        'car': 'AT03',
        'debut': 'Malaysia 2017',
        'wins': 1,
        'poles': 0,
        'titles': 0,
        'principal': 'Franz Tost'
    },

    'yuki tsunoda': {
        'name': 'Yuki Tsunoda',
        'age': 21,
        'country': 'Japan',
        'number': 22,
        'team': 'AlphaTauri',
        'engine': 'Red Bull',
        'car': 'AT03',
        'debut': 'Bahrain 2021',
        'wins': 0,
        'poles': 0,
        'titles': 0,
        'principal': 'Franz Tost'
    },

    'sebastian vettel': {
        'name': 'Sebastian Vettel',
        'age': 34,
        'country': 'Germany',
        'number': 5,
        'team': 'Aston Martin',
        'engine': 'Mercedes',
        'car': 'AMR22',
        'debut': 'USA 2007',
        'wins': 53,
        'poles': 57,
        'titles': 4,
        'principal': 'Mike Krack'
    },

    'lance stroll': {
        'name': 'Lance Stroll',
        'age': 23,
        'country': 'Canada',
        'number': 18,
        'team': 'Aston Martin',
        'engine': 'Mercedes',
        'car': 'AMR22',
        'debut': 'Australia 2017',
        'wins': 0,
        'poles': 1,
        'titles': 0,
        'principal': 'Mike Krack'
    },

    'alexander albon': {
        'name': 'Alexander Albon',
        'age': 25,
        'country': 'Thailand',
        'number': 23,
        'team': 'Williams',
        'engine': 'Mercedes',
        'car': 'FW44',
        'debut': 'Australia 2019',
        'wins': 0,
        'poles': 0,
        'titles': 0,
        'principal': 'Jost Capito'
    },

    'nicholas latifi': {
        'name': 'Nicholas Latifi',
        'age': 26,
        'country': 'Canada',
        'number': 6,
        'team': 'Williams',
        'engine': 'Mercedes',
        'car': 'FW44',
        'debut': 'Austria 2020',
        'wins': 0,
        'poles': 0,
        'titles': 0,
        'principal': 'Jost Capito'
    },

    'valtteri bottas': {
        'name': 'Valtteri Bottas',
        'age': 32,
        'country': 'Finland',
        'number': 77,
        'team': 'Alfa Romeo',
        'engine': 'Ferrari',
        'car': 'C42',
        'debut': 'Australia 2013',
        'wins': 10,
        'poles': 20,
        'titles': 0,
        'principal': 'Frederic Vasseur'
    },

    'guanyu zhou': {
        'name': 'Guanyu Zhou',
        'age': 22,
        'country': 'China',
        'number': 24,
        'team': 'Alfa Romeo',
        'engine': 'Ferrari',
        'car': 'C42',
        'debut': 'Bahrain 2022',
        'wins': 0,
        'poles': 0,
        'titles': 0,
        'principal': 'Frederic Vasseur'
    },

    'kevin magnussen': {
        'name': 'Kevin Magnussen',
        'age': 29,
        'country': 'Denmark',
        'number': 20,
        'team': 'Haas',
        'engine': 'Ferrari',
        'car': 'VF-22',
        'debut': 'Australia 2014',
        'wins': 0,
        'poles': 0,
        'titles': 0,
        'principal': 'Guenther Steiner'
    },

    'mick schumacher': {
        'name': 'Mick Schumacher',
        'age': 23,
        'country': 'Germany',
        'number': 47,
        'team': 'Haas',
        'engine': 'Ferrari',
        'car': 'VF-22',
        'debut': 'Bahrain 2021',
        'wins': 0,
        'poles': 0,
        'titles': 0,
        'principal': 'Guenther Steiner'
    },

    
    'unknown': {
        'name': 'unknown',
        'age': 0,
        'country': 'unknown',
        'number': 0,
        'team': 'unknown',
        'engine': 'unknown',
        'car': 'unknown',
        'debut': 'unknown',
        'wins': 0,
        'poles': 0,
        'titles': 0,
        'principal': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const driversName = request.params.name.toLowerCase()
    if(drivers[driversName]){
        response.json(drivers[driversName])
    }else{
        response.json(drivers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})