import axiosInstance from './axios'

const getPersonDetails = (axios) => (personId) => {
    // const data = {
    //     personId
    // }
    // return axios.post("/person-details", {data}).then(response => response.data.data)
    return Promise.resolve({
        adult: false,
        biography: "James Cameron was born in Kapuskasing, Ontario, Canada, on August 16, 1954. He moved to the USA in 1971. The son of an engineer, he majored in physics at California State University but, after graduating, drove a truck to support his screen-writing ambition. He landed his first professional film job as art director, miniature-set builder, and process-projection supervisor on Roger Corman's Battle Beyond the Stars (1980) and debuted as a director with Piranha Part Two: The Spawning (1981) the following year. In 1984, he wrote and directed The Terminator (1984), a futuristic action-thriller starring Arnold Schwarzenegger, Michael Biehn, and Linda Hamilton. It was a huge success. After this came a string of successful science-fiction action films such as Aliens (1986) and Terminator 2: Judgment Day (1991). Cameron is now one of the most sought-after directors in Hollywood. He was formerly married to producer Gale Anne Hurd, who produced several of his films. He married Kathryn Bigelow in 1989.",
        birthday: "1954-08-16",
        deathday: null,
        id: 2710,
        known_for_department: "Directing",
        name: "James Cameron",
        place_of_birth: "Kapuskasing, Ontario, Canada",
        profile_path: "https://image.tmdb.org/t/p/w500/9NAZnTjBQ9WcXAQEzZpKy4vdQto.jpg",
        movie_credits: [
            {
                id: 1,
                poster_path: "https://image.tmdb.org/t/p/w500/fPaEadAVgyaCP1AKHKWrQHc9sbO.jpg",
                title: "Galaxy of Terror"
            },
            {
                id: 2,
                poster_path: "https://image.tmdb.org/t/p/w500/fPaEadAVgyaCP1AKHKWrQHc9sbO.jpg",
                title: "Galaxy of Terror"
            },
            {
                id: 3,
                poster_path: "https://image.tmdb.org/t/p/w500/fPaEadAVgyaCP1AKHKWrQHc9sbO.jpg",
                title: "Galaxy of Terror"
            },
            {
                id: 4,
                poster_path: "https://image.tmdb.org/t/p/w500/fPaEadAVgyaCP1AKHKWrQHc9sbO.jpg",
                title: "Galaxy of Terror"
            },
            {
                id: 5,
                poster_path: "https://image.tmdb.org/t/p/w500/fPaEadAVgyaCP1AKHKWrQHc9sbO.jpg",
                title: "Galaxy of Terror"
            },
            {
                id: 6,
                poster_path: "https://image.tmdb.org/t/p/w500/fPaEadAVgyaCP1AKHKWrQHc9sbO.jpg",
                title: "Galaxy of Terror"
            },
            {
                id: 7,
                poster_path: "https://image.tmdb.org/t/p/w500/fPaEadAVgyaCP1AKHKWrQHc9sbO.jpg",
                title: "Galaxy of Terror"
            },
            {
                id: 8,
                poster_path: "https://image.tmdb.org/t/p/w500/fPaEadAVgyaCP1AKHKWrQHc9sbO.jpg",
                title: "Galaxy of Terror"
            }
        ]
    })
}

const personApiService = {
    fetchPersonDetails: getPersonDetails(axiosInstance)
}

export default personApiService