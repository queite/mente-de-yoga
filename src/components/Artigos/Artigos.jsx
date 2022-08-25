import React from 'react';
import {
  MainArtigos, ContentArtigos,
} from './Artigos.styles';
import CardComponent from '../Cards/CardComponent';
import artigos from '../../data/artigos';

export default function Artigos() {
  return (
    <MainArtigos>
      <ContentArtigos>
        {
          artigos.map((art) => (
            <CardComponent
              key={art.id}
              title={art.titulo}
              id="12"
            />
          ))
        }
      </ContentArtigos>
    </MainArtigos>
  );
}
