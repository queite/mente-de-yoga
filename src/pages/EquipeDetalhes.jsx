import React from 'react';
import { useParams } from 'react-router-dom';

export default function EquipeDetalhes() {
  const { id } = useParams();
  return (
    <div>
      <div>EquipeDetalhes</div>
      <p>{id}</p>
    </div>
  );
}
