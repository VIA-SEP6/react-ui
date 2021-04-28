import React, {Component} from 'react';
import MovieSearchDetails from "../components/Movie/MovieSearchDetails";

class Movies extends Component {
    render() {
        const movies = [
            {
                "adult": false,
                "backdrop_path": "/rYsdoUqkltpKZQWwCWXf55csXvL.jpg",
                "genre": [
                    "Drama",
                    "Actions",
                    "Adventure"
                ],
                "id": 131631,
                "original_language": "en",
                "original_title": "The Hunger Games: Mockingjay - Part 1",
                "overview": "Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
                "popularity": 64.078,
                "poster_path": "/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg",
                "release_date": "2014-11-19",
                "title": "The Hunger Games: Mockingjay - Part 1",
                "video": false,
                "vote_average": 6.8,
                "vote_count": 12531
            },
            {
                "adult": false,
                "backdrop_path": "/iYE1e8dbaQohYad8g6ySpmsSuj0.jpg",
                "genre": [
                    "Drama",
                    "Adventure"
                ],
                "id": 70160,
                "original_language": "en",
                "original_title": "The Hunger Games",
                "overview": "Every year in the ruins of what was once North America, the nation of Panem forces each of its twelve districts to send a teenage boy and girl to compete in the Hunger Games.  Part twisted entertainment, part government intimidation tactic, the Hunger Games are a nationally televised event in which “Tributes” must fight with one another until one survivor remains.  Pitted against highly-trained Tributes who have prepared for these Games their entire lives, Katniss is forced to rely upon her sharp instincts as well as the mentorship of drunken former victor Haymitch Abernathy.  If she’s ever to return home to District 12, Katniss must make impossible choices in the arena that weigh survival against humanity and life against love. The world will be watching.",
                "popularity": 25.875,
                "poster_path": "/iQK0pkTQC60XR3Zlu2pp8kujoqW.jpg",
                "release_date": "2012-03-12",
                "title": "The Hunger Games",
                "video": false,
                "vote_average": 7.2,
                "vote_count": 17757
            },
            {
                "adult": false,
                "backdrop_path": "/2EKGftWlHKRwVIXQfXiCpeu6gcG.jpg",
                "genre": [
                    "Adventure"
                ],
                "id": 173672,
                "original_language": "en",
                "original_title": "Hunger",
                "overview": "Five strangers face the unthinkable when they wake up and find themselves trapped. With no idea how they got there they frantically try to figure out how to escape. The disoriented group quickly realise the truth about their situation when they discover another room containing enough water to survive for 30 days… and a razor sharp surgical knife. The intention becomes quite clear. Whoever put them in this place wants to see just how long it will take before the hunger makes them commit unspeakable acts and cross a very deadly line.",
                "popularity": 11.165,
                "poster_path": "/8lceXna9ysIIUBHXpVxZK9ifpgs.jpg",
                "release_date": "2009-05-12",
                "title": "Hunger",
                "video": false,
                "vote_average": 5.3,
                "vote_count": 103
            }
        ]

        return (
            <div style={{width: '400px'}}>
                <h1>Main Page</h1>
                {movies.map(movie => <MovieSearchDetails movie={movie}/>)}
            </div>
        )
    }
}

export default Movies;