

export default function movie({ movies, random }) {

    return (
        <div>
            {/* <span>{JSON.stringify(movies)}</span> */}
            <ul>
                {
                    movies.map((movie, index) => {
                        return <li key={index}>{movie}</li>
                    })
                }
            </ul>
            <h2>{random}</h2>
        </div>
    )
}

// export async function getStaticProps() {

//     return {
//         props: {
//             movies: ['Irure cupidatat ea ut esse aute.', 'Ad eu sunt laboris eiusmod veniam.', 'Proident excepteur ex fugiat aliquip veniam id incididunt.']
//             , random: Math.random()
//         },
//     }
// }

export async function getServerSideProps() {

    return {
        props: {
            movies: ['Irure cupidatat ea ut esse aute.', 'Ad eu sunt laboris eiusmod veniam.', 'Proident excepteur ex fugiat aliquip veniam id incididunt.']
            , random: Math.random()
        },
    }
}