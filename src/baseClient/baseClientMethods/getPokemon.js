import fetch from 'node-fetch';
import endpoints from '../baseClientHelpers/baseClientEndpoints.js';
import dataSummary from '../baseClientHelpers/baseClientDataSummarizer.js';

export default async function getPokemon({name}){

    let endpoint
    if (typeof name === 'string'){
        endpoint = endpoints.pokemonByName(name);
    }
    else if (typeof name === 'number'){
        endpoint = endpoints.pokemonById(name);
    }

    let requestParams = {
        method: 'get'
    }
    let apiResponse = await fetch(endpoint, requestParams);
    let data =  await apiResponse.json();

    //use baseClientDataSummarizer here 
    const pokemonSummary = dataSummary(data, 'pokemon',true);

    return pokemonSummary;

}