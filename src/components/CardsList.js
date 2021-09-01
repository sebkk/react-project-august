import React, { useState, useEffect } from 'react';

import CharactersCard from './CharactersCard';


const CardsList = ({ characters }) => {


    return (
        <div>
            <h2> Lista Postaci ({characters.info.count})</h2>
            {
                characters.results
                    .filter((item, index) => index < 5)
                    .map(({ name, species, image }, index) =>
                        <CharactersCard key={name} name={name} species={species} image={image} index={index} />)
            }
        </div>
    )

}

export default CardsList