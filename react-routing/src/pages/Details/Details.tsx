import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../api/useFetch';
import { Loader } from '../../components/Loader/Loader';
import { DataModel } from '../../models/DataModel';
import './Details.scss';

interface RouteParams {
  id: string;
}

export function Details(): JSX.Element {
  const { id } = useParams<RouteParams>();
  const { data, isLoading } = useFetch<DataModel>(`https://the-one-api.dev/v2/character/${id}`);
  const character = data?.docs[0];

  function isCorrectProperty(property: string | undefined) {
    return !(!property || property === 'NaN');
  }

  return isLoading ? (
    <Loader />
  ) : (
    <React.Fragment>
      <h1>{character?.name}</h1>
      <table className="details__table">
        {isCorrectProperty(character?.race) && (
          <tr>
            <td>Race</td>
            <td>{character?.race}</td>
          </tr>
        )}
        {isCorrectProperty(character?.birth) && (
          <tr>
            <td>Birth</td>
            <td>{character?.birth}</td>
          </tr>
        )}
        {isCorrectProperty(character?.death) && (
          <tr>
            <td>Death</td>
            <td>{character?.death}</td>
          </tr>
        )}
        {isCorrectProperty(character?.gender) && (
          <tr>
            <td>Gender</td>
            <td>{character?.gender}</td>
          </tr>
        )}
        {isCorrectProperty(character?.hair) && (
          <tr>
            <td>Hair</td>
            <td>{character?.hair}</td>
          </tr>
        )}
        {isCorrectProperty(character?.height) && (
          <tr>
            <td>Height</td>
            <td>{character?.height}</td>
          </tr>
        )}
        {isCorrectProperty(character?.realm) && (
          <tr>
            <td>Realm</td>
            <td>{character?.realm}</td>
          </tr>
        )}
        {isCorrectProperty(character?.spouse) && (
          <tr>
            <td>Spouse</td>
            <td>{character?.spouse}</td>
          </tr>
        )}
        {isCorrectProperty(character?.wikiUrl) && (
          <tr>
            <td>WikiUrl</td>
            <td>
              <a className="details__link" href={character?.wikiUrl} target="blank">
                {character?.wikiUrl}
              </a>
            </td>
          </tr>
        )}
      </table>
    </React.Fragment>
  );
}
