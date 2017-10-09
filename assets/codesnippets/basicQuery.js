const ImagesWithData = graphql(gql`{
    pokemons (first:150) {
        id,
        image,
        name
    }
}`)(Images)

const Images = (props) => {
  const pokemons = props.data.pokemons
  ...
}

const AllPokemons = gql`
  query pokemons($first: Int!) {
    pokemons (first:$first) {
        id,
        image,
        name
    }
  }
`

const ImagesWithData = graphql(AllPokemons, {
  options: (props) => {
    // arguments from router are in props.match.params
    // e.g. pokemon/:pokemonId is under
    // props.match.params.pokemonId
    return {
      variables: {first: 150}
    }
  }
})(Images)
