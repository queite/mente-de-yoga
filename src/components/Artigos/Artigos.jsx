import React from 'react';
import {
  MainArtigos, ContentArtigos,
} from './Artigos.styles';
import CardComponent from '../Cards/CardComponent';
import artigos from '../../data/artigos';
import { Title } from '../../Styles/texts';

const len = artigos.length;
const id1 = Math.floor(Math.random() * (len)) + 1;
const id2 = id1 === len ? 1 : id1 + 1;
const articles = artigos.filter((art) => art.id === id1 || art.id === id2);

export default function Artigos() {
  return (
    <MainArtigos>
      <ContentArtigos>
        <Title type="Article">
          Artigos
        </Title>
      </ContentArtigos>
      <ContentArtigos>
        {
          articles.map((art) => (
            <CardComponent
              key={art.id}
              title={art.titulo}
              comentary={art.comentario}
            />
          ))
        }
      </ContentArtigos>
    </MainArtigos>
  );
}
